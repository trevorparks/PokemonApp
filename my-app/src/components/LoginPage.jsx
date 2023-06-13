import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor='username'>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <label htmlFor='password'>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button primary
          disabled={username.length < 4 || password.length < 4}
          onClick={(e) => {
            e.preventDefault();
            setUser({ username });
            console.log(username);
            console.log(password);
          }}
          data-testid="button"
        >
          Login
        </button>
      </form>
    </div>
  )
};

export default LoginPage;