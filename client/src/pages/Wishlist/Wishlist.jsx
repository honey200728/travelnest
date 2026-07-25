import "./Wishlist.css";
import Navbar from "../../components/Navbar/Navbar";
import { useWishlist } from "../../context/WishlistContext";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

function Wishlist() {

    const { wishlist } = useWishlist();

    return (

        <>

            <Navbar />

            <div className="wishlist-page">

                <h1>My Wishlist ❤️</h1>

                {
                    wishlist.length === 0 ?

                        <h2>No properties added yet.</h2>

                        :

                        <div className="wishlist-grid">

                            {
                                wishlist.map((property) => (

                                    <PropertyCard
                                        key={property.id}
                                        property={property}
                                    />

                                ))
                            }

                        </div>

                }

            </div>

        </>

    )

}

export default Wishlist;