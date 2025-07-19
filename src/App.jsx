import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Advertise /> */}
      <Outlet />
      {/* <Whatsapp/> */}
    </>
  );
}
