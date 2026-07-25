import "./AdminUsers.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

function AdminUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    try {

      const res = await API.get("/auth/users");

      setUsers(res.data.users);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load users");

    }

  };

  const deleteUser = async (id) => {

    if (!window.confirm("Delete this user?")) return;

    try {

      await API.delete(`/auth/users/${id}`);

      toast.success("User Deleted");

      fetchUsers();

    } catch (err) {

      console.log(err);

      toast.error("Delete Failed");

    }

  };

  return (

<div className="admin-users">

<h1>Manage Users</h1>

<table>

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Role</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

users.map((user)=>(

<tr key={user._id}>

<td>{user.fullName}</td>

<td>{user.email}</td>

<td>{user.phone}</td>

<td>{user.role}</td>

<td>

<button
className="delete-btn"
onClick={()=>deleteUser(user._id)}
>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

  );

}

export default AdminUsers;