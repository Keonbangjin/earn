import React from "react";
import {
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SofaCard from "./components/SofaCard/SofaCard";
import AddSofa from "./components/AddSofa/AddSofa";
import "./App.css";

const App = () => {
  return (
    <div className="App flex flex-col justify-center items-center">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Sofa</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<SofaCard />} />
        <Route path="/add" element={<AddSofa />} />
      </Routes>
    </div>
  );
};

export default App;
