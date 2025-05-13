import defaultCharMap from "../utils/charToDigit";
import { Digit } from "./Digit";
import React, { useEffect, useState } from "react";
export const Display = ({ count = 2, height = 250, value = null, color = "red", backgroundColor, skew = false, padding = "20px", charMap = defaultCharMap, }) => {
    const [digits, setDigits] = useState([]);
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        padding,
    };
    const displayStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
        padding,
        color: "white",
    };
    useEffect(() => {
        let newDigits = value && value.toString().split("");
        if (!value || count < value.toString().length) {
            newDigits = null;
        }
        if (value && count > value.toString().length) {
            for (let i = 0; i < count - value.toString().length; i++) {
                newDigits.unshift("0");
            }
        }
        setDigits(newDigits);
    }, [count, value]);
    return (React.createElement("div", { className: "display", style: displayStyle },
        React.createElement("div", { className: "display-digits", style: style }, digits
            ? digits.map((digit, index) => {
                return (React.createElement(Digit, { key: index, char: digit, height: height, color: color, skew: skew, charMap: charMap }));
            })
            : Array.from(Array(count).keys()).map((index) => {
                return (React.createElement(Digit, { key: index, char: "-", height: height, color: color, skew: skew }));
            }))));
};
//# sourceMappingURL=Display.js.map