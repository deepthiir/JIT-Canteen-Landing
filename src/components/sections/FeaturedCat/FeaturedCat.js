import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol } from 'mdbreact';
import {firestore} from '../../../services/firebase'

const FeaturedCat = () => {

    const [food,setFood] = useState(null);
    const [snacks, setSnacks] = useState(null);
    const [beverage, setBeverage] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async() => {
            firestore.collection("dailySpecials").doc("U9N1ih2bOOGVyWd4b9kM").onSnapshot((snapshot) => {
                if(snapshot.exists){
                    if(isMounted){
                        setFood(snapshot.data())
                    }
                }
            })
            firestore.collection("dailySpecials").doc("CdcksISGLgQfAMhDD8xF").onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    if (isMounted) {
                        setSnacks(snapshot.data())
                    }
                }
            })
            firestore.collection("dailySpecials").doc("zglHS1BZCTrJEoz51r0P").onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    if (isMounted) {
                        setBeverage(snapshot.data())
                    }
                }
            })
        }

        fetchData();
        
        return () => {
            isMounted = false
        }
    }, [])

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
                                {food !== null ? <strong>{food.foodItem}</strong> : <strong>Something special</strong>}
                            </MDBCardTitle>
                            {
                                food !== null ? <p>
                                    {food.description}
                                </p> : <p>Cooking Up!!!</p>
                            }
                            {
                                food !== null ? <p>Price: ₹{food.price}</p> : null
                            }
                            
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
                                {snacks !== null ? <strong>{snacks.foodItem}</strong> : <strong>Something special</strong>}
                            </MDBCardTitle>
                            {
                                snacks !== null ? <p>
                                    {snacks.description}
                                </p> : <p>Cooking Up!!!</p>
                            }
                            {
                                snacks !== null ? <p>Price: ₹{snacks.price}</p> : null
                            }
                           
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
                                {beverage !== null ? <strong>{beverage.foodItem}</strong> : <strong>Something special</strong>}
                            </MDBCardTitle>
                            {
                                beverage !== null ? <p>
                                    {beverage.description}
              </p> : <p>Cooking Up!!!</p>
                            }
                            {
                                beverage !== null ? <p>Price: ₹{beverage.price}</p> : null
                            }
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