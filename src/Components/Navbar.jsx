import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="font-bold  text-center ">Organization</div>
      <div className="space-x-4">
        {/* <Link to="/" className="hover:underline">Home</Link> */}
        {/* <Link to="/" className="hover:underline">Register</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/curdorg" className="hover:underline">CurdOrg</Link> */}
      </div>
    </nav>
  );
};

export default Navbar; 