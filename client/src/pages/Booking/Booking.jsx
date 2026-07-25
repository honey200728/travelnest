import "./Booking.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

function Booking() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loadingProperty, setLoadingProperty] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [email] = useState(user?.email || "");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [loading, setLoading] = useState(false);

useEffect(() => {
  fetchProperty();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [id]);

  const fetchProperty = async () => {

    try {

      const res = await API.get(`/properties/${id}`);

      setProperty(res.data.property);

    } catch (err) {

      console.log(err);

    } finally {

      setLoadingProperty(false);

    }

  };

  if (loadingProperty) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>;
  }

  if (!property) {
    return <h2 style={{ padding: "40px" }}>Property Not Found</h2>;
  }

  const nights = () => {

    if (!checkIn || !checkOut) return 1;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff = Math.ceil(
      (end - start) / (1000 * 60 * 60 * 24)
    );

    return diff > 0 ? diff : 1;
  };

  const roomAmount = property.price * nights();
  const cleaningFee = 500;
  const serviceFee = 300;

  const gst = Math.round(
    (roomAmount + cleaningFee + serviceFee) * 0.18
  );

  const total =
    roomAmount +
    cleaningFee +
    serviceFee +
    gst;

  const handleBooking = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await API.post("/bookings/create", {

     user: user._id || user.id,

        propertyId: property._id,

        propertyName: property.title,

        propertyImage: property.image,

        location: property.location,

        checkIn,

        checkOut,

        guests,

        paymentMethod,

        totalAmount: total,

      });

      toast.success("Booking Successful");

      alert(`Booking Confirmed!

Booking ID: ${res.data.booking.bookingId}

Property: ${property.title}

Total Paid: ₹${total}`);

      navigate("/my-bookings");

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Booking Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="booking-page">

      <div className="booking-container">

        <div className="booking-left">

          <img
            src={property.image}
            alt={property.title}
          />

          <h1>{property.title}</h1>

          <p>{property.location}</p>

          <h2>

            ₹ {property.price}

            <span>/Night</span>

          </h2>

          <div className="price-box">

            <div>
              <span>Room Price</span>
              <b>₹ {roomAmount}</b>
            </div>

            <div>
              <span>Cleaning Fee</span>
              <b>₹ 500</b>
            </div>

            <div>
              <span>Service Fee</span>
              <b>₹ 300</b>
            </div>

            <div>
              <span>GST (18%)</span>
              <b>₹ {gst}</b>
            </div>

            <hr />

            <div className="total">

              <span>Total</span>

              <b>₹ {total}</b>

            </div>

          </div>

        </div>

        <div className="booking-right">

          <form
            className="booking-form"
            onSubmit={handleBooking}
          >

            <h2>Complete Booking</h2>

            <label>Full Name</label>

            <input
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              required
            />

            <label>Phone</label>

            <input
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required
            />

            <label>Email</label>

            <input
              value={email}
              disabled
            />

            <label>Check In</label>

            <input
              type="date"
              value={checkIn}
              onChange={(e)=>setCheckIn(e.target.value)}
              required
            />

            <label>Check Out</label>

            <input
              type="date"
              value={checkOut}
              onChange={(e)=>setCheckOut(e.target.value)}
              required
            />

            <label>Guests</label>

            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e)=>setGuests(Number(e.target.value))}
            />

            <h3>Payment Method</h3>

            <div className="payment-options">

              {["UPI","Credit Card","Debit Card","Net Banking","Cash"].map(method => (

                <label key={method}>

                  <input
                    type="radio"
                    checked={paymentMethod===method}
                    onChange={()=>setPaymentMethod(method)}
                  />

                  {method==="Cash" ? "Cash at Property" : method}

                </label>

              ))}

            </div>

            <button
              type="submit"
              disabled={loading}
            >

              {loading ? "Booking..." : "Confirm Booking"}

            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Booking;