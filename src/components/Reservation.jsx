// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    time: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      toast.success(data.message);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        time: '',
        date: '',
      });
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center p-4">
      <div className="bg-white/70 p-8 rounded-lg shadow-md flex flex-col lg:flex-row max-w-8xl w-screen">
        <div className="lg:w-1/2 p-6 mb-6 lg:mb-0">
          <img
            src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Restaurant Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-6">Make a Reservation</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
    
            <button
              type="submit"
              className="w-full bg-[#53ad97] hover:text-blue-600  text-white py-2 px-4 rounded-lg hover:bg-[#53ad97]  transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;


