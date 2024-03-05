import { useState } from "react";

type UserAuth = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserAuth | null>(null);

  const handleLogin = () => {
    setUser({
      name: "rafii",
      email: "ryuta@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {user?.name}</div>
      <div>User is {user?.email}</div>
    </div>
  );
};

export default User;
