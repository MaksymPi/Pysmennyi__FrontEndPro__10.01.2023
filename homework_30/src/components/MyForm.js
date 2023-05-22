import React, { useState } from "react";
import MyInputForm from "./MyInputForm";
import MyTableForm from "./MyTableForm";

export default function MyForm() {
  const [list, setList] = useState([]);

  const masterData = (data) => {
    setList((prevList) => [...prevList, data]);
  };
  return (
    <div>
      <MyInputForm getData={masterData} />
      <MyTableForm data={list} />
    </div>
  );
}
