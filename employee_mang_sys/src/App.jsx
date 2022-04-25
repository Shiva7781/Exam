import "./App.css";

import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Admin } from "./components/Admin";
import { EmployeeList } from "./components/EmployeeList";
import { Login } from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/about" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
