import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const host = "http://localhost:5000";
    let url = `${host}/api/auth/createuser`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      //redirect
      localStorage.setItem('token', json.authToken);
      navigate('/', { replace: true })
    } else {
      //show error
      alert(json.error)
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <section className="text-gray-600 body-font relative border-2 w-full mx-auto">
      <div className="container px-5 py-10">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
            Sign Up
          </h1>
          <p className="mx-auto leading-relaxed text-base">
            Create an account to start saving your notes.
          </p>
        </div>
        <div className="flex flex-wrap mx-auto -m-2">
          <form onSubmit={handleSubmit} className='mx-auto'>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-md text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  minLength={5}
                  value={credentials.name}
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-md text-gray-600">
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
                <label htmlFor="password" className="leading-7 text-md text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength={5}
                  value={credentials.password}
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="cpassword" className="leading-7 text-md text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  minLength={5}
                  value={credentials.cpassword}
                  onChange={onChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded hover:rounded-full transition duration-300 text-lg`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Signup