// jsx -> js or react contain html

import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";

// any function which return jsx is called component
let Home = () => {
  return (
    <div className="home">
      <Navbar />

      <main>
       <Card/>
       <Card/>
       <Card/>
      </main>
 
    </div>
  );
};
export default Home;
