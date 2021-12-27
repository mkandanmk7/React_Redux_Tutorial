import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center ">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2>FakeShop</h2>
        </Link>

        <Badge badgeContent={4} color="primary">
          <ShoppingCart />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
