import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home1 from './components/Home1';
import Navbar from './components/Navbar';
import Agiculture from './components/Agiculture';
import AgriculturePage from './components/Agricul-1';
import Card from './components/Card';
import ProductCards from './components/Whatyouare';
import AgriList from './components/AgriList';
import Explore from './components/Explore';
import Testimonial from './components/Testimonial';
import FarmBenefits from './components/Farm';
import BlogCard from './components/Blog';
import Footer from './components/Footer';
// import About from './components/About';



function App() {
  return (
    <>
     <Header />  {/* Assuming Header component is defined elsewhere */}
      <Routes>
        <Route path="/home1" element={<Home1 />} />
      </Routes>
      <Navbar/>

      <Agiculture/>
      <Card/>
     
{/* n */}


      <AgriculturePage/>
    {/* <Whatyouare/> */}
    <ProductCards/>
    <AgriList/>
    <Explore/>
    
    < Testimonial/>
    <FarmBenefits/>
    <BlogCard/>
    <Footer/>
    
    </>
  );
}
  // <AgricultureIntro/>
export default App;
