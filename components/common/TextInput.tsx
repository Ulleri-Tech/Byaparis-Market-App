import React from 'react';

type TextInputProps = {
  label: string;
  placeholder? :string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?:string;  
  inputMode?:"search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal";
};

const TextInput: React.FC<TextInputProps> = ({ label, onChange = () => {}, className = '', inputMode='text', ...props}) => {
  return (
    <div className={`flex flex-col my-2 ${className}`}>
      <label
        htmlFor={`text-input-id${label}`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type="text"
        autoComplete='off'
        placeholder={props.placeholder}
        id={`text-input-id${label}`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        onChange={onChange}
        value={props.value}
        {...props}
        inputMode={inputMode}
      />
    </div>
  );
};

export default TextInput;