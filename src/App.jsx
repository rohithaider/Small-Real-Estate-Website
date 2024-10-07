import CTA from "./components/CTA";
import Features from "./components/Features";
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
    </>
  )
}