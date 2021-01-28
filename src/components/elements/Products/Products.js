import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn, MDBContainer } from
    "mdbreact";

const Products = () => {
    return (
        <div>
            
                <MDBCard className="m-4" style={{ width: "22rem" }} cascade ecommerce>
                    <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
                        waves />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle tag="h5">
                            Shoes
                        </MDBCardTitle>
                        <MDBCardTitle>
                            <a href="#!"><strong>Product name</strong></a>
                        </MDBCardTitle>

                        <MDBCardText>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                            eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
                    </MDBCardText>
                        <MDBCardFooter>
                            <span className="float-left">49$</span>
                            <span className="float-right">
                                <MDBTooltip placement="top">
                                    <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                        <MDBIcon icon="shopping-cart" />
                                    </MDBBtn>
                                    <div>Add to Cart</div>
                                </MDBTooltip>
                                {/* <MDBTooltip placement="top">
                                <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                    <MDBIcon icon="share-alt" />
                                </MDBBtn>
                                <div>Share</div>
                            </MDBTooltip> */}

                            </span>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="m-4" style={{ width: "22rem" }} cascade ecommerce>
                    <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
                        waves />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle tag="h5">
                            Shoes
        </MDBCardTitle>
                        <MDBCardTitle>
                            <a href="#!"><strong>Product name</strong></a>
                        </MDBCardTitle>

                        <MDBCardText>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                            eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
                        <MDBCardFooter>
                            <span className="float-left">49$</span>
                            <span className="float-right">
                                <MDBTooltip placement="top">
                                    <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                        <MDBIcon icon="shopping-cart" />
                                    </MDBBtn>
                                    <div>Add to Cart</div>
                                </MDBTooltip>
                                {/* <MDBTooltip placement="top">
                                <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                    <MDBIcon icon="share-alt" />
                                </MDBBtn>
                                <div>Share</div>
                            </MDBTooltip> */}

                            </span>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="m-4" style={{ width: "22rem" }} cascade ecommerce>
                    <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg"
                        waves />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle tag="h5">
                            Shoes
        </MDBCardTitle>
                        <MDBCardTitle>
                            <a href="#!"><strong>Product name</strong></a>
                        </MDBCardTitle>

                        <MDBCardText>
                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                            eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
        </MDBCardText>
                        <MDBCardFooter>
                            <span className="float-left">49$</span>
                            <span className="float-right">
                                <MDBTooltip placement="top">
                                    <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                        <MDBIcon icon="shopping-cart" />
                                    </MDBBtn>
                                    <div>Add to Cart</div>
                                </MDBTooltip>
                                {/* <MDBTooltip placement="top">
                                <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                    <MDBIcon icon="share-alt" />
                                </MDBBtn>
                                <div>Share</div>
                            </MDBTooltip> */}

                            </span>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </div>     
        
    );
}

export default Products;