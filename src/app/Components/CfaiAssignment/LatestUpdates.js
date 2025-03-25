import React from "react";
import Image from "next/image";
import "./LatestUpdates.css";

const LatestUpdates = () => {
  return (
    <div className="updatescontainer">
      <h1 className="updates__title">Latest KC Updates</h1>
      <div className="updates__content">
        <div className="updates__applycard">
          <h1 className="updates__carditemtitle">{`We're Hiring!`}</h1>
          <div className="updates__carditemtext">
            KC continues recruitments for its offices across India and Asia even
            during the unprecedented times of Covid.
          </div>
          <button className="updates__applybtn">Apply now</button>
        </div>
        <div className="updates__carditemslist">
          <div className="updates__carditem">
            <div className="updates_cardimgwrap">
              <Image
                className="updates__cardimg"
                src="/cfai/updates1.svg"
                alt="updates img1"
                width={100}
                height={100}
              />
            </div>
            <p className="updates__carditemagency">
              American International Recruitment Council
            </p>
            <p className="updates__carditemcert">Certified Agents</p>
            <p className="updates__carditemdates">October 2018 - 2028</p>
          </div>
          <div className="updates__carditem">
            <div className="updates_cardimgwrap">
              <Image
                className="updates__cardimg"
                src="/cfai/updates2.svg"
                alt="updates img2"
                width={100}
                height={100}
              />
            </div>
            <p className="updates__carditemagency">The British Council</p>
            <p className="updates__carditemcert">Advanced Agent Certificate</p>
            <p className="updates__carditemdates">August 2016 - 2018</p>
          </div>
        </div>
      </div>
      <a className="updates__morebtn">More News &gt;</a>
    </div>
  );
};

export default LatestUpdates;
