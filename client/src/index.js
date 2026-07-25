import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { WishlistProvider } from "./context/WishlistContext";
import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>

<WishlistProvider>

<App/>

</WishlistProvider>

</AuthProvider>
  </React.StrictMode>
);