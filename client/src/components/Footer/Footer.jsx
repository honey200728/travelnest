import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <h2>TravelNest</h2>

          <p>
            Find your perfect stay anywhere in the world.
            Book luxury villas, resorts, cottages and hotels
            with the best prices.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="/home">Home</a>
          <a href="/properties">Properties</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/my-bookings">My Bookings</a>

        </div>

        <div className="footer-box">

          <h3>Support</h3>

          <p>Email : support@travelnest.com</p>

          <p>Phone : +91 9876543210</p>

          <p>Available 24×7</p>

        </div>

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaTwitter />

            <FaLinkedin />

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">

        © 2026 TravelNest. All Rights Reserved.

      </p>

    </footer>

  );

}

export default Footer;