import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from"yup"
import  {yupResolver} from "@hookform/resolvers/yup" 


let renderCount=0;

let schema=Yup.object().shape({
  fullname:Yup.string()
  .required("Name is Required")
  .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/,"Enter your fulllname"),
  email:Yup.string()
  .required("email is required")
  .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
 
  PhoneNumber:Yup.string()
  .required("Phonenumber is required")
  .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  password:Yup.string()
  .required("Enter the password")
  .matches(/^[A-Z][a-z]+[0-9]+$/,"Enter valid password"),
  cpassword:Yup.string()
  .required("Confirm Password is Required")
  .oneOf([Yup.ref("password"),null],"password must match"),
  feedback:Yup.string()
  .required("Enter your feedback")
  .matches(/^[A-Z][a-Z]$/,"Enter more then 10 words"),




})






export const Login = () => {

  renderCount++;

  /* useState to return array*/
  let [name,setName]=useState('')


  /*  useForm to return object  */
  let {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });

  console.log(errors)

  /* to fill input data get  */
  let handleData=(data)=>{
    console.log(data)

  }

  return (
    <div className="container"> 
      <h1>Render-{renderCount}</h1>
      <form className="frm" onSubmit={handleSubmit(handleData)}>
        <label htmlFor="fullname">FullName</label>
        <input type="text"  id='fullname'{...register("fullname",{ required :"Name is required"})}
         name='fullname'placeholder='enter your Name' />
         {!!errors.fullname && <p className="error">{errors.fullname.message}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" name='email'{...register("email")} placeholder='Enter your email' />
        {!!errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="phoneNumber">PhoneNumber</label>
        <input type="number" id="phoneNumber"{...register("phoneNumber")} name="PhoneNumber" placeholder="Enter your PhoneNumber" />
        {!!errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}

        <label htmlFor="password">Password</label>
        <input type="password" id="password"{...register("password")} name="password" placeholder="Enter your Password" />
        {!!errors.password && <p className="error">{errors.password.message}</p>}

        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" id="cpassword"{...register("cpassword")} name="cpassword" placeholder="confirm Password" />
        {!!errors.cpassword && <p className="error">{errors.cpassword.message}</p>}

        <label htmlFor="text">Message</label>
        <input type="text" name="feedback" id="feedback"  />
        {!!errors.feedback && <p className="error">{errors.feedback.message}</p>}
        <button>submit</button>
      </form>
    </div>
  )
}
