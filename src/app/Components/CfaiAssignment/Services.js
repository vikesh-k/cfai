"use client";

import React from "react";
import "./Services.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className="services">
      <div className="services__title">Services we provide</div>
      <div className="services__grid">
        <div className="service__item">
          <Image
            src="/cfai/service1.svg"
            alt="Test Preparing & Coaching"
            className="service__icon"
            width={25}
            height={30}
          />
          Test Preparing & Coaching
        </div>
        <div className="service__item">
          <Image
            src="/cfai/service2.svg"
            alt="Course, Country & University Selection"
            className="service__icon"
            width={25}
            height={30}
          />
          Course, Country & University Selection
        </div>
        <div className="service__item">
          <Image
            src="/cfai/service3.svg"
            alt="Application Assistance"
            className="service__icon"
            width={25}
            height={30}
          />
          Application Assistance
        </div>
        <div className="service__item">
          <Image
            src="/cfai/service4.svg"
            alt="Scholarships"
            className="service__icon"
            width={25}
            height={30}
          />
          Scholarships
        </div>
      </div>
      <button className="services__enquirebtn">Enquire Now</button>
    </div>
  );
};

export default Services;
