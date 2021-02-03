import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailSignUp(event) {
    setEmail(event.target.value);
  }

  function passwordSignUp(event) {
    setPassword(event.target.value);
  }
  return (
    <div>
        <div>
        Signup
        </div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => emailSignUp(e)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => passwordSignUp(e)}
      />
    </div>
  );
};

export default Signup;
