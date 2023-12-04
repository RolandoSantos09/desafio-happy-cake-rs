import "./App.css";
import Contact from "./assets/Components/Contact";
import Navigation from "./assets/Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
