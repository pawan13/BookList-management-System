import { signOut } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../../pages/user/userSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const { admin } = useSelector((state) => state.adminInfo);

  const handleOnLogout = () => {
    signOut(auth).then(() => {
      //reste admin state
      dispatch(setAdmin({}));
    });
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            {admin?.uid ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link" to="#" onClick={handleOnLogout}>
                  Sign Out
                </Link>
              </>
            ) : (
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            )}

            {/* <Link className="nav-link" to="/signup">
              Sign Up
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
