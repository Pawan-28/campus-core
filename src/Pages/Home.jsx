import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      
   
      <div className="w-full max-w-4xl md:w-4/5 lg:w-3/5 mt-10 md:mt-20 mb-10 md:mb-20 bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl shadow border border-blue-100 p-4 sm:p-8 mx-auto">
        <div className="text-center max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto animate-slide-in">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-pulse-glow">
            <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-md">
            Welcome to <span className="text-blue-600">CampusCore</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for managing and organizing your educational institutions. 
            Streamline your operations with our powerful management system.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-16">
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 button-glow flex items-center shadow-md"
            >
              <svg className="w-6 h-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="bg-blue-100 border border-blue-300 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-blue-200 flex items-center shadow-md"
            >
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </Link>
          </div>
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-2xl md:max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-pink-300 to-blue-300 rounded-2xl p-6 card-hover border border-blue-100 shadow-md">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Easy Management</h3>
              <p className="text-blue-700">Create, read, update, and delete organization records with our intuitive interface.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-300 to-blue-300 rounded-2xl p-6 card-hover border border-blue-100 shadow-md">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Fast & Efficient</h3>
              <p className="text-blue-700">Lightning-fast performance with real-time updates and seamless user experience.</p>
            </div>
            <div className="bg-gradient-to-r from-pink-300 to-blue-300 rounded-2xl p-6 card-hover border border-blue-100 shadow-md">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Secure & Reliable</h3>
              <p className="text-blue-700">Your data is protected with industry-standard security measures and reliable backup systems.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="w-full max-w-4xl md:w-4/5 lg:w-3/5 mt-10 md:mt-20 mb-10 md:mb-20 bg-gradient-to-r from-red-100 to-blue-100 rounded-xl shadow border border-blue-100 p-4 sm:p-8 mx-auto">
        <div className="max-w-xs sm:max-w-2xl md:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center bg-gradient-to-r from-orange-300 to-blue-300 rounded-xl p-6 shadow border border-blue-100">
              <div className="text-4xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-blue-700">Organizations</div>
            </div>
            <div className="text-center bg-gradient-to-r from-orange-300 to-blue-300 rounded-xl p-6 shadow border border-blue-100">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-blue-700">Cities</div>
            </div>
            <div className="text-center bg-gradient-to-r from-orange-300 to-blue-300 rounded-xl p-6 shadow border border-blue-100">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-blue-700">Support</div>
            </div>
            <div className="text-center bg-gradient-to-r from-orange-300 to-blue-300 rounded-xl p-6 shadow border border-blue-100">
              <div className="text-4xl font-bold text-blue-900 mb-2">99.9%</div>
              <div className="text-blue-700">Uptime</div>
            </div>
          </div>
        </div>
      </div>
      </div>
 
  );
};

export default Home; 