import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import API from "../../services/api";
import { useAuth } from "../../context/AuthContext";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/login", formData);

      login(res.data.user, res.data.token);

      toast.success("Login Successful");

      navigate("/home");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Login Failed"
      );

    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">

            Login

          </button>

        </form>

        <p>

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;