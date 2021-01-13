import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip, MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

const Categories = () => {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
            Categories
      </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
               " One Cannot Think Well, Love Well, Sleep Well, If One Has Not Dined Well."
      </p>
            <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src="https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c291dGglMjBpbmRpYW4lMjBicmVha2Zhc3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="stripe dark">
                                <a href="#!">
                                    <p>
                                        Breakfast <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src="https://images.unsplash.com/photo-1552255278-580ab2ce246b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTc5fHxsdW5jaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="stripe dark">
                                <a href="#!">
                                    <p>
                                      Lunch <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src="https://images.unsplash.com/photo-1588101546613-0f5b02a473fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHNvdXRoJTIwaW5kaWFuJTIwbHVuY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="stripe dark">
                                <a href="#!">
                                    <p>
                                       Snacks <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                    <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                            <img
                                src="https://images.unsplash.com/photo-1583522478890-0a87db51ff02?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJldmVyYWdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="stripe dark">
                                <a href="#!">
                                    <p>
                                       Beverage <MDBIcon icon="angle-right" />
                                    </p>
                                </a>
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Categories;
