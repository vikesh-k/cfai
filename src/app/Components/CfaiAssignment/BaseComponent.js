"use client";

import React from "react";
import localFont from "next/font/local";

import Header from "@/Header";
import HeadIntro from "@/HeadIntro";
import Services from "@/Services";
import ValueComponent from "@/ValueComponent";
import DreamComponent from "@/DreamComponent";
import EventsComponent from "@/EventsComponent";
import Testimonials from "@/Testimonials";
import LatestUpdates from "@/LatestUpdates";
import InfoSubmit from "@/InfoSubmit";
import "./BaseComponent.css";

const buenosAires = localFont({
  src: [
    {
      path: "../../../../public/cfai/BuenosAires-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const BaseComponent = () => {
  return (
    <div className={buenosAires.className} style={{ overflow: "hidden" }}>
      <Header />
      <HeadIntro />
      <Services />
      <ValueComponent />
      <DreamComponent />
      <EventsComponent />
      <Testimonials />
      <LatestUpdates />
      <InfoSubmit />
    </div>
  );
};

export default BaseComponent;
