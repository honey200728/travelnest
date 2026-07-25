import "./PropertyDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../services/api";

import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaSnowflake,
  FaTv,
} from "react-icons/fa";

function PropertyDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [property, setProperty] = useState(null);

  const [loading, setLoading] = useState(true);

  const [guests, setGuests] = useState(1);

 useEffect(() => {

  fetchProperty();

  // eslint-disable-next-line react-hooks/exhaustive-deps

}, [id]);
  const fetchProperty = async () => {

    try {

      const res = await API.get(`/properties/${id}`);

      setProperty(res.data.property);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  }

  if (!property) {

    return <h2 style={{ padding: "40px" }}>Property Not Found</h2>;

  }

  const handleReserve = () => {

    navigate(`/booking/${property._id}`, {
      state: {
        guests,
      },
    });

  };

  return (

    <div className="property-details-page">

      <div className="banner">

        <img
          src={property.image}
          alt={property.title}
        />

      </div>

      <div className="details-container">

        <div className="left">

          <h1>{property.title}</h1>

          <p className="location">

            <FaMapMarkerAlt />

            {property.location}

          </p>

          <div className="rating">

            <FaStar />

            {property.rating}

          </div>

          <h2>

            ₹ {property.price}

            <span>/night</span>

          </h2>

          <h3>Description</h3>

          <p>

            {property.description}

          </p>

          <h3>Amenities</h3>

          <div className="amenities">

            <div>

              <FaWifi />

              Free Wifi

            </div>

            <div>

              <FaSwimmingPool />

              Swimming Pool

            </div>

            <div>

              <FaParking />

              Free Parking

            </div>

            <div>

              <FaSnowflake />

              Air Conditioning

            </div>

            <div>

              <FaTv />

              Smart TV

            </div>

          </div>

        </div>

        <div className="right">

          <div className="booking-card">

            <h1>

              ₹ {property.price}

              <span>/night</span>

            </h1>

            <div className="guest-box">

              <label>Guests</label>

              <select
                value={guests}
                onChange={(e) =>
                  setGuests(Number(e.target.value))
                }
              >

                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>

              </select>

            </div>

            <button
              className="reserve-btn"
              onClick={handleReserve}
            >

              Reserve Now

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PropertyDetails;