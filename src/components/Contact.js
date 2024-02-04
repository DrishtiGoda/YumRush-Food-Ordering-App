import React from "react";

const Contact = () => {
  return (
    <div className="l p-4 m-4">
      <h1 className="text-2x">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black  p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="bg-black text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
