import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import sonil from '../../../src/img/Testimonial/sonil.jfif';
import mike from '../../../src/img/Testimonial/mike.png';
import man from '../../../src/img/Testimonial/man.jfif';
import lady from '../../../src/img/Testimonial/lady.jfif';




export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceInRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my client say about me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className=" testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Albert is a very hard working individual. He makes sure
                      all the deadlines are met and whatever project he is
                      working on meets the highest standards.
                      <i className="fa fa-quote-left" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={sonil}
                      alt="zero internet"
                    ></img>
                    <h5>Sonil</h5>
                    <p>Head of IT,Al Barakah holdings</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className=" testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Time punctuality, quality service, professionalism,
                      enthusiasm, hard working, possessing strong background in
                      Software Development and many more are the perfect
                      descriptions that undoubtedly matches Albert.
                      <i className="fa fa-quote-left" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={mike}
                      alt="zero internet"
                    ></img>
                    <h5>Mikel</h5>
                    <p>CEO MikeTech</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className=" testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Albert is a very hard working individual. He makes sure
                      all the deadlines are met and whatever project he is
                      working on meets the highest standards.
                      <i className="fa fa-quote-left" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={man}
                      alt="zero internet"
                    ></img>
                    <h5>Maksat Meredov</h5>
                    <p>CO-FOUNDER, SAFEDEVS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className=" testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Albert is highly skilled developer with ability to manage
                      time efficiently, which is pretty rare in most of the
                      developers. He is passionate in his coding profession and
                      does the job collaboratively
                      <i className="fa fa-quote-left" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={lady}
                      alt="zero internet"
                    ></img>
                    <h5>Malcom </h5>
                    <p>Snr System Eng, Al Barakah holdings</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src="img/testimonial/shape-bg.png" alt="Phot0 not responding" />
      </div>
    </div>
  );
}
