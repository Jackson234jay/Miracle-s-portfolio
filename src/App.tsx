import About from "./components/About";
import { Contact } from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="h-screen  w-full">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
