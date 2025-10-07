import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // gunakan react-router-dom
import "../css/style.css"; // pastikan path css benar

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId.trim() || !password.trim()) {
      alert("Please fill in both fields!");
      return;
    }

    console.log("Login attempt:", { userId, password });

    // setelah login berhasil, arahkan ke dashboard
    navigate("/dashboard");
  };

  return (
    <div
      className="login-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <div
        className="login-card"
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div className="login-header">
          <h4>Welcome to</h4>
          <p>Secure Login Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* User ID */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group mb-4">
            <span className="input-group-text">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-login w-100">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>
            Forgot your password? <a href="#">Reset here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
