import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

// useState аналог handleChange и handleSubmit

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.warn("Тип поля name - ${name} не обрабатывается");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.registerUser({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// const mapDispatchToProps = {
//   myRegistr: authOperations.registerUser,
// };
// // або
// // const mapDispatchToProps = (dispatch) => ({
// //  myProps: (data) => dispatch(registerUser(data)),
// // });

// export default connect(null, mapDispatchToProps)(RegistrationForm);
