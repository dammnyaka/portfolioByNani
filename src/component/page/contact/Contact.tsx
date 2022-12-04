import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "../../Map/Map";

import "./Contact.scss";

const Contact = () => {
  const form = useRef<any>();

  const [formData, setFormdata] = useState({
    loading: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          setFormdata({ ...formData, loading: false });
        },
        function (error) {
          // console.log("FAILED...", error);
          setTimeout(() => {
            setFormdata({ ...formData, loading: false });
          }, 5000);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <header>Header</header>
        <p>asdasdasd</p>
        <div className="form">
          <form ref={form} onSubmit={handleSubmit}>
            <ul>
              <li>
                <input name="from_name" type="text" placeholder="Name" required />
              </li>
              <li>
                <input name="from_email" type="email" placeholder="Email" required />
              </li>
              <li>
                <textarea name="message" placeholder="Message...." required />
              </li>
              <li>
                <button type="submit">{formData.loading ? "Sending..." : "Send"}</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
