import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';

function App() {
  const [currentPage,setCurrentPage]=useState('About')
  const renderPage = ()=>{
    switch (currentPage){
      case 'About':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      case 'Resume':
        return <Resume/>;
      default:
        return <About/>;

    }
  }

  const handlePageChange = (page) =>  setCurrentPage(page);
 
 
  useEffect(() => {
    
    const handleResize = () => {
      const screenWidth  = window.innerWidth
      
      if(screenWidth < 520 ) {
        document.title = "LB";
        console.log(screenWidth)
      }else{document.title = "Liliana Bazand Portfolio"}
   
      
      
  }
    window.addEventListener("resize", handleResize)
  })



  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange ={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );


}

export default App;
