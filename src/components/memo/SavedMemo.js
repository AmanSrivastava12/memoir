import React, { useContext } from "react";
import ContextApi from "../../context/contextApi";
import MemoSingleton from "./MemoSingleton";

function SavedMemo() {
  const state = useContext(ContextApi);
  return (
    <>
      {state.displayType === "allmemos" ? (
        <div
          className="ms-3 overflow-auto"
          style={{ width: "60%", height: "73vh" }}
        >
          {state.memos.length === 0 && "No existing memos available."}
          {state.memos.map((memo) => {
            return (
              <>
                <div className="mb-2">
                  <MemoSingleton key={memo._id} memo={memo} />
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div
          className="ms-3 overflow-auto"
          style={{ width: "60%", height: "73vh" }}
        >
          {state.searchMemos.length === 0 &&
            "No existing memos match your search."}
          {state.searchMemos.map((searchMemo) => {
            return (
              <>
                <div className="mb-2">
                  <MemoSingleton key={searchMemo._id} memo={searchMemo} />
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SavedMemo;
