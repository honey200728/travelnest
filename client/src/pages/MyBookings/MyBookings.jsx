import "./MyBookings.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const userId = user?.id || user?._id;

  useEffect(() => {

    if (userId) {
      fetchBookings();
    }

  }, []);

  const fetchBookings = async () => {

    try {

      const res = await API.get(
        `/bookings/my-bookings/${userId}`
      );

      // Show only confirmed bookings
      const activeBookings = res.data.bookings.filter(
        (booking) => booking.status !== "Cancelled"
      );

      setBookings(activeBookings);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load bookings");

    }

  };

  const cancelBooking = async (id) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {

      await API.put(`/bookings/cancel/${id}`);

      toast.success("Booking Cancelled Successfully");

      fetchBookings();

    } catch (err) {

      console.log(err);

      toast.error("Failed to cancel booking");

    }

  };

  return (

    <>
      <Navbar />

      <div className="my-bookings">

        <h1>My Bookings</h1>

        {

          bookings.length === 0 ?

          <div className="empty-bookings">

            <h2>No Active Bookings</h2>

            <p>
              You don't have any active bookings.
            </p>

          </div>

          :

          bookings.map((booking) => (

            <div
              className="booking-card"
              key={booking._id}
            >

              <img
                src={booking.propertyImage}
                alt={booking.propertyName}
              />

              <div className="booking-info">

                <h2>{booking.propertyName}</h2>

                <p>
                  <b>Booking ID:</b> {booking.bookingId}
                </p>

                <p>
                  <b>Location:</b> {booking.location}
                </p>

                <p>
                  <b>Check In:</b> {booking.checkIn}
                </p>

                <p>
                  <b>Check Out:</b> {booking.checkOut}
                </p>

                <p>
                  <b>Guests:</b> {booking.guests}
                </p>

                <p>
                  <b>Payment:</b> {booking.paymentMethod}
                </p>

                <h3>
                  ₹ {booking.totalAmount}
                </h3>

                <span className="confirmed">
                  Confirmed
                </span>

                <button
                  onClick={() => cancelBooking(booking._id)}
                >
                  Cancel Booking
                </button>

              </div>

            </div>

          ))

        }

      </div>

    </>

  );

}

export default MyBookings;