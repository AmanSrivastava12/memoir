import React, { useContext, useState } from "react";
import ContextApi from "../../context/contextApi";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const state = useContext(ContextApi);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailbody, setEmailbody] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    await state.sendMail(name, phone, email, emailbody);
    setName("");
    setPhone("");
    setEmail("");
    setEmailbody("");
  }
  return (
    <>
      <Navbar />
      <div
        className="py-5 bgLight"
        style={{
          minHeight: "78.3vh",
        }}
      >
        <div
          className="mx-auto d-flex flex-column rounded-4 bgWhite"
          style={{
            width: "80vw",
            boxShadow: "10px 10px 5px rgb(95 78 132)",
          }}
        >
          <h3 className="fs-3 text-center m-4">Contact Us</h3>
          <div className="mx-3">
            <input
              type="text"
              placeholder="Enter your Name"
              className="py-1 px-2 w-100 mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="py-1 px-2 w-100 mb-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your Email"
              className="py-1 px-2 w-100 mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="w-100 py-1 px-2 mb-2"
              rows={4}
              placeholder="How may we help you?"
              value={emailbody}
              onChange={(e) => setEmailbody(e.target.value)}
            ></textarea>
          </div>
          <button
            className="borderBottom mb-3 d-flex fw-bold mx-auto border border-0 clrDark bgWhite"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
