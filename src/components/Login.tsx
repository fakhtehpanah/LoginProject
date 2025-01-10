import React, { useState } from 'react'
import Image from '/Users/fakhtehpanah/Desktop/Programming projects/Login Form/Front/my-app/public/Login Art.png'
import Art from '/Users/fakhtehpanah/Desktop/Programming projects/Login Form/Front/my-app/public/Art.png'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        console.log(email, password)
    }
  return (
    <div className='py-8 md:flex flex-row-reverse justify-center '>
        <div className='pb-8 flex justify-center md:hidden'>
            <img src={Image.src} alt="" />
        </div>
        <div className='hidden md:flex justify-end mx-8'>
            <img src={Art.src} alt="" className='w-5/6 ' />
        </div>
        <div className='p-8 md:p-24 mx-8 md:w-4/12'>
            <h1 className='font-bold text-xl'>Welcome Back</h1>
            <div className='py-2'>
                <p>Today is a new day. It's your day. You shape it.</p>
                <p>Sign in to start managing your projects.</p>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='my-2'>Email</label>
                <input onChange={handleEmail} type="text" className='outline-none rounded-xl p-2 bg-gray-50 border' placeholder='Example@gmail.com'/>
                <label htmlFor="" className='my-2'>Password</label>
                <input onChange={handlePassword} type="text" name="" id="" className='outline-none rounded-xl p-2 bg-gray-50 border' placeholder='At least 8 characters'/>
                {/* <p>Forget Password?</p> */}
                <button onClick={handleSubmit} className='bg-black text-white p-2 rounded-xl my-10'>Sign in</button>
            </div>

        </div>

    </div>
  )
}

export default Login