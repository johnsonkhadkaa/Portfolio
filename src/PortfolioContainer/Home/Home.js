import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Footershape from "../Footershape/Footershape";
// import About from "../About/About";
// import Contact from "../Contact/Contact";
import "./Home.css";
import Footer from "../Footer/Footer";
import { Router, Route , Routes} from "react-router-dom";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <section>
//         .... <p>Welcome to Johnson Khadka</p>
//         .....<h1>Home Page</h1>
//       </section>
//       <Footer />
//     </>
//   );
// };

const About = () => {
  return (
    <>
      <Navbar />
      <section>
        .... <p>Welcome to Johnson Khadka</p>
        .....<h1>About Page</h1>
      </section>
      {/* <Footer /> */}
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section>
        .... <p>Welcome to Johnson Khadka</p>
        .....<h1>Contact Page</h1>
      </section>
      {/* <Footer /> */}
    </>
  );
};

const home = () => {
  return (
    <Router>
      <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default home;

// const home = () => {
//   return (
//     <>
//       <div className="home-footer">
//         <div className="home-container">
//           <Navbar />
//           <Profile />
//           <Footershape />
//         </div>
//         <div className="body-section">
//           <About />
//           <Contact />
//         </div>

//         <div className="d-flex flex-column min-vh-100">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };

// export default home;
