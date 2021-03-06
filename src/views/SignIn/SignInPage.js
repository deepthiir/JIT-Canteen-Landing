import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './SignIn.min.css';
import {auth} from '../../services/firebase'

function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async() => {
    await auth.signInWithEmailAndPassword(email, password).catch((err) => {
      console.log(err)
    })
  }

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                  <a href="#!" className="blue-text ml-1">

                  Password?
                  </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="rnd-btn btn-block z-depth-1a"
                  onClick = {signIn}
                >
                  Sign in
                  </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
                </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="rnd-btn mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="rnd-btn mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="rnd-btn z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                  <a href="/signup" className="blue-text ml-1">

                  Sign Up
                  </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignInPage;
