import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { UserBlood } from "../types";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const MainRoutes = ({ bloodGroup, bloodType }: UserBlood) => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Home bloodGroup={bloodGroup} bloodType={bloodType} />}
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
