import React,{
  FC,
  useEffect,
  useRef, useState
} from "react";

import ScrollBarEventAnimation from "../../utils/ScrollBarEventAnimation";


/**
 * ScrollBarEventAnimation 函数的接口类型定义
 *
 */
import {MutableRefObject} from "react";

export type TDirection = "up" | "down"

/**
 * 鼠标滚轮、滚动动画、鼠标点击
 */
export interface IMousewheel {
  scrollWheel: () => void
  move: (direction: TDirection) => void
  scrollClick: () => void
}

/**
 * 尺寸接口
 */
export interface ISize {
  w: number,
  h: number,
}

/**
 * 坐标接口
 */
export interface ICoords {
  x: number,
  y: number,
}

/**
 * 展示内容容器接口
 */
export interface IContainerWrapperProps extends ISize {
  startY: number,
  moveY: number,
  endY: number
}


/**
 * 滚动内容容器接口
 */
export interface IContainerProps extends ISize {
  x: number,
  y: number,
  maxX: number,
  maxY: number
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
  x: number,
  y: number,
  speed: number,
  maxX: number,
  maxY: number,
}

/**
 * 判断当前的操作元素
 */
export enum EIsScroll {
  scroll = "scroll",
  scrollWrapper = "scrollWrapper"
}



export interface ScrollBarProps {
  /**
   * 展示内容容器
   */
  containerWrapper: MutableRefObject<HTMLElement|any>

  containerScroll:MutableRefObject<HTMLElement|any>
  /**
   * 颜色配置
   */
  containerWrapperStyle?: Partial<IContainerWrapperStyle>
  containerScrollStyle?: Partial<IContainerScrollStyle>
}


export interface IContainerWrapperStyle{
  width: TStyle,
  height: TStyle,
  background: string
  position: "absolute" | "relative",
  right: TStyle,
  top: TStyle,
  borderRadius: TStyle,
}


export type TStyle = number | string


export interface IContainerScrollStyle{
  width: TStyle
  right: TStyle,
  top: TStyle,
  borderRadius: TStyle,
  height: TStyle,
  background: string,
  cursor: string,
}





const DefaultBar:FC<ScrollBarProps> = (props) => {
  const [barH] = useState<number>(0);
  const scrollBarWrapperRefs = useRef<HTMLDivElement | null>(null);
  const scrollBarRefs = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const containerWrapper = props.containerWrapper.current as HTMLElement; // 展示内容容器
    const containerScroll  = props.containerScroll.current as HTMLElement; // 滚动内容容器
    const scrollWrapper = scrollBarWrapperRefs.current as HTMLElement; // 滚动条容器
    const scroll = scrollBarRefs.current as HTMLElement; // 滚动条
    new ScrollBarEventAnimation(containerWrapper, containerScroll, scrollWrapper, scroll)
  },[])
  return (
    <>
      <div data-dom={EIsScroll.scrollWrapper} ref={scrollBarWrapperRefs}  style={{
        width: 4,
        height: "100%",
        background:  "rgba(134, 134, 134, 0.7)",
        position: "absolute",
        right: 0,
        top: 0,
        borderRadius: 2,
        ...props.containerWrapperStyle
      }}>
        <div data-dom={EIsScroll.scroll} ref={scrollBarRefs} style={{
          width: 4,
          position: "absolute",
          right: 0,
          top: 0,
          borderRadius: 2,
          height: barH,
          background: "rgba(255, 255, 255, 0.7)",
          transition: "all 0.7s",
          cursor: "pointer",
          ...props.containerScrollStyle
        }}/>
      </div>
    </>
  )
}



export default DefaultBar;
