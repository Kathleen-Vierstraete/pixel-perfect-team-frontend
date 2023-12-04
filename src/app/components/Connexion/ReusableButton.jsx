import React from 'react';

const ReusableButton = ({ children }) => {
  return (
    <button className="relative z-10 w-full h-10 flex items-center justify-center rounded-full bg-white border font-bold mx-0.5">
        {children}
   
      
    </button>
  );
};

export default ReusableButton;