import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Home from './Components/Home';
import LeftNavbar from './Components/LeftNavbar';
import Browse from './Components/Browse';
import Profile from './Components/Profile';
import PostItem from './Components/PostItem';

export const DataContext = createContext("");

export default function App() {
  return (
    <DataContext.Provider value={{}}>
      <BrowserRouter>
        <div className="flex">
          <LeftNavbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Browse" element={<Browse />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/PostItem" element={<PostItem />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

