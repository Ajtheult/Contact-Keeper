import React, { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form action="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={onChange} />
      </form>
    </div>
  );
};

export default Register;
