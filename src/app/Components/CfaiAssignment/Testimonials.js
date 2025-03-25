import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonialscontainer">
      <h2 className="testimonials__title">Our students love us</h2>
      <div className="testimonials__slider">
        <button className="testimonials__arrow prev__arrow">&lt;</button>
        <div className="testimonials__cards_list">
          <div className="testimonials__card active">
            <div className="testimonials__quote">❝</div>
            <p className="testimonials__text">
              Thank you, KC, for all the support you have provided right from
              shortlisting the university to the visa interview preparations. I
              really admire the attention and support of the KC Counsellors.
            </p>
            <div className="testimonials__author">
              <span className="testimonials__authorname">
                Mandar Suryawanshi
              </span>
              <span className="testimonials__authordetails">
                Northeastern University, USA
              </span>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__quote">❝</div>
            <p className="testimonials__text">
              The team made the entire process very easy. Everyone is very
              helpful and cooperative throughout. I am thankful to KC Sadar Team
              for making my dream come true.
            </p>
            <div className="testimonials__author">
              <span className="testimonials__authorname">Aarohi Sighel</span>
              <span className="testimonials__authordetails">
                University of South Australia, Australia
              </span>
            </div>
          </div>

          <div className="testimonials__card">
            <div className="testimonials__quote">❝</div>
            <p className="testimonials__text">
              Helped with counseling and making the right decision. Great staff
              would definitely recommend it to anyone planning to go abroad for
              studies.
            </p>
            <div className="testimonials__author">
              <span className="testimonials__authorname">Susan Mendonca</span>
              <span className="testimonials__authordetails">
                Conestoga College, Canada
              </span>
            </div>
          </div>
        </div>
        <button className="testimonials__arrow next__arrow">&gt;</button>
      </div>
      <div className="testimonials__sliderdots">
        <span className="testimonials__dot dot__active"></span>
        <span className="testimonials__dot"></span>
        <span className="testimonials__dot"></span>
        <span className="testimonials__dot"></span>
        <span className="testimonials__dot"></span>
      </div>
    </div>
  );
};

export default Testimonials;
