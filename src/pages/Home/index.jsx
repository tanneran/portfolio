import Navbar from "../../Components/Navbar/Navbar.jsx";
import Hero from "../../Components/Hero/Hero.jsx";
import About from "../../Components/About/About.jsx";
import Experience from "../../Components/Experience/Experience.jsx";
import MyWork from "../../Components/MyWork/MyWork.jsx";
import Contact from "../../Components/Contact/Contact.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import EnterPlaceholder from "../../Components/EnterPlaceholder/EnterPlaceholder.jsx";

const Home = () => {
  return <div>
    <EnterPlaceholder />
    <Navbar />
    <Hero />
    {/*<About />*/}
    <MyWork />    <Experience />

    <Contact />
    <Footer />
  </div>
}

export default Home