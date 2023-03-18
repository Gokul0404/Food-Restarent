import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../Corasol/Carasol.css'
import Img1 from './corasolImage/cuimg1.jfif'
import Img2 from './corasolImage/cuimg2.jfif'
import Img3 from './corasolImage/cuimg3.jfif'
import Carousel from 'react-bootstrap/Carousel';

export default function Carasol() {
  return (

    <div className='carasol'>

        <Container fluid>
        
        <Row  >
     
<Col className='d-flex justify-content-center  align-items-center '>
<span className='cuspan'>
<h1 className='cuheadcontent'>Recipes</h1>
<br/><br/><br/>
<p className='cupara'>The first is the List of Ingredients, and the second is the Amount of the Ingredients. 
    The third is the Preparation Instructions. 
    A well-written recipe will list all ingredients in the order they will be added 
    in the Preparation Instructions.</p></span>
<Carousel className='cubody '>
    
      <Carousel.Item interval={800}>
        <div className='imgbody'>
        <img
          className="d-block w-100 h-25"
          src={Img1}
          alt="First slide"
        /></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
      <div className='imgbody'>
        <img
          className="d-block w-100 h-25"
          src={Img2}
          alt="Second slide"
        /></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item interval={800}>
      <div className='imgbody'>
        <img
          className="d-block w-100 h-25"
          src={Img3}
          alt="Third slide"
        /></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


</Col>
 
</Row>
</Container>
    </div>
  )
}
