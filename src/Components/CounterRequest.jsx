import axios from "axios";
import React, { useEffect, useState } from "react";
import Btn from "./Button";

const CounterRequest = () => {
  //states
  const [time, setTime] = useState(true);
  const [data, setData] = useState({});
  let Max_Limit = 0;

  //each 30 sec create Req

  // console.log(data);
  const getData = async () => {
    let response = {};
    if (Max_Limit < 5) {
      response = await axios.get("http://127.0.0.1:8080/details.json");
      console.log(response);
    }
    Max_Limit++;
    setData(response.data);
  };

  // useEffect mounting
  useEffect(() => {
    const StopReq = setInterval(getData, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // unmount
    return () => clearInterval(StopReq);
  }, []);

  return (
    <div>
      <Btn text="Delete Request" color="error" outline="outlined"></Btn>
      <Btn text="Stop Request" color="primary" outline="contained"></Btn>
    </div>
  );
};

export default CounterRequest;
