import React from "react";
import { CharToDigit } from "../utils/charToDigit";
type DigitType = {
    char: string;
    color: string;
    height: number;
    skew: boolean;
    charMap?: CharToDigit;
};
export declare const Digit: ({ char, color, height, skew, charMap, }: DigitType) => React.JSX.Element;
export {};
