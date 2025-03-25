import React from "react";
import "./InfoSubmit.css";
import Image from "next/image";

const InfoSubmit = () => {
  return (
    <div className="infocontainer_wrapper">
      <div className="infocontainer">
        <div className="info__stylediv"></div>

        <h1 className="info__title">Stay updated with KC Overseas</h1>
        <div className="info__datainput">
          <input name="email" placeholder="Email ID" className="info__email" />
          <select name="interests" className="info__interestselect">
            <option value>{`I'm interested in`}</option>
          </select>
          <button className="info__subscribe">Subscribe Now</button>
        </div>
      </div>
      <div className="info__imgwrap">
        <Image
          src="/cfai/submit.svg"
          alt="submit img"
          width={100}
          height={100}
          className="info__img"
        />
      </div>
    </div>
  );
};

export default InfoSubmit;
