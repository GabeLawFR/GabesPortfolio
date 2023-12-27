import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default App;
