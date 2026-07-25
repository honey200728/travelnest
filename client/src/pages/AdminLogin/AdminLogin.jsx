import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { toast } from "react-toastify";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await API.post("/admin/login", {
        email,
        password,
      });

      localStorage.setItem(
        "adminToken",
        res.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(res.data.admin)
      );

      toast.success("Admin Login Successful");

      navigate("/admin/dashboard");

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="admin-login">

      <form
        className="admin-login-card"
        onSubmit={handleLogin}
      >

        <h1>TravelNest Admin</h1>

        <p>Admin Login Panel</p>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >

          {
            loading
            ?
            "Signing In..."
            :
            "Login"
          }

        </button>

      </form>

    </div>

  );

}

export default AdminLogin;