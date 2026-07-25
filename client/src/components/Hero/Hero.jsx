import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>
            Discover Amazing Places
          </h1>

          <p>
            Book luxury villas, apartments, beach houses,
            mountain cabins and unforgettable stays around
            the world.
          </p>

          <div className="hero-buttons">

            <Link to="/properties">

              <button className="explore-btn">

                Explore Now

              </button>

            </Link>

            <Link to="/wishlist">

              <button className="wishlist-btn">

                Wishlist

              </button>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;