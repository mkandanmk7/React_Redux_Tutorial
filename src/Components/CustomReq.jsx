import axios from "axios";
import React, { useEffect } from "react";
import Btn from "./Button";
import { UseCounter } from "./UseCounter";

const CustomReq = () => {
  const Limit = 5;
  const interval = 2000;

  const { countValue, setCount } = UseCounter(Limit, interval);

  const getData = async () => {
    const res = await axios.get("http://127.0.0.1:8080/details.json");
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, [countValue]);

  return (
    <div>
      <Btn text="Delete Request" color="error" outline="outlined"></Btn>
      <Btn text="Stop Request" color="primary" outline="contained"></Btn>
    </div>
  );
};

export default CustomReq;
