import { Button } from "@mui/material";
import React from "react";

const Btn = ({ text, color, outline }) => {
  return (
    <Button color={color} variant={outline}>
      {text}
    </Button>
  );
};

export default Btn;
