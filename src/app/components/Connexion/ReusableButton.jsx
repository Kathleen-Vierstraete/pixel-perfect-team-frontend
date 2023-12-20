import React from 'react';

const ReusableButton = ({ children, type = 'button' }) => {
  return (
    <button className="btn-primary-outline self-center w-11/12 text-xl " type={type}>
        {children}
    </button>
  );
};

export default ReusableButton;