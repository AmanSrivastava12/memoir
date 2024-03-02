import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/general/Home";
import Memo from "./components/general/Memo";
import About from "./components/general/About";
import Contact from "./components/general/Contact";
import MemoSingletonBrief from "./components/memo/MemoSingletonBrief";
import MemoSingletonUpdate from "./components/memo/MemoSingletonUpdate";
import FunctionalStates from "./context/FunctionalStates";

function App() {
  return (
    <>
      <FunctionalStates>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/memo" element={<Memo />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route
              exact
              path="/memo/memoinbrief"
              element={<MemoSingletonBrief />}
            />
            <Route
              exact
              path="/memo/memoinbrief/update"
              element={<MemoSingletonUpdate />}
            />
          </Routes>
        </Router>
      </FunctionalStates>
    </>
  );
}

export default App;
