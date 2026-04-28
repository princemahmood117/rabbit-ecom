import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from '../assets/reg1.jpg'

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  


  const handleRegisterSubmmit = (e) =>{
    e.preventDefault()
    console.log("registered",  {name, email, password});
  }


  
  return (
    <div className="flex max-w-7xl mx-auto">
      
      <div className="w-full flex md:w-1/2 flex-col justify-center items-center p-6 md:p-6">

        <form onSubmit={handleRegisterSubmmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">

          <h2 className="text-2xl font-bold text-center mb-6">Welcome to R<span className="text-red-600 font-satisfy">a</span>bbit</h2>

          <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter your name..."/>
          </div>

          <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter your email..."/>
          </div>

          <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter secure password"/>
          </div>
          <button className="bg-black text-white p-2 rounded-lg font-semibold hover:bg-red-800 transition duration-300 w-full cursor-pointer">Register Now</button>

          <p className="text-sm mt-4 text-center">Already registered? <Link to={'/login'} className="underline text-red-950">Login</Link> </p>
        </form>

      </div>


      <div className="hidden md:block w-1/2 ">
        <div className=" h-full p-8 flex flex-col justify-center items-center"> 
          <img src={registerImage} className="h-187.5 w-full object-cover" alt="login image" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
