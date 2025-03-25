import React from "react";
import "./ValueComponent.css";
import Image from "next/image";

const ValueComponent = () => {
  return (
    <div className="valuecomponent">
      <div className="value__image">
        <div className="value_imgoverlap" />
        <Image
          src="/cfai/value.svg"
          alt="Value"
          className="value__imgplaceholder"
          width={450}
          height={400}
        />
      </div>
      <div className="value__content">
        <h2>Realize your global ambitions with us</h2>
        <p>
          With a keen ear for your choices and preferences, our counselling
          experience is so seamless that you will land in your dream university
          even before you do!
        </p>
        <ul>
          <li>Virtual & In Person Coaching and Counselling</li>
          <li>Comprehensive Assistance for Applications, Admissions & Visas</li>
          <li>High Value Scholarships and Study Loans</li>
        </ul>
      </div>
    </div>
  );
};

export default ValueComponent;
