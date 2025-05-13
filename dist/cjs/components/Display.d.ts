import { CharToDigit } from "../utils/charToDigit";
import React from "react";
type DisplayType = {
    count: number;
    height: number;
    value: any;
    color: string;
    backgroundColor?: string;
    skew: boolean;
    padding: string;
    charMap?: CharToDigit;
};
export declare const Display: ({ count, height, value, color, backgroundColor, skew, padding, charMap, }: DisplayType) => React.JSX.Element;
export {};
