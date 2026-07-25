import "./AdminBookings.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

function AdminBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {

    try {

      const res = await API.get("/bookings/admin");

      setBookings(res.data.bookings);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load bookings");

    }

  };

  const cancelBooking = async (id) => {

    if (!window.confirm("Cancel this booking?")) return;

    try {

      await API.put(`/bookings/cancel/${id}`);

      toast.success("Booking Cancelled");

      fetchBookings();

    } catch (err) {

      console.log(err);

      toast.error("Unable to cancel booking");

    }

  };

  return (

<div className="admin-bookings">

<h1>Manage Bookings</h1>

<table>

<thead>

<tr>

<th>Booking ID</th>

<th>Property</th>

<th>Location</th>

<th>Guests</th>

<th>Amount</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

bookings.map((booking)=>(

<tr key={booking._id}>

<td>{booking.bookingId}</td>

<td>{booking.propertyName}</td>

<td>{booking.location}</td>

<td>{booking.guests}</td>

<td>₹ {booking.totalAmount}</td>

<td>{booking.status}</td>

<td>

{

booking.status==="Confirmed" &&

<button
className="cancel-btn"
onClick={()=>cancelBooking(booking._id)}
>

Cancel

</button>

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

  );

}

export default AdminBookings;