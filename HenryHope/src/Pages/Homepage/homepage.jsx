import Navbar from "../../Components/Navbar-Footer/Navbar/navbar";
import Hero from "../../Components/Homepage/Hero/hero";
import AboutUsHome from "../../Components/Homepage/About Us/about-us-home";
import WhyChooseUs from "../../Components/Homepage/Why Choose Us/whychooseus";
import Footer from "../../Components/Navbar-Footer/Footer/footer";


function Homepage() {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUsHome />
    <WhyChooseUs />
    <Footer />
    </>
  )
}

export default Homepage;