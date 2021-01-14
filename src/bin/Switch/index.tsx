import React, {useCallback, useState} from 'react';


export interface SwitchProps {
  /**
   * 点击switch按钮触发的事件
   *
   * @param val
   */
  onChange?: (val: boolean) => void,
  /**
   * 默认状态 {boolean}
   */
  value: boolean
  /**
   * borderColor 滑动容器的边框颜色
   */
  borderColor?: string
  /**
   * buttonColor 圆形按钮的背景颜色
   */
  buttonColor?: string
}

function Switch(props: SwitchProps) {
  const handleClick = useCallback(e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    props.onChange && props.onChange(!props.value)
  }, [props.value])

  return (
    <div style={{
      position: "relative"
    }}>
      <div
           onClick={handleClick}
           style={{
             borderColor: props.borderColor ? props.borderColor : "#afafaf",
             width: 36,
             height: 20,
             border: "2px solid red",
             position: "relative",
             borderRadius: 20,
           }}
      >
        <div
             style={{
               backgroundColor: props.buttonColor ? props.buttonColor: "#03080e",
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
             }}
             onClick={handleClick}/>
      </div>
    </div>
  );
}

export default Switch;
