import React, { useState, useEffect, useContext } from "react";
import ContextApi from "../../context/contextApi";

function CreateMemo() {
  const state = useContext(ContextApi);
  const [titleVal, setTitleVal] = useState("");
  const [contextVal, setContextVal] = useState("");
  const [categoryVal, setCategoryVal] = useState("");
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    setReadTime(
      parseFloat(
        0.008 *
          contextVal.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length
      ).toFixed(3)
    );
  }, [contextVal]);
  const countCharacters = (text) => {
    const spaceRegex = / /g;
    const matches = text.match(spaceRegex);
    const charlen = text.length;
    if (matches != null) return charlen - matches.length;
    else return charlen;
  };
  const clearText = () => {
    setTitleVal("");
    setContextVal("");
    setCategoryVal("");
  };
  const handleSubmit = async () => {
    titleVal === ""
      ? await state.addMemo("No title", contextVal, readTime, categoryVal)
      : await state.addMemo(titleVal, contextVal, readTime, categoryVal);
    clearText();
  };
  return (
    <>
      <div className="me-3" style={{ width: "40%" }}>
        <div className="d-flex">
          <input
            className="px-2 py-1 mb-1 fs-6"
            style={{ width: "60%" }}
            placeholder="Enter memo title"
            value={titleVal}
            onChange={(e) => setTitleVal(e.target.value)}
          ></input>
          <input
            className="px-2 py-1 mb-1 fs-6"
            style={{ width: "40%" }}
            placeholder="Enter memo category"
            value={categoryVal}
            onChange={(e) => setCategoryVal(e.target.value)}
          ></input>
        </div>
        <textarea
          className="px-2 py-1 fs-6 w-100"
          style={{ height: "61.5vh" }}
          placeholder="Enter memo context"
          value={contextVal}
          onChange={(e) => setContextVal(e.target.value)}
        ></textarea>
        <div className="w-100 d-flex px-1 clrDark">
          <div style={{ width: "38%" }}>{readTime} minutes read</div>
          <div style={{ width: "46%" }}>
            {" "}
            {
              contextVal.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {countCharacters(contextVal)} characters
          </div>
          <button
            className="border border-0 bgLight"
            style={{ width: "8%" }}
            disabled={
              titleVal === "" && contextVal === "" && categoryVal === ""
            }
          >
            <i
              className="fa-solid fa-lg fa-broom clrDark"
              onClick={clearText}
            ></i>
          </button>
          <button
            className="border border-0 ms-2 bgLight"
            style={{ width: "8%" }}
            disabled={contextVal.length < 10 || categoryVal.length < 2}
          >
            <i
              className="fa-solid fa-lg fa-paper-plane clrDark"
              onClick={handleSubmit}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateMemo;
