import React from "react";
import { useState } from "react";

const Form = () => {
  

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [validation, setValidation] = useState(false);

  const validateName = () => {

    if (form.name.length < 5) {
      return alert("Por favor verifique su información nuevamente");
    };

    return true;
  };

  const validateEmail = () => {
    if (form.email.length < 2) {
      return alert("Por favor verifique su información nuevamente");
    }

    if (!form.email.includes("@")) {
      return alert("Por favor verifique su información nuevamente");
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateName() && validateEmail()) {
      setValidation(true);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} />
        <button type="submit" className="btn-form">Submit</button>
      </form>
      {validation && (
        <div>
          <p>Gracias {form.name}, te contactaremos cuando antes via mail</p>
        </div>
      )}
    </div>
  );
};

export default Form;
