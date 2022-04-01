import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Section } from "../../Styles/Section";
import { Button } from "../../Styles/Button";
import "../Authontication/Signup.css";
import { UseAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function SignUP() {
  const { SignUp, error, setError, showError, setShowError } = UseAuth();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const HandleSignUP = async (e) => {
    e.preventDefault();
    setError("");
    if (
      Password.length === ConfirmPassword.length &&
      Password === ConfirmPassword
    ) {
      try {
        await SignUp(Email, Password);
        navigate("/Sign-in");
      } catch (err) {
        setError(err.message);
        setShowError(true);
      }
    } else {
      setShowError(true);
      setError("input passwords are not same ");
    }
  };

  return (
    <Section minHeight="100vh" className="container-fluid signup">
      {showError ? (
        <Alert
          dismissible
          onClose={() => setShowError(false)}
          variant="danger"
          style={{ color: "white", background: "rgb(227,38,54)" }}
        >
          {error}
        </Alert>
      ) : null}
      <div className="shadow">
        <h1>Sign Up</h1>
        <Form>
          <Form.Label className="label mt-3" htmlFor="Email">
            Email
          </Form.Label>
          <Form.Control
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            id="Email"
            type="email"
            placeholder="Enter email address "
          />
          <Form.Label className="label mt-3" htmlFor="password">
            Password
          </Form.Label>
          <Form.Control
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="input "
            id="password"
            type="password"
            placeholder="Enter  password "
          />
          <Form.Label className="label mt-3" htmlFor="password1">
            {" "}
            confirm Password
          </Form.Label>
          <Form.Control
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            id="password1"
            type="password"
            placeholder="Enter  password again"
          />
          <Button
            onClick={HandleSignUP}
            className="mt-5 "
            pd="1rem 2rem"
            margin="1rem auto"
            width="90%"
            color="#ffffff"
            bg="#7393B3"
            bgHover="#145DA0"
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </Section>
  );
}

export default SignUP;
