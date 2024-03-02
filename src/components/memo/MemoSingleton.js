import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../../context/contextApi";

function MemoSingleton(props) {
  const state = useContext(ContextApi);
  return (
    <>
      <div className="w-100 px-2 pb-2 rounded-3 bgWhite clrDark">
        <div className="d-flex justify-content-between">
          <Link
            to="memoinbrief"
            className="hovering text-decoration-none text-black"
            onClick={() => {
              state.viewSingleMemo(props.memo._id);
            }}
          >
            <h5 className="pt-2 mb-0">{props.memo.title}</h5>
          </Link>
          <p className="mt-2 mb-0 mx-2">
            {"    "}#{props.memo.category}
          </p>
        </div>
        <p className="pt-1 mb-0 memoClamp clrDark">{props.memo.context}</p>
      </div>
    </>
  );
}

export default MemoSingleton;
