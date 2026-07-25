const Booking = require("../models/Booking");

// ================= CREATE BOOKING =================

const createBooking = async (req, res) => {
  try {

    console.log("========== BOOKING REQUEST ==========");
    console.log(req.body);
    console.log("=====================================");

    const {
      user,
      propertyId,
      propertyName,
      propertyImage,
      location,
      checkIn,
      checkOut,
      guests,
      paymentMethod,
      totalAmount,
    } = req.body;

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User ID Missing",
      });
    }

    const bookingId = "TN" + Date.now();

    const booking = await Booking.create({
      bookingId,
      user,
      propertyId,
      propertyName,
      propertyImage,
      location,
      checkIn,
      checkOut,
      guests,
      paymentMethod,
      totalAmount,
      status: "Confirmed",
    });

    res.status(201).json({
      success: true,
      message: "Booking Successful",
      booking,
    });

  } catch (error) {

    console.error("BOOKING ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= GET MY BOOKINGS =================

const getMyBookings = async (req, res) => {

  try {

    const bookings = await Booking.find({
      user: req.params.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ================= GET ALL BOOKINGS (ADMIN) =================

const getAllBookings = async (req, res) => {

  try {

    const bookings = await Booking.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ================= CANCEL BOOKING =================

const cancelBooking = async (req, res) => {

  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: "Cancelled",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Booking Cancelled",
      booking,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ================= EXPORTS =================

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
  cancelBooking,
};