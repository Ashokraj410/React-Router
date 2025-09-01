import React, { useEffect, useState } from "react";

export const UserData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Retrieve stored data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <h2>No user data found. Please fill the form first.</h2>;
  }

  return (
    <div className="userdata">
      <h1>Welcome, {user.fullname} </h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.PhoneNumber}</p>
      <p><strong>Department:</strong> {user.department}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Languages:</strong> {user.language.join(", ")}</p>
      <p><strong>Feedback:</strong> {user.feedback}</p>
    </div>
  );
};
