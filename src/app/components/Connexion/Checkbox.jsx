import React, { useState } from 'react';

const Checkbox= ({labelText, checked, onChange}) => {

    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
      setIsChecked(!isChecked);
      onChange(isChecked);
    };

  return (
    <div className="flex items-center mb-4">
        
        <input id="default-checkbox" type="checkbox" value="{isChecked}" checked={isChecked}
        onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
        
        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{labelText} </label>

    </div>
  );
};

export default Checkbox;




