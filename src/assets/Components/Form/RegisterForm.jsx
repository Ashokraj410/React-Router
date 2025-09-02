import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";





let schema = Yup.object().shape({

  fullname: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter your fulllname"),

  email: Yup.string()
    .required("Email is Required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),

  PhoneNumber: Yup.string()
    .required("PhoneNumber is Required")
    .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits"),

  password: Yup.string()
    .required("password is Required")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/, "Password must have 1 uppercase, 1 lowercase, 1 number, 1 special char, min 8 chars"),

  cpassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "password must match"),

  feedback: Yup.string()
    .required("Enter your Feedback"),

  gender: Yup.string()
    .required("gender is required"),

  language: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one language")
    .required("Select at least one language"),

  agree: Yup.boolean()
    .oneOf([true], "you must agree"),

  department: Yup.string()
    .required("Department is required"),

});





/* language validation*/

const ListData = [
  { id: "1", value: "Tamil" },
  { id: "2", value: "English" },
  { id: "3", value: "Hindi" },
  { id: "4", value: "Punjabi" },
  { id: "5", value: "Telugu" },
];


export const RegisterForm = () => {


  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1;

  });


  /*  useForm to return object  */
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });



  const navigate = useNavigate();

  /* to fill input data get  */
  const onSubmit = (data) => {
    alert("From Submitted Successfully!");


    /* only one user data  store in local storage*/
    {/*localStorage.setItem("user",JSON.stringify(data))*/ }


    /* more number of data  array */
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    /* add new user*/
    existingUsers.push(data)

    /*data store from local storage*/

    localStorage.setItem("users", JSON.stringify(existingUsers))

    /* data retrive page */

    navigate("/UserData")

    reset();

  };






  return (
    <div className="container">
      <h1>Render-{renderCount.current}</h1>

      <form className="frm" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullname">FullName</label>
          <input type="text" id='fullname'{...register("fullname", { required: "Name is required" })}
            name='fullname' placeholder='Enter your Name' />
          {!!errors.fullname && <p className="error">{errors.fullname.message}</p>}

        </div>


        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "50%" }}>
            <label htmlFor="email">Email</label>
            <input style={{marginLeft:"40px"}}  type="email" name='email'{...register("email")} placeholder='Enter your email' />
            {!!errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div style={{ width: "50%" }}>
            <label htmlFor="PhoneNumber">PhoneNumber</label>
            <input type="number" id="PhoneNumber" style={{marginLeft:"40px"}}{...register("PhoneNumber")} name="PhoneNumber" placeholder="Enter your PhoneNumber" />
            {!!errors.PhoneNumber && <p className="error">{errors.PhoneNumber.message}</p>}
          </div>
        </div>

        <div className="pass">

          <div className="main-pass">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"{...register("password")} name="password" placeholder="Enter your Password" />
            {!!errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="cp-pass">
            <label htmlFor="cpassword">Confirm Password</label>
            <input type="password" id="cpassword"{...register("cpassword")} name="cpassword" placeholder="confirm Password" />
            {!!errors.cpassword && <p className="error">{errors.cpassword.message}</p>}
          </div>
        </div>


        <label htmlFor="gender">Gender</label>
        <div className="gender-list">
          <label htmlFor="male"><input id="male" {...register("gender", { required: "gender is required" })} value="Male" type="radio" />Male</label>
          <label htmlFor="female"><input id="female" {...register("gender")} value="Female" type="radio" />Female</label>
          <label htmlFor="others"><input id="others" {...register("gender")} value="Others" type="radio" />Others</label>
        </div>
        {!!errors.gender && <p className="error">{errors.gender.message}</p>}

        <label htmlFor="Language">Language</label>
        <div style={{ display: "flex" }}>
          {ListData.map((item) => {
            return (
              <div key={item.id} className="language">
                <input type="checkbox" value={item.value} {...register("language", { required: "Select at least one language" })} />
                <label htmlFor={item.id}>{item.value}</label>
              </div>
            )
          })}
        </div>
        {!!errors.language && <p className="error">{errors.language.message}</p>}

        <label htmlFor="department">Department</label>
        <select name="department" {...register("department")} id="department">
          <option value="">-</option>
          <option value="Civil">Civil</option>
          <option value="ECE">ECE</option>
          <option value="CSE">CSE</option>
          <option value="MECH">MECH</option>
        </select>
        {!!errors.department && <p className="error">{errors.department.message}</p>}




        <label htmlFor="text">Message</label>
        <textarea type="text" name="feedback" id="feedback" {...register("feedback")} />
        {!!errors.feedback && <p className="error">{errors.feedback.message}</p>}

        <div className="Agree">
          <input type="checkbox" {...register("agree")} id="agree" />
          <p>I Agree to the conditions</p>

        </div>
        {!!errors.agree && <p className="error">{errors.agree.message}</p>}

        <button type="submit">submit</button>
      </form>
    </div>
  )
}
