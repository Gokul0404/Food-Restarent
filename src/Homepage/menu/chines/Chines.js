import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { CurrencyDollar } from "react-bootstrap-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import "../chines/Chines.css";
export default function Chines() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="chines">
      <div className="biriyani">
        <div className="biriyani-head">
          <span className="start-head">
            <h2 className="h1">Chinese Corner</h2>
            <p>WHAT IN THE BEGINNING</p>
          </span>

          <div className="start-cards">
            <div className="spl-main">
              <Container md={12} className="spl-food-container">
                <Row className="spl-row">
                  <Col md={4}>
                    {" "}
                    <div
                      className="imgoutline"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <Image
                        className="speacialimg1"
                        src={require("../chines/chinesimg/chines.jpg")}
                        width="100%"
                        height="250vh"
                      ></Image><div className="btnn">
                      <button class="button-hover-addcart">Add to Cart<i class="bi bi-cart3 ps-1"></i></button>
                      </div>
                    </div>
                    <div
                      className="imgname"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <h4>Dry-Aged Rump Steak</h4>
                      <p>Asparagus / Tomato / Salad</p>
                      <h4>
                        <CurrencyDollar />
                        25
                      </h4>
                    </div>
                  </Col>

                  <Col md={4}>
                    {" "}
                    <div
                      className="imgoutline"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <Image
                        className="speacialimg1"
                        src={require("../chines/chinesimg/chines2.jpg")}
                        width="100%"
                        height="250vh"
                      ></Image><div className="btnn">
                      <button class="button-hover-addcart">Add to Cart<i class="bi bi-cart3 ps-1"></i></button>
                      </div>
                    </div>
                    <div
                      className="imgname"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <h4>Eggs in Tomoto Sauce</h4>
                      <p>Beef / Spaghetti / Salad</p>
                      <h4>
                        <CurrencyDollar />
                        14
                      </h4>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div
                      className="imgoutline"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      {" "}
                      <Image
                        className="speacialimg1"
                        src={require("../chines/chinesimg/chines3.avif")}
                        width="100%"
                        height="250vh"
                      ></Image><div className="btnn">
                      <button class="button-hover-addcart">Add to Cart<i class="bi bi-cart3 ps-1"></i></button>
                      </div>
                    </div>

                    <div
                      className="imgname"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <h4>Roastbeef</h4>
                      <p>Vegetables / Mustard / Sauce</p>
                      <h4>
                        <CurrencyDollar />
                        19
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row className="spl-row">
                  <Col md={4}>
                    {" "}
                    <div
                      className="imgoutline"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <Image
                        className="speacialimg1"
                        src={require("../chines/chinesimg/chines4.avif")}
                        width="100%"
                        height="250vh"
                      ></Image><div className="btnn">
                      <button class="button-hover-addcart">Add to Cart<i class="bi bi-cart3 ps-1"></i></button>
                      </div>
                    </div>
                    <div
                      className="imgname"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <h4>Pesto Noodles</h4>
                      <p>Tomatoes / Veggies</p>
                      <h4>
                        <CurrencyDollar />
                        13
                      </h4>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <div
                      className="imgoutline"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <Image
                        className="speacialimg1"
                        src={require("../chines/chinesimg/chines5.avif")}
                        width="100%"
                        height="250vh"
                      ></Image><div className="btnn">
                      <button class="button-hover-addcart">Add to Cart<i class="bi bi-cart3 ps-1"></i></button>
                      </div>
                    </div>
                    <div
                      className="imgname"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <h4>Avocado Breads</h4>
                      <p>Wholegrain Bread / Eggs</p>
                      <h4>
                        <CurrencyDollar />9
                      </h4>
                    </div>
                  </Col>
                  <Col md={4}>
                    {" "}
                    <div
                      className="imgoutline"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <Image
                        className="speacialimg1"
                        src={require("../chines/chinesimg/chines6.avif")}
                        width="100%"
                        height="250vh"
                      ></Image><div className="btnn">
                      <button class="button-hover-addcart">Add to Cart<i class="bi bi-cart3 ps-1"></i></button>
                      </div>
                    </div>
                    <div
                      className="imgname"
                      data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom"
                      data-aos-duration="4000"
                    >
                      <h4>Teriyaki Salmon</h4>
                      <p>Soy Sauce / Sesame / Seasoning</p>
                      <h4>
                        <CurrencyDollar />
                        25
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        {/* secound line */}
      </div>
    </div>
  );
}
