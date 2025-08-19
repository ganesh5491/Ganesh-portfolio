import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import Project from "./component/Project";
import Skills from "./component/Skills";
import About from "./component/About";
import Contact from "./component/Contact";
import ShopSphere from "./component/ShopSphere";
import OnlineLearning from "./component/OnlineLearning"
import NewsSentimentAnalysis from "./component/NewsSentimentAnalysis";
import Services from "./component/Services";
import KnightBite from "./component/KnightBite";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Router>
        <ParallaxProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/OnlineLearning" element={<OnlineLearning />} />
            <Route path="/ShopSphere" element={<ShopSphere />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/KnightBite" element={<KnightBite />} />

            <Route
              path="/NewsSentimentAnalysis"
              element={<NewsSentimentAnalysis />}
            />
          </Routes>

          {/* <Footer /> */}
          {/* <ToastContainer autoClose={2000} /> */}
        </ParallaxProvider>
      </Router>
    </>
  );
}

export default App;
