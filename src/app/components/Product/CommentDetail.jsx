import React, { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import * as Yup from 'yup';
import { Formik, Form } from "formik";
import TextField from "../Connexion/TextField";
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_CREATE_COMMENT } from "../../constants/urls/urlBackEnd";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../redux-store/authenticationSlice";

const CommentDetail = ({ product }) => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const [error, setError] = useState();
  const validate = Yup.object({
    title: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
    rate: Yup.number().required('Required').max(5, "La note doit est comprise entre 1 et 5")

  });
  const [isAdded, setIsAdded] = useState(false)
  const average = Math.round((product.comments.map(comment => comment.rate).reduce((a, b) => a + b) / product.comments.length) * 2) / 2;
  let starArray = [0, 0, 0, 0, 0];
  product.comments.map(comment =>
    starArray[comment.rate - 1] += 1
  );

  const toggleAdded = () => {
    setIsAdded(!isAdded)
  }

  const onSubmit = (values) => {
    values.person_id = user.id;
    apiBackEnd.post(URL_BACK_CREATE_COMMENT(product.id), values, {headers: {Authorization: `Bearer ${token}`}})
            .then((response) => {
                if (response.status === 201) {
                }
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 400) {
                        setError('Une erreur inattendue s\'est produite. Veuillez changer d\'email.');
                    } else {
                        setError('Une erreur inattendue s\'est produite.');
                    }
                } else if (error.request) {
                    setError('Pas de réponse du serveur.');
                } else {
                    setError('Une erreur inattendue s\'est produite.');
                }
            });
  }

  return (
    <Formik
      initialValues={{ title: '', body: "", rate: '', }}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col lg:flex-row-reverse gap-4">
        <div className="flex flex-col ">
          <div className="flex justify-between my-4 p-2 lg:flex-col">
            <div className="flex flex-col gap-3 w-[45%]">
              <div>Moyenne :</div>
              <div className="text-4xl lg:text-5xl font-bold text-primary">{average}/5</div>
              <div className="flex items-center text-2xl lg:text-3xl text-secondary">
                {[...Array(5)].map((_x, i) => i + 1 <= average ? <FaStar key={i} /> : i + 0.5 <= average ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3  w-[45%]">
              <div>Details :</div>
              <div className="flex flex-col">
                {starArray.map((star, i) => (
                  <div className="flex justify-between items-center" key={i}>
                    <span className="flex items-center"><span className="text-center">{i + 1}</span><FaStar className="text-secondary" /></span><span className="text-primary text-center">{star}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="self-center flex flex-col gap-4 w-full">
            <button className="btn btn-primary" onClick={toggleAdded}>Ajouter un commentaire</button>
            {isAdded &&
              <Form className="flex flex-col gap-4">
                <TextField label="Titre :" name="title" type="text" />
                <TextField label="Message :" type="text" name="body" />
                <TextField label="Note :" name="rate" type="number" />

                <button className="self-center btn btn-primary" type="submit">Envoyer</button>
              </Form>}
          </div>
        </div>
        <div className="flex flex-col lg:justify-between">
          {product.comments.map((comment, index) => (
            <div
              className="flex flex-col lg:w-full h-fit gap-4 p-5 my-4 bg-primary text-white rounded-lg"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex items-center text-secondary">
                  {[...Array(5)].map((x, i) => i + 1 <= comment.rate ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>
                <div>{comment.date}</div>
              </div>

              <div className="underline">{comment.title}</div>

              <div className="text-xs lg:text-base">{comment.body}</div>

              <div className="flex justify-between">
                <div className="capitalize">{comment.person.firstName}</div>
                <div className="flex gap-2 items-center">
                  <div>{comment.vote}</div>
                  <div><FiThumbsUp /></div>
                  <div><FiThumbsDown /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Formik>
  );
};

export default CommentDetail;
