import "./FeaturedProperties.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import PropertyCard from "../PropertyCard/PropertyCard";

function FeaturedProperties() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {

      const res = await API.get("/properties");

      setProperties(res.data.properties);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <section className="featured">

      <div className="container">

        <div className="section-title">

          <h2>Featured Properties</h2>

          <p>
            Explore the most loved accommodations from around the world.
          </p>

        </div>

        <div className="property-grid">

          {
            properties.map((property) => (

              <PropertyCard
                key={property._id}
                property={property}
              />

            ))
          }

        </div>

        <div className="view-all">

          <button>

            View All Properties

          </button>

        </div>

      </div>

    </section>

  );

}

export default FeaturedProperties;