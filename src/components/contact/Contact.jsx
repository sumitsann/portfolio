import "./contact.css";
import Phone from "../../img/phone.jpg";
import Email from "../../img/email.jpg";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6plee09",
        "service_6plee09",
        formRef.current,
        "tQOV8fOJk2unfY9sh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Feel Free To Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 123 456 7890
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact@sumit.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              123 Main Street, Dallas, TX 75062
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let me know.</b>Feel free to be in touch whenever you have any
            issues with website development.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you so much"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
