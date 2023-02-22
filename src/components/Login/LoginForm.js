import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform password validation
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.{5,})/;
    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 5 characters long and include a number and a special character."
      );
    } else {
      setPasswordError("");
      // Perform login action
      if (username && password && useremail) {
        // Only navigate to the home page if both fields are not empty
        window.location.href = "/home";
      }
    }
  };

  return (
    <>
      <h3 style={{ textAlign: "center", color: "#645CBB" }}>Login Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={useremail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordError && (
            <Form.Text className="text-danger">{passwordError}</Form.Text>
          )}
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
