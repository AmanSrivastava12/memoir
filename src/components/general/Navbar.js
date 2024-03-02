import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../../context/contextApi";

function Navbar() {
  const state = useContext(ContextApi);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      state.setDisplayType(search === "" ? "allmemos" : "searchmemos");
      await state.searchMemo(search);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);
  return (
    <>
      <nav className="w-100 bgWhite">
        <div className="d-flex justify-content-between">
          <h1 className="fs-1 py-2 ps-3 fontStyle1" style={{ width: "33.3%" }}>
            MEMOIR
          </h1>
          <ul
            className="listType d-flex justify-content-center p-0 m-0 fw-bold fontStyle2"
            style={{ width: "33.3%" }}
          >
            <li className="p-4">
              <Link
                className="text-decoration-none borderBottom clrDark"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="text-decoration-none borderBottom clrDark"
                to="/memo"
                onClick={() => {
                  state.viewMemos();
                }}
              >
                MEMOS
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="text-decoration-none borderBottom clrDark"
                to="/about"
              >
                ABOUT
              </Link>
            </li>
            <li className="p-4">
              <Link
                className="text-decoration-none borderBottom clrDark"
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div
            className="m-3 d-flex justify-content-end"
            style={{ width: "33.3%" }}
          >
            {window.location.pathname === "/memo" ? (
              <div>
                <input
                  className="m-1 px-1 searchInputBox"
                  type="text"
                  placeholder="Search Memos"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
