import Carousel from 'react-bootstrap/Carousel';

const Project = ({project}) => {
    const {name,description,deployedLink,githubLink,image} = project ;


    return (<div> </div>)}
        // <Carousel fade>
        // <Carousel.Item >
    //     <div>
    //       <img
    //         className="d-block w-80"
    //         src={require(`../Assets/images/${image}.jpg`)}
    //         alt={name}
    //       />
    //       <Carousel.Caption>
    //         <h3> <a href={deployedLink}>{name}</a>{' '}
    //       <a href={githubLink}>
    //         <i className="fab fa-github"></i>
    //       </a>
    //       </h3>
    //         <p>{description}</p>
    //       </Carousel.Caption>
    //  {/* </Carousel.Item> */}
    //     </div>
    //   </Carousel>


//     <div className="project" key={name}>
//     <img
//       src={require(`../Assets/images/${image}.jpg`)}
//       alt={name}
//       className="project-bg"
//     />
//     <div className="project-text">
//       <h3>
//         <a href={deployedLink}>{name}</a>{' '}
//         <a href={githubLink}>
//           <i className="fab fa-github"></i>
//         </a>
//       </h3>
//       <p>{description}</p>
//     </div>
//   </div>


export default Project;

