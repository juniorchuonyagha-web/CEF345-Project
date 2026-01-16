import { useState } from "react";
import API from "../services/api";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await API.post("/auth/login", {
      username,
      password
    });

    localStorage.setItem("user_id", res.data.user.id);
    onLogin();
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
