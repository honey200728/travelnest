import "./PopularDestinations.css";
import destinations from "../../data/destinations";

function PopularDestinations() {

  return (

    <section className="destinations">

      <div className="container">

        <div className="section-title">

          <h2>Popular Destinations</h2>

          <p>

            Explore the world's most loved travel destinations.

          </p>

        </div>

        <div className="destination-grid">

          {destinations.map((place)=>(

            <div className="destination-card" key={place.id}>

              <img
                src={place.image}
                alt={place.name}
              />

              <div className="destination-overlay">

                <h3>{place.name}</h3>

                <p>{place.properties}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default PopularDestinations;