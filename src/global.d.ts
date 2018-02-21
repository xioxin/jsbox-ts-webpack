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
  static log(...info:any[]):void;
  static info(...info:any[]):void;
  static warn(...info:any[]):void;
  static error(...info:any[]):void;
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


declare namespace $app {
  /** 指定此扩展可用的最低 SDK 版本（SDK 版本即 JSBox 的版本） */
  const minSDKVer: string;
  /** 指定此扩展可用的最低 iOS 版本： */
  const minOSVer: string;
  /** 给用户展示一个使用提示，效果如同 $ui.alert，但请注意这个提示只会运行一次： */
  function tips(string: string):void;

  /** 返回 app 本身的信息 */
  const info: {
    "bundleID": string;
    "version": string;
    "build": string;
  }

  /** 设置成 true 时屏幕不会自动休眠： */
  var idleTimerDisabled: boolean;

  /**
   * 关闭当前的扩展，请注意扩展被关闭之后的代码都不会再被执行。
   * @param {number} delay 表示延迟的秒数，可以缺省，缺省即立即关闭。
   */
  function close(delay:number):void;

  /** 设置此扩展适合运行的环境，当用户在不适合的环境里运行时，将会给出提示： */
  var validEnv: number;

  /** 获得此扩展当前运行的环境： */
  const env: number;

  /** 在某些滚动列表里面，可能会出现键盘遮挡住输入框的情况，开启之后将会自动避免这个问题： */
  var autoKeyboardEnabled: boolean;

  /** 同样在滚动列表里，为键盘展示一个工具栏将会让输入更加方便，尤其是对于多个输入框： */
  var keyboardToolbarEnabled: boolean;

  /** 设置为 true 时屏幕将不可以旋转： */
  var rotateDisabled: boolean;

  /** 打开一个 URL，例如打开微信：$app.openURL("weixin://") */
  function openURL(url:string):void;

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
  function openBrowser(object:{type?:number, url:string}):void;

  function openExtension(fileName: string):void;

  function listen(object:{
    ready?:()=>void;
    exit?:()=>void;
  }):void;

  var strings:any;


}


interface JSBoxDeviceInfo {
  "model": string;
  "language": string;
  "version": string;
  "name": string;
  "screen": {
    "width": number;
    "height": number;
    "scale": number;
    "orientation": number;
  }
}

interface JSBoxDeviceSSID {
  "SSIDDATA": any;
  "BSSID": string;
  "SSID": string;
}

interface JSBoxDeviceSpace {
  "disk": {
    "free": {
      "bytes": number;
      "string": string;
    };
    "total": {
      "bytes": number;
      "string": string;
    }
  };
  "memory": {
    "free": {
      "bytes": number;
      "string": string;
    };
    "total": {
      "bytes": number;
      "string": string;
    }
  }
}

declare interface JSBoxView extends JSBoxDataTypesBase {
    //todo: 完成模型
}



declare namespace $device{
  const info: JSBoxDeviceInfo;
  const ssid: JSBoxDeviceSSID;
  const networkType: number;
  const space: JSBoxDeviceSpace;
  function taptic(level: number):void;
}


interface JSBoxUiRenderOption {
  props?: {
    id: string;
    /** 标题 */
    title?: string;
    /** 标题颜色 */
    titleColor?: JSBoxColor;
    /** bar 背景色 */
    barColor?: JSBoxColor;
    /** 图标颜色 */
    iconColor?: JSBoxColor;
  };
  // todo: 参数类型
  views: any[];
  [key: string]: any;
}

declare function $(id:string):JSBoxView;


// todo: 
declare namespace $ui {
  function render(option: JSBoxUiRenderOption): void;
  function push(option: JSBoxUiRenderOption): void;

  function alert(text: string): void;
  // todo: 参数类型
  function alert(option: any): void;
  function animate(option: any): void;
  function toast(option: any): void;
}


declare namespace $system {
  /** 设置屏幕 */
  var brightness:number;
  /** 获取或设置设备音量 (0.0 ~ 1.0) */
  var volume:number;

  /** 拨打电话 */
  function call(number:string):void;
  /** 发送短信 */
  function sms(number:string):void;
  /** 发送邮件 */
  function mailto(email:string):void;
  /** 拨打FaceTime */
  function facetime(number:string):void;

}

interface JSBoxHttpOption {
  /** 方式 GET/POST/DELETE 等*/
  method?: string;
  /** 链接 */
  url: string;
  /** 请求头 */
  header?: {
    [key:string]:string;
  };
  /** 请求体 */
  body?: any
  /** 请求超时时间 */
  timeout?: number;
  /** form-data 参数 */
  form?: any;
  /** todo: 文件列表 */
  files?: any;
  /** 上传进度 upload/download 中进度回调 */
  progress?: (bytesWritten:number, totalBytes:number) => void;
  /** 是否显示进度条（默认显示） */
  showsProgress?: boolean;
  /** 	upload/download 中的提示语 */
  message?: string;
  /** 回调函数 */
  handler: (resp:JSBoxHttpResp)=>void;
}


interface JSBoxHttpResponse{
  url:string
  /**	MIME 类型 */
  MIMEType:string;
  /** 长度 */
  expectedContentLength:number;
  /** 编码 */
  textEncodingName:string;
  /** 建议的文件名 */
  suggestedFilename:string;	
  /** HTTP 状态码 */
  statusCode:number;	
  /** HTTP header */
  headers:{[key:string]:string};
}

interface JSBoxHttpError{
  domain:string;
  code:number;
  userInfo:any;
  localizedDescription:string;
  localizedFailureReason:string;
  localizedRecoverySuggestion:string;
}

interface JSBoxHttpResp{
  data?:any;
  response?:JSBoxHttpResponse;
  error?:any;
}

declare namespace $http{
  /** 发起一个 HTTP 请求 */
  function request(option:JSBoxHttpOption):void;
  function get(option:JSBoxHttpOption):void;
  function post(option:JSBoxHttpOption):void;
}

interface JSBoxCacheSetOption{
  key:string;
  value:any;
  handler:(object:any)=>void;
}
interface JSBoxCacheGetOption{
  key:string;
  handler:(object:any)=>void;
}
interface JSBoxCacheRemoveOption{
  key:string;
  handler:()=>void;
}
interface JSBoxCacheClearOption{
  handler:()=>void;
}

declare namespace $cache{
  function set(key:string, object:any):void;
  function setAsync(option:JSBoxCacheSetOption):void;
  function get(key:string):any;
  function getAsync(option:JSBoxCacheGetOption):void;
  function remove(key:string):any;
  function remove(option:JSBoxCacheRemoveOption):void;
  function clear():any;
  function clear(option:JSBoxCacheClearOption):void;
}

interface JSBoxThreadOption{
  /** 延迟执行的时间，可选 */
  delay?: number;
  handler:()=>void;
}
declare namespace $thread{
  function background(option:JSBoxThreadOption):void;
  function main(option:JSBoxThreadOption):void;
}


declare function $delay(delay:number,handler:()=>void):void;


interface JSBoxTimerOption {
  interval: number;
  handler: ()=>void;
}
interface JSBoxTimerHandle {
  /** 取消任务 */
  invalidate:()=>void;
}
declare namespace $timer{
  function schedule(option:JSBoxTimerOption):JSBoxTimerHandle;
}
interface JSBoxClipboardCopyOption{
  text?:string;
  image?:any;
  data?:any;
  /** 几秒之后过期 */
  ttl?:number;
  /** 本地剪贴板 */
  locally:boolean;
}
interface JSBoxClipboardSetOption{
  "type": string;
  "value": any;
}


declare namespace $clipboard{
  const text:string;
  /** todo: */
  const image:any;
  /** todo: */
  const items:any;

  /** 获取剪贴板中的所有电话号码。 */
  const phoneNumbers:string[];
  /** 获取剪贴板中的第一个电话号码。 */
  const phoneNumber:string;

  /** 获取剪贴板中的所有链接。 */
  const links:string[];
  
  /** 获取剪贴板中的第一个链接。 */
  const link:string;
  
  /** 获取剪贴板中的所有 email。 */
  const emails:string[];
  
  /** 获取剪贴板中的第一个 email。 */
  const email:string;
  
  /** 获取剪贴板中的所有日期。 */
  const dates:string[];
  
  /** 获取剪贴板中的第一个日期。 */
  const date:string;

  /** 设置剪贴板的文本，但忽略 Universal Clipboard： */
  function setTextLocalOnly(string:string):void;

  function set(option:JSBoxClipboardSetOption):void;
  
  function copy(option:JSBoxClipboardCopyOption):void;


  function clear():void;



}

declare function $l10n(key:string):string;
