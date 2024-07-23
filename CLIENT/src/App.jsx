import {Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CategoryDetails from './Components/CategoryDetails';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
    const [name, setName] = useState("");

    const handleName = (name) =>{
      setName(name);
    }
    

  return (
    <>
    <Header name={name}/>
    <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login handleName={handleName}/>}/>
       <Route path="/signup" element={<Signup />} />
       <Route path="/categories/:category" element={<CategoryDetails />} />
     </Routes>
    </>
  )
}

export default App
