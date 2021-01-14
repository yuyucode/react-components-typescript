/// <reference types="react" />
export interface SwitchProps {
    /**
     * 点击switch按钮触发的事件
     *
     * @param val
     */
    onChange?: (val: boolean) => void;
    /**
     * 默认状态 {boolean}
     */
    value: boolean;
    /**
     * borderColor 滑动容器的边框颜色
     */
    borderColor?: string;
    /**
     * buttonColor 圆形按钮的背景颜色
     */
    buttonColor?: string;
}
declare function Switch(props: SwitchProps): JSX.Element;
export default Switch;
//# sourceMappingURL=index.d.ts.map