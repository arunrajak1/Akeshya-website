'use client'
import About from "./components/About";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurProcess from "./components/OurProcess";
import Service from "./components/Service";
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Aos from 'aos';
import { useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  useEffect(()=>{
    Aos.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-out-cubic', // Easing function for the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  },[])

  // https://youtu.be/FjBJJepT6Ts?si=Kfowd8JEtan2Ifyp
  return (
    <main  >
     <div className="">
     <Header/>
      <Hero/>
      <About/>
      <Service/>
      <OurProcess/>
      <Feature/>
      <Contact/>
      <Footer/>
     </div>
    </main>
  );
}
