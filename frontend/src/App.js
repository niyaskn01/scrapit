import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./scrap/pages/Home";
import About from "./scrap/pages/About";
import Contact from "./scrap/pages/Contact";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
