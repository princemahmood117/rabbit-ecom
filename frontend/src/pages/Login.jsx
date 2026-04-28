import { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from '../assets/login.webp'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);


  const handleFomSubmmit = (e) =>{
    e.preventDefault()
    alert('form submmied')
  }


  
  return (
    <div className="flex max-w-7xl mx-auto">
      
      <div className="w-full flex md:w-1/2 flex-col justify-center items-center p-8 md:p-10">

        <form onSubmit={handleFomSubmmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">

          <h2 className="text-2xl font-bold text-center mb-6">Welcome to R<span className="text-red-600 font-satisfy">a</span>bbit</h2>

          <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter your email..."/>
          </div>

          <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter your email..."/>
          </div>
          <button className="bg-black text-white p-2 rounded-lg font-semibold hover:bg-red-800 transition duration-300 w-full cursor-pointer">Sign In</button>

          <p className="text-sm mt-4 text-center">Don't have an account? <Link to={'/signup'} className="underline text-red-950">Sign Up</Link> </p>
        </form>

      </div>


      <div className="hidden md:block w-1/2 ">
        <div className=" h-full p-10 flex flex-col justify-center items-center"> 
          <img src={loginImage} className="h-187.5 w-full object-cover" alt="login image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
