import React from "react";

import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer
        class="footer-section"
        style={{ position: "relative", bottom: 0 }}
      >
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="bi bi-geo-alt-fill"></i>
                  <div class="cta-text">
                    <span className="cta-text1">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span></span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="bi bi-telephone-fill"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="bi bi-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div className="first">
                    <div class="footer-widget-heading">
                      <h3>About Us</h3>
                    </div>

                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">about</a>
                      </li>
                      <li>
                        <a href="#">services</a>
                      </li>
                      <li>
                        <a href="#">portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div className="secound">
                    <div class="footer-widget-heading">
                      <h3>Services</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="home">Home</a>
                      </li>
                      <li>
                        <a href="about">about</a>
                      </li>
                      <li>
                        <a href="service">services</a>
                      </li>
                      <li>
                        <a href="portfolio">portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>

                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form>
                      <input type="text" placeholder="Email Address" />
                      <button className="fw-bold">Submit</button>
                    </form>
                  </div>

                  <div className="iconsfooter">
                    <div class="footer-social-icon">
                      <a href="home">
                        <i class="bi bi-facebook fs-2"></i>
                      </a>
                      <a href="home">
                        <i class="bi bi-twitter fs-2"></i>
                      </a>
                      <a href="home">
                        <i class="bi bi-instagram fs-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left demo_left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2018, All Right Reserved </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right demo_left">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a
                        href="home"
                        onClick={() => {
                          navigate("/home");
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="home">Terms</a>
                    </li>
                    <li>
                      <a href="home">Privacy</a>
                    </li>
                    <li>
                      <a href="home">Policy</a>
                    </li>
                    <li>
                      <a
                        href="home"
                        onClick={() => {
                          navigate("/contact");
                        }}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
