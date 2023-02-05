import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser, googleLogin, gitHubLogin } = useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    if (password !== confirmPassword) {
      toast.error("Password did not match");
      return;
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          toast.success("User Create Successfully");
          form.reset();
        })
        .catch((error) => toast.error(error.message));
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Registration Successful");
      })
      .catch((error) => toast.error(error.message));
  };
  const handleGithubLogin = () => {
    gitHubLogin()
      .then(() => {
        toast.success("Registration Successful");
      })
      .catch((error) => toast.error(error.message));
  };

  const handleTerms = (event) => {
    const acceptTerms = event.target.checked;
    setAccepted(acceptTerms);
  };
  return (
    <div className="mb-5">
      <Form
        onSubmit={handleForm}
        style={{ width: "500px", margin: "0 auto" }}
        className=" mt-5 border border-2 p-5 "
      >
        <h4 className="mb-4">Create An Account</h4>
        <Form.Group className="mb-4" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="name"
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            name="email"
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicConfirm">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            name="confirm"
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Form.Group
          onClick={handleTerms}
          className="mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            name="checked"
            type="checkbox"
            label="Accept Terms & Conditions"
          />
        </Form.Group>
        <Button
          variant="warning"
          className="w-100 fw-semibold"
          type="submit"
          disabled={!accepted}
        >
          Create An Account
        </Button>
        <div className="text-center mt-2">
          <small className="">
            Already Have an Account?{" "}
            <Link className="text-warning" to="/login">
              Login
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
          onClick={handleGoogleLogin}
          variant="outline-warning"
          className="text-dark fw-semibold rounded-pill"
        >
          <FaGoogle></FaGoogle>
          <span className="ms-4">Continue With Google</span>
        </Button>{" "}
        <Button
          onClick={handleGithubLogin}
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

export default Register;
