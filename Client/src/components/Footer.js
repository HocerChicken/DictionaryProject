import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <MDBFooter className='bg-primary bg-gradient text-center text-white'>
                    <MDBContainer className='p-4 pb-0'>
                        <section className='mb-4'>
                            <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>
                            <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
                                <MDBIcon icon='phone' />
                            </MDBBtn>
                        </section>
                    </MDBContainer>

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Copyright: {""}
                        <a className='text-white' href='/'>
                            YooDict.vn
                        </a>
                    </div>
                </MDBFooter>
            </div>
        </>
    );
}