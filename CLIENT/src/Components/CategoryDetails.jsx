// CategoryDetails.js
import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryDetails = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/categories/${category}/restaurants`);
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [category]);


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

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen w-5/6 m-auto">
      <h2 className="text-2xl font-bold">{categories[0].name}</h2>
      <p>{categoryData.description}</p>

      <div>
        {categoryData.map((restaurant) => (
          <div key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
