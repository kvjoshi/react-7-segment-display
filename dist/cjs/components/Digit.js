"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digit = void 0;
const Segment_1 = __importDefault(require("./Segment"));
const react_1 = __importDefault(require("react")); // Removed useEffect, useState
const charToDigit_1 = __importDefault(require("../utils/charToDigit")); // Use default map for fallback internally
const letters = ["A", "B", "C", "D", "E", "F", "G"];
const DEFAULT_CHAR = "0"; // Character to use if the provided char is invalid
// Helper function to check if a value is a valid segment array [0, 1, ...]
const isValidSegmentArray = (arr) => {
    return Array.isArray(arr) && arr.every((item) => typeof item === "number");
};
const Digit = ({ char, // The character to render
color = "red", height = 250, skew = false, charMap = charToDigit_1.default, // Use the default map if none is provided
 }) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    };
    // Declare variables
    let segmentsToRender;
    const currentMap = charMap || charToDigit_1.default;
    // Try to get segments for the actual character
    const charSegments = typeof char === "string" && char in currentMap
        ? currentMap[char]
        : undefined;
    // Validate segments or use fallback
    if (isValidSegmentArray(charSegments)) {
        segmentsToRender = charSegments;
    }
    else {
        const fallbackSegments = currentMap[DEFAULT_CHAR];
        if (isValidSegmentArray(fallbackSegments)) {
            segmentsToRender = fallbackSegments;
            if (char !== DEFAULT_CHAR) {
                console.warn(`react-7-segment-display: Character "${char}" not found in charMap. Displaying default "${DEFAULT_CHAR}".`);
            }
        }
        else {
            console.error(`react-7-segment-display: Invalid segment data for char "${char}" AND default char "${DEFAULT_CHAR}". Check charMap.`);
            segmentsToRender = []; // Ultimate fallback
        }
    }
    return (react_1.default.createElement("div", { className: "digit", style: style }, segmentsToRender.map((active, index) => {
        if (index >= letters.length) {
            console.warn(`react-7-segment-display: Segment index ${index} out of bounds for letter mapping.`);
            return null;
        }
        const letter = letters[index];
        return (react_1.default.createElement(Segment_1.default, { key: letter, active: active === 1, size: height / 12.5, color: color, id: letter, skew: skew }));
    })));
};
exports.Digit = Digit;
//# sourceMappingURL=Digit.js.map