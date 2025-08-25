import React from 'react'
import { useFormAction } from 'react-router-dom';

export const RegisterForm = () => {
  const {formSubmit,setformSubmit}=useFormAction();
  return (
    <div>
      <form action="" id='frm'>
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username"  placeholder='Enter your username'/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' placeholder='Enter your email' />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password'placeholder='Enter your Password' />
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name='cpassword' id='cpassword' placeholder='Enter your Confirm Password' />
        <label htmlFor="phonenumber">PhoneNumber</label>
        <input type="number" name='phonenumber' id='phonenumber' placeholder='enter your phonenumber' />
        <button>Submit</button>
      </form>
    </div>
  )
}
