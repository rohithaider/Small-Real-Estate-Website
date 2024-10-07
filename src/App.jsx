import Clients from "./components/Clients";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Innovation from "./components/Innovation";
import Navbar from "./components/Navbar";
import Property from "./components/Property";




export default function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Property/>
    <Innovation/>
    <CTA/>
    <FAQ/>
    <Clients/>
    <Contact/>
    <Footer/>
    </>
  )
}