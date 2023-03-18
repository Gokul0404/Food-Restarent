import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Quat.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Quat() {


  useEffect(()=>{

    Aos.init();
  
  },[])
  return (



    <div className='block-two'>
 {/* <Image className='block-two-image' src={require('../img/img9.jpg')} width="100%" ></Image> */}


 <Container className='block-two-container'>
  <Row className='quat-row'>
<Col md={3}>

<Image className='block-two-image' data-aos="fade-right" data-aos-duration="2000" src={require('../img/img10.avif')} width="100%"  height="90%"></Image>

</Col>
<Col md={6} className="quart-row-con">
<span className='block-two-head'>
<h2 className='h1'>We Specialize in Modern

 Fusion Cuisine</h2>




</span>

<span className='block-two-para'>
<p className='pa'>The highest quality, Fresh products paired with excellent craftsmanship in cooking. Le Chef 
  was established in 1982 and has recieved the highly acclaimed michelin star in 2001.
</p>

<br/>
<p className='pa1'>"For us everything starts with passion for food"</p>
</span>
</Col>
<Col md={3}>
<Image className='block-two-image1' data-aos="fade-left" data-aos-duration="2000" src={require('../img/img13.avif')} width="100%" height="90%" ></Image>
</Col>
</Row>

 </Container>
    </div>
  )
}
