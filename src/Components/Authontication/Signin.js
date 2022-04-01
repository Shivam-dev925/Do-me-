import React, { useState } from "react";
import "./Signin.css";
import { Form } from "react-bootstrap";
import { Section } from "../../Styles/Section";
import { Button } from "../../Styles/Button";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../Context/AuthContext";
import { Alert } from "react-bootstrap";

function Signin() {
  const {
    user,
    GoogleSignIn,
    SignIn,
    error,
    setError,
    showError,
    setShowError,
  } = UseAuth();

  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const HandleSignin = async (e) => {
    console.log("sign in");
    e.preventDefault();

    try {
      await SignIn(Email, Password);
      navigate("/");
      console.log(user);
    } catch (error) {
      setError(error.message);
      setShowError(true);
    }
  };

  const HandleGoogleSignin = async (e) => {
    setError("");

    e.preventDefault();

    try {
      await GoogleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Section
      minHeight="100vh"
      className="container-fluid signin__wrapper border  "
    >
      <div className="row">
        {showError && (
          <Alert
            dismissible
            onClose={() => setShowError(false)}
            variant="danger"
          >
            {error}
          </Alert>
        )}
        <div className=" col-sm-12 col-md-6  signin__left">
          <Link style={{ color: "black" }} to="/">
            <h2 className="Brand__name ">Do me!</h2>
          </Link>
          <h1>Sign in to Tidy </h1>
          <Form className="mt-2">
            <Form.Label className="mt-2" htmlFor="Email">
              Email
            </Form.Label>
            <Form.Control
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="Email"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Label className="mt-2" htmlFor="Password">
              Password
            </Form.Label>
            <Form.Control
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="Password"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Entered password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>{" "}
            <br />
            <Button
              onClick={HandleSignin}
              className="mt-5"
              pd="1rem 2rem"
              margin="1rem auto"
              width="100%"
              color="#ffffff"
              bg="#7393B3"
              bgHover="#145DA0"
            >
              sign in
            </Button>
            <Button
              onClick={HandleGoogleSignin}
              className="mt-5"
              pd="1rem 2rem"
              margin="-30px 0px 0px 0px "
              width="100%"
              color="#ffffff"
              bg="rgb(227,38,54)"
              bgHover="rgb(255,0,56)"
            >
              Login with Google{" "}
            </Button>
          </Form>

          <Link to="/Sign-in/Sign-Up">
            <p>Click here to sign-up !</p>
          </Link>

          <Link to="/Sign-in/forgot-password">
            <p>Forgot password ??</p>
          </Link>
        </div>
        <div className=" col-sm-12 col-md-6 signin__right">
          <img src="images/shivam.jpg" alt="" />
          <div>
            <h1 className="text-white">Shivam choudhary</h1>

            <blockquote className="blockquote text-white">
              <p>
                “Learning HTML and CSS is a lot more challenging than it used to
                be. Responsive web design adds more layers of complexity to
                design and develop websites.”
              </p>

              <footer className=" blockquote-footer text-white">
                written by --Self
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Signin;
