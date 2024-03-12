import React from 'react'

const Login = () => {
  return (
    <div className='h-screen'>
      <div className='py-[30vh] flex justify-center '>
        <form action="" className='flex flex-col px-12 gap-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-[50%] py-12 rounded-lg bg-gray-600'>
          <p className='text-center text-2xl text-white'>Login</p>
          <input type="email" name="" id="" placeholder='Enter your email' className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg'/>
          <input type="password" placeholder='password' name='' id='' className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg' />
          <button type='submit' className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-[30%] py-3 rounded-lg flex justify-center mx-auto text-xl font-medium hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-blue-600 text-white hover:bg-green-500 hover:text-black'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login