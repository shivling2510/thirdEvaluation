import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar
 = () => {
  return (
    <div className='navbar'>
        {/* Navbar */}
        {/* <Link to='/H' */}
        <Link to='/'>Home page</Link>
        <Link to='./login'>login</Link >
        <Link to='/register'>Register</Link>
        <Link to ='/product'>product</Link>
        <div>Register</div>

    </div>
  )
}
