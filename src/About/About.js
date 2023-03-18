import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import "../About/About.css";
import Aos from 'aos'
export default function About() {


  useEffect(()=>{

    Aos.init();
  
  },[])

  return (
    <div className="About-page">
      <div className="about-first-div">
        <Container>
          <span className="about-content">
            <h2 className="abouthead">
              <span className="one">About</span> <span className="two">Us</span>
            </h2>
            {/* <p className='about-para'>Seasonality and support of our
 local community are central to our philosophy at Berg. We’re passionate about cooking with local, seasonal 
 ingredients and love<br/> how they can inspire new dishes. Not only do fresh, in-season ingredients enhance 
flavour, they are also great for you and their consumption minimises impact on the environment.</p> */}
          </span>
        </Container>
        <div className="about-start">
          <Container >
            <span className="about-secound-contents">
              <h1>PHILOSOPHY</h1>
              <p>
                Seasonality and support of our local community are central to
                our philosophy at Berg. We’re passionate about cooking with
                local, seasonal ingredients and love how they can inspire new
                dishes. Not only do fresh, in-season ingredients enhance
                flavour, they are also great for you and their consumption
                minimises impact on the environment.
              </p>
            </span>

            <Row className="about-first-row" xs={12}>
              <Col xs sm md='12' lg={6} className="about-first-col">
                <div className="one-about-div">
                <span className="col-para-head-one">
                  <h3>Drive Through Restaurant</h3>
                  <p>November 1982</p>
                </span>
                <span className="col-para-two">
                  <p>
                    Augue legendos eam ne, pro quot definitionem te, viderer
                    appareat atomorum mel ea. Melius adipisci eum id, mea cibo
                    decore nominavi eu. Eu porro nemore mea, ius posse primis
                    ea.
                  </p>
                </span>
                </div>
              </Col>
              <Col  lg={6}>
                <Image
                  className="image-about"
                  src={require("../About/IMG/imgabout.jpg")}
                  width="90%"
                  height="350vh"
                  alt="img"  data-aos="fade-left" data-aos-duration="2000"
                ></Image>
              </Col>
            </Row>


            <Row className="about-first-row">
         
              <Col lg={6} className="img-last2">
                <Image
                  className="image-about3"
                  src={require("../About/IMG/col2.avif")}
                  width="90%"
                  height="350vh"
                  alt="img"

                  data-aos="fade-right" data-aos-duration="2000"
                ></Image>
              </Col>

              <Col xs sm md='12'  lg={6} className="about-secound-col">
                <div className="col-second-div1">
                <span className="col-para-head-one">
                  <h3>Spicy Burger Introduced</h3>
                  <p>May 2002</p>
                </span>
                <span className="col-para-two">
                  <p>
                    Augue legendos eam ne, pro quot definitionem te, viderer
                    appareat atomorum mel ea. Melius adipisci eum id, mea cibo
                    decore nominavi eu. Eu porro nemore mea, ius posse primis
                    ea.
                  </p>
                </span></div>
              </Col>

            </Row>

            <Row className="about-first-row">
              <Col xs sm md='12'  lg={6} className="about-first-col">
                <div className="one-about-div">
                <span className="col-para-head-one">
                  <h3>Drive Through Restaurant</h3>
                  <p>November 1982</p>
                </span>
                <span className="col-para-two">
                  <p>
                    Augue legendos eam ne, pro quot definitionem te, viderer
                    appareat atomorum mel ea. Melius adipisci eum id, mea cibo
                    decore nominavi eu. Eu porro nemore mea, ius posse primis
                    ea.
                  </p>
                </span>
                </div>
              </Col>
              <Col md={6}>
                <Image
                  className="image-about"
                  src={require("../About/IMG/col1.avif")}
                  width="90%"
                  height="350vh"
                  alt="img"

                  data-aos="fade-left" data-aos-duration="2000"
                ></Image>
              </Col>
            </Row>


            <Row className="about-first-row">
         
         <Col lg={6} className="img-last">
           <Image
             className="image-about3"
             src={require("../About/IMG/col3.jpg")}
             width="90%"
             height="350vh"
             alt="img" 

             data-aos="fade-right" data-aos-duration="2000"
           ></Image>
         </Col>

         <Col xs sm md='12'  lg={6} className="about-secound-col">
         <div className="col-second-div1">
           <span className="col-para-head-one">
          
             <h3>Branches Opened World-Wide</h3>
             <p>August 2012</p>
           </span>
           <span className="col-para-two">
             <p>
               Augue legendos eam ne, pro quot definitionem te, viderer
               appareat atomorum mel ea. Melius adipisci eum id, mea cibo
               decore nominavi eu. Eu porro nemore mea, ius posse primis
               ea.
             </p>
           </span></div>
         </Col>

       </Row>
          </Container>
        </div>

        {/* <Image className='image-about' src={require('../About/IMG/imgabout.jpg')} width='100%' height='700vh' alt='img'></Image> */}
      </div>
    </div>
  );
}
