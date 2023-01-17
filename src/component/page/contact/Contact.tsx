import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import Map from "../../Map/Map";

import "./Contact.scss";

const variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -200,
    opacity: 0,
  },
};

const secVariant = {
  open: (custom: any) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
  closed: {
    y: 200,
    opacity: 0,
  },
};

const Contact = () => {
  const form = useRef<any>();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

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
          setLoading(false);
        },
        function (error) {
          // console.log("FAILED...", error);
          const interval = setTimeout(() => {
            setLoading(false);
          }, 4000);

          return () => clearTimeout(interval);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <motion.div
        initial="closed"
        whileInView="open"
        exit="closed"
        viewport={{ amount: 0.4 }}
        variants={{ closed: { opacity: 0, transition: { delay: 0.15 } }, open: { opacity: 1 } }}
        className="contact-form"
      >
        <motion.header variants={variants}>
          <h2>Contact me</h2>
        </motion.header>
        <motion.p variants={variants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </motion.p>
        <motion.section initial="closed" whileInView="open" viewport={{ amount: 0.6 }} exit="closed" className="form">
          <form ref={form} onSubmit={handleSubmit}>
            <ul>
              <motion.li variants={secVariant} custom={1}>
                <input name="from_name" type="text" placeholder="Name" required />
                <span className="form_line"></span>
              </motion.li>
              <motion.li variants={secVariant} custom={2}>
                <input name="from_email" type="email" placeholder="Email" required />
                <span className="form_line"></span>
              </motion.li>
              <motion.li variants={secVariant} custom={3}>
                <textarea name="message" placeholder="Message...." required />
                <span className="form_line"></span>
              </motion.li>
            </ul>
            <motion.button className="form_button" variants={secVariant} custom={3} type="submit">
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.section>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ amount: 0.4 }}
        // animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.15 }}
        className="map"
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Contact;
