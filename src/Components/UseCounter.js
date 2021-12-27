import { useEffect, useState } from "react";

export const UseCounter = (limit, interval) => {
  const [countValue, setCount] = useState(0);
  const timer = () => setCount(countValue + 1);

  useEffect(() => {
    if (countValue > limit) return;
    const id = setInterval(timer, interval);

    return () => {
      console.log("unmounted");
      clearInterval(id);
    };
  }, [countValue]);

  return { countValue, setCount };
};
