import { useState } from 'react';
import googleLogo from '../assets/google.svg';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [userData, setUserData] = useState({ emailOrMobileNumber: "", name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setError(""); // Clear the error when the user starts typing
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.emailOrMobileNumber || !userData.name || !userData.password) {
      setError("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/api/auth/signup', userData, {
        headers: { 'Content-Type': 'application/json' },
      });

    
      if(response.status === 201) {
        alert("Signup successful");
        setTimeout(() => navigate('/login') ,3000)
      }
      setLoading(false);

      console.log(response.data);
    } catch (err) {
      setLoading(false);
      setError("Signup failed. Please try again.");
      console.log(err);
    }
  };

  return (  
    <div className="flex items-center justify-center bg-gray-100 p-12">  
      <form className="bg-white border border-slate-300 rounded-lg shadow-sm flex flex-col w-full max-w-md p-8" onSubmit={handleSubmit}>  
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>  
        
        <input  
          type="text"  
          placeholder="Email or Mobile Number" 
          name='emailOrMobileNumber' 
          value={userData.emailOrMobileNumber}
          onChange={handleChange}
          className="mb-4 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"  
        />  
        
        <input  
          type="text"  
          placeholder="Name" 
          name='name'
          value={userData.name} 
          onChange={handleChange}
          className="mb-4 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"  
        />  
        
        <input  
          type="password"  
          placeholder="Password" 
          name='password'
          value={userData.password} 
          onChange={handleChange}
          className="mb-6 p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"  
        />  
        
        <input  
          type="submit"  
          value="Signup"  
          className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer mb-4"  
        />  

        {error && <div className='text-red-500 text-center'>{error}</div>}

        {loading && <div className='text-center'>Loading...</div>}
        
        <div className="flex items-center justify-center my-4">  
          <span className="h-px w-16 bg-gray-300"></span>  
          <span className="mx-4 text-gray-500">or</span>  
          <span className="h-px w-16 bg-gray-300"></span>  
        </div>  

        <button  
          type="button"  
          className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer focus:outline-none"  
        >  
            <img  
            src={googleLogo}  
            alt="Google Signup"  
            className="mr-2"  
          />  
          <span>Signup with Google</span>  
        </button>  
        <div className='pt-4 text-center'>
          <span className="text-gray-500">Already have an account? <Link to="/login" className='text-blue-700'>Signin</Link></span>
        </div>
      </form>  
    </div>  
  );  
}