import React from "react";
import Image from "next/image";
import "./EventsComponent.css";

const EventsComponent = () => {
  return (
    <div className="eventscontainer">
      <h2>Webinars & Events</h2>
      <div className="events__grid">
        <div className="events__card events__card1">
          <Image
            src="/cfai/events1.svg"
            alt="Event 1"
            className="events__img"
            width={200}
            height={200}
          />
          <div className="events__details">
            <p className="events__date">Mar 19 - 05:00 PM to 07:30 PM</p>
            <h3 className="events__title">USA Virtual Admission Day</h3>
            <p className="events__description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <a className="events__registerbtn">Register Now &gt;</a>
          </div>
        </div>

        <div className="events__card">
          <Image
            src="/cfai/events2.svg"
            alt="Event 2"
            className="events__img"
            width={200}
            height={200}
          />
          <div className="events__details">
            <p className="events__date">
              May 18 - May 21 - 04:30 PM to 06:30 PM
            </p>
            <h3 className="events__title">
              New Zealand Virtual Admissions Week
            </h3>
            <p className="events__description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <a className="events__registerbtn">Register Now &gt;</a>
          </div>
        </div>

        <div className="events__card">
          <Image
            src="/cfai/events3.svg"
            alt="Event 3"
            className="events__img"
            width={200}
            height={200}
          />
          <div className="events__details">
            <p className="events__date">
              May 24 - May 28 - 04:00 PM to 06:00 PM
            </p>
            <h3 className="events__title">UK Virtual Admissions Week</h3>
            <p className="events__description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <a className="events__registerbtn">Register Now &gt;</a>
          </div>
        </div>
      </div>
      <a className="events__morebtn">See More &gt;</a>
    </div>
  );
};

export default EventsComponent;
