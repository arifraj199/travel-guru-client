import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="mb-5">
      <Form
        style={{ width: "500px", margin: "0 auto" }}
        className=" mt-5 border border-2 p-5 "
      >
        <h4 className="mb-4">Login</h4>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="warning" className="w-100 fw-semibold" type="submit">
          Login
        </Button>
        <div className="text-center mt-2">
          <small className="">
            Don't Have an Account?{" "}
            <Link className="text-warning" to="/register">
              Create New
            </Link>
          </small>
        </div>
      </Form>
      <div className="d-flex align-items-center mt-3 justify-content-center">
        <hr style={{ width: "150px" }} />
        <p className="fw-semibold mt-2 mx-1">Or</p>
        <hr style={{ width: "150px" }} />
      </div>
      <div className="text-center ">
        <Button
          variant="outline-warning"
          className="text-dark fw-semibold rounded-pill"
        >
          <FaGoogle></FaGoogle>
          <span className="ms-4">Continue With Google</span>
        </Button>{" "}
        <Button
          variant="outline-warning"
          className="text-dark fw-semibold rounded-pill"
        >
          <FaGithub></FaGithub>
          <span className="ms-4">Continue With Github</span>
        </Button>{" "}
      </div>
    </div>
  );
};

export default Login;
