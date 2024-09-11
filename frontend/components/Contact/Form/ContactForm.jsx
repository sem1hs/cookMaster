import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white px-4  py-6 shadow-md rounded-md max-w-[400px]">
      <form className="flex flex-col gap-6">
        {/* Name-Surname */}
        <div className="flex gap-4">
          <div>
            <label
              htmlFor="name"
              className="inline-block text-textColorGray text-[18px] mb-1"
            >
              Ad*
            </label>
            <input
              required
              type="text"
              id="name"
              className="px-2 py-1.5 border border-gray-300 rounded-sm focus:outline-none text-black bg-gray-200 w-full"
              placeholder="Semih"
            />
          </div>
          <div>
            <label
              htmlFor="surname"
              className="inline-block text-textColorGray text-[18px] mb-1"
            >
              Soyad*
            </label>
            <input
              required
              type="text"
              id="surname"
              //   className="px-2 py-1 border border-colorGreen rounded-md focus:outline-none text-gray-600"
              className="px-2 py-1.5 border border-gray-300 rounded-sm focus:outline-none text-black bg-gray-200 w-full"
              placeholder="Şahinoğlu"
            />
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email*</label>
          <input
            required
            type="email"
            id="email"
            className="px-2 py-1.5 border border-gray-300 rounded-sm focus:outline-none text-black bg-gray-200"
            placeholder="semih123@gmail.com"
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="tel">Telefon*</label>
          <input
            required
            type="tel"
            id="tel"
            className="px-2 py-1.5 border border-gray-300 rounded-sm focus:outline-none text-black bg-gray-200"
            placeholder="+90 512 23121"
          />
        </div>
        <button className="bg-colorGreen px-4 py-1.5 rounded-md text-[#f4f4f4]">
          Onayla
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
