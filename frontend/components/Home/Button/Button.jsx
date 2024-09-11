import React from "react";

const Button = ({ children }) => {
  return (
    <button className="mt-16 block mx-auto px-6 py-3 bg-colorGreen rounded-full text-[#f4f4f4] font-semibold translate-y-0 hover:-translate-y-2 transition-all shadow-md">
      {children}
    </button>
  );
};

export default Button;
