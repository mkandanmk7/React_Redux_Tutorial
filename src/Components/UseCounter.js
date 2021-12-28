import { useEffect, useState } from "react";

//custom hooks
export const UseCounter = (limit, interval) => {
  const [countValue, setCount] = useState(1);
  const timer = () => setCount(countValue + 1);

  useEffect(() => {
    if (countValue >= limit) return;
    console.log("Count value", countValue);
    const Stop = setInterval(timer, interval);

    return () => {
      console.log("unmount count value:", countValue);
      // console.log("unmounted");

      clearInterval(Stop);
    };
  }, [countValue]);

  return { countValue, setCount };
};
