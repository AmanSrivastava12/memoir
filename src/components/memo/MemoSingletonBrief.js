import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../../context/contextApi";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

function MemoSingletonBrief() {
  const state = useContext(ContextApi);
  const handleDeletion = async () => {
    await state.deleteMemo(state.memo._id);
    await state.viewMemos();
    state.setMemo("");
  };
  return (
    <>
      <Navbar />
      <div
        className="py-5 bgLight"
        style={{
          minHeight: "78.3vh",
        }}
      >
        <Link
          to="/memo"
          className="bgLight clrDark position-absolute"
          style={{ top: "14vh", left: "1vw" }}
        >
          <i className="fa-solid fa-xl fa-circle-arrow-left"></i>
        </Link>
        <div
          className="mx-auto d-flex mb-5 flex-column rounded-4 bgWhite"
          style={{
            width: "80vw",
            boxShadow: "10px 10px 5px rgb(95 78 132)",
          }}
        >
          <h3 className="fs-3 text-center m-4">{state.memo.title}</h3>
          <p className="px-5">{state.memo.context} </p>
          <div className="px-5 d-flex justify-content-between">
            <p className="clrDark">#{state.memo.category}</p>
            <p className="fw-bold clrDark">{state.memo.ttr} minutes read</p>
            <div>
              <Link to="update" className="pb-3 mx-2 bgWhite clrDark">
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
              <Link
                to="/memo"
                className="pb-3 mx-2 bgWhite clrDark"
                onClick={() => {
                  handleDeletion();
                }}
              >
                <i className="fa-solid fa-trash clrDark"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemoSingletonBrief;
