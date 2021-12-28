import axios from "axios";
import React, { useEffect, useState } from "react";
import Btn from "./Button";
import { UseCounter } from "./UseCounter";

const CustomReq = () => {
  const Limit = 5;
  const interval = 2000;

  const [success, setSuccess] = useState(true);
  const { countValue, setCount } = UseCounter(Limit, interval);

  const getData = async () => {
    const res = await axios.get("http://192.168.1.106:8080/details.json");
    //
    if (res.data.status === "success") setSuccess(false);

    console.log(res.data);
  };
  useEffect(() => {
    success && getData();
  }, [countValue]);

  return (
    <div>
      <Btn text="Delete Request" color="error" outline="outlined"></Btn>
      <Btn text="Stop Request" color="primary" outline="contained"></Btn>
    </div>
  );
};

export default CustomReq;
