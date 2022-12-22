import { useRef, useState } from "react";
import "../../css/contact me/contact-me.css";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [subValue, setSubValue] = useState("SEND");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSubValue("SENDING...");

    emailjs
      .sendForm(
        "service_gj3prpa",
        "template_dp8zzfx",
        formRef.current,
        "HIVHbOiNYTgSnCoGg"
      )
      .then(
        () => {
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSubValue("SEND");
      });
  };

  return (
    <div className="contact-me" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-me-container">
        <form className="contact-me-form" ref={formRef} onSubmit={sendEmail}>
          <input
            name="user_name"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            name="user_email"
            type="email"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="feedback-input"
            placeholder="Message"
          ></textarea>
          <input type="submit" value={subValue} />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
