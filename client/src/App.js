import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

import ProtectedRoute from "./routes/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Wishlist from "./pages/Wishlist/Wishlist";
import Properties from "./pages/Properties/Properties";
import Booking from "./pages/Booking/Booking";
import MyBookings from "./pages/MyBookings/MyBookings";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminProperties from "./pages/AdminProperties/AdminProperties";
import AdminBookings from "./pages/AdminBookings/AdminBookings";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
path="/property/:id"
element={<PropertyDetails/>}
/>

<Route
path="/wishlist"
element={
<ProtectedRoute>
<Wishlist/>
</ProtectedRoute>
}
/>

<Route
  path="/properties"
  element={
    <ProtectedRoute>
      <Properties />
    </ProtectedRoute>
  }
/>
<Route
  path="/booking/:id"
  element={
    <ProtectedRoute>
      <Booking />
    </ProtectedRoute>
  }
/>

<Route
path="/my-bookings"
element={
<ProtectedRoute>
<MyBookings/>
</ProtectedRoute>
}
/>

<Route
  path="/admin/login"
  element={<AdminLogin />}
/>

<Route path="/admin/dashboard" element={<AdminDashboard />} />

<Route path="/admin/properties" element={<AdminProperties />} />

<Route path="/admin/bookings" element={<AdminBookings />} />

<Route path="/admin/users" element={<AdminUsers />} />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    </BrowserRouter>
  );
}

export default App;