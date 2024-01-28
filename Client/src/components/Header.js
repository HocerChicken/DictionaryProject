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
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
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
                <NavLink to="/translate" className="nav-link mx-4 fw-bold ">
                  Tra từ
                </NavLink>
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
