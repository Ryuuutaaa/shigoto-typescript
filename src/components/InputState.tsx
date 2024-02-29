import React, { ChangeEvent, useState } from "react";

// type we need for our state

interface UserInputType {
  username: string;
  password: string;
}

const initialState = { username: "", password: "" };

const InputState = () => {
  // type state
  const [userInput, setUserInput] = useState<UserInputType>(initialState);

  const setUsernName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, username: e.target.value });

    console.log(userInput);
  };

  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, password: e.target.value });

    console.log(userInput);
  };

  return (
    <div>
      <h2>Username</h2>
      <input type="text" onChange={(e) => setUsernName(e)} />
      <h2>Password</h2>
      <input type="password" onChange={(e) => setPassword(e)} />
    </div>
  );
};

export default InputState;
