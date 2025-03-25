"use client";

import React from "react";
import "./HeadIntro.css";
import Image from "next/image";

const HeadIntro = () => {
  return (
    <div className="headintrowrapper">
      <div className="headintro">
        <div className="headintro__content">
          <div className="headintro__navigator">
            <span>Home</span>
            <span>·</span>
            <span>Pune Branch</span>
          </div>
          <div className="headintro__title">
            <span>KC Overseas Education</span>
            <div className="headintro__titleloc">
              Pune
              <div className="headintro__locstyler" />
            </div>
          </div>
          <div className="headintro__description">
            <span>
              We value your career aspirations, which is why we map your
              preferences with the best that our global universities have to
              offer. Thousands of our students are pursuing their programs and
              aspirations in eminent universities globally and we welcome you to
              pursue yours!
            </span>
          </div>
          <div className="headintro__contact">
            <button className="headintro__enquirebtn">Enquire Now</button>
            <div className="headintro__branchadd">
              <button className="headintro__branchbtn">
                <Image
                  src="/cfai/downarrow.svg"
                  alt="down-arrow"
                  width={15}
                  height={21}
                />
              </button>
              <span> Branch Address</span>
            </div>
          </div>
        </div>
      </div>
      <div className="empty__stylingdiv" />
      <Image
        src="/cfai/star1.svg"
        alt="star1"
        width={10}
        height={10}
        className="headintro__star1 randomimgs"
      />
      <Image
        src="/cfai/star2.svg"
        alt="star1"
        width={10}
        height={10}
        className="headintro__star2 randomimgs"
      />
      <Image
        src="/cfai/star3.svg"
        alt="star1"
        width={10}
        height={10}
        className="headintro__star3 randomimgs"
      />
      <Image
        src="/cfai/dot1.svg"
        alt="star1"
        width={4}
        height={4}
        className="headintro__dot1 randomimgs"
      />
      <Image
        src="/cfai/dot2.svg"
        alt="star1"
        width={6}
        height={6}
        className="headintro__dot2 randomimgs"
      />
      <Image
        src="/cfai/dot3.svg"
        alt="star1"
        width={4}
        height={4}
        className="headintro__dot3 randomimgs"
      />
    </div>
  );
};

export default HeadIntro;
