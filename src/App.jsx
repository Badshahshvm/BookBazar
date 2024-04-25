import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import Course from "./Components/Course";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Courses from "./Components/Courses/Courses";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
