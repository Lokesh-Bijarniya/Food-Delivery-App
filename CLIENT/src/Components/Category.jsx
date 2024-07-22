import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/popularcategory');
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categories.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < categories.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <div className="h-screen w-5/6 m-auto">
      <div className="py-12">
        <div className="flex justify-between">
          <h1 className="text-3xl font-serif font-bold">Popular Categories</h1>
          <div className="flex">
            <button
              onClick={handlePrev}
              className={`py-2 px-4 mx-1 flex items-center justify-center rounded-full ${
                currentIndex === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300"
              }`}
              aria-label="Previous"
              disabled={currentIndex === 0}
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={handleNext}
              className={`py-2 px-4 mx-1 flex items-center justify-center rounded-full ${
                currentIndex === categories.length - 8 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300"
              }`}
              aria-label="Next"
              disabled={currentIndex === categories.length - 8}
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-4 py-8">
          {categories.slice(currentIndex, currentIndex + 8).map((item, index) => (
            <CategoryCard key={index} img={item.imageUrl} head={item.name} onClick={() => handleCategoryClick(item._id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
