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
exports.EIsScroll = void 0;
const react_1 = __importStar(require("react"));
const ScrollBarEventAnimation_1 = __importDefault(require("../../utils/ScrollBarEventAnimation"));
/**
 * 判断当前的操作元素
 */
var EIsScroll;
(function (EIsScroll) {
    EIsScroll["scroll"] = "scroll";
    EIsScroll["scrollWrapper"] = "scrollWrapper";
})(EIsScroll = exports.EIsScroll || (exports.EIsScroll = {}));
const DefaultBar = (props) => {
    const [barH] = react_1.useState(0);
    const scrollBarWrapperRefs = react_1.useRef(null);
    const scrollBarRefs = react_1.useRef(null);
    react_1.useEffect(() => {
        const containerWrapper = props.containerWrapper.current; // 展示内容容器
        const containerScroll = props.containerScroll.current; // 滚动内容容器
        const scrollWrapper = scrollBarWrapperRefs.current; // 滚动条容器
        const scroll = scrollBarRefs.current; // 滚动条
        new ScrollBarEventAnimation_1.default(containerWrapper, containerScroll, scrollWrapper, scroll);
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { "data-dom": EIsScroll.scrollWrapper, ref: scrollBarWrapperRefs, style: Object.assign({ width: 4, height: "100%", background: "rgba(134, 134, 134, 0.7)", position: "absolute", right: 0, top: 0, borderRadius: 2 }, props.containerWrapperStyle) },
            react_1.default.createElement("div", { "data-dom": EIsScroll.scroll, ref: scrollBarRefs, style: Object.assign({ width: 4, position: "absolute", right: 0, top: 0, borderRadius: 2, height: barH, background: "rgba(255, 255, 255, 0.7)", transition: "all 0.7s", cursor: "pointer" }, props.containerScrollStyle) }))));
};
exports.default = DefaultBar;
