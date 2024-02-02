import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoApp from "../assets/images/logo3.png";
import { useLocation, NavLink } from "react-router-dom";
const Header = (props) => {
  const location = useLocation();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div>
        <Navbar
          expand="lg"
          className="header-container bg-body-tertiary bg-primary bg-gradient"
        >
          <Container>
            <Navbar.Brand href="/" className="me-4">
              <img
                src={logoApp}
                width="92"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link mx-4 fw-bold ">
                  Trang chủ
                </NavLink>
                {/* <NavLink to="/translate" className="nav-link mx-4 fw-bold">
                  Tra từ
                </NavLink> */}
                <NavDropdown title="Tra từ" id="basic-nav-dropdown" className="mx-4 fw-bold">
                  <NavLink to="/translate" className="dropdown-item mt-1 blue ">
                    Tra
                  </NavLink>
                  <NavLink to="/translate2" className="dropdown-item">
                    Từ
                  </NavLink>
                </NavDropdown>
                <NavLink to="/mydict" className="nav-link mx-4 fw-bold">
                  Từ của bạn
                </NavLink>
                <NavLink to="/contact" className="nav-link mx-4 fw-bold">
                  Liên hệ
                </NavLink>
                <NavLink to="/users" className="nav-link mx-4 fw-bold">
                  Manage Users
                </NavLink>
              </Nav>
              <Nav className="mx-4 fs-4">
                {" "}
                <i class="fa-solid fa-moon"></i>
              </Nav>
              <Nav>
                <NavDropdown
                  className="mx-4 fs-5"
                  title={<i class="fa-solid fa-user"></i>}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="login-button" href="/login">
                    Đăng nhập
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/register">Đăng ký</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
