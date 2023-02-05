import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, passwordResetEmail, googleLogin, gitHubLogin } =
    useContext(AuthContext);
  const emailRef = useRef("");
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGithubLogin = () => {
    gitHubLogin()
      .then(() => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    console.log(email);
    passwordResetEmail(email)
      .then(() => {
        toast.success("Reset email send");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="mb-5">
      <Form
        onSubmit={handleForm}
        style={{ width: "500px", margin: "0 auto" }}
        className=" mt-5 border border-2 p-5 "
      >
        <h4 className="mb-4">Login</h4>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            name="email"
            ref={emailRef}
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Control
            className="border  border-bottom-5 border-top-0 border-start-0 border-end-0 border-dark rounded rounded-0 fw-semibold"
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div onClick={handlePasswordReset} className="mt-1 text-end">
          <small>
            <Link className="text-warning" to="">
              Forgot Password
            </Link>
          </small>
        </div>
        <Button
          variant="warning"
          className="w-100 fw-semibold mt-4"
          type="submit"
        >
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

export default Login;
