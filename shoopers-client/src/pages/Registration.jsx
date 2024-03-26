import React,{ useState } from 'react'
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import { Navigate } from "react-router-dom"; 


const Registration = () => {
  const  userLoggedIn  = useAuth();
      // const initialState = {
      //       email: "",
      //       password: "",
      //       confirmPassword: ""
      //     };
        
      //     const [details, setDetails] = useState(initialState);
      //     const [isRegistering, setIsRegistering] = useState(false)
      //     const [errorMessage, setErrorMessage] = useState("")
        
      //     const handleChange = (e) => {
      //       const { name, value } = e.target;
      //       setDetails((prev) => ({ ...prev, [name]: value }));
      //     };
        
      //     const handleSubmit = async (e) => {
      //       e.preventDefault();
      //       if (!isRegistering) {
      //         setIsRegistering(true)
      //         await doCreateUserWithEmailAndPassword(details)
      //       }
      //       setDetails(initialState);
      //     };
      const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true)
      try {
        // Ensure email is a string before passing it to createUserWithEmailAndPassword
        if (typeof email === 'string' && email.trim() !== '') {
          await doCreateUserWithEmailAndPassword(email, password);
          // Registration successful, you can redirect the user to another page
        } else {
          throw new Error('Invalid email format');
        }
      } catch (error) {
        setError(error.message);
      }
  
      setLoading(false);
    };
    }




  return (
      <div className="h-screen relative py-12">
        {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
      <div className="py-[25vh] flex  justify-center px-4">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col md:px-12 gap-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full px-4 md:w-[50%] py-12 rounded-lg bg-gray-600"
        >
          <p className="text-center text-2xl text-white">Sign Up</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            name="email"
            id=""
            placeholder="Enter your email"
            required
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg"
          />
          <input
            onChange={(e) =>setPassword(e.target.value) }
            type="password"
            value={password}
            placeholder="password"
            required
            name="password"
            id=""
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg"
          />
          {/* <input
            onChange={handleChange}
            type="password"
            value={details.confirmPassword}
            placeholder="confirm password"
            name="password"
            id=""
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] px-4 py-3 rounded-lg"
          /> */}
          <button
            type="submit" disabled={loading}
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-[30%] cursor-pointer py-3 rounded-lg flex justify-center mx-auto lg:text-xl font-medium hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-blue-600 text-white hover:bg-green-500 hover:text-black"
          >
            Sign Up
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
      <div></div>
    </div>
  )
}

export default Registration