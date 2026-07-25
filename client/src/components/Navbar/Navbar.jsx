import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import { MdTravelExplore } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");

  };

  return (

    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">

      <div className="container">

        <Link className="navbar-brand logo" to="/home">

          <MdTravelExplore />

          <span>TravelNest</span>

        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li>

              <Link
                className="nav-link"
                to="/home"
              >

                Home

              </Link>

            </li>

            <li>

              <Link
                className="nav-link"
                to="/properties"
              >

                Stays

              </Link>

            </li>

            <li>

              <Link
                className="nav-link"
                to="/wishlist"
              >

                ❤️ Wishlist

              </Link>

            </li>

            <li>

              <Link
                className="nav-link"
                to="/my-bookings"
              >

                📅 My Bookings

              </Link>

            </li>

        
            <li className="ms-3">

              <button
                className="logoutBtn"
                onClick={handleLogout}
              >

                Logout

              </button>

            </li>

          </ul>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;