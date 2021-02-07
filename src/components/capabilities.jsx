import React, { useRef, useEffect } from "react";
import Col from "react-bootstrap/Col";
/* gsap imports */
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Capabilities = (props) => {
  let selectCards = useRef();
  let selectcardHeading = useRef();
  let selectcardPara = useRef();

  useEffect(() => {
    let animateCard = gsap.timeline();
    let animateHeading = gsap.timeline();
    let animateParagraph = gsap.timeline();
    // match media function to set up animations for screens larger then 1200px
    ScrollTrigger.matchMedia({
      "(min-width: 1200px)": function () {
        animateCard.from(selectCards, {
          y: -100,
          opacity: 0,
          // ease: Power2.easeInOut,
          duration: 0.1,
          delay: 0.2,
          scrollTrigger: {
            trigger: "selectCards",
            start: "top 50%",
            end: "+=1000",
            scrub: 1,
            stagger: 0.5,
            // markers: true,
          },
        });
        animateHeading.from(selectcardHeading, {
          y: 100,
          opacity: 0,
          duration: 0.2,
          delay: 0.4,
          // ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: "selectcardHeading",
            start: "top 50%",
            end: "+=1000",
            scrub: 1,
            // markers: true,
          },
        });
        animateParagraph.from(selectcardPara, {
          y: 100,
          opacity: 0,
          duration: 0.3,
          delay: 0.6,
          // ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: "selectcardPara",
            start: "top 50%",
            end: "+=1000",
            scrub: 1,
            // markers: true,
          },
        });
      },

      // match media function to set up animations for screens smaller then 1200px
      "(max-width: 1200px)": function () {
        animateCard.from(selectCards, {
          y: -50,
          opacity: 0,
          ease: Power2.easeInOut,
          duration: 0.3,
          delay: 0.2,
          scrollTrigger: {
            trigger: "selectCards",
            start: "top 20%",
            // end: "+=100",
            scrub: 1,
            stagger: 0.5,
            markers: true,
          },
        });
        animateHeading.from(selectcardHeading, {
          y: 50,
          opacity: 0,
          duration: 0.3,
          delay: 0.4,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: "selectcardHeading",
            start: "top 20%",
            // end: "+=100",
            scrub: 1,
            markers: true,
          },
        });
        animateParagraph.from(selectcardPara, {
          y: 50,
          opacity: 0,
          duration: 0.3,
          delay: 0.6,
          ease: Power2.easeInOut,
          scrollTrigger: {
            trigger: "selectcardPara",
            start: "top 20%",
            // end: "+=100",
            scrub: 1,
            markers: true,
          },
        });
      },
    });
  }, []);
  return (
    <Col md={4}>
      <div className="img-wrapper" ref={(e) => (selectCards = e)}>
        <img src={props.imgPath} alt="client" className="img-fluid" />
        <div className="overlay-text">
          <h1 ref={(e) => (selectcardHeading = e)}> {props.heading} </h1>{" "}
          <p ref={(e) => (selectcardPara = e)}> {props.paragraph} </p>{" "}
        </div>{" "}
      </div>{" "}
    </Col>
  );
};

export default Capabilities;
