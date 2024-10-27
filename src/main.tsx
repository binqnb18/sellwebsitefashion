import React from "react";
import ReactDOM from "react-dom/client"; // Đảm bảo import từ "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/client/HomePage/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>  
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
