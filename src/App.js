import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import PageNotFound from "./pages/404";
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
