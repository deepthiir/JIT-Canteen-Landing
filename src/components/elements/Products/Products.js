import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn, MDBContainer, MDBNavLink } from
    "mdbreact";
    import {firestore, auth} from '../../../services/firebase'

const Products = () => {

    const [userCart, setUserCart]= useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async() => {
        const user = await firestore.collection("users").where("uid", "==", auth.currentUser.uid).get()
        const cart = user.docs[0].cart;
        if(isMounted){
            setUserCart(cart)
        }
        }

        fetchData()

        return () => {
            isMounted = false;
        }
    },[])

    return (
        <div style={{display:"flex"}}>  
                <MDBCard className="m-4" style={{ width: "22rem" }} cascade ecommerce>
                    <MDBCardImage cascade top src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg" style={{width:"708",height:"402"}}
                    width="702" height="402"
                        waves />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle tag="h5" style={{color:"black"}}>
                            Beverage
                        </MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>
                        <a href="#!" style={{ color: "black" }}><strong>Food Item</strong></a>
                        </MDBCardTitle>

                        <MDBCardText>
                            Coffee: Most Heavenly Beverage
                    </MDBCardText>
                        <MDBCardFooter>
                            <span className="float-left">₹10</span>
                            <span className="float-right">
                                <MDBTooltip placement="top">
                                    <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                                    <MDBNavLink to="/cart"><MDBIcon icon="shopping-cart" /></MDBNavLink>
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
                <MDBCardImage cascade top src="https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg"
                    waves />
                <MDBCardBody cascade className="text-center">
                    <MDBCardTitle tag="h5" style={{ color: "black" }}>
                        South Indian
                        </MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>
                        <a href="#!" style={{ color: "black" }}><strong>Food Item</strong></a>
                    </MDBCardTitle>

                    <MDBCardText>
                        Masal Dosa: A South Indian Speciality
                    </MDBCardText>
                    <MDBCardFooter>
                        <span className="float-left">₹25</span>
                        <span className="float-right">
                            <MDBTooltip placement="top">
                                <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" onClick = {
                                    console.log(userCart    )
                                }>
                                    <MDBNavLink to="/cart"><MDBIcon icon="shopping-cart" /></MDBNavLink>
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
                    <MDBCardTitle tag="h5" style={{ color: "black" }}>
                        Chinese
                        </MDBCardTitle>
                    <MDBCardTitle style={{ color: "black" }}>
                        <a href="#!" style={{ color: "black" }}><strong>Food Item</strong></a>
                    </MDBCardTitle>

                    <MDBCardText>
                        Fried Rice: A Chinese Speciality
                    </MDBCardText>
                    <MDBCardFooter>
                        <span className="float-left">₹45</span>
                        <span className="float-right">
                            <MDBTooltip placement="top">
                                <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" onClick={async () => {
                                    const user = await firestore.collection("users").where("uid", "==", auth.currentUser.uid).get()
                                    const userDocID = user.docs[0].id;

                                    await firestore.collection("users").doc(userDocID).update({
                                        cart: [{
                                            item: "Fried Rice",
                                            quantity: 1,
                                            price: 45
                                        }]
                                    })

                                }}>
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