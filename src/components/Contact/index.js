import "./index.scss";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const contactArray = "Contact me".split("");
  const form = useRef();
  const position = [44.8651735, -0.5698554, 17];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92ii8dg",
        "template_ctbn6d9",
        form.current,
        "0pwW7FEU08FqSpC4D"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message. please try again");
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities. However, if you have other request
            or question, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    nam="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Nicolas RIERA,
          <br />
          France,
          <br />
          30 Allée Haussmann
          <br />
          33300 BORDEAUX
          <br />
          <span>nrierapro@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={30} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Nicolas lives here.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-clip-rotate" />
    </>
  );
};

export default Contact;
