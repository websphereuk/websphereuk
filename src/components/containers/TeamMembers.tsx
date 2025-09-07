import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/teams/one.png";
import two from "public/images/teams/two.png";
import three from "public/images/teams/three.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";
import seven from "public/images/teams/seven.png";
import SlideText from "./slide-text";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s bg-black">
      <SlideText content="Our Team" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      Introducing Our Team
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      Meet Our Dynamic Team
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="tex-start">
                    <p>

                      Our team embodies synergy and dedication, where every member of contribution is valued and celebrated. Together, we strive for excellence, leveraging our diverse talents to overcome challenges and achieve remarkable results. Join us in our journey towards innovation and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            speed={800}
            loop={true}
            centeredSlides={false}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="#">
                      <Image src={one} alt="John Smith - Senior Engineer" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Strong foundations lead to strong results. I ensure our systems are built to last.”
                        </p>
                      </div>
                      <h4>
                        <Link href="#">John Smith</Link>
                      </h4>
                      <p>Senior engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="#">John Smith</Link>
                      </h5>
                      <p>Senior engineer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Expert in backend systems & infrastructure. Ensures scalability, reliability, and efficiency.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        “Strong foundations lead to strong results. I ensure our systems are built to last.”
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="#">
                      <Image src={two} alt="Michael Johnson - Product Designer" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Design should not just look good, it should feel effortless to use.”
                        </p>
                      </div>
                      <h4>
                        <Link href="#">Michael Johnson</Link>
                      </h4>
                      <p>Sr. Product Designer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="#">Michael Johnson</Link>
                      </h5>
                      <p>Sr. Product Designer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Crafts intuitive and engaging designs that balance creativity and functionality.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        “Design should not just look good, it should feel effortless to use.”
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  {/* Thumbnail Section */}
                  <div className="thumb">
                    <Link href="#">
                      <Image src={three} alt="David Miller - Full Stack Developer" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Code should be clean, scalable, and future-proof. That’s what I
                          deliver.”
                        </p>
                      </div>
                      <h4>
                        <Link href="#">David Miller</Link>
                      </h4>
                      <p>Full Stack Developer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="share us on linkedin"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="#">David Miller</Link>
                      </h5>
                      <p>Full Stack Developer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Bridges backend and frontend, creating seamless, high-performing
                        applications. Passionate about writing maintainable code and
                        building future-proof systems.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Frontend Development</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="85%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Backend Systems</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Focused on scalability, clean architecture, and delivering products
                        that perform flawlessly across platforms.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        aria-label="share us on linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="#">
                      <Image src={five} alt="James Wilson - UI/UX Designer" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Good design is invisible. It just works without being noticed.”
                        </p>
                      </div>
                      <h4>
                        <Link href="#">James Wilson</Link>
                      </h4>
                      <p>UI/UX Designer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="share us on linkedin"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="#">James Wilson</Link>
                      </h5>
                      <p>UI/UX Designer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Designs visually appealing, smooth, and user-friendly interfaces across devices.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="80%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Ensures every interface is intuitive, aesthetically pleasing, and responsive.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        aria-label="share us on linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="#">
                      <Image src={six} alt="Daniel Anderson - Marketing Head" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Great marketing connects people with solutions they actually need.”
                        </p>
                      </div>
                      <h4>
                        <Link href="#">Daniel Anderson</Link>
                      </h4>
                      <p>Marketing Head</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="share us on linkedin"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="#">Daniel Anderson</Link>
                      </h5>
                      <p>Marketing Head</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Leads creative marketing strategies that drive growth and brand recognition.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Strategy</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="85%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Branding</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Focuses on connecting audiences with meaningful experiences and impactful campaigns.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        aria-label="share us on linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="#">
                      <Image src={seven} alt="Thomas Lee - QA Engineer" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Quality is not tested at the end, it’s built in from the start.”
                        </p>
                      </div>
                      <h4>
                        <Link href="#">Thomas Lee</Link>
                      </h4>
                      <p>QA Engineer</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.linkedin.com/"
                          target="_blank"
                          aria-label="share us on linkedin"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="#">Thomas Lee</Link>
                      </h5>
                      <p>QA Engineer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Ensures top performance, security, and reliability in every product we deliver.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Testing</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Automation</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="85%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Committed to delivering flawless, reliable, and high-quality applications.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/"
                        target="_blank"
                        aria-label="share us on linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
