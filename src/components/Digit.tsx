import Segment from "./Segment";
import React from "react"; // Removed useEffect, useState
import defaultCharMap, { CharToDigit } from "../utils/charToDigit"; // Use default map for fallback internally

const letters = ["A", "B", "C", "D", "E", "F", "G"] as const;
const DEFAULT_CHAR = "0"; // Character to use if the provided char is invalid

// Helper function to check if a value is a valid segment array [0, 1, ...]
const isValidSegmentArray = (arr: any): arr is number[] => {
    return Array.isArray(arr) && arr.every((item) => typeof item === "number");
};
type DigitType = {
    char: string; // The character prop received from Display
    color: string;
    height: number;
    skew: boolean;
    charMap?: CharToDigit; // Optional custom map passed from Display
};

export const Digit = ({
    char, // The character to render
    color = "red",
    height = 250,
    skew = false,
    charMap = defaultCharMap, // Use the default map if none is provided
}: DigitType) => {
    const style = {
        height: `${height}px`,
        width: `${height * 0.6}px`,
        zIndex: "1",
        padding: skew ? "8px 0px" : "0",
        boxSizing: "border-box",
    } as React.CSSProperties;

    // Declare variables
    let segmentsToRender: number[];
    const currentMap = charMap || defaultCharMap;

    // Try to get segments for the actual character
    const charSegments =
        typeof char === "string" && char in currentMap
            ? currentMap[char]
            : undefined;

    // Validate segments or use fallback
    if (isValidSegmentArray(charSegments)) {
        segmentsToRender = charSegments;
    } else {
        const fallbackSegments = currentMap[DEFAULT_CHAR];
        if (isValidSegmentArray(fallbackSegments)) {
            segmentsToRender = fallbackSegments;
            if (char !== DEFAULT_CHAR) {
                console.warn(
                    `react-7-segment-display: Character "${char}" not found in charMap. Displaying default "${DEFAULT_CHAR}".`
                );
            }
        } else {
            console.error(
                `react-7-segment-display: Invalid segment data for char "${char}" AND default char "${DEFAULT_CHAR}". Check charMap.`
            );
            segmentsToRender = []; // Ultimate fallback
        }
    }

    return (
        <div className="digit" style={style}>
            {segmentsToRender.map((active, index) => {
                if (index >= letters.length) {
                    console.warn(
                        `react-7-segment-display: Segment index ${index} out of bounds for letter mapping.`
                    );
                    return null;
                }
                const letter = letters[index];
                return (
                    <Segment
                        key={letter}
                        active={active === 1}
                        size={height / 12.5}
                        color={color}
                        id={letter}
                        skew={skew}
                    />
                );
            })}
        </div>
    );
};
