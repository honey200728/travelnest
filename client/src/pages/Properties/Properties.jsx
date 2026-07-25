import "./Properties.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import properties from "../../data/properties";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

function Properties() {

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const searchLocation = params.get("location") || "";

  const filteredProperties = properties.filter((item) =>
    item.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (

    <>

      <Navbar />

      <div className="properties-page">

        <h1>Available Properties</h1>

        <p>

          {filteredProperties.length} Properties Found

        </p>

        <div className="properties-grid">

          {
            filteredProperties.length > 0 ?

            filteredProperties.map((property)=>(

              <PropertyCard
                key={property.id}
                property={property}
              />

            ))

            :

            <h2>No Properties Found</h2>

          }

        </div>

      </div>

    </>

  );

}

export default Properties;