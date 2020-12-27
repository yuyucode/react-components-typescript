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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lib_scrollBarEventAnimation_1 = require("../../lib/lib.scrollBarEventAnimation");
const ScrollBarEventAnimation_1 = __importDefault(require("../../utils/ScrollBarEventAnimation"));
const DefaultBar = (props) => {
    const [barH] = react_1.useState(0);
    const scrollBarWrapperRefs = react_1.useRef(null);
    const scrollBarRefs = react_1.useRef(null);
    react_1.useEffect(() => {
        const containerWrapper = props.containerWrapper.current;
        const containerScroll = props.containerScroll.current;
        const scrollWrapper = scrollBarWrapperRefs.current;
        const scroll = scrollBarRefs.current;
        new ScrollBarEventAnimation_1.default(containerWrapper, containerScroll, scrollWrapper, scroll);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { "data-dom": lib_scrollBarEventAnimation_1.EIsScroll.scrollWrapper, ref: scrollBarWrapperRefs, style: Object.assign({ width: 4, height: "100%", background: "rgba(134, 134, 134, 0.7)", position: "absolute", right: 0, top: 0, borderRadius: 2 }, props.containerWrapperStyle) },
            react_1.default.createElement("div", { "data-dom": lib_scrollBarEventAnimation_1.EIsScroll.scroll, ref: scrollBarRefs, style: Object.assign({ width: 4, position: "absolute", right: 0, top: 0, borderRadius: 2, height: barH, background: "rgba(255, 255, 255, 0.7)", transition: "all 0.7s", cursor: "pointer" }, props.containerScrollStyle) }))));
};
exports.default = DefaultBar;
