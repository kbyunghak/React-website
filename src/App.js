//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";
import ReactClass from "./pages/ReactClass";
// import MealCounter from "./pages/ReactClass";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | {" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | {" "}
        <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> | {" "}
        <Link to="/reactClass">React Class</Link>
        {/* <Link to="/mealcounter">Meal Counter</Link> */}
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/input" element={<Input />}/>
        <Route path="/input2" element={<Input2 />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/reactClass" element={<ReactClass />} />
        {/* <Route path="/mealcounter" element={<MealCounter />} /> */}
      </Routes>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
