import React from "react";
import {
<<<<<<< HEAD
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <div className="footer-container">
            <MDBFooter className='text-center text-white' style={{ backgroundColor: 'rgb(61, 86, 110)' }}>
                <MDBContainer className='p-4 pb-0'>
                    <section className=''>
                        <p className='d-flex justify-content-center align-items-center'>
                            <span className='me-3'>Đăng ký miễn phí</span>
                            <MDBBtn type='button' outline color="light" rounded href='/'>
                                Đăng ký !
                            </MDBBtn>
                        </p>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className='text-white' href='/'>
                        YooDict.vn
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}
=======
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  const footerStyle = {
    color: "white",
    backgroundColor: "#000",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <MDBFooter
      style={footerStyle}
      className="text-center text-lg-start text-muted "
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Hoc Luc Group
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright
      </div>
    </MDBFooter>
  );
}
>>>>>>> a89f4a4f35d6aceb109c677e56c3d0bbf58fa2cd
