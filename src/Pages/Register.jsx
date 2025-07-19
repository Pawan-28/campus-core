import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const orgTypes = ["School", "College", "Institute"];
const states = ["Bihar", "HARYANA", "UP"];
const cities = ["Noida", "Patna", "Ghaziabad" ,"Gurugram", "Faridabad", "Gaya"];

const Register = () => {
  const [form, setForm] = useState({
    orgType: '',
    name: '',
    email: '',
    location: '',
    address: '',
    pin: '',
    state: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Registration submitted successfully!');
    setIsSubmitting(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl animate-slide-in">
        <div className="bg-gradient-to-r from-blue-200 to-red-200 rounded-2xl shadow-2xl p-8 card-hover border border-blue-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow shadow">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-2 drop-shadow-md">Organization Registration</h2>
            <p className="text-blue-700 text-lg">Join our platform and manage your organization efficiently</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Organization Type and Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Organization Type
                </label>
                <select 
                  name="orgType" 
                  value={form.orgType} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="text-gray-800">Select Type</option>
                  {orgTypes.map(type => (
                    <option key={type} value={type} className="text-gray-800">{type}</option>
                  ))}
                </select>
              </div>
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Organization Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter organization name"
                  required 
                />
              </div>
            </div>
            {/* Email and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter email address"
                  required 
                />
              </div>
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Location
                </label>
                <input 
                  type="text" 
                  name="location" 
                  value={form.location} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter location"
                />
              </div>
            </div>
            {/* Address */}
            <div className="group">
              <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                Address
              </label>
              <input 
                type="text" 
                name="address" 
                value={form.address} 
                onChange={handleChange} 
                className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                placeholder="Enter complete address"
              />
            </div>
            {/* Pin, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  Pin Code
                </label>
                <input 
                  type="text" 
                  name="pin" 
                  value={form.pin} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300" 
                  placeholder="Enter PIN"
                />
              </div>
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  State
                </label>
                <select 
                  name="state" 
                  value={form.state} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="text-gray-800">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state} className="text-gray-800">{state}</option>
                  ))}
                </select>
              </div>
              <div className="group">
                <label className="block mb-2 font-semibold text-blue-900 text-sm uppercase tracking-wide">
                  City
                </label>
                <select 
                  name="city" 
                  value={form.city} 
                  onChange={handleChange} 
                  className="w-full bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
                >
                  <option value="" className="text-gray-800">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city} className="text-gray-800">{city}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 button-glow disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                  Registering...
                </div>
              ) : (
                'Register Organization'
              )}
            </button>
          </form>
          {/* Login Link */}
          <div className="mt-8 text-center">
            <span className="text-blue-700 font-medium">Already have an account?</span>
            <Link 
              to="/login" 
              className="ml-2 text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-300"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 