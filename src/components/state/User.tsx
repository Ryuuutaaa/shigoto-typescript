import { useState } from "react";

type UserAuth = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserAuth>({} as UserAuth);

  const handleLogin = () => {
    setUser({
      name: "rafii",
      email: "ryuta@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <div>User is {user.name}</div>
      <div>User is {user.email}</div>
    </div>
  );
};

export default User;
