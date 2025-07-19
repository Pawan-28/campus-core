import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home.jsx';
import Register from '../Pages/Register.jsx';
import Login from '../Pages/Login.jsx';
import CurdOrg from '../Pages/CurdOrg.jsx';
import SuperAdminDashboard from '../Pages/SuperAdminDashboard.jsx';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="curdorg" element={<CurdOrg />} />
            <Route path="superadmin" element={<SuperAdminDashboard/>} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
