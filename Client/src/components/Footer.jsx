import React from "react";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  const footerStyle = {
    backgroundColor: "#fff",
    fontFamily: "Sans-Serif",
    marginTop: "32px",
    color: "#212529",
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
            <MDBCol md="4" lg="4" xl="4" className="ps-5 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Hoc Luc Group
              </h6>
              <p>Công ty TNHH 2 thành viên</p>
            </MDBCol>

            <MDBCol md="5" lg="5" xl="5" className="ps-5 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon fas className="me-3" icon="language" />
                Công cụ dịch thuật
              </h6>
              <p>
                <Link to="/translate" style={{ textDecoration: "none", fontWeight: "700" }}>Công cụ dịch Việt Việt</Link>
              </p>
              <p>
                <Link to="/translate2" style={{ textDecoration: "none", fontWeight: "700" }}>Công cụ dịch Việt Nôm</Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="ps-4 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tan Phong, Quan 7, TP.HCM
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tanlucdev@gmail.com
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
    </MDBFooter >
  );
}
