import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import Header from "./components/Header";
import App from "./App";
import AddSchoolForm from './pages/AddSchoolForm'
import SchoolList from "./pages/SchoolList";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-school" element={<AddSchoolForm />} />
        <Route path="/list-schools" element={<SchoolList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
