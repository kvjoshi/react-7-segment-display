"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const charToDigit_1 = __importDefault(require("../utils/charToDigit"));
const Digit_1 = require("./Digit");
const react_1 = __importStar(require("react"));
const Display = ({ count = 2, height = 250, value = null, color = "red", backgroundColor, skew = false, padding = "20px", charMap = charToDigit_1.default, }) => {
    const [digits, setDigits] = (0, react_1.useState)([]);
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
    (0, react_1.useEffect)(() => {
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
    return (react_1.default.createElement("div", { className: "display", style: displayStyle },
        react_1.default.createElement("div", { className: "display-digits", style: style }, digits
            ? digits.map((digit, index) => {
                return (react_1.default.createElement(Digit_1.Digit, { key: index, char: digit, height: height, color: color, skew: skew, charMap: charMap }));
            })
            : Array.from(Array(count).keys()).map((index) => {
                return (react_1.default.createElement(Digit_1.Digit, { key: index, char: "-", height: height, color: color, skew: skew }));
            }))));
};
exports.Display = Display;
//# sourceMappingURL=Display.js.map