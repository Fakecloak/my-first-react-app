import { useState } from 'react';

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function BgChanger() { 
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [clickCount, setClickCount] = useState(0);
  const onButtonClick = (color) => () => {
    setClickCount((clickCount) => clickCount + 1);
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
        <h1> Total clicks: {clickCount}</h1>
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
