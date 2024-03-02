import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
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
          className="mx-auto d-flex rounded-4 bgWhite"
          style={{
            boxShadow: "10px 10px 5px rgb(95 78 132)",
            width: "80vw",
          }}
        >
          <div className="d-flex flex-column m-4" style={{ width: "68%" }}>
            <h1 className="p-3 fs-3">Give words to your thoughts</h1>
            <p className="p-3 pt-0">
              Your thoughts are like puzzles. Not being able to articulate one’s
              thoughts happens to almost everyone. Turn your message into your
              narrative. You can express yourself brilliantly and reap the
              benefits. Express with clarity. Articulate your complex ideas more
              simply. Through this website, read and understand to communicate
              more effectively. Confident and persuasive is the only way to go
              through life. Channel your thoughts to words.
            </p>
          </div>
          <div
            className="d-flex align-items-center justify-content-center px-5"
            style={{ width: "32%" }}
          >
            <img
              src={require("../../images/home.jpg")}
              style={{ width: "280px", height: "210px" }}
              alt="writing pad"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
