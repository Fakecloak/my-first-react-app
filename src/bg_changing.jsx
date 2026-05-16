import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function BgChanger() {

  const onButtonClick = (color) => () => {

    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
