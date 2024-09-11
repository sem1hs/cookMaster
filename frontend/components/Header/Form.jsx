import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Form = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return alert("Lütfen bir değer giriniz !");
    router.replace(`/arama?query=${query}`);
    setQuery("");
  };
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        placeholder="Arama Yapın"
        type="text"
        className="px-3 lg:px-10 py-1 lg:py-3 border-2 border-colorGreen rounded-full focus:outline-none text-gray-600 max-w-[200px] lg:max-w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <i className="hidden lg:block md:absolute md:top-0 md:left-0 translate-x-3.5 translate-y-4">
        <FaSearch className="text-colorGreen" />
      </i>
      <button></button>
    </form>
  );
};

export default Form;
