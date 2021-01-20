import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from '../../elements/Image';
import LogoSvg from '../../../assets/images/logo.svg';

const FooterX = () => {
  return (
    <MDBFooter color="secondary" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <Image
              src={LogoSvg}
              alt="Open"
              width={55}
              height={55} />
            <h5 className="title">JIT Canteen Application</h5>
            <p>
              CMA is designed for the activities of the canteen & to maintain other details.
            </p>
          </MDBCol>
          
          <MDBCol md="6">
            <h5 className="title">CMA</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">JIT</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">GitHub-Landing</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">GitHub-Admin</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <h6>
            Made with <i class="fas fa-heart red-text mx-1" /> by DAN
          </h6>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterX;
