import {  Link } from 'react-router-dom';

export const LeftBox = ({ title, link, onClick }) => {
    return (
      <Link to={link} className="flex flex-col justify-center items-center bg-white p-4 shadow-md" onClick={onClick}>
        <h5 className="font-bold mb-2">{title}</h5>
        <p className="text-gray-600">En savoir plus</p>
      </Link>
    );
  };