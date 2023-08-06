import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './index.css';
import App from './App';
import Create from './components/Create'
import Table from './components/Table'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="create" element={<Create />} />
        <Route path="crud" element={<Table />} />
      </Routes>
    </Router>
  </React.StrictMode>
);