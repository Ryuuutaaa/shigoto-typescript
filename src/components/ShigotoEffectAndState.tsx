import React, { useState, useEffect } from "react";

const ShigotoEffectAndState = () => {
  const [name, setName] = useState<string>("Ryuta");
  const [password, setPassword] = useState<string>();

  useEffect(() => {
    console.log("Name : ", name);
  }, [name]);

  useEffect(() => {
    console.log("password", password);
  }, [password]);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} /> <br />{" "}
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
  );
};

export default ShigotoEffectAndState;
