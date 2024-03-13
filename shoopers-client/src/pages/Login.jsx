import React, { useState } from 'react'
// import Google from "../assets/goggle-image.webp"
import Google from "../assets/google-color.jpeg"
import Github from "../assets/github-dark.png"

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  }

  const [details, setDetails] = useState(initialState)

  const handleChange = (e) => {
    const {name, value} = e.target
    setDetails((prev) =>(
      {...prev, [name]:value}
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   console.log(details);
   setDetails(initialState)
  }

  return (
    <div className='h-screen relative'>
      <div className='py-[30vh] flex  justify-center '>
        <form onSubmit={handleSubmit} action="" className='flex flex-col px-12 gap-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-[50%] py-12 rounded-lg bg-gray-600'>
          <p className='text-center text-2xl text-white'>Login</p>
          <input onChange={handleChange} type="email" value={details.email} name="email" id="" placeholder='Enter your email' className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg'/>
          <input onChange={handleChange} type="password" value={details.password} placeholder='password' name='password' id='' className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg' />
          <button type='submit' className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-[30%] py-3 rounded-lg flex justify-center mx-auto text-xl font-medium hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-blue-600 text-white hover:bg-green-500 hover:text-black'>Submit</button>
        </form>
        
      </div>
        <div className='w-14 h-10 flex gap-12 absolute bottom-[25%] left-[45%]'>
          <img src={Google} alt="google" className='rounded-xl'/>
          <img src={Github} alt="github" className='rounded-xl'/>
        </div>
    </div>
  )
}

export default Login