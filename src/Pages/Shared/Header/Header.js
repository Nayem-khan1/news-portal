import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutHandler = () => {
    logOut()
      .then(() => {
        console.log("success");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {user?.uid ? (
                  <>
                    <span>{user.displayName}</span>{" "}
                    <Button variant="light" onClick={logOutHandler}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link to="/login">Login</Link>{" "}
                    <Link to="/register">Sign Up</Link>
                  </>
                )}
              </>
              <Link to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px", width: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt></FaUserAlt>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
