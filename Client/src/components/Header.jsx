import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const { user, dispatch } = useContext(Context);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div>
        <Navbar expand="lg" className="header-container ">
          <Container fluid>
            <Navbar.Brand href="#home" className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-header"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link mx-4 fw-bold">
                  Trang chủ
                </NavLink>
                {user && <NavLink to="/mydict" className="nav-link mx-4 fw-bold">
                  Từ của bạn
                </NavLink>}

                <NavDropdown
                  title="Tra từ"
                  id="basic-nav-dropdown"
                  className={`mx-4 fw-bold ${dropdownOpen ? "show" : ""}`}
                  show={dropdownOpen}
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={handleDropdownClose}
                >
                  <NavLink
                    to="/translate"
                    className="dropdown-item mt-1 blue"
                    activeClassName="visited"
                    onClick={handleDropdownClose}
                  >
                    Việt - Việt
                  </NavLink>
                  <NavLink
                    to="/translate2"
                    className="dropdown-item"
                    activeClassName="visited"
                    onClick={handleDropdownClose}
                  >
                    Việt - Nôm
                  </NavLink>
                </NavDropdown>
                <NavLink to="/contact" className="nav-link mx-4 fw-bold">
                  Liên hệ
                </NavLink>
              </Nav>
              {/* <li className="topListItem" onClick={handleLogout}>
                {user && "LOGOUT"}
              </li> */}

              <Nav>
                <NavDropdown
                  className="mx-4 fs-5"
                  title={<i class="fa-solid fa-user"></i>}
                  drop="start"
                  id="basic-nav-dropdown"
                >
                  {user ? (
                    <NavDropdown.Item
                      className="topListItem"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </NavDropdown.Item>
                  ) : (
                    <>
                      <NavDropdown.Item className="login-button" href="/login">
                        Đăng nhập
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/register">
                        Đăng ký
                      </NavDropdown.Item>
                    </>
                  )}
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
