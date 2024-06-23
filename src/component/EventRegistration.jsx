import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventRegistrationForm = ({ setSubmittedData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.age) newErrors.age = 'Age is required';
    if (formData.age && formData.age <= 0)
      newErrors.age = 'Age must be greater than 0';
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName)
      newErrors.guestName = 'Guest name is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      navigate('/summary');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      attendingWithGuest: 'No',
      guestName: '',
    });
    setErrors({});
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="w-full max-w-xl bg-gray-950 p-8 border border-gray-700 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-50">Event Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-100 bg-gray-900 mt-1 p-2 block w-full font-bold border border-gray-700 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-100 bg-gray-900 font-bold mt-1 p-2 block w-full border border-gray-700 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="text-gray-100 bg-gray-900 font-bold mt-1 p-2 block w-full border border-gray-700 rounded-md"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100">Are you attending with a guest?</label>
            <select
              name="attendingWithGuest"
              value={formData.attendingWithGuest}
              onChange={handleChange}
              className="text-gray-100 bg-gray-900 font-bold mt-1 p-2 block w-full border border-gray-700 rounded-md"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          {formData.attendingWithGuest === 'Yes' && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-100">Guest Name</label>
              <input
                type="text"
                name="guestName"
                value={formData.guestName}
                onChange={handleChange}
                className="text-gray-100 bg-gray-900 font-bold mt-1 p-2 block w-full border border-gray-700 rounded-md"
              />
              {errors.guestName && (
                <p className="text-red-500 text-xs mt-1">{errors.guestName}</p>
              )}
            </div>
          )}
          <div className="flex justify-between">
            <button
              type="submit"
              className="mt-3 py-2 px-4 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="mt-3 py-2 px-4 bg-gray-500 text-white rounded-md"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
