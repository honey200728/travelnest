const express = require("express");

const router = express.Router();

const {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking,
} = require("../controllers/bookingController");

// ================= USER =================

// Create Booking
router.post("/create", createBooking);

// Get Logged-in User Bookings
router.get("/my-bookings/:userId", getMyBookings);

// Cancel Booking
router.put("/cancel/:id", cancelBooking);

// ================= ADMIN =================

// Get All Bookings
router.get("/admin", getAllBookings);

module.exports = router;