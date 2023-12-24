import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
