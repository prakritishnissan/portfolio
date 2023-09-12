import React, { useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* ------------------- BTECH ---------------- */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech - EE</h3>
                <span className="qualification__subtitle">
                  {" "}
                  NIT, Silchar <br /> Score : 8.15 CGPA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* ------------------- 12th ---------------- */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">10 + 2, Science</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Crescent Academy, Jorhat <br /> Score : 83.4%
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2019
                </div>
              </div>
            </div>
            {/* ------------------- 10th ---------------- */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10TH</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Don Bosco High School, Baghchung, Jorhat
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* ------------------- Obiettivo ---------------- */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Board Member</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Obiettivo, Photography Club{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* ------------------- incand ---------------- */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Design Head</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Incandesence, NIT Silchar
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - 2023
                </div>
              </div>
            </div>
            {/* ------------------- Electra ---------------- */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Member</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Electra Society, NIT Silchar{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
