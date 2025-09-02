import React, { useEffect, useState } from "react";
import "./data.css";

export const UserData = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users"); //  get "users" array
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  if (users.length === 0) {
    return <h2>No user data found. Please fill the form first.</h2>;
  }

  // filter by search (case)
  const filteredUsers = users.filter((u) =>
    u.fullname.toLowerCase().includes(search.toLowerCase())||
    u.email.toLowerCase().includes(search.toLowerCase())||
    u.gender.toLowerCase().includes(search.toLowerCase())||
    u.department.toLowerCase().includes(search.toLowerCase())||
    u.PhoneNumber.toString().includes(search)
  );
  

  // View
  const handleView = (user) => {
    setShowDetails(user);
  };

  // Edit
  const handleEdit = (user) => {
    localStorage.setItem("editUser", JSON.stringify(user));
    window.location.href = "/Login"; 
  };

  //  Delete
  const handleDelete = (index) => {
    const updatedUsers = [...users];
    let confirmation=confirm("Are you sure delete the row ?");
    if(confirmation){
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

    }
    
  };

  return (
    <div className="userdata">
      <div className="filter">
        <div className="in-filter">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter the Name"
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Language</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.PhoneNumber}</td>
                <td>{user.gender}</td>
                <td>{user.department}</td>
                <td>{user.language.join(", ")}</td>
                <td>
                  <button className="view" onClick={() => handleView(user)}>
                    View
                  </button>
                </td>
                <td>
                  <button className="edit" onClick={() => handleEdit(user)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="delete" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" style={{ textAlign: "center", color: "red" }}>
                No user found ❌
              </td>
            </tr>
          )}
        </tbody>
      </table>

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
          <button onClick={() => setShowDetails(null)} >Close</button>
        </div>
      )}
    </div>
  );
};
