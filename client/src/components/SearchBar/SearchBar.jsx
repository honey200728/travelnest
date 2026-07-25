import "./SearchBar.css";
import { FaMapMarkerAlt, FaSearch, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {

  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {

    navigate(
      `/properties?location=${location}&guests=${guests}`
    );

  };

  return (

    <div className="search-bar">

      <div className="search-item">

        <FaMapMarkerAlt />

        <div>

          <h4>Destination</h4>

          <input
            type="text"
            placeholder="Where do you want to stay?"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />

        </div>

      </div>

      <div className="search-item">

        <FaUsers />

        <div>

          <h4>Guests</h4>

          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e)=>setGuests(e.target.value)}
          />

        </div>

      </div>

      <button
        className="search-btn"
        onClick={handleSearch}
      >

        <FaSearch />

        Search

      </button>

    </div>

  );

}

export default SearchBar;