import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional props that you want to pass to the component
  theme?: 'basic' | 'blue' | 'danger'| 'yellow',
  leftIcon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children,theme = "basic",leftIcon, ...props }) => {
    const commonClass= "font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    const themeStyles = {
      basic: "bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow",
      yellow: "text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50",
      blue: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",
      danger: "bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300",
    }

  // Return the JSX for the button with the defined styles
  return (
    <button className={`${commonClass} ${themeStyles[theme]}`} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
    </button>
  );
};

export default Button;


