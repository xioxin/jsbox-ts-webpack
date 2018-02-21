
declare interface JSBoxDataTypesBase{
  rawValue:any;
  runtimeValue:any;
}

declare interface JSBoxColor extends JSBoxDataTypesBase {}
declare interface JSBoxRect extends JSBoxDataTypesBase {}
declare interface JSBoxContentMode extends JSBoxDataTypesBase {}
declare interface JSBoxSize extends JSBoxDataTypesBase {
  width: number;
  height: number;
}
declare interface JSBoxRect extends JSBoxDataTypesBase {}
declare interface JSBoxPoint extends JSBoxDataTypesBase {}
declare interface JSBoxFont extends JSBoxDataTypesBase {}
declare interface JSBoxRange extends JSBoxDataTypesBase {}
declare interface JSBoxIndexPath extends JSBoxDataTypesBase {}
declare interface JSBoxData extends JSBoxDataTypesBase {}
declare interface JSBoxIcon extends JSBoxDataTypesBase {}
declare interface JSBoxInsets extends JSBoxDataTypesBase {}





/** 生成一个大小 */
declare function $size(width:number,height:number):JSBoxSize
declare function $rgb(r:number,g:number,b:number):JSBoxColor
declare function $rgba(r:number,g:number,b:number,a:number):JSBoxColor
/** 生成一个矩形 */
declare function $rect(x: number, y: number, width: number, height: number):JSBoxRect

/** 生成一个位置 */
declare function $point(x: number, y: number):JSBoxPoint;

declare function $color(hex:string):JSBoxColor;
declare function $color(name:string):JSBoxColor;

/** 返回一个字体，name 字段是可选的：
 * 其中 name 是 "bold" 和 default 时，分别会使用粗体和正常字体，否则根据 name 查找系统支持的字体。
 */
declare function $font(name:string, size:number):JSBoxFont;
declare function $font(size:number):JSBoxFont;


declare function $range(location: number, length: number):JSBoxRange;

declare function $indexPath(section: number, row: number):JSBoxIndexPath;


declare function $data(form:{
  string?: string;
  path?: string;
  url?: string;
}):JSBoxData

declare function $icon(code: string, color?: JSBoxColor, size?: JSBoxSize): JSBoxIcon

declare class $console{
  static log(...info);
  static info(...info);
  static warn(...info);
  static error(...info);
}

declare function $props(data:any):string[];



declare const $env:{
  app: 1;
  today: 2;
  action: 4;
  safari: 8;
  all: 15;
}
declare const $align: {
  left: 0;
  center: 1;
  right: 2;
  justified: 3;
  natural: 4;
}


declare const $contentMode: {
  scaleToFill: 0,
  scaleAspectFit: 1,
  scaleAspectFill: 2,
  redraw: 3,
  center: 4,
  top: 5,
  bottom: 6,
  left: 7,
  right: 8,
}

declare const $btnType :{
  custom: 0,
  system: 1,
  disclosure: 2,
  infoLight: 3,
  infoDark: 4,
  contactAdd: 5,
}

declare const $zero:{
  point: JSBoxPoint;
  size: JSBoxSize;
  rect: JSBoxRect;
  insets: JSBoxInsets;
}

declare const $layout:{
  fill: (make: any, view: any) => void;
  center: (make: any, view: any) => void;
}

declare const $lineCap: {
  butt: 0,
  round: 1,
  square: 2
}

declare const $lineJoin: {
  miter: 0,
  round: 1,
  bevel: 2
}

declare const $mediaType:{
  image: "public.image",
  jpeg: "public.jpeg",
  jpeg2000: "public.jpeg-2000",
  tiff: "public.tiff",
  pict: "com.apple.pict",
  gif: "com.compuserve.gif",
  png: "public.png",
  icns: "com.apple.icns",
  bmp: "com.microsoft.bmp",
  ico: "com.microsoft.ico",
  raw: "public.camera-raw-image",
  live: "com.apple.live-photo",
  movie: "public.movie",
  video: "public.video",
  audio: "public.audio",
  mov: "com.apple.quicktime-movie",
  mpeg: "public.mpeg",
  mpeg2: "public.mpeg-2-video",
  mp3: "public.mp3",
  mp4: "public.mpeg-4",
  avi: "public.avi",
  wav: "com.microsoft.waveform-audio",
  midi: "public.midi-audio"
}

declare const $imgPicker: {
  quality: {
    high: 0,
    medium: 1,
    low: 2,
    r640x480: 3,
    r1280x720: 4,
    r960x540: 5
  },
  captureMode: {
    photo: 0,
    video: 1
  },
  device: {
    rear: 0,
    front: 1
  },
  flashMode: {
    off: -1,
    auto: 0,
    on: 1
  }
}

declare const $kbType:{
  default: 0,
  ascii: 1,
  nap: 2,
  url: 3,
  number: 4,
  phone: 5,
  namePhone: 6,
  email: 7,
  decimal: 8,
  twitter: 9,
  search: 10,
  asciiPhone: 11
}


declare const $assetMedia: {
  type: {
    unknown: 0,
    image: 1,
    video: 2,
    audio: 3
  },
  subType: {
    none: 0,
    panorama: 1,
    hdr: 2,
    screenshot: 4,
    live: 8,
    depthEffect: 16,
    streamed: 65536,
    highFrameRate: 131072,
    timelapse: 262144
  }
}

declare const $pageSize: {
  letter: 0, governmentLetter: 1, legal: 2, juniorLegal: 3, ledger: 4, tabloid: 5,
  A0: 6, A1: 7, A2: 8, A3: 9, A4: 10, A5: 11, A6: 12, A7: 13, A8: 14, A9: 15, A10: 16,
  B0: 17, B1: 18, B2: 19, B3: 20, B4: 21, B5: 22, B6: 23, B7: 24, B8: 25, B9: 26, B10: 27,
  C0: 28, C1: 29, C2: 30, C3: 31, C4: 32, C5: 33, C6: 34, C7: 35, C8: 36, C9: 37, C10: 38,
  custom: 52
}


declare class $app {
  /** 指定此扩展可用的最低 SDK 版本（SDK 版本即 JSBox 的版本） */
  static minSDKVer: string;
  /** 指定此扩展可用的最低 iOS 版本： */
  static minOSVer: string;
  /** 给用户展示一个使用提示，效果如同 $ui.alert，但请注意这个提示只会运行一次： */
  static tips(string: string);

  /** 返回 app 本身的信息 */
  static info: {
    "bundleID": string;
    "version": string;
    "build": string;
  }

  /** 设置成 true 时屏幕不会自动休眠： */
  static idleTimerDisabled: boolean;

  /**
   * 关闭当前的扩展，请注意扩展被关闭之后的代码都不会再被执行。
   * @param {number} delay 表示延迟的秒数，可以缺省，缺省即立即关闭。
   */
  static close(delay:number);

  /** 设置此扩展适合运行的环境，当用户在不适合的环境里运行时，将会给出提示： */
  static validEnv: number;

  /** 获得此扩展当前运行的环境： */
  static env: number;

  /** 在某些滚动列表里面，可能会出现键盘遮挡住输入框的情况，开启之后将会自动避免这个问题： */
  static autoKeyboardEnabled: boolean;

  /** 同样在滚动列表里，为键盘展示一个工具栏将会让输入更加方便，尤其是对于多个输入框： */
  static keyboardToolbarEnabled: boolean;

  /** 设置为 true 时屏幕将不可以旋转： */
  static rotateDisabled: boolean;

  /** 打开一个 URL，例如打开微信：$app.openURL("weixin://") */
  static openURL(url:string);

  /** 在用户安装了某个浏览器的情况下，通过某个浏览器打开 URL，例如： 
   * type	浏览器
   * 10000	Chrome
   * 10001	UC
   * 10002	Firefox
   * 10003	QQ
   * 10004	Opera
   * 10005	Quark
   * 10006	iCab
   * 10007	Maxthon
   * 10008	Dolphin
   * 10009	2345
  */
  static openBrowser(object:{type?:number, url:string});

  static openExtension(fileName:string);

  static listen(object:{
    ready?:()=>void;
    exit?:()=>void;
  })

}