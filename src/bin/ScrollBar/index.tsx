import React,{
  FC,
  useEffect,
  useRef, useState
} from "react";
import {EIsScroll, IDefaultBarProps} from "../../lib/lib.scrollBarEventAnimation";
import ScrollBarEventAnimation from "../../utils/ScrollBarEventAnimation";


const DefaultBar:FC<IDefaultBarProps> = (props) => {
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
