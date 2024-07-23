import { useEffect, useState } from 'react';  
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const images = [  
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',  
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',  
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800', 
    'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=800',
     'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];  
export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);  

  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
    }, 3000); // Change image every 3 seconds  

    return () => clearInterval(intervalId);  
  }, []);  

  const nextSlide = () => {  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
  };  

  const prevSlide = () => {  
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);  
  }; 

  return (
    // h-560px
  <div className="relative w-full h-[560px] mx-auto overflow-hidden bg-contain">  
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto transition-opacity duration-700" />  
      <div className="absolute inset-0 flex items-center justify-between">  
        <button   
          className="bg-gray-700 rounded-full p-2 text-white hover:bg-gray-600 focus:outline-none"  
          onClick={prevSlide}  
        >  
          <ArrowBackIosIcon />
        </button>  
        <button   
          className="bg-gray-700 rounded-full p-2 text-white hover:bg-gray-600 focus:outline-none"  
          onClick={nextSlide}  
        >  
          <ArrowForwardIosIcon/> 
        </button>  
      </div>  
    </div> 
    );  
}
