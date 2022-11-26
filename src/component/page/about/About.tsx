import { useRef, useState } from "react";
import "./About.scss";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import Map from "../../Map/Map";

// import { TileLayer } from "react-leaflet/lib/TileLayer";
// import { MapContainer } from "react-leaflet/lib/MapContainer";
// import { TileLayer } from "react-leaflet/lib/TileLayer";

const About = () => {
  const form = useRef<any>();

  const [formData, setFormdata] = useState({
    loading: false,
    show: false,
    variant: "",
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
          console.log("SUCCESS!", response.status, response.text);
          setFormdata({ ...formData, [e.target.name]: "", loading: false });
        },
        function (error) {
          console.log("FAILED...", error);
          setTimeout(() => {
            setFormdata({ ...formData, loading: false });
          }, 5000);
        }
      );
    // console.log(form.current.from_email);
    // setTimeout(() => {
    //   setFormdata({ ...formData, loading: false });
    // }, 5000);

    e.target.reset();
  };

  // const position: any = [51.505, -0.09];

  // var OpenStreetMap_Mapnik = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  // });

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
      {/* 
      <div className="loading-bar"></div> */}
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default About;
