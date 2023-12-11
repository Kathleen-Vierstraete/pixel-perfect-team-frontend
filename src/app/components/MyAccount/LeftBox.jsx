import {  Link } from 'react-router-dom';

export const LeftBox = ({ title, link, onClick }) => {
    return (
      <Link to={link} className="flex flex-col justify-center items-center bg-white p-4 shadow-md  shadow-blue-500/40 hover:bg-primary-light mx-2" onClick={onClick}>
        <h6 className="font-bold mb-2">{title}</h6>
        <p className="text-gray-600">En savoir plus</p>
      </Link>
    );
  };