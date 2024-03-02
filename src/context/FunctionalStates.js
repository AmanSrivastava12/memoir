import React, { useState } from "react";
import ContextApi from "./contextApi";

const FunctionalStates = (props) => {
  const [memos, setMemos] = useState([]);
  const [memo, setMemo] = useState("");
  const [searchMemos, setSearchMemos] = useState([]);
  const [displayType, setDisplayType] = useState("allmemos");
  const host = `${process.env.REACT_APP_BACKEND_HOST}/api`;

  const sendMail = async (name, phone, email, emailbody) => {
    const response = await fetch(`${host}/mail/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, emailbody }),
    });
    const json = await response.json();
    if (!json.success) console.log(json.err);
  };

  const viewMemos = async () => {
    const response = await fetch(`${host}/memo/view`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const allMemos = await response.json();
    setMemos(allMemos.value);
  };

  const viewSingleMemo = async (id) => {
    const response = await fetch(`${host}/memo/viewOne/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    setMemo(json.value);
  };

  const addMemo = async (title, context, ttr, category) => {
    category = category.split(" ").join("");
    const response = await fetch(`${host}/memo/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, context, ttr, category }),
    });
    const json = await response.json();
    setMemos(memos.concat(json.value));
  };

  const deleteMemo = async (id) => {
    const response = await fetch(`${host}/memo/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!json.success) console.log(json.err || json.error);
    setMemos(memos.filter((memo) => memo._id !== id));
  };

  const updateMemo = async (id, title, context, ttr, category) => {
    category = category.split(" ").join("");
    const response = await fetch(`${host}/memo/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, context, ttr, category }),
    });
    const json = await response.json();
    setMemo(json.value);
    let newMemos = JSON.parse(JSON.stringify(memos));
    for (let index = 0; index < memos.length; index++) {
      if (memos[index]._id === id) {
        newMemos[index].title = title;
        newMemos[index].context = context;
        newMemos[index].ttr = ttr;
        newMemos[index].category = category;
        break;
      }
    }
    setMemos(newMemos);
  };

  const searchMemo = async (searchQuery) => {
    const response = await fetch(`${host}/memo/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchQuery }),
    });
    const json = await response.json();
    setSearchMemos(json.value);
  };

  return (
    <ContextApi.Provider
      value={{
        sendMail,
        memos,
        setMemos,
        memo,
        setMemo,
        viewMemos,
        viewSingleMemo,
        addMemo,
        updateMemo,
        deleteMemo,
        searchMemo,
        searchMemos,
        displayType,
        setDisplayType,
      }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};

export default FunctionalStates;
