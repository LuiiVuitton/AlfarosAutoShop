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

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-landing d-flex align-items-center">
        <div className="container">
          <div className="row">
            {/* Text Column */}
            <div className="col-md-6 text-left">
              <h1 className="fade-in">
                {" "}
                Your trusted car detailing and dent repair experts.
              </h1>
              <p className="fade-in-delay fs-5">Located in Gaithersburg, MD</p>
              <div className="btn-group fade-in-delay">
                <a href="#contact" className="btn btn-primary">
                  Contact us
                </a>
              </div>
              <p className="fade-in-delay fs-6 pt-3">
                Schedule a free consultation!
              </p>
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-right">
              <img
                src={car}
                alt="Car"
                className="img-fluid car-image slide-in-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Call-to-Action Section */}
      <section
        className="parallax-section"
        style={{
          backgroundImage: `url(${parallaxBackground1})`,
        }}
      >
        <div className="parallax-content text-center">
          <h2>Quality You Can Trust</h2>
          <p>Experience the best detailing and dent repair services today.</p>
          <a href="#book" className="btn btn-primary btn-lg">
            Book Now
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column (Left) */}
            <div className="col-md-6">
              <h2 className="text-start mb-4" style={{ fontWeight: "bold" }}>
                Location & Hours
              </h2>
              <p style={{ fontSize: "1.2rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                commodi neque quis eligendi ducimus
              </p>
              <p style={{ fontSize: "1.2rem" }}>Lorem ipsum dolor</p>
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
                Monday - Friday: 9:00 AM - 5:00 PM
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
            </div>

            {/* Map Column (Right) */}
            <div className="col-md-6">
              <h3 className="mb-4 text-center">Visit Our Shop</h3>
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
                      <FaCheck /> {"    "}Ceramic Coating
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

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold">
            Frequently Asked Questions
          </h2>
          <div className="row mt-4">
            {/* Question 1 */}
            <div className="col-md-12">
              <div className="card shadow-sm mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    What is included in the basic detailing package?
                  </h5>
                  <p className="card-text">
                    Our basic package includes an exterior wash and dry, wax
                    application, tire cleaning and dressing, interior vacuuming,
                    and window cleaning.
                  </p>
                </div>
              </div>
            </div>
            {/* Question 2 */}
            <div className="col-md-12">
              <div className="card shadow-sm mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    How long does a full detail take?
                  </h5>
                  <p className="card-text">
                    A full detail typically takes between 3 to 5 hours,
                    depending on the size and condition of the vehicle.
                  </p>
                </div>
              </div>
            </div>
            {/* Question 3 */}
            <div className="col-md-12">
              <div className="card shadow-sm mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    Do you offer mobile detailing services?
                  </h5>
                  <p className="card-text">
                    Yes, we offer mobile detailing services. We can come to your
                    home or workplace for added convenience.
                  </p>
                </div>
              </div>
            </div>
            {/* Question 4 */}
            <div className="col-md-12">
              <div className="card shadow-sm mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    What is paintless dent repair (PDR)?
                  </h5>
                  <p className="card-text">
                    Paintless dent repair (PDR) is a technique used to remove
                    minor dents from the body of a car without damaging the
                    paint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>
                  "Alfaros Auto Shop gave my car a brand new look! Great
                  service!"
                </p>
                <footer className="blockquote-footer">John Doe</footer>
              </blockquote>
            </div>
            <div className="col-md-6">
              <blockquote className="blockquote">
                <p>
                  "Quick and professional dent repair service. Highly
                  recommend."
                </p>
                <footer className="blockquote-footer">Jane Smith</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Call-to-Action Section */}
      <section
        className="parallax-section"
        style={{
          backgroundImage: `url(${parallaxBackground1})`,
        }}
      >
        <div className="parallax-content text-center">
          <h2>Quality You Can Trust</h2>
          <p>Experience the best detailing and dent repair services today.</p>
          <a href="#book" className="btn btn-primary btn-lg">
            Book Now
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">Have any questions? We're here to help!</p>
          <div className="text-center">
            <a
              href="mailto:info@alfarosauto.com"
              className="btn btn-outline-secondary btn-lg"
            >
              Send an Email
            </a>
            <p className="mt-3">
              or call us at <strong>(555) 123-4567</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
