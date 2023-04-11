import "../src/dist/styles.css"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Models from "./Pages/Models";
import Team from "./Pages/Team";
import TestimonialsPage from "./Pages/TestimonialsPage";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/models" element={<Models/>} />
        <Route path="/testimonials" element={<TestimonialsPage/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
