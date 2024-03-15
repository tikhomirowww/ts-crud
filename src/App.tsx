import React, { useState } from "react";
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
