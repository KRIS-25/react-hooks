import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  // normally connect to db or api
  const login = () => {
    setUser({ name: "Kris" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
