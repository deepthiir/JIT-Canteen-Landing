import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardUp,
  MDBAvatar,
  MDBCardBody,
} from "mdbreact";
import "./ProjectTeam.css";

const ProjectTeam = () => {
  return (
    <MDBContainer>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Project Team</h2>
        <p className="dark-grey-text w-responsive mx-auto mb-5">
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp color="info" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQEEdTpFogW3iw/profile-displayphoto-shrink_800_800/0/1603987884492?e=1616025600&v=beta&t=BOAU65jG0OXsIcpvYVIqVePuVg0JeI1cFbOETwmrHIo"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4 adi">Adithya Krishna</h4>
                <hr />
                {/* <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                </p> */}
                <ul class="social-icons-links">
                <li><a href="https://instagram.com/adiiikris" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon-color1" /></a></li>
                
                <li><a href="https://www.linkedin.com/in/adiiikris/" target ="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon-color2" /></a></li>
                
                <li><a href="https://instagram.com/adiiikris" target ="_blank" rel="noopener noreferrer"><i className="fab fa-github icon-color3" /></a></li>
                </ul>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp gradient="blue" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://avatars0.githubusercontent.com/u/57286987?s=400&u=96026da6da2c61598fd98e328840e2c773373f1d&v=4"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4 nivi">Niveditha P</h4>
                <hr />
                {/* <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                </p> */}
                 <ul class="social-icons-links">
               <li> <a href="https://instagram.com/nivedaparam" target ="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon-color1" /></a></li>
                
               <li><a href="https://www.linkedin.com/in/nivedaparam/" target ="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon-color2" /></a></li>
                
               <li><a href="https://instagram.com/nivedaparam" target ="_blank" rel="noopener noreferrer"><i className="fab fa-github icon-color3" /></a></li>
                </ul>

                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <MDBCardUp className="indigo" />
              <MDBAvatar className="mx-auto white">
                <img
                  src="https://avatars3.githubusercontent.com/u/57286973?s=400&u=2348818408b67d962be0879638ebc2f9f21d59e9&v=4"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4 deep">Deepthi R</h4>
                <hr />
                {/* <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                </p> */}
                <ul class="social-icons-links">
                <li><a href="https://www.instagram.com/deepthi_164/" target ="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon-color1" /></a></li>
                
                <li><a href="https://www.linkedin.com/in/deepthiravichandra/" target ="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon-color2" /></a></li>
                
                <li><a href="https://github.com/deepthiir" target ="_blank" rel="noopener noreferrer"><i className="fab fa-github icon-color3" /></a></li>

                </ul>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};

export default ProjectTeam;
