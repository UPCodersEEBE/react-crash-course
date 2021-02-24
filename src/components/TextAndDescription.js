import React from "react";

export default function TextAndDescription({ title, text }) {
  return (
    <>
      <div className="title">{title}</div>
      <div>{text}</div>
    </>
  );
}
