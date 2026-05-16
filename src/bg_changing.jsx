import { useState } from 'react';

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function BgChanger() { 
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [clickCount, setClickCount] = useState(0);
    const [sameColorClick, setSameColorClick] = useState(0);

    const [pinkClickCount, setPinkClickCount] = useState(0);
    const [greenClickCount, setGreenClickCount] = useState(0);
    const [blueClickCount, setBlueClickCount] = useState(0);
    const [yellowClickCount, setYellowClickCount] = useState(0);
    const [purpleClickCount, setPurpleClickCount] = useState(0);

    const onButtonClick = (color) => () => {
        setClickCount((clickCount) => clickCount + 1);

        if (backgroundColor === color){
            setSameColorClick((sameColorClick) => sameColorClick + 1);
        }

        if (backgroundColor === "pink"){
            setPinkClickCount((pinkClickCount) => pinkClickCount + 1);
        }

        if (backgroundColor === "green"){
            setGreenClickCount((greenClickCount) => greenClickCount + 1);
        }

        if (backgroundColor === "blue"){
            setBlueClickCount((blueClickCount) => blueClickCount + 1);
        }

        if (backgroundColor === "yellow"){
            setYellowClickCount((yellowClickCount) => yellowClickCount + 1);
        }

        if (backgroundColor === "purple"){
            setPurpleClickCount((purpleClickCount) => purpleClickCount + 1);
        }

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
            <h2> Same color clicked: {sameColorClick}</h2>
            <h4> pink clicks: {pinkClickCount}</h4>
            <h4> green clicks: {greenClickCount}</h4>
            <h4> blue clicks: {blueClickCount}</h4>
            <h4> yellow clicks: {yellowClickCount}</h4>
            <h4> purple clicks: {purpleClickCount}</h4>
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
