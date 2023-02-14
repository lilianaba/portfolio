import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import importPDF from '../Assets/pdf/Resume.pdf'
import { useState } from 'react';

const Resume = () => {
 const [showPDF, setShowPDF ] = useState (true);
 const handleClick = ()=>{
    setShowPDF(!showPDF);
 }
 const skills = [
    {
      id: "1",
      name: "HTML",
      icon: "fas fa-laptop-code",
    },
     {
      id: "2",
      name: "CSS",
      icon: "far fa-file-code",
    },
    {
      id: "3",
      name: "JavaScript",
      icon: "fab fa-js",
    },
    {
      id: "4",
      name: "API",
      icon: "fas fa-cog",
    },
    // {
    //   id: "5",
    //   name: "3rd Party API",
    //   icon: "fas fa-barcode",
    // },
    {
      id: "6",
      name: "Mysql",
      icon: "fas fa-database",
    },
    {
      id: "7",
      name: "Node.js",
      icon: "fab fa-node-js",
    },
     {
      id: "8",
      name: "NoSQL",
      icon: "fas fa-database",
    },
    {
      id:"15",
      name:"PWA",
      icon:"fas fa-download",
    
    },
    {
      id: "10",
      name: "React",
      icon: "fab fa-react",
    },
    {
      id: "11",
      name: "MongoDB",
      icon: "far fa-folder-open",
    },
    {
      id: "12",
      name:"GitHub",
      icon:"fab fa-github",
    },
    {
      id:"13",
      name:"Branches",
      icon:"fas fa-project-diagram",

    },

    {
      id:"14",
      name:"Express",
      icon:"fas fa-shipping-fast",
    
    },
    {
      id: "9",
      name: "Progressive",
      icon: "fas fa-spinner",
    },

    {
      id:"15",
      name:"Debugging",
      icon:"fa-solid fa-bug-slash",
    
    },
    {
      id:"16",
      name:"Heroku",
      icon:"fas fa-heading" //-slash",
    
    }, 
    {
      id:"17",
      name:"Responsive",
      icon:"fas fa-tablet-alt",
    
    },
    

   

 ]
    

    return (
    // <div>
    <Container>  
        <h1 className='pinky pad3 fw-bold'>Resume</h1>
        <h3 className='pinky'>
          Print or download my{' '}
          <a  className ="pinky fst-italic" href="#resumePDF" onClick={handleClick}>
            resume
          </a>
        </h3>
  
        {showPDF ? (
        <Row className='skillList' md="auto"> 
        {/* //md={3} sm={2} lg={5}> */}
            {skills.map((skill) => (
        <Col className='skill'>
          <div className='d-flex  pinky'> <i className= {`${skill.icon} px-2`}  ></i> <p> {skill.name}</p></div>
        </Col>))}
      </Row>):(
        <div className='w-100'> 
        <object width="100%" height="1000" data= {importPDF} type="application/pdf"/>
        </div>
      )}
        
    </Container> 
    // </div>
    );
}

export default Resume;