import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./data.css"

export const UserData = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Delete
  const handleDelete = (index) => {
    const confirnmation = confirm("Are you sure delete the Row?")
    if (confirnmation) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };


  //Delete all
  const handleDeleteAll = () => {
    const confirmation = confirm("Are you sure you want to delete ALL users?");
    if (confirmation) {
      setUsers([]);
      localStorage.removeItem("users");
    }
  };

  // Filter
  const filteredUsers = users.filter((u) =>
    u.fullname.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.gender.toLowerCase().includes(search.toLowerCase()) ||
    u.department.toLowerCase().includes(search.toLowerCase()) ||
    u.PhoneNumber.toString().includes(search)
  );

  // View
  const handleView = (user) => {
    setShowDetails(user);
  };

  // Edit
  const handleEdit = (user, index) => {
    navigate("/RegisterForm", { state: { user, index } }); // Pass data to RegisterForm
  };

  return (
    <div className="userdata">
      <h2 style={{ textAlign: "center" }}>Students List</h2>
      <div className="filter">
        <div className="in-filter">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search user"
          />
        </div>
      </div>

      {users.length === 0 ? (
        <h2 style={{textAlign:"center"}}>No users found.</h2>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>FullName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Languages</th>
              <th>Feedback</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 &&
              filteredUsers.map((u, index) => (
                <tr key={index}>
                  <td>{u.fullname}</td>
                  <td>{u.email}</td>
                  <td>{u.PhoneNumber}</td>
                  <td>{u.department}</td>
                  <td>{u.gender}</td>
                  <td>{u.language?.join(", ")}</td>
                  <td>{u.feedback}</td>
                  <td><button onClick={() => handleEdit(u, index)}>Edit</button></td>
                  <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                  <td><button className="view" onClick={() => handleView(u)}>View</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <button onClick={handleDeleteAll} style={{ background: "red", color: "white", padding: "8px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Delete All
        </button>
      </div>
      {/* ✅ closed the ternary condition properly */}

      {showDetails && (
        <div className="popup">
          <h3>User Details</h3>
          <p><strong>Name:</strong> {showDetails.fullname}</p>
          <p><strong>Email:</strong> {showDetails.email}</p>
          <p><strong>Phone:</strong> {showDetails.PhoneNumber}</p>
          <p><strong>Gender:</strong> {showDetails.gender}</p>
          <p><strong>Department:</strong> {showDetails.department}</p>
          <p><strong>Languages:</strong> {showDetails.language.join(", ")}</p>
          <p><strong>Feedback:</strong> {showDetails.feedback}</p>
          <button onClick={() => setShowDetails(null)}>Close</button>
        </div>
      )}
    </div>
  );
};
