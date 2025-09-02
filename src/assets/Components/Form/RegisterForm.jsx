import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* Validation Schema */
let schema = Yup.object().shape({
  fullname: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter your fullname (First Last)"),
  email: Yup.string()
    .required("Email is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email"),
  PhoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits"),
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/,
      "Must contain 1 uppercase, 1 lowercase, 1 number, 1 special char, min 8 chars"
    ),
  cpassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  feedback: Yup.string().required("Feedback is required"),
  gender: Yup.string().required("Gender is required"),
  language: Yup.array().of(Yup.string()).min(1, "Select at least one language"),
  agree: Yup.boolean().oneOf([true], "You must agree"),
  department: Yup.string().required("Department is required"),
});

/* Language List */
const ListData = [
  { id: "1", value: "Tamil" },
  { id: "2", value: "English" },
  { id: "3", value: "Hindi" },
  { id: "4", value: "Punjabi" },
  { id: "5", value: "Telugu" },
];

export const RegisterForm = () => {
  const renderCount = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();
  const editUser = location.state?.user; // Data passed from Edit button
  const editIndex = location.state?.index;

  const [isEdit, setIsEdit] = useState(false);

  /* useForm Hook */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* If edit mode, fill form with data */
  useEffect(() => {
    renderCount.current += 1;
    if (editUser) {
      reset(editUser);
      setIsEdit(true);
    }
  }, [editUser, reset]);

  /* Submit handler */
  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (isEdit) {
      // Update user at index
      existingUsers[editIndex] = data;
      alert("User updated successfully!");
    } else {
      // Add new user
      existingUsers.push(data);
      alert("Form Submitted Successfully!");
    }

    localStorage.setItem("users", JSON.stringify(existingUsers));
    navigate("/UserData"); // Go back to user list
    reset();
  };

  return (
    <div className="container">
      <h1>Render - {renderCount.current}</h1>

      <form className="frm" onSubmit={handleSubmit(onSubmit)}>
        {/* Fullname */}
        <div>
          <label>FullName</label>
          <input
            type="text"
            {...register("fullname")}
            placeholder="Enter your Name"
          />
          {errors.fullname && <p className="error">{errors.fullname.message}</p>}
        </div>

        {/* Email & Phone */}
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "50%" }}>
            <label>Email</label>
            <input type="email" {...register("email")} placeholder="Enter email" />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div style={{ width: "50%" }}>
            <label>PhoneNumber</label>
            <input type="number" {...register("PhoneNumber")} placeholder="Enter phone" />
            {errors.PhoneNumber && (
              <p className="error">{errors.PhoneNumber.message}</p>
            )}
          </div>
        </div>

        {/* Passwords */}
        <div className="pass">
          <div className="main-pass">
            <label>Password</label>
            <input type="password" {...register("password")} placeholder="Enter password" />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="cp-pass">
            <label>Confirm Password</label>
            <input type="password" {...register("cpassword")} placeholder="Confirm password" />
            {errors.cpassword && <p className="error">{errors.cpassword.message}</p>}
          </div>
        </div>

        {/* Department & Feedback */}
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "50%" }}>
            <label>Department</label>
            <select {...register("department")}>
              <option value="">-</option>
              <option value="Civil">Civil</option>
              <option value="ECE">ECE</option>
              <option value="CSE">CSE</option>
              <option value="MECH">MECH</option>
            </select>
            {errors.department && <p className="error">{errors.department.message}</p>}
          </div>
          <div style={{ width: "50%" }}>
            <label>Feedback</label>
            <textarea {...register("feedback")} />
            {errors.feedback && <p className="error">{errors.feedback.message}</p>}
          </div>
        </div>

        {/* Gender */}
        <label>Gender</label>
        <div className="gender-list">
          <label><input {...register("gender")} value="Male" type="radio" />Male</label>
          <label><input {...register("gender")} value="Female" type="radio" />Female</label>
          <label><input {...register("gender")} value="Others" type="radio" />Others</label>
        </div>
        {errors.gender && <p className="error">{errors.gender.message}</p>}

        {/* Language */}
        <label>Language</label>
        <div style={{ display: "flex" }}>
          {ListData.map((item) => (
            <div key={item.id} className="language">
              <input type="checkbox" value={item.value} {...register("language")} />
              <label>{item.value}</label>
            </div>
          ))}
        </div>
        {errors.language && <p className="error">{errors.language.message}</p>}

        {/* Agree */}
        <div className="Agree">
          <input type="checkbox" {...register("agree")} />
          <p>I Agree to the conditions</p>
        </div>
        {errors.agree && <p className="error">{errors.agree.message}</p>}

        <button type="submit">{isEdit ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};
