import "./PropertyCard.css";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

function PropertyCard({ property }) {

  const navigate = useNavigate();

  const {
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
  } = useWishlist();

  const propertyId = property._id || property.id;

  const favourite = isWishlisted(propertyId);

  const toggleWishlist = () => {

    if (favourite) {

      removeFromWishlist(propertyId);

    } else {

      addToWishlist({
        ...property,
        id: propertyId,
      });

    }

  };

  return (

    <div className="property-card">

      <div className="property-image">

        <img
          src={property.image}
          alt={property.title}
        />

        <button
          className="heart-btn"
          onClick={toggleWishlist}
        >
          {
            favourite
              ? <FaHeart color="red" />
              : <FaRegHeart />
          }
        </button>

      </div>

      <div className="property-details">

        <div className="property-top">

          <h3>{property.title}</h3>

          <span>

            <FaStar />

            {property.rating}

          </span>

        </div>

        <p>

          <FaMapMarkerAlt />

          {property.location}

        </p>

        <h2>

          ₹ {property.price}

          <span>/night</span>

        </h2>

        <button
          className="details-btn"
          onClick={() => navigate(`/property/${propertyId}`)}
        >

          View Details

        </button>

      </div>

    </div>

  );

}

export default PropertyCard;