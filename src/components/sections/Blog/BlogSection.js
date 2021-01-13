import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
} from "mdbreact";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 Blog-Section" secondary>
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Don't waste food!!Food is God!!</strong>
            </h3>
            <p>
            Food maintains or nourishes body, for body is annamaya kosha, food-based cell, and so Food should be looked upon with reverence as ‘Gift of God’, just like fresh air and water, and it should not be wasted at all.
            </p>
              {/* <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              
            </p> */}
            {/* <MDBBtn color="success" size="md" className="waves-light ">
                            Read more
                        </MDBBtn> */}
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Lifestyle
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Hygiene</strong>
            </h3>
            <p>
            Cleaniness and order are not matter of instict; they are matters of education,and like most great things, you must cultivate a taste for them.
            </p>
            <p>
              -
              <a href="#!">
                <strong>  Benjamin Disraeli  </strong>
              </a>
            </p>
            {/* <MDBBtn
                            color="pink"
                            size="md"
                            className="mb-lg-0 mb-4 waves-light"
                        >
                            Read more
            </MDBBtn> */}
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2016/02/19/10/18/chef-1209161_1280.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2015/01/14/15/47/tea-599227_1280.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Wellness</strong>
            </h3>
            <p>
            The higher your energy level, the more efficient your body. The more efficient your body, the better you feel and the more you will use your talent to produce outstanding results.
            </p>
            {/* <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 11/08/2018
            </p> */}
            {/* <MDBBtn color="indigo" size="md" className="waves-light ">
                            Read more
            </MDBBtn> */}
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BlogSection;
