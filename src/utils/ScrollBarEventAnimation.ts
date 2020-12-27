import mathCeil from "./mathCeil";
import mathFloor from "./mathFloor";
import {
  EIsScroll,
  IContainerProps,
  IContainerWrapperProps,
  IMousewheel, IScrollProps, IScrollWrapperProps, TDirection
} from "../lib/lib.scrollBarEventAnimation";


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

  /**
   * 展示内容需要的属性值
   * @private
   */
  _cWProps: IContainerWrapperProps = {
    endY: 0,
    moveY: 0,
    startY: 0,
    w: 0,
    h: 0
  }

  /**
   * 滚动内容需要的属性值
   * @private
   */
  _cProps: IContainerProps = {
    w: 0,
    h: 0,
    x: 0,
    y: 0,
    maxX: 0,
    maxY: 0
  }

  /**
   * 滚动条容器需要的属性值
   * @private
   */
  _sWProps: IScrollWrapperProps = {
    w: 0,
    h: 0,
  }

  /**
   * 滚动条需要的属性值
   */
  _sProps: IScrollProps = {
    h: 0,
    w: 0,
    x: 0,
    y: 0,
    speed: 0,
    maxY: 0,
    maxX: 0
  }

  /**
   * 构造函数
   * @param cWDom  {HTMLElement} 展示内容容器
   * @param cDom  {HTMLElement} 滚动内容容器
   * @param sWDom  {HTMLElement} 滚动条容器
   * @param sDom  {HTMLElement} 滚动条
   */
  constructor(public cWDom: HTMLElement, public cDom: HTMLElement, public sWDom: HTMLElement, public sDom: HTMLElement) {
    this._init();
  }

  /**
   * 展示内容访问器
   * @param val
   */
  set cWProps(val) {
    this._cWProps = {
      ...val
    }
  }

  get cWProps() {
    return this._cWProps
  }

  /**
   * 滚动内容访问器
   * @param val
   */
  set cProps(val) {
    this._cProps = {
      ...val
    }
    this.cDom.style.position = `absolute`;
    this.cDom.style.transform = `translate3d(0,${this.cProps.y}px,0)`;
  }

  get cProps() {
    return this._cProps
  }

  /**
   * 滚动条容器访问器
   * @param val
   */
  set sWProps(val) {
    this._sWProps = {
      ...val
    }
  }

  get sWProps() {
    return this._sWProps
  }

  /**
   * 滚动条访问器
   * @param val
   */
  set sProps(val) {
    this._sProps = {
      ...val
    };
    this.sDom.style.height = `${this._sProps.h}px`;
    this.sDom.style.transform = `translate3d(0,${this.sProps.y}px,0)`;
    const y = -(this.sProps.y / this.sProps.maxY * this.cProps.maxY)
    this.cProps = {
      ...this.cProps,
      y
    }
  }

  get sProps() {
    return this._sProps
  }


  /**
   * 初始化
   * @private
   */
  private _init() {
    this._setInitProps();
    this.scrollWheel();
    this.scrollClick()
  }


  /**
   * 初始化所有属性
   * @private
   */
  private _setInitProps() {
    // 设置展示内容所需要的属性值
    this.cWProps = {
      ...this.cWProps,
      w: this.cWDom.clientWidth,
      h: this.cWDom.clientHeight
    }

    // 设置滚动内容所需要的属性值
    this.cProps = {
      ...this.cProps,
      w: this.cDom.clientWidth,
      h: this.cDom.clientHeight,
      maxY: this.cDom.clientHeight - this.cWProps.h
    }
    this.cDom.style.transition = "all .7s"

    // 设置滚动条容器所需要的属性
    this.sWProps = {
      w: this.sWDom.clientWidth,
      h: this.sWDom.clientHeight
    }

    // 设置滚动条所需要的属性
    const h = this.cWDom.clientHeight / this.cDom.clientHeight * this.sWDom.clientHeight;
    this.sProps = {
      ...this.sProps,
      w: this.sDom.clientWidth,
      h: mathCeil(h),
      speed: mathFloor(mathCeil(h) / 2),
      maxY: this.sWProps.h - mathCeil(h)
    }
    this.sDom.style.transition = "all .7s"
  }

  /**
   * window滚轮、移动端手指滑动事件
   */
  scrollWheel(): void {
    /**
     * window滚轮事件
     */
    this.cWDom.addEventListener("wheel", (e) => {

      if (e.deltaY < 0) {
        // 向上滚动
        this.move("up");
      } else {
        // 向下
        this.move("down");
      }
    }, supportsPassive() ? {passive: true} : false)
    /**
     * 移动端手指滑动事件
     */
    let startY: number, moveY: number, endY: number, speed: number = 0;
    this.cWDom.addEventListener('touchstart', (e) => {
      let touch = e.changedTouches[0];
      startY = touch.pageY;
      speed = this.sProps.speed
      this.sProps = {
        ...this.sProps,
        speed: Math.floor(this.sProps.speed / 2)
      }
    })

    this.cWDom.addEventListener('touchmove', (e) => {
      moveY = e.changedTouches[0].pageY;
      if (startY - moveY < 0) {
        // 向上滚动
        this.move("up");
      } else {
        // 向下滚动
        this.move("down");
      }
    }, supportsPassive() ? {passive: true} : false)
    this.cWDom.addEventListener('touchend', (e) => {
      let changeTouches = e.changedTouches[0];
      endY = changeTouches.pageY;
      this.sProps = {
        ...this.sProps,
        speed
      }
    }, supportsPassive() ? {passive: true} : false);
  }


  /**
   * 滚动条和滚动条容器点击事件
   */
  scrollClick(): void {
    this.sDom.onmousedown = (e) => {
      e.preventDefault();
      const event = e.target as any;
      const dataset: EIsScroll = event.dataset.dom;
      if (EIsScroll.scroll === dataset) {
        let pageY:number = e.pageY || e.clientY;
        let topY = this.sProps.y;
        document.onmousemove = e => {
          this.sDom.style.transition = "all 0s"
          this.cDom.style.transition = "all 0s"
          let y = (e.pageY || e.clientY) - pageY + topY;
          if(y < 0){
            y = 0;
          }else if(y > this.sProps.maxY){
            y = this.sProps.maxY
          }
          this.sProps = {
            ...this.sProps,
            y
          }
        }
        document.onmouseup = e => {
          this.sDom.style.transition = "all .7s"
          this.cDom.style.transition = "all .7s"
          document.onmousemove = null
        }
      }
    }

    // 滚动条容器点击事件
    this.sWDom.onmousedown = (e) => {
      const event = e.target as any;
      const dataset: EIsScroll = event.dataset.dom;
      if (EIsScroll.scrollWrapper === dataset) {
        let y: number;
        const minY = this.sProps.h / 2;
        if (minY > e.offsetY && e.offsetY > 0) {
          y = 0;
        } else if (e.offsetY > this.sProps.maxY + minY && e.offsetY < this.sProps.maxY + this.sProps.h) {
          y = this.sProps.maxY;
        } else {
          y = e.offsetY - minY
        }
        this.sProps = {
          ...this.sProps,
          y: y
        }
      }
    }
  }

  /**
   * 移动动画
   */
  move(direction: TDirection): void {
    let y = this.sProps.y; // 当前滚动Y值
    let s_maxY = this.sProps.maxY; // 滚动条最大y值
    let s_Y = y - this.sProps.speed; // 存储新的滚动条Y值
    if (direction === 'up') {
      // 向上
      s_Y = s_Y < 0 ? 0 : s_Y;
    } else {
      // 向下
      s_Y = y + this.sProps.speed
      s_Y = s_Y > s_maxY ? s_maxY : s_Y;
    }
    this.sProps = {
      ...this.sProps,
      y: s_Y
    }
  }
}


// 将非被动onmousewheel 转化为被动事件
function supportsPassive() {
  let supportsPassive = false;
  try {
    let opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      }
    });
    window.addEventListener(("testPassive" as any), () => {
    }, opts);
    window.removeEventListener(("testPassive" as any), () => {
    }, opts);
  } catch (e) {
  }
  return supportsPassive;
}
