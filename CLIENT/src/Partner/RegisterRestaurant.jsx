import { useState } from 'react';

const RegisterRestaurant = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    password: '',
    categories: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post('/api/restaurants/register', formData);
    //   alert('Restaurant registered successfully');
    // } catch (error) {
    //   alert('Error registering restaurant');
    // }
  };

  return (
    <div className='bg-red-400'>
      <div className='h-96 bg-blue-400'>
           <h1 className='text-3xl'>Partner with BiteBase</h1>
           <button className='bg-red-500 text-white'>Register Your Restaurant</button>
      </div>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} className=" border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
        <input type="text" name="address" placeholder="Address" onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Categories</label>
        <input type="text" name="categories" placeholder="Categories" onChange={handleChange} className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
    </form>
    </div>
  );
};

export default RegisterRestaurant;
