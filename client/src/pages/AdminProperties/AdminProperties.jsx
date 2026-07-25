import "./AdminProperties.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

function AdminProperties() {

  const [properties, setProperties] = useState([]);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {

      const res = await API.get("/properties");

      setProperties(res.data.properties);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load properties");

    }
  };

  const clearForm = () => {

    setTitle("");
    setLocation("");
    setPrice("");
    setImage("");
    setDescription("");
    setEditingId(null);

  };

  const saveProperty = async () => {

    if (
      !title ||
      !location ||
      !price ||
      !image ||
      !description
    ) {
      toast.error("Fill all fields");
      return;
    }

    const data = {
      title,
      location,
      price,
      image,
      description,
    };

    try {

      if (editingId) {

        await API.put(`/properties/${editingId}`, data);

        toast.success("Property Updated");

      } else {

        await API.post("/properties", data);

        toast.success("Property Added");

      }

      clearForm();

      fetchProperties();

    } catch (err) {

      console.log(err);

      toast.error("Operation Failed");

    }

  };

  const editProperty = (property) => {

    setEditingId(property._id);

    setTitle(property.title);
    setLocation(property.location);
    setPrice(property.price);
    setImage(property.image);
    setDescription(property.description);

  };

  const deleteProperty = async (id) => {

    if (!window.confirm("Delete Property?")) return;

    try {

      await API.delete(`/properties/${id}`);

      toast.success("Property Deleted");

      fetchProperties();

    } catch (err) {

      console.log(err);

      toast.error("Delete Failed");

    }

  };

  return (

    <div className="admin-properties">

      <h1>Manage Properties</h1>

      <div className="add-box">

        <input
          placeholder="Property Name"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button onClick={saveProperty}>

          {editingId ? "Update Property" : "Add Property"}

        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Image</th>

            <th>Name</th>

            <th>Location</th>

            <th>Price</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {

            properties.map((property)=>(

              <tr key={property._id}>

                <td>

                  <img
                    src={property.image}
                    alt=""
                    width="100"
                    style={{borderRadius:"8px"}}
                  />

                </td>

                <td>{property.title}</td>

                <td>{property.location}</td>

                <td>₹ {property.price}</td>

                <td>

                  <button
                    onClick={()=>editProperty(property)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={()=>deleteProperty(property._id)}
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

export default AdminProperties;