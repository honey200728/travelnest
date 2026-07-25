import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import Footer from "../../components/Footer/Footer";
function Home() {

  return (

    <div className="home-page">

      <Navbar/>

      <Hero/>

      <SearchBar/>

      <FeaturedProperties/>

      <PopularDestinations/>
      <Footer/>
    </div>

  );

}

export default Home;