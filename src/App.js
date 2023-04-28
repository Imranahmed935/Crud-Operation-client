import "./App.css";
import AddUser from "./Component/AddUser";
import AllUsers from "./Component/AllUsers";
import CrudOperation from "./Component/CrudOperation";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CrudOperation></CrudOperation>
      <AllUsers></AllUsers>
      <AddUser></AddUser>
    </div>
  );
}

export default App;
