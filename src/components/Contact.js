import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateEmail } from "../utils/helper";

const Contact = () => {
  const [response, setResponse] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div>
      <Container>
        <Row className="pad3">
          <Col>
            <div className="pinky">
              <h1 className="fw-bold">Contact Me</h1>
            </div>
          </Col>
          <Col xs={9}>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="sm-12">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Name"
                  className="mb-3"
                >
                  <Form.Control
                    name="name"
                    onBlur={handleChange}
                    defaultValue={name}
                    required
                    type="text"
                    placeholder="Your name"
                  />
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
                    name="email"
                    onBlur={handleChange}
                    defaultValue={email}
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
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Please write your message here"
                >
                  <Form.Control
                    name="message"
                    onBlur={handleChange}
                    defaultValue={message}
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
            <div className="pin">
              {errorMessage && (
                <div>
                  <p className="pinky">{errorMessage}</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
