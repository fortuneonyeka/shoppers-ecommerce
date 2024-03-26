import React, { useState } from "react";
import Google from "../assets/google-color.jpeg";
import { useNavigate } from "react-router-dom";
import {Navigate} from "react-router-dom"
import Github from "../assets/github-dark.png";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from '../contexts/authContext';

const Login = () => {
  const userLoggedIn = useAuth();
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const [details, setDetails] = useState(initialState);
  const [isSigninIn, setIsSigningIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigninIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(details);
      // Redirect to home page after successful login
      navigate('/home');
    }
    setDetails(initialState);
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigninIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="h-screen relative py-12">
      {userLoggedIn && <Navigate to={'/home'} replace={true} />}
      <div className="py-[25vh] flex  justify-center px-4">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col md:px-12 gap-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full px-4 md:w-[50%] py-12 rounded-lg bg-gray-600"
        >
          <p className="text-center text-2xl text-white">Login</p>
          <input
            onChange={handleChange}
            type="email"
            value={details.email}
            name="email"
            id=""
            placeholder="Enter your email"
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg"
          />
          <input
            onChange={handleChange}
            type="password"
            value={details.password}
            placeholder="password"
            name="password"
            id=""
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg"
          />
          <button
            type="submit"
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-[30%] py-3 rounded-lg flex justify-center mx-auto text-xl font-medium hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-blue-600 text-white hover:bg-green-500 hover:text-black"
          >
            Login
          </button>
          <p className="text-center text-white">Don't have an account? <a href="/registration" className="font-bold text-gray-200">Sign Up</a></p>
        </form>
        <div  className="flex gap-12 absolute w-8 h-8 bottom-[20%] left-[27%] md:left-[35%] md:w-40 md:h-10 lg:w-40 lg:h-14 lg:bottom-[20%] lg:left-[42%]">
          <img onClick={handleGoogleSignIn}
            src={Google}
            alt="google"
            className="rounded-xl hover:scale-125 duration-100 cursor-pointer"
          />
          <img
            src={Github}
            alt="github"
            className="rounded-xl hover:scale-125 duration-100 cursor-pointer"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
