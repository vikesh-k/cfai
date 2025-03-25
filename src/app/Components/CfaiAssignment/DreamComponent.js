import React from "react";
import "./DreamComponent.css";
import Image from "next/image";

const DreamComponent = () => {
  return (
    <div className="dreamcomponent">
      <h1>7 Easy Steps to Land in your Dream University</h1>
      <div className="dream__steps">
        <div className="dream__step">
          <div className="dream__stepnumber">1</div>
          <div className="dream__stepcontent">
            <div className="dream__triangle" />
            <Image
              src="/cfai/dream1.svg"
              alt="dream image1"
              width={200}
              height={200}
              className="dream_imgplaceholder"
            />
            <div className="dream__steptext">
              <h2>Counselling</h2>
              <p>Plan your Academic and Career Goals</p>
            </div>
          </div>
        </div>
        <div className="dream__step step2">
          <div className="dream__stepnumber">2</div>
          <div className="dream__stepcontent">
            <div className="dream__triangle" />
            <Image
              src="/cfai/dream2.svg"
              alt="dream image2"
              width={200}
              height={200}
              className="dream_imgplaceholder"
            />
            <div className="dream__steptext">
              <h2>Test Preparation</h2>
              <p>Appear for Standardized Tests</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dream__navigation">
        <button className="dream__navbtn">
          <span className="dream__navarrow">&lt;</span> Previous Step
        </button>
        <button className="dream__navbtn">
          Next Step <span className="dream__navarrow">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default DreamComponent;
