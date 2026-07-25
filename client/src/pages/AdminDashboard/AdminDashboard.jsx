import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import {
FaUsers,
FaHotel,
FaCalendarCheck,
FaRupeeSign,
FaSignOutAlt
} from "react-icons/fa";

function AdminDashboard(){

const navigate=useNavigate();

const stats={
users:18,
properties:8,
bookings:42,
revenue:268000
};

const recent=[
{
id:"TN78491",
property:"Beach Villa",
user:"Harshitha",
amount:8500
},
{
id:"TN78492",
property:"Mountain Cottage",
user:"Rahul",
amount:6500
},
{
id:"TN78493",
property:"Lake View Resort",
user:"Amit",
amount:12000
}
];

const logout=()=>{

localStorage.removeItem("token");
localStorage.removeItem("user");

navigate("/admin/login");

};

return(

<div className="admin-dashboard">

<div className="sidebar">

<h2>TravelNest</h2>

<button onClick={()=>navigate("/admin/dashboard")}>
Dashboard
</button>

<button onClick={()=>navigate("/admin/properties")}>
Properties
</button>

<button onClick={()=>navigate("/admin/bookings")}>
Bookings
</button>

<button onClick={()=>navigate("/admin/users")}>
Users
</button>

<button
className="logout"
onClick={logout}
>
<FaSignOutAlt/>
&nbsp; Logout
</button>

</div>

<div className="dashboard-content">

<h1>Admin Dashboard</h1>

<div className="cards">

<div className="card">

<FaUsers/>

<h2>{stats.users}</h2>

<p>Total Users</p>

</div>

<div className="card">

<FaHotel/>

<h2>{stats.properties}</h2>

<p>Total Properties</p>

</div>

<div className="card">

<FaCalendarCheck/>

<h2>{stats.bookings}</h2>

<p>Total Bookings</p>

</div>

<div className="card">

<FaRupeeSign/>

<h2>₹ {stats.revenue}</h2>

<p>Total Revenue</p>

</div>

</div>

<div className="recent-bookings">

<h2>Recent Bookings</h2>

<table>

<thead>

<tr>

<th>Booking ID</th>

<th>Property</th>

<th>User</th>

<th>Amount</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

recent.map(item=>(

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.property}</td>

<td>{item.user}</td>

<td>₹ {item.amount}</td>

<td className="status">

Confirmed

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</div>

);

}

export default AdminDashboard;