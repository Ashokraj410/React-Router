import React from 'react'

export const Details = () => {
  return (
    <div className='container'>
    <div className='frm'>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='enter your name' />
        <label htmlFor="email">email</label>
        <input type="email" placeholder='enter your email' />
        <label htmlFor="Number">Phone Number</label>
        <input type="number" placeholder='enter your PhoneNumber' />
        <button>submit</button>
    </div>
    </div>
  )
}
