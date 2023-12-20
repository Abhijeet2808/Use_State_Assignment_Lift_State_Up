
import  { useState } from 'react';
import './App.css'; 

// Child functional component
const LoginForm = ({ onLoginSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(username, password);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// Parent functional component
const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = (username, password) => {
    // In a real-world scenario, you would perform authentication logic here
    // For simplicity, we'll consider the user as logged in if both username and password are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="parent">
      <label>Parent Component:</label>
      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <LoginForm onLoginSubmit={handleLoginSubmit} />
      )}
    </div>
  );
};

export default Parent;
