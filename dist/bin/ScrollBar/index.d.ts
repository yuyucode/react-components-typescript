import { FC } from "react";
/**
 * ScrollBarEventAnimation 函数的接口类型定义
 *
 */
import { MutableRefObject } from "react";
export declare type TDirection = "up" | "down";
/**
 * 鼠标滚轮、滚动动画、鼠标点击
 */
export interface IMousewheel {
    scrollWheel: () => void;
    move: (direction: TDirection) => void;
    scrollClick: () => void;
}
/**
 * 尺寸接口
 */
export interface ISize {
    w: number;
    h: number;
}
/**
 * 坐标接口
 */
export interface ICoords {
    x: number;
    y: number;
}
/**
 * 展示内容容器接口
 */
export interface IContainerWrapperProps extends ISize {
    startY: number;
    moveY: number;
    endY: number;
}
/**
 * 滚动内容容器接口
 */
export interface IContainerProps extends ISize {
    x: number;
    y: number;
    maxX: number;
    maxY: number;
}
/**
 * 滚动条容器接口
 */
export interface IScrollWrapperProps extends ISize {
}
/**
 * 滚动条接口
 */
export interface IScrollProps extends ISize {
    x: number;
    y: number;
    speed: number;
    maxX: number;
    maxY: number;
}
/**
 * 判断当前的操作元素
 */
export declare enum EIsScroll {
    scroll = "scroll",
    scrollWrapper = "scrollWrapper"
}
export interface ScrollBarProps {
    /**
     * 展示内容容器
     */
    containerWrapper: MutableRefObject<HTMLElement | any>;
    containerScroll: MutableRefObject<HTMLElement | any>;
    /**
     * 颜色配置
     */
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
declare const DefaultBar: FC<ScrollBarProps>;
export default DefaultBar;
//# sourceMappingURL=index.d.ts.map