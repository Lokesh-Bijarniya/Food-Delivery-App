import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SupportIcon from '@mui/icons-material/Support';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const handleClick = (e)=>{
      e.preventDefault();
      setActive(e.target.value);
  }

  return (
    <div className="">
        <div>
            <h1 className="text-4xl text-center font-serif p-6 italic">BiteBase</h1>
        </div>
        <nav className="h-16 flex items-center justify-center px-24">
          <div className="flex items-center space-x-12 cursor-pointer ">
            <Link to='/' className={`text-lg flex items-center ${active? "font-bold" : ""}`} onClick={handleClick}>
            <HomeIcon className="text-gray-800"/>
              Home
            </Link>
            <Link to='/restaurants' className={`text-lg flex items-center ${active? "font-bold" : ""}`} onClick={handleClick}>
            <RestaurantIcon className="text-gray-800"/>
              Restaurants
            </Link>
            <Link to='/offers' className={`text-lg flex items-center ${active? "font-bold" : ""}`} onClick={handleClick}>
            <LocalOfferIcon className="text-gray-800"/>
              Offers
              <sup className="text-red-500 text-xs">NEW</sup>
            </Link>
            <Link to='/help' className={`text-lg flex items-center ${active? "font-bold" : ""}`} onClick={handleClick}>
            <SupportIcon className="text-gray-800"/>
              Help
            </Link>
            <Link to='/cart' className={`text-lg flex items-center ${active? "font-bold" : ""}`} onPlay={handleClick}>
            <ShoppingCartCheckoutIcon className="text-gray-800"/>
              Cart
            </Link>
            
          </div>
        </nav>
    </div>
  )
}
