import React from 'react';
import {
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