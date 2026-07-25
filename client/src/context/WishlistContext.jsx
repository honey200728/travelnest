import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (property) => {

    const exists = wishlist.find((item) => item.id === property.id);

    if (!exists) {
      setWishlist([...wishlist, property]);
    }

  };

  const removeFromWishlist = (id) => {

    setWishlist(wishlist.filter((item) => item.id !== id));

  };

  const isWishlisted = (id) => {

    return wishlist.some((item) => item.id === id);

  };

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};

export const useWishlist = () => useContext(WishlistContext);