import React from "react";
import Image from "next/image";
import avatar from "public/images/testimonial/avatar.png";
import GeneralHeading from "../general-heading";
import EmilyImage from "../../../../public/images/testimonial/emily.webp";
import JohnDavisImg from "../../../../public/images/testimonial/johnDavis.jpeg";
import SarahImg from "../../../../public/images/testimonial/sarah.jpg";
import LauraImg from "../../../../public/images/testimonial/laura.webp";
import MichaelImg from "../../../../public/images/testimonial/michel.jpg";
import ChrisImg from "../../../../public/images/testimonial/chris.jpg";


const Testimonial = () => {
  const testimonialsData = [
    {
      quote: "Working with Websphere was an absolute delight! Their team truly understood our vision and brought it to life with their incredible web development skills. Highly recommended!",
      author: {
        name: "Emily Johnson",
        role: "Client",
        avatar: EmilyImage
      }
    },
    {
      quote: "Websphere didn't just create a website for us; they crafted an experience. Their dedication and creativity exceeded all our expectations. Thank you for making our business shine!",
      author: {
        name: "John Davis",
        role: "Client",
        avatar: JohnDavisImg
      }
    },
    {
      quote: "Websphere's web development services have been a game-changer for us. Their ability to listen to our needs and deliver innovative solutions has been invaluable.",
      author: {
        name: "Sarah Thompson",
        role: "Client",
        avatar: SarahImg
      }
    },
    {
      quote: "From start to finish, working with Websphere was smooth sailing. Their expertise and professionalism made the entire process seamless. We couldn't be happier with the results!",
      author: {
        name: "Michael Clark",
        role: "Client",
        avatar: MichaelImg
      }
    },
    {
      quote: "Websphere's team not only delivered a stunning website but also provided exceptional support along the way. Their dedication to quality and customer satisfaction is truly commendable.",
      author: {
        name: "Laura White",
        role: "Client",
        avatar: LauraImg
      }
    },
    {
      quote: "Choosing Websphere was one of the best decisions we made for our business. Their expertise and communication made the process efficient and enjoyable. We're thrilled with the outcome!",
      author: {
        name: "Chris Evans",
        role: "Client",
        avatar: ChrisImg
      }
    }
  ];


  return (
    <>
      <div className="bg-white ">

        <section className="section feedback-s fade-wrapper">
          <div className="section__content text-black mb-5 text-center">
            <div className="sub-title text-black">Customer Satisfaction`</div>
            <GeneralHeading content="Voices of Trust and Satisfaction" className="text-black" />
          </div>
          <div className="container">
            <div className="row gaper">
              {
                testimonialsData.map((v) => {
                  return (
                    <>

                      < div className="col-12 col-md-6 col-xl-4">
                        <div className="feedback-s__single topy-tilt fade-top" style={{ borderTopLeftRadius: "50px", borderBottomRightRadius: "50px" }}>
                          <div className="content">
                            <div className="quote">
                              <i className="fa-solid fa-quote-right"></i>
                            </div>
                            <p>
                              {v?.quote}
                            </p>
                          </div>
                          <hr />
                          <div className="author">
                            <div className="thumb">
                              <Image className="testimonialImg" src={v?.author.avatar ? v?.author.avatar : avatar} alt="Image" />
                            </div>
                            <div className="author-meta">
                              <h5>{v?.author?.name}</h5>
                              <p>{v?.author?.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })

              }
            </div>

          </div>
        </section >
      </div >

    </>
  );
};

export default Testimonial;
