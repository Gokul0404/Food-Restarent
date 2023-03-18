import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../Homepage/Home.css'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='home-page'>
  <Container className='home-all-contents'>

<Row className='homerow'>

<Col  sm={12} md={6} className='homecoloum'>

<div className='rightContet'>
  <p className='content-one  rounded-pill'>More Than Faster</p>

  <h1>Be The Fastest <br/>In Delivering <br/>Your <span>Food</span></h1>

  <p className='content-two'>Navigate the world of home-cooked food with confidence. Join us in the <br/>endless pursuit of great home-cooked food</p>

<button className='homebtn' onClick={() => {
                      navigate("/menu");
                    }}>Order Now</button>

</div>

</Col>

<Col sm={12} lg={6} className="homeimage-parent">
<Image className='homeimg' src={require('../img/img12.jfif')} ></Image>
{/* <Image className='homeimg2' src={require('../img/img3.avif')} width="50%" ></Image>
<Image className='homeimg3' src={require('../img/img7.avif')} width="45%" ></Image> */}
</Col>



</Row>


  </Container>

 

    </div>
  )
}
