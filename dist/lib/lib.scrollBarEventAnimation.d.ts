import { MutableRefObject } from "react";
export declare type TDirection = "up" | "down";
export interface IMousewheel {
    scrollWheel: () => void;
    move: (direction: TDirection) => void;
    scrollClick: () => void;
}
export interface ISize {
    w: number;
    h: number;
}
export interface ICoords {
    x: number;
    y: number;
}
export interface IContainerWrapperProps extends ISize {
    startY: number;
    moveY: number;
    endY: number;
}
export interface IContainerProps extends ISize {
    x: number;
    y: number;
    maxX: number;
    maxY: number;
}
export interface IScrollWrapperProps extends ISize {
}
export interface IScrollProps extends ISize {
    x: number;
    y: number;
    speed: number;
    maxX: number;
    maxY: number;
}
export declare enum EIsScroll {
    scroll = "scroll",
    scrollWrapper = "scrollWrapper"
}
export interface IDefaultBarProps {
    containerWrapper: MutableRefObject<HTMLElement | any>;
    containerScroll: MutableRefObject<HTMLElement | any>;
    containerWrapperStyle?: Partial<IContainerWrapperStyle>;
    containerScrollStyle?: Partial<IContainerScrollStyle>;
}
export interface IContainerWrapperStyle {
    width: TStyle;
    height: TStyle;
    background: string;
    position: "absolute" | "relative";
    right: TStyle;
    top: TStyle;
    borderRadius: TStyle;
}
export declare type TStyle = number | string;
export interface IContainerScrollStyle {
    width: TStyle;
    right: TStyle;
    top: TStyle;
    borderRadius: TStyle;
    height: TStyle;
    background: string;
    cursor: string;
}
//# sourceMappingURL=lib.scrollBarEventAnimation.d.ts.map