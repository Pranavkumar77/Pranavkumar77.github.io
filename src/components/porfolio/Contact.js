import React, { useState } from "react";
import useWindowDimensions from "../utils/WindowDimension";

const Contact = ({ show }) => {
  const [contactData, setContactData] = useState({});
  const [submitMsg, setSubmitMsg] = useState({});
  const [validationMsg, setValidationMsg] = useState({});

  const { width } = useWindowDimensions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const validateField = (contactData) => {
    //Email errors
    const errors = {};
    if (!contactData.email) {
      errors.email = "Check Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contactData.email)) {
      errors.email = "Invalid email address";
    }
    //Name Errors
    if (!contactData.name || contactData.name.length < 6) {
      errors.name = "Please enter fullname";
    }
    return setValidationMsg(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField(contactData);
    if (contactData.name && contactData.email) {
      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          setContactData({});
          setSubmitMsg({
            text: "Thanks, your message is sent successfully.",
            classText: "mail-success",
          });
        } else {
          setSubmitMsg({
            text: "Error",
            classText: "mail-error",
          });
        }
      };
      xhr.send(data);
    }
  };

  return (
    <div
      className={`card-inner animated ${
        width > 1023 ? (show ? "fadeInLeft active" : "fadeOutLeft hidden") : ""
      }`}
      id="contact-card"
    >
      <div className="card-wrap">
        <div className="content contacts">
          <div className="title">
            <span className="first-word">Get</span> in Touch
          </div>

          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12 py-4">
              <div id="social-test">
                <ul className="social">
                  <li className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/pranavkumar-patil-a43aa4160/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="github">
                    <a href="https://github.com/Pranavkumar77" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="jsfiddle">
                    <a
                      href="https://dev.to/pranavkumar77"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img align="center" src="https://tse2.mm.bing.net/th?id=OIP.1kt0FHPqyem6vJkp2F5p2AHaHa&pid=Api&P=0"
           alt="pranavkumar77" height="16" width="20" style={{'margin': '0'}}/>
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      href="https://twitter.com/PranavP36771400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a
                      href="https://www.instagram.com/pranav_patil77/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/pranav.patil.14418101"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  {/* <li className="map-marker">
                    <a
                      href="https://www.google.co.in/maps/contrib/109147557342255815295/contribute/@19.7474337,73.6666569,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en%26authuser=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </a>
                  </li> */}
                  {/* <li className="youtube">
                    <a
                      href="https://www.youtube.com/channel/UCdgTDgicQbRDMWNEnCNW9JA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li> */}
                  {/* <li className="whatsapp">
                    <a href="https://wa.me/919730614181" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="phone">
                    <a href="tel:+919730614181">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </a>
                  </li> */}
                  {/* <li className="envelope-o">
                    <a href="mailto:hmahajan38@gmail.com">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="content contacts">
          <div className="title">
            <span className="first-word">Contact</span> Form
          </div>

          <div className="row">
            <div className="col-12 py-4">
              <div className="contact_form">
                {submitMsg && (
                  <div className={submitMsg.classText}>
                    <p>{submitMsg.text}</p>
                  </div>
                )}
                <form
                  id="contact-form"
                  method="post"
                  action="https://formspree.io/f/mrgdenby"
                  noValidate="novalidate"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
                      <div className="group-val">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value={contactData.name || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {validationMsg && (
                        <span className="d-block text-danger mt-1">{validationMsg.name}</span>
                      )}
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 mb-4">
                      <div className="group-val">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          value={contactData.email || ""}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      {validationMsg && (
                        <span className="d-block text-danger mt-1">{validationMsg.email}</span>
                      )}
                    </div>
                    <div className="col-xl-12 col-md-12 col-sm-12 mb-4">
                      <div className="group-val">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          value={contactData.message || ""}
                          onChange={(e) => handleChange(e)}
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <button type="submit">
                      <span className="text">Send Message</span>
                      <span className="arrow"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
