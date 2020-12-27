import { IContainerProps, IContainerWrapperProps, IMousewheel, IScrollProps, IScrollWrapperProps, TDirection } from "../lib/lib.scrollBarEventAnimation";
export default class ScrollBarEventAnimation implements IMousewheel {
    cWDom: HTMLElement;
    cDom: HTMLElement;
    sWDom: HTMLElement;
    sDom: HTMLElement;
    _cWProps: IContainerWrapperProps;
    _cProps: IContainerProps;
    _sWProps: IScrollWrapperProps;
    _sProps: IScrollProps;
    constructor(cWDom: HTMLElement, cDom: HTMLElement, sWDom: HTMLElement, sDom: HTMLElement);
    set cWProps(val: IContainerWrapperProps);
    get cWProps(): IContainerWrapperProps;
    set cProps(val: IContainerProps);
    get cProps(): IContainerProps;
    set sWProps(val: IScrollWrapperProps);
    get sWProps(): IScrollWrapperProps;
    set sProps(val: IScrollProps);
    get sProps(): IScrollProps;
    private _init;
    private _setInitProps;
    scrollWheel(): void;
    scrollClick(): void;
    move(direction: TDirection): void;
}
//# sourceMappingURL=ScrollBarEventAnimation.d.ts.map