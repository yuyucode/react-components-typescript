"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Switch(props) {
    const handleClick = react_1.useCallback(e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        props.onChange && props.onChange(!props.value);
    }, [props.value]);
    return (react_1.default.createElement("div", { style: {
            position: "relative"
        } },
        react_1.default.createElement("div", { onClick: handleClick, style: {
                borderColor: props.borderColor ? props.borderColor : "#afafaf",
                width: 36,
                height: 20,
                border: "2px solid red",
                position: "relative",
                borderRadius: 20,
            } },
            react_1.default.createElement("div", { style: {
                    backgroundColor: props.buttonColor ? props.buttonColor : "#03080e",
                    transform: props.value ? `translate3d(-2px,-4px,0)` : `translate3d(12px,-4px,0)`,
                    width: 24,
                    height: 24,
                    position: "absolute",
                    borderRadius: 24,
                    background: "#03080e",
                    left: 0,
                    top: 0,
                    cursor: "pointer",
                    transition: "all .3s",
                }, onClick: handleClick }))));
}
exports.default = Switch;
