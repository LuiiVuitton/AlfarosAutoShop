import "../components/Home.css";
import car from "../assets/images/CarTransparentBackground.png";
import parallaxBackground1 from "../assets/images/bmw1.jpg"; // Import parallax background image

import service1 from "../assets/images/Car3.png";
import service2 from "../assets/images/Car4.png";
import service3 from "../assets/images/Car2.png";

import { CiPhone } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

import { FaCheck } from "react-icons/fa";

import { FaStar } from "react-icons/fa";

import { FaQuestion } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

function Home() {
  return (
    <>
      <div id="Home">
        {/* Parallax Call-to-Action Section */}
        <section
          className="parallax-section"
          style={{
            backgroundImage: `url(${parallaxBackground1})`,
          }}
        >
          <div className="parallax-content text-center">
            <h2>Quality You Can Trust</h2>
            <p>Experience the best detailing and dent repair services.</p>
            <a
              href="mailto:lventura@alfarosautoshop.com"
              className="btn btn-primary btn-lg"
            >
              Book Now
            </a>
          </div>
        </section>
      </div>

      <div id="About">
        {/* About Us Section */}
        <section className="about-us py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Text Column (Left) */}
              <div className="col-md-6 pb-3">
                <h2 className="text-start mb-4" style={{ fontWeight: "bold" }}>
                  Location & Hours
                </h2>

                <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  8061 Snouffer School Rd, Gaithersburg, MD 20879
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  Located behind the car dealership.
                </p>
                <p style={{ fontSize: "1.2rem", color: "red" }}>
                  *Appointments Only Please schedule your visit in advance to
                  ensure availability*
                </p>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  <FaRegClock />
                  {"    "}Hours of Operation:
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  Monday - Friday: 10:00AM - 5:00PM
                </p>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  <CiPhone />
                  {"    "}
                  Phone Number:
                </p>
                <p style={{ fontSize: "1.2rem" }}>301-971-7492</p>

                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  <CiMail />
                  {"    "}
                  Email:
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  lventura@alfarosautoshop.com
                </p>
              </div>

              {/* Map Column (Right) */}
              <div className="col-md-6 pt-2">
                <div
                  className="map-container"
                  style={{ width: "100%", height: "400px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.5629331460655!2d-77.1647176!3d39.1619215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7d313e3ead777%3A0xc2b2a075b1a54e05!2s8061%20Snouffer%20School%20Rd%2C%20Gaithersburg%2C%20MD%2020879!5e0!3m2!1sen!2sus!4v1728905386432!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alfaros Auto Shop Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="Services">
        {/* Services Section */}
        <section className="services-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center display-5 fw-bold">
              Auto Detail packages
            </h2>
            <div className="row mt-4">
              {/* Service1 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={service1}
                    alt="Car Detailing"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-start">
                    <h3 className="card-title">
                      Basic Interior/Exterior Detail: $50
                    </h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <FaCheck /> {"    "}
                        Exterior Wash and Dry
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Magic Wax Sealant
                      </li>
                      <li className="list-group-item">
                        <FaCheck /> {"    "}
                        Tire Cleaning and Dressing
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Window Cleaning
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Interior Vacuuming
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service2 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={service2}
                    alt="Paintless Dent Repair"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-start">
                    <h3 className="card-title">
                      Full Interior/Exterior Detail: ($200 - $350)
                    </h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <FaStar /> All Basic Package Services included
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Polishing
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Interior Shampoo
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Leather Conditioning
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <FaCheck /> {"    "}
                        Interior Floor Mats
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <img
                    src={service3}
                    alt="Custom Packages"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-start">
                    <h3 className="card-title">
                      Specialized Services: (Add ons)
                    </h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <FaCheck /> {"    "}Paint Correction
                      </li>

                      <li className="list-group-item">
                        <FaCheck /> {"    "}Engine Bay Cleaning
                      </li>
                      <li className="list-group-item">
                        <FaCheck /> {"    "}Window Cleaning
                      </li>
                      <li className="list-group-item">
                        <FaCheck /> {"    "}Headlight Restoration
                      </li>
                      <li className="list-group-item">
                        <FaCheck /> {"    "}Odor Removal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold">
            FAQ <FaQuestion />
          </h2>
          <div className="accordion mt-4" id="faqAccordion">
            {/* Question 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is included in the basic detailing package?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Our basic package includes an exterior wash and dry, wax
                  application, tire cleaning and dressing, interior vacuuming,
                  and window cleaning.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How long does a full detail take?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  A full detail typically takes between 3 to 5 hours, depending
                  on the size and condition of the vehicle.
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Do you offer mobile PDR?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, we offer mobile PDR services. We can come to your home or
                  workplace for added convenience.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What is paintless dent repair (PDR)?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Paintless dent repair (PDR) is a technique used to remove
                  minor dents from the body of a car without damaging the paint.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PDR Section */}
      <section className="pdr-section py-5 bg-white">
        <div className="container">
          <div className="row align-items-center mt-4">
            {/* PDR Image */}
            {/* Image Column */}
            <div className="col-md-6 text-right">
              <img
                src={car}
                alt="Car"
                className="img-fluid car-image slide-in-right"
              />
            </div>

            {/* PDR Information */}
            <div className="col-md-6">
              <h3 className="fw-bold">Paintless Dent Repair (PDR)</h3>
              <p>
                Paintless Dent Repair (PDR) is a method of removing minor dents
                and dings from a vehicle's body without the need for traditional
                body shop repairs like painting or using fillers. It is a highly
                efficient process for maintaining the original factory finish of
                your car while saving both time and money.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaCheck /> Fast and affordable
                </li>
                <li className="list-group-item">
                  <FaCheck /> Preserves your vehicle’s original paint
                </li>
                <li className="list-group-item">
                  <FaCheck /> Environmentally friendly with no need for
                  chemicals or fillers
                </li>
                <li className="list-group-item">
                  <FaCheck /> Ideal for minor dents, dings, and hail damage
                </li>
              </ul>
              <a
                href="mailto:lventura@alfarosautoshop.com"
                className="btn btn-primary mt-4"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="Contact">
        {/* Contact Us Section */}
        <section id="contact" className="contact-section py-5">
          <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <p className="text-center">
              Have any questions? We're here to help!
            </p>
            <div className="text-center">
              <a
                href="mailto:lventura@alfarosautoshop.com"
                className="btn btn-outline-secondary btn-lg"
              >
                Send an Email
              </a>
              <p className="mt-3">
                or call us at <strong>(301) 971-7492</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
