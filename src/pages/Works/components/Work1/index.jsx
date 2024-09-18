import Navbar from "../../../../Components/Navbar/Navbar.jsx";
import Footer from "../../../../Components/Footer/Footer.jsx";
import W1Hero from "../../../../Components/W1Hero/W1Hero.jsx";
import W1Overview from "../../../../Components/W1Overview/W1Overview.jsx";
import W1Problem from "../../../../Components/W1Problem/W1Problem.jsx";

const Work1 = () => {
  return (
    <div>
      <Navbar/>
      <W1Hero/>
      <W1Overview/>
        <W1Problem />
      <Footer/>
    </div>
  )

}

export default Work1