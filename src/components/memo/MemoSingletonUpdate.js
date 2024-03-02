import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../../context/contextApi";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

function MemoSingletonUpdate() {
  const state = useContext(ContextApi);
  const refHeight = useRef(null);
  const [titleVal, setTitleVal] = useState(state.memo.title);
  const [contextVal, setContextVal] = useState(
    state.memo.context.replace(/\s{2,}/g, " ").trim()
  );
  const [categoryVal, setCategoryVal] = useState(state.memo.category);
  const [readTime, setReadTime] = useState(state.memo.ttr);
  const [rowNum, setRowNum] = useState(0);
  useEffect(() => {
    setReadTime(
      parseFloat(
        0.008 *
          contextVal.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length
      ).toFixed(3)
    );
    setRowNum(refHeight.current.scrollHeight / 24);
  }, [contextVal]);
  const handleChangeofContext = (e) => {
    changeSize(e);
    setContextVal(e.target.value);
  };
  const changeSize = (e) => {
    if (e.target.offsetHeight < e.target.scrollHeight) {
      setRowNum(rowNum + 1);
    }
    // can use while for copying scenarios
  };
  const handleSubmit = async () => {
    titleVal === ""
      ? await state.updateMemo(
          state.memo._id,
          "No title",
          contextVal,
          readTime,
          categoryVal
        )
      : await state.updateMemo(
          state.memo._id,
          titleVal,
          contextVal,
          readTime,
          categoryVal
        );
    await state.viewSingleMemo(state.memo._id);
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
          to="/memo/memoinbrief"
          className="bgLight clrDark position-absolute"
          style={{ top: "14vh", left: "1vw" }}
        >
          <i className="fa-solid fa-xl fa-circle-xmark"></i>
        </Link>
        <div
          className="mx-auto d-flex mb-5 flex-column rounded-4 bgWhite"
          style={{
            width: "90vw",
            boxShadow: "10px 10px 5px rgb(95 78 132)",
          }}
        >
          <input
            className="fs-3 mx-5 mt-4 mb-3 px-2"
            value={titleVal}
            onChange={(e) => setTitleVal(e.target.value)}
          ></input>
          <textarea
            className="mx-5 px-2"
            value={contextVal}
            onChange={handleChangeofContext}
            rows={rowNum}
            ref={refHeight}
          ></textarea>
          <input
            className="fs-6 mx-5 mt-3 px-2"
            value={categoryVal}
            onChange={(e) => setCategoryVal(e.target.value)}
          ></input>
          <div className="px-5 mt-2 d-flex justify-content-between">
            <p className="fw-bold clrDark">{readTime} minutes read</p>
            <Link
              to="/memo/memoinbrief"
              className="pb-3 bgWhite"
              onClick={handleSubmit}
            >
              <button
                className="border border-0 bgWhite"
                disabled={contextVal.length < 10 || categoryVal.length < 2}
              >
                <i className="fa-solid fa-check fa-xl clrDark"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MemoSingletonUpdate;
