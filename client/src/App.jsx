import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Editor from "./components/Editor";
import Editor1 from "./components/Editor copy";
import Editor2 from "./components/Editor copy 2";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Write" element={<Editor />}/>
          <Route path="/Write1" element={<Editor1 />}/>
          <Route path="/Write2" element={<Editor2 />}/>

      </Routes>
    </BrowserRouter>
  );
}