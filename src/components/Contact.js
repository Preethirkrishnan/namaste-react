import { useState } from "react";
import Input from "./Input";

const Contact = () => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return(
        <>
            <Input label="First Input" text={text} onChange={handleChange}  />
            <Input label="Second Input" text={text} onChange={handleChange}  />
        </>
    )
}

export default Contact;