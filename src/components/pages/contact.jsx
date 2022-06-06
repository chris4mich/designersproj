import React from "react";
import '../../App.css';

function Contact() {
    const submitForm = () => {};
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="w-2/3 m-auto p-8 shadow-lg">
        <h1 className="text-4xl font-bold flex items-center">
          <span>Contact Us</span>
        </h1>
        <form onSubmit={submitForm}>
            <button className="my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
            Submit
            </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
