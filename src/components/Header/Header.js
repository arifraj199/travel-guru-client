import React, { useContext } from "react";
import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/UserContexts/UserContexts";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("log out successful");
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Link to="/">
          <Image style={{ height: "60px" }} src={logo}></Image>
        </Link>
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search Destination..."
            className="ms-5"
            aria-label="Search"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Link
              className="text-decoration-none ms-4 text-black fw-semibold"
              to="/news"
            >
              News
            </Link>
            <Link
              className="text-decoration-none ms-4 text-black fw-semibold"
              to="/destination"
            >
              Destination
            </Link>
            <Link
              className="text-decoration-none ms-4 text-black fw-semibold"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-decoration-none ms-4 text-black fw-semibold"
              to="/contact"
            >
              Contact
            </Link>

            {user && user?.uid ? (
              <>
                <span className="ms-4 fw-bold">
                  {user?.displayName ? (
                    user.displayName
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
                </span>
                <Link
                  onClick={handleLogOut}
                  className="text-decoration-none ms-4 text-black fw-semibold"
                  to="/login"
                >
                  <Button variant="danger">SignOut</Button>
                </Link>
              </>
            ) : (
              <Link
                className="text-decoration-none ms-4 text-black fw-semibold"
                to="/login"
              >
                <Button variant="warning">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
