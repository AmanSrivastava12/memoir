import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
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
          <h3 className="fs-3 text-center m-4">About Us</h3>
          <div className="d-flex px-5">
            <img
              src={require("../../images/auth.jpg")}
              style={{ height: "200px" }}
              alt="profile"
            />
            <div className="ps-5">
              <p>
                Our mission is that every human being should feel free to
                communicate thoughts through words.
              </p>
              <p>
                I was inspired to make this website since I love writing blogs
                in my free time so that I can express my thoughts and opinions
                more clearly in a nutshell.
              </p>
              <p>You can connect with me here.</p>
              <div className="my-4 fs-5">
                <Link
                  to="https://medium.com/@amansriv"
                  target="_blank"
                  className="px-2"
                >
                  <i className="fa-brands fa-medium clrDark"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/aman-srivastava-320601215/"
                  target="_blank"
                  className="px-2"
                >
                  <i className="fa-brands fa-linkedin-in clrDark"></i>
                </Link>
                <Link
                  to="https://github.com/AmanSrivastava12"
                  target="_blank"
                  className="px-2"
                >
                  <i className="fa-brands fa-github clrDark"></i>
                </Link>
                <Link
                  to="https://twitter.com/AmanSriv12"
                  target="_blank"
                  className="px-2"
                >
                  <i className="fa-brands fa-x-twitter clrDark"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
