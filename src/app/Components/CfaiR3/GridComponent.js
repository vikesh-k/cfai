"use client";

import React from "react";
import ImageComponent from "./ImageComponent";
import "./GridComponent.css";

const IMAGE_URLS = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
];

const GridComponent = () => {
  return (
    <div className="gridcontainer">
      <div>
        <ImageComponent
          imageSrc={IMAGE_URLS[0]}
          width={100}
          height={100}
          imageAlt={"Grid 1"}
        />
        USA
      </div>
      <div>
        <ImageComponent
          imageSrc={IMAGE_URLS[1]}
          width={100}
          height={100}
          imageAlt={"Grid 2"}
        />
        India
      </div>
      <div>
        <ImageComponent
          imageSrc={IMAGE_URLS[2]}
          width={100}
          height={100}
          imageAlt={"Grid 3"}
        />
        China
      </div>
    </div>
  );
};

export default GridComponent;
