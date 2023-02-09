// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row'
// import { Formik } from 'formik';

// // const { Formik } =formik;

// const schema = yup.object().shape({
//     name: yup.string().required(),
//     email: yup.string().required(),
//     message: yup.string().required(),
//   });

// const Contact =() => {
//     return (
//     //     <div className='form-container'>
//     //     <Form>
//     //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//     //       <Form.Label>Name</Form.Label>
//     //       <Form.Control type="email" placeholder="John Smith" />
//     //     </Form.Group>
//     //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
//     //       <Form.Label>Email address</Form.Label>
//     //       <Form.Control type="email" placeholder="name@example.com" />
//     //     </Form.Group>
//     //     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//     //       <Form.Label>Example textarea</Form.Label>
//     //       <Form.Control as="textarea" rows={3} />
//     //     </Form.Group>
//     //   </Form>

//     //   </div>

//     <div>
//         <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//     //   initialValues={{
//     //     name: 'Mark',
//     //     lastName: 'Otto',
//     //     username: '',

//     //   }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Form.Group
//               as={Col}
//               md="4"
//               controlId="validationFormik101"
//               className="position-relative"
//             >
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 // isValid={touched.name && !errors.firstName}
//               />
//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group
//               as={Col}
//               md="4"
//               controlId="validationFormik102"
//               className="position-relative"
//             >
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 // isValid={touched.lastName && !errors.lastName}
//               />

//               <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
//               <Form.Label>Message</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="message"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                 //   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid" tooltip>
//                   {errors.message}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Row>

//           <Button type="submit">Submit form</Button>
//         </Form>
//       )}
//     </Formik>
//     </div>
//         )
// }

// export default Contact;

import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// const styles = {
//   container: {
//     marginTop: "65px",
//     display: "flex",
//   },
//   left: {
//     border: "1px solid black",
//     overflow: "hidden",
//     textAlign: "center",
//     backgroundColor: "rgb(244, 242, 242)",
//   },
//   right: {
//     minWidth: "75%",
//     marginTop: "60px",
//     paddingRight: "50px",
//   },
// };
const Contact = () => {
  const [response, setResponse] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    setResponse(true);
  };
  return (
    <div>
      <Container fluid>
        <Row className="pad3">
          <Col >
            <div className="pinky">
              <h1>Contact Me</h1>
            </div>
          </Col>
          <Col xs={9}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="sm-12">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control required type="text" placeholder="Your name" />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Row>
              <Row className="sm-12">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your e-mail"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Your e-mail"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Row>
              <Row className="sm-12">
                <FloatingLabel controlId="floatingTextarea2" label="Please write your message here">
                  <Form.Control
                    as="textarea"
                    placeholder="Please write your message here"
                    required
                    style={{ height: "150px" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please leave a message.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Row>
              <Row className="pad3"> 
              <Button
                className="d-grid gap-2 btn-cus"
                type="submit"
                 size="lg"
              >
                Send me your message
              </Button>
              </Row>
            </Form>
            <div>
              {response && (
                <span>
                  Please note, this has not been connected to a backend. :)
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
