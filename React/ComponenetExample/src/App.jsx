import About from "./components/About";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";

let App = () => {
  return (
    <div>
      <h1>Welcome to component session</h1>
      <Home />
      <About />
      <Navbar />
      <Footer/>
    </div>
  );
};
export default App;
