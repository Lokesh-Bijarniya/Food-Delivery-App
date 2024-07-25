import {Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CategoryDetails from './Components/CategoryDetails';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Partner from './Pages/Partner';

function App() {
    const [name, setName] = useState("");

    const handleName = (name) =>{
      setName(name);
    }

    

  return (
    <>
     <Routes>
       <Route path="/" element={<><Navbar name={name}/><Home/></>} />
       <Route path="/partner" element={<Partner/>}/>
       <Route path="/login" element={<><Navbar name={name}/><Login handleName={handleName}/></>}/>
       <Route path="/signup" element={<><Navbar name={name}/><Signup/></>} />
       <Route path="/categories/:category" element={<><Navbar name={name}/><CategoryDetails/></>} />
     </Routes>
    </>
  )
}

export default App
