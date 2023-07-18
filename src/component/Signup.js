import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupGif from "../asset/signupGif.gif";
const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const host = "https://lively-puce-flip-flops.cyclic.app";
    let url = `${host}/api/auth/createuser`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        // Handle the error if the response is not successful
        throw new Error("Request failed with status " + response.status);
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.authtoken);
        navigate("/", { replace: true });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  return (
    <section className="text-black px-2 body-font h-[calc(100vh-10rem)] sm:h-[calc(100vh-15rem)] w-full flex justify-center items-center">
      <img src={signupGif} alt="login" className="hidden lg:block" />
      <div className="z-10 border border-black rounded-md p-4 sm:p-6">
        <div className="flex flex-col w-full mb-4">
          <h2 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
            Sign Up
          </h2>
          <p className="mx-auto text-center text-gray-600 leading-relaxed text-base">
            Create an account to start saving your notes.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-2 sm:mb-4">
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
                className="w-full  bg-opacity-50 rounded border border-gray-300 focus:bg-gray-100 hover:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>
          <div className="w-full mb-2 sm:mb-4">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-md text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                className="w-full  bg-opacity-50 rounded border border-gray-300 focus:bg-gray-100 hover:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>
          <div className="w-full mb-2 sm:mb-4">
            <div className="relative">
              <label
                htmlFor="password"
                className="leading-7 text-md text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                minLength={5}
                value={credentials.password}
                onChange={onChange}
                className="w-full  bg-opacity-50 rounded border border-gray-300 focus:bg-gray-100 hover:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>

          <div className="w-full mb-2">
            Already have an account?
            <Link to="/login" className="text-indigo-500 ml-2 cursor-pointer">
              Log in
            </Link>
          </div>

          <div className="w-full mt-4">
            <button className="flex text-black mx-auto border border-black py-1 px-3 focus:outline-none hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-colors duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
