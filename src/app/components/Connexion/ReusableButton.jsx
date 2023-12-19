import React from 'react';

const ReusableButton = ({ children, type = 'button' }) => {
  return (
    <button className="relative w-full h-10 flex items-center justify-center rounded-full bg-white border font-bold mx-0.5 " type={type}>
        {children}
    </button>
  );
};

export default ReusableButton;