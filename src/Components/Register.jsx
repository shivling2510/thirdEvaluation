import React, { useState } from 'react'

export const Register = () => {
    const [formData, setFormData ]=useState({
        name:'',
        password:'',
        username:'',
        mobile:'',
        email:''
    })
    const handleChange=(e)=>{
     const   {id,value}=e.target;
     setFormData({...formData, [id]:value });
     console.log('fff ', formData)
    }
    handleSubmit=()=>{
        let data=JSON.stringify(formData)

        fetch(``)
    }
   const {username, mobile, email, password, name} = formData;
  return (
    <div>
        <h1>Register page</h1>
         name :
        <input type="text" id='name' onChange={handleChange} value={name}/>
        <br />
        user email :
        <input type="text" id='email' onChange={handleChange} value={email}/>
        <br />
        user mobile :
        <input type="text" id='mobile' onChange={handleChange} value={mobile}/>
        <br />
        user user name :
        <input type="text" id='username' onChange={handleChange}  value={username}/>
        <br />
        password :
        <input type="text" id='password' onChange={handleChange} value={password}/>
        <br />
        <input type="submit" value='submit' />
    </div>
  )
}
// "name": "MASAI School",

