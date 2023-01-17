import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-robot services__icon"></i>
            <h3 className="services__title">
              Machine <br /> Learning
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i
              className="uil uil-arrow-right 
                services__button-icon"
            ></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times
                        services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                Machine Learning Engineer
              </h3>

              <p className="services__modal-description">
                Service with more than 4 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                                 services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Data mining or extracting usable data from valuable data
                    sources.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                    services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Analyzing large amounts of information to find patterns and
                    solutions.
                  </p>
                </li>

                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                   services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Developing prediction systems and machine learning
                    algorithms.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
   services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Deploying both deep learning and machine learning algorithms.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Data <br /> Analysis
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-arrow-right services__button-icon"
            ></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times
                services__modal-close"
              ></i>
              <h3 className="services__modal-title">Data Analyst</h3>
              <p className="services__modal-description">
                Service with more than 4 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                         services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I develop power bi and tableau dashboards and reports.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                      services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Creating visualisations of data.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
      services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Organising data in to usable formats.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
           services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    Analysing data to find answers to specific questions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i
              className="uil uil-arrow-right 
              services__button-icon"
            ></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times
        services__modal-close"
              ></i>
              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Service with more than 4 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                 services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                  services__modal-icon"
                  ></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
                <li className="services__modal-services">
                  <i
                    className="uil uil-check-circle
                 services__modal-icon"
                  ></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
