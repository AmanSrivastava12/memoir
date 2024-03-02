import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CreateMemo from "../memo/CreateMemo";
import SavedMemo from "../memo/SavedMemo";

function Memo() {
  return (
    <>
      <Navbar />
      <div
        className="p-3 bgLight"
        style={{
          minHeight: "78.3vh",
        }}
      >
        <div className="d-flex w-100">
          <CreateMemo />
          <hr />
          <SavedMemo />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Memo;
