import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import login from '../asset/loginGif.gif';
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const handleSubmit = async (e) => {

    e.preventDefault();
    const host = process.env.PORT;
    let url = `${host}/api/auth/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if (json.success) {
      //redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/', { replace: true })
    } else {
      //show error
      alert("Invalid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <section className="text-black sm:text-gray-600 body-font w-full flex flex-col sm:flex-row justify-center items-center overflow-y-hidden">
      <div className="z-10 sm:mr-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
            Login
          </h1>
          <p className="mx-auto leading-relaxed text-base">
            Login to your account to access your notes.
          </p>
        </div>
        <div className="flex flex-wrap mx-auto -m-2">
          <form onSubmit={handleSubmit} className='mx-auto'>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-md text-black sm:text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="password" className="leading-7 text-md text-black sm:text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>

            <div className="p-2 w-full">
              Don't have an account?
              <Link to='/signup' className="text-indigo-500 ml-2 cursor-pointer">
                Sign Up
              </Link>
            </div>
            <div className="p-2 w-full">
              <button
                className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md hover:rounded-full transition-all ease-in-out duration-300 text-lg`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <img src={login} alt="login" className='max-w-[85%] opacity-50 sm:w-[50%] absolute md:top-20 lg:top-0 sm:right-20 sm:opacity-100' />
    </section>
  )
}

export default Login