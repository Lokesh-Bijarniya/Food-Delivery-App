import {Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CategoryDetails from './Components/CategoryDetails';

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/categories/:category" element={<CategoryDetails />} />
     </Routes>
    </>
  )
}

export default App
