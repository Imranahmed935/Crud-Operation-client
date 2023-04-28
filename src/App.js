import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./Component/AddUser";
import AllUsers from "./Component/AllUsers";
import CrudOperation from "./Component/CrudOperation";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CrudOperation />} />
        <Route path="allUsers" element={<AllUsers />} />
        <Route path="addUser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
