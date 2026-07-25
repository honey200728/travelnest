import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">

      <div className="overlay">

        <h1>TravelNest</h1>

        <p>
          Discover unique stays, luxury villas, apartments,
          farmhouses and unforgettable travel experiences.
        </p>

        <div className="buttons">

          <Link to="/login">

            <button className="loginBtn">
              Login
            </button>

          </Link>

          <Link to="/register">

            <button className="registerBtn">
              Register
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Landing;