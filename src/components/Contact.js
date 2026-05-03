import { useState } from "react";
import Input from "./Input";

const Contact = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="py-3 px-10">
        <h1 className="text-2xl font-bold mb-3">Contact Us</h1>
        <div className="w-1/2">
          <Input label="First Input" text={text} onChange={handleChange} />
          <Input label="Second Input" text={text} onChange={handleChange} />
          <button className="py-2 px-3 bg-blue-700 text-white mt-3">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
