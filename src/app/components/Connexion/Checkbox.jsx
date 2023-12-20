import React, { useState } from 'react';

const Checkbox= ({labelText, checked, onChange}) => {

    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
      setIsChecked(!isChecked);
      onChange(isChecked);
    };

  return (
    <div className="flex items-center mb-4">
        
        <input type="checkbox" value="{isChecked}" checked={isChecked}
        onChange={handleChange} className="w-4 h-4 text-primary-light bg-gray-100 border-gray-300 rounded font-numito focus:ring-primary-light"/>
        
        <label htmlFor="default-checkbox" className="ms-2 text-sm font-semibold text-black ">{labelText} </label>

    </div>
  );
};

export default Checkbox;




