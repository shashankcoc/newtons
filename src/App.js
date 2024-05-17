import React from "react";
import "./App.css";
import Speech from "./components/speechToText/Speech.jsx";
import Detection from "./components/objectDetection/Detection.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Weather from "../src/components/weather/Weather.jsx";
import News from "./components/News/News.jsx";
import Contact from "./components/contact/contact.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="speech" element={<Speech />} />
          <Route path="detection" element={<Detection />} />
          <Route path="weather" element={<Weather />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
