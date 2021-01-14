import { IContainerProps, IContainerWrapperProps, IMousewheel, IScrollProps, IScrollWrapperProps, TDirection } from "../bin/ScrollBar";
/**
 * 轮播图插件
 *
 * 1. 初始化
 *
 * 2. 绑定事件
 *
 *    1. 鼠标滚轮事件（移动端的手指滑动事件）
 *
 *    2. 滚动条的点击事件和拖拽事件
 *
 * 3. 执行动画
 */
export default class ScrollBarEventAnimation implements IMousewheel {
    cWDom: HTMLElement;
    cDom: HTMLElement;
    sWDom: HTMLElement;
    sDom: HTMLElement;
    /**
     * 展示内容需要的属性值
     * @private
     */
    _cWProps: IContainerWrapperProps;
    /**
     * 滚动内容需要的属性值
     * @private
     */
    _cProps: IContainerProps;
    /**
     * 滚动条容器需要的属性值
     * @private
     */
    _sWProps: IScrollWrapperProps;
    /**
     * 滚动条需要的属性值
     */
    _sProps: IScrollProps;
    /**
     * 构造函数
     * @param cWDom  {HTMLElement} 展示内容容器
     * @param cDom  {HTMLElement} 滚动内容容器
     * @param sWDom  {HTMLElement} 滚动条容器
     * @param sDom  {HTMLElement} 滚动条
     */
    constructor(cWDom: HTMLElement, cDom: HTMLElement, sWDom: HTMLElement, sDom: HTMLElement);
    /**
     * 展示内容访问器
     * @param val
     */
    set cWProps(val: IContainerWrapperProps);
    get cWProps(): IContainerWrapperProps;
    /**
     * 滚动内容访问器
     * @param val
     */
    set cProps(val: IContainerProps);
    get cProps(): IContainerProps;
    /**
     * 滚动条容器访问器
     * @param val
     */
    set sWProps(val: IScrollWrapperProps);
    get sWProps(): IScrollWrapperProps;
    /**
     * 滚动条访问器
     * @param val
     */
    set sProps(val: IScrollProps);
    get sProps(): IScrollProps;
    /**
     * 初始化
     * @private
     */
    private _init;
    /**
     * 初始化所有属性
     * @private
     */
    private _setInitProps;
    /**
     * window滚轮、移动端手指滑动事件
     */
    scrollWheel(): void;
    /**
     * 滚动条和滚动条容器点击事件
     */
    scrollClick(): void;
    /**
     * 移动动画
     */
    move(direction: TDirection): void;
}
//# sourceMappingURL=ScrollBarEventAnimation.d.ts.map