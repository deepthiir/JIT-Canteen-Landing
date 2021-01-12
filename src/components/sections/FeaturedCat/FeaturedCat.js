import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol } from 'mdbreact';

const FeaturedCat = () => {
    return (
        <MDBRow>
            <MDBCol md=''>
                <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1535140728325-a4d3707eee61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"
                    }}
                >
                    <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                            <h5 className='pink-text'>
                                 Food
              </h5>
                            <MDBCardTitle tag='h3' className='pt-2'>
                                <strong>This is card title</strong>
                            </MDBCardTitle>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                officia accusamus minus error nisi architecto nulla ipsum
                                dignissimos. Odit sed qui, dolorum!
              </p>
                            
                        </div>
                    </div>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1546959673-47ea2a35bd06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80')"
                    }}
                >
                    <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                            <h5 className='orange-text'>
                                 Snacks
              </h5>
                            <MDBCardTitle tag='h3' className='pt-2'>
                                <strong>This is card title</strong>
                            </MDBCardTitle>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                officia accusamus minus error nisi architecto nulla ipsum
                                dignissimos. Odit sed qui, dolorum!
              </p>
                           
                        </div>
                    </div>
                </MDBCard>
            </MDBCol>

            <MDBCol md=''>
                <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                            "url('https://mail.google.com/mail/u/0?ui=2&ik=219d56b549&attid=0.1&permmsgid=msg-f:1688681403589726630&th=176f66ca1fc611a6&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_rUwuWpDt1ZhRm8QVWF0d-sidlfVApcTSkAmcTirlwuNimqahK6bFCDngHGUpUWuumGlyDCMnndhf3kqqF6NMuylmdKuSNBj96DoU_d3Yo-xHgBcBkAcRul-Y&disp=emb&realattid=ii_kjtxjixk0')"
                    }}
                >
                    <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                        <div>
                            <h5 className='pink-text'>
                                 Beverage
              </h5>
                            <MDBCardTitle tag='h3' className='pt-2'>
                                <strong>This is card title</strong>
                            </MDBCardTitle>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                                officia accusamus minus error nisi architecto nulla ipsum
                                dignissimos. Odit sed qui, dolorum!
              </p>
                            {/* <MDBBtn color='pink'>
                                <MDBIcon icon='clone left' /> View project
              </MDBBtn> */}
                        </div>
                    </div>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default FeaturedCat;