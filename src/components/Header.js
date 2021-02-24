import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>I am a header</div>
      <Link to="/">
        <div style={{ color: "white", marginLeft: 25, marginRight: 25 }}>
          Home
        </div>
      </Link>
      <Link to="/repos">
        <div style={{ color: "white" }}>Repositories</div>
      </Link>
    </div>
  );
}
