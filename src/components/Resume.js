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
      icon: "fa fa-angle-double-right",
    },
     {
      id: "2",
      name: "CSS",
      icon: " fa fa-angle-double-right",
    },
    {
      id: "3",
      name: "JavaScript",
      icon: "fa fa-angle-double-right",
    },
    {
      id: "4",
      name: "API",
      icon: "fa fa-angle-double-right",
    },
    {
      id: "5",
      name: "3rd Party API",
      icon: " fa fa-angle-double-right",
    },
    {
      id: "6",
      name: "Mysql Database",
      icon: "fa fa-angle-double-right",
    },
    {
      id: "7",
      name: "Node.js",
      icon: "fa fa-angle-double-right",
    },
     {
      id: "8",
      name: "NoSQL Database",
      icon: " fa fa-angle-double-right",
    },
    {
      id: "9",
      name: "Progressive",
      icon: "fa fa-angle-double-right",
    },
    {
      id: "10",
      name: "React",
      icon: "fa fa-angle-double-right",
    },
    {
      id: "11",
      name: "MERN",
      icon: " fa fa-angle-double-right",
    },
    {
      id: "12",
      name:"GitHub",
      icon:"fa-brands fa-github",
    },
    {
      id:"13",
      name:"Branches",
      icon:"fa-sharp fa-solid fa-merge",

    }
    
 ]
    

    return (
    // <div>
    <Container fluid>  
        <h3 className='pinky pad3'>Resume</h3>
        <h6 className='pinky'>
          Print or download my{' '}
          <a  className ="pinky" href="#resumePDF" onClick={handleClick}>
            resume
          </a>
        </h6>
  
        {showPDF ? (
        <Row className='skillList' md={3} sm={2} lg={5}>
            {skills.map((skill) => (
        <Col>
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