import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer fluid>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src=" https://im.hunt.in/local/Gallery/2997011/l/2997011_96b3b.jpg"
                width="1600px"
                max_height="10px"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              {/* <h3 className="h3-responsive">Eat Up!!!</h3> */}
              {/* <p>First text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
           
              <img
                className="d-block w-100"
                src="https://miro.medium.com/max/1200/1*cJUlUCYlZH2acP10Qf5ONA.jpeg"
                alt="Second slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              {/* <h3 className="h3-responsive">Hygiene</h3> */}
              {/* <p>Second text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://media4.s-nbcnews.com/i/newscms/2019_30/1463662/healthy-road-trip-snacks-today-main-190723_e669d663d47979737757f65cfab89224.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              {/* <h3 className="h3-responsive">Cafeteria</h3> */}
              {/* <p>Third text</p> */}
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
