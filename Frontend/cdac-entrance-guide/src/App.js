import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About">
          {About}
        </Route>
      </BrowserRouter>
      <Footer></Footer> */}
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
