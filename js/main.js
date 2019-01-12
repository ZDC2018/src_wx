var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// TypeScript file
var BaseElement = (function () {
    function BaseElement() {
        //游戏元素基类
        /**
         * 元素类型
         */
        this.type = ""; //元素类型
    }
    return BaseElement;
}());
__reflect(BaseElement.prototype, "BaseElement");
/**
 * Created by Administrator on 2014/8/8.
 */
var ResourceUtils = (function () {
    function ResourceUtils() {
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    ResourceUtils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
     */
    ResourceUtils.createBitmapFromSheet = function (name, sheetName) {
        if (sheetName === void 0) { sheetName = "gameRes"; }
        var sheet = RES.getRes(sheetName);
        var texture = sheet.getTexture(name);
        var result = new egret.Bitmap();
        result.texture = texture;
        return result;
    };
    ResourceUtils.getTextureFromSheet = function (name, sheetName) {
        if (sheetName === void 0) { sheetName = "gameRes"; }
        var sheet = RES.getRes(sheetName);
        var result = sheet.getTexture(name);
        return result;
    };
    return ResourceUtils;
}());
__reflect(ResourceUtils.prototype, "ResourceUtils");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this._stageWidth = egret.MainContext.instance.stage.stageWidth;
        _this._stageHeight = egret.MainContext.instance.stage.stageHeight;
        _this._loadingBackGround = new egret.Bitmap();
        _this._loadingLogo = new egret.Bitmap();
        _this._loadingBar = new egret.Bitmap();
        _this._loadingBarBase = new egret.Bitmap();
        _this._loadingBarCar = new egret.Bitmap();
        _this.loadImage();
        return _this;
    }
    LoadingUI.prototype.loadImage = function () {
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, this.createView, this);
        imageLoader.load("resource/res/ui/loading_base.png");
    };
    LoadingUI.prototype.createView = function (evt) {
        //console.log("Loading背景图")
        //背景图
        var imageLoader = evt.currentTarget;
        var texture = new egret.Texture();
        texture._setBitmapData(imageLoader.data);
        this._loadingBackGround = new egret.Bitmap(texture);
        // //console.log(imageLoader.data);
        this._loadingBackGround.width = this._stageWidth;
        this._loadingBackGround.height = this._stageHeight;
        this.addChild(this._loadingBackGround);
        var image0Loader = new egret.ImageLoader();
        image0Loader.addEventListener(egret.Event.COMPLETE, this.createView1, this);
        image0Loader.load("resource/res/ui/loading_logo.png");
        this.addTextField();
    };
    LoadingUI.prototype.createView1 = function (evt) {
        //console.log("Loading_logo图")
        //背景图
        var image0Loader = evt.currentTarget;
        var texture = new egret.Texture();
        texture._setBitmapData(image0Loader.data);
        // //console.log(image0Loader.data);
        this._loadingLogo = new egret.Bitmap(texture);
        // this._loadingLogo.width =  GameData.stageW*0.95;
        // this._loadingLogo.height = this._loadingLogo.width*1.167;
        // this._loadingLogo.x = (GameData.stageW-this._loadingLogo.width)/2;
        // this._loadingLogo.y = this._loadingLogo.x*2;
        this.addChild(this._loadingLogo);
        var image1Loader = new egret.ImageLoader();
        image1Loader.addEventListener(egret.Event.COMPLETE, this.createView2, this);
        image1Loader.load("resource/res/ui/loading_march_01.png");
    };
    LoadingUI.prototype.createView2 = function (evt) {
        //进度条背景
        var image1Loader = evt.currentTarget;
        var texture1 = new egret.Texture();
        texture1._setBitmapData(image1Loader.data);
        this._loadingBarBase = new egret.Bitmap(texture1);
        this._loadingBarBase.width = this._stageWidth * 0.61;
        this._loadingBarBase.height = this._stageWidth * 0.073;
        this._loadingBarBase.x = (this._stageWidth - this._loadingBarBase.width) / 2;
        this._loadingBarBase.y = this._stageHeight * 3 / 4 - this._loadingBarBase.height;
        this.addChild(this._loadingBarBase);
        var image2Loader = new egret.ImageLoader();
        image2Loader.addEventListener(egret.Event.COMPLETE, this.createView3, this);
        image2Loader.load("resource/res/ui/loading_march_02.png");
    };
    LoadingUI.prototype.createView3 = function (evt) {
        //进度条
        var image2Loader = evt.currentTarget;
        var texture2 = new egret.Texture();
        texture2._setBitmapData(image2Loader.data);
        this._loadingBar = new egret.Bitmap(texture2);
        this._loadingBar.width = this._stageWidth * 0.61;
        this._loadingBar.height = this._stageWidth * 0.073;
        this._loadingBar.x = (this._stageWidth - this._loadingBar.width) / 2;
        this._loadingBar.y = this._stageHeight * 3 / 4 - this._loadingBar.height;
        this.addChild(this._loadingBar);
        var image3Loader = new egret.ImageLoader();
        image3Loader.addEventListener(egret.Event.COMPLETE, this.createView4, this);
        image3Loader.load("resource/res/ui/loading_march_03.png");
    };
    LoadingUI.prototype.createView4 = function (evt) {
        //进度条卡车
        var image3Loader = evt.currentTarget;
        var texture3 = new egret.Texture();
        texture3._setBitmapData(image3Loader.data);
        this._loadingBarCar = new egret.Bitmap(texture3);
        this._loadingBarCar.x = (this._stageWidth - this._loadingBar.width) / 2;
        this._loadingBarCar.y = this._stageHeight * 3 / 4 - this._loadingBar.height * 1.78;
        var barMask = new egret.Rectangle(0, 0, 0, this._loadingBar.height);
        this._loadingBar.mask = barMask;
        this.addChild(this._loadingBarCar);
    };
    LoadingUI.prototype.addTextField = function () {
        //载入百分比
        this.textField = new egret.TextField();
        this.textField.x = 0;
        this.textField.y = this._stageHeight * 3 / 4 + this.textField.height + 50;
        this.textField.width = this._stageWidth;
        this.textField.height = 100;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.fontFamily = "黑体";
        this.textField.size = 30;
        this.textField.text = "";
        this.addChild(this.textField);
        //健康游戏忠告
        var adviceText = new egret.TextField();
        adviceText.x = 0;
        adviceText.y = this._stageHeight - this._stageWidth / 4;
        adviceText.width = this._stageWidth;
        adviceText.textAlign = egret.HorizontalAlign.CENTER;
        adviceText.fontFamily = "黑体";
        adviceText.size = 20;
        adviceText.text = "抵制不良游戏，拒绝盗版游戏。\n注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。\n合理安排时间，享受健康生活。";
        this.addChild(adviceText);
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        // //console.log("载入进度条");
        var barMask = new egret.Rectangle(0, 0, current / total * this._loadingBar.width, this._loadingBar.height);
        this._loadingBar.mask = barMask;
        this._loadingBarCar.x = this._loadingBar.x + current / total * this._loadingBar.width - this._loadingBarCar.width / 2;
        this.textField.text = "\u52A0\u8F7D\u4E2D..." + Math.floor((current / total) * 100) + '%';
        // this.textField.text = `加载中...`;
        // this.textField.text = `加载中...${current}/${total}`;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        GameData.scentWidth = this.stage.stageWidth;
        GameData.scentHeight = this.stage.stageHeight;
        if (GameData.currentLevel <= 5) {
            this.sendGetRequest();
        }
        else {
            GameLogic.closeShare = false;
        }
        // //console.log(GameData.scentWidth);
        // //console.log(GameData.scentHeight);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.setMaxLoadingThread(1);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载game资源组。
     * configuration file loading is completed, start to pre-load the game resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
        this.loadingView.addTextField();
        // 加载开放域资源
        var platform = window.platform;
        platform.openDataContext.postMessage({
            command: 'loadRes'
        });
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
        //     //console.log('输出主域点击事件');
        // }, this)
    };
    /**
     * game资源组加载完成
     * game resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.groupName == "preload")) return [3 /*break*/, 3];
                        this.stage.removeChild(this.loadingView);
                        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, platform.showShareMenu()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        //console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        //console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     *  资源组加载进度
     * Loading process of game resource group
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    Main.prototype.sendGetRequest = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("https://wxgame.fscy.net.cn/shareController.php", egret.HttpMethod.GET);
        request.send();
        this._timeout = egret.setTimeout(function () {
            request.abort();
            GameLogic.closeShare = true;
        }, this, 30000);
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    Main.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        egret.clearTimeout(this._timeout);
        if (CommonFuction.compareVersion(GameLogic.version, request.response) >= 0) {
            GameLogic.closeShare = true;
        }
        else {
            GameLogic.closeShare = false;
        }
        //  console.log("get data : ",GameLogic.closeShare);
    };
    Main.prototype.onGetIOError = function (event) {
        // console.log("get error : ");
        // console.log( event);
        GameLogic.closeShare = true;
    };
    Main.prototype.onGetProgress = function (event) {
        // console.log("get progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        if (GameData.currentLevel != 1) {
            GameLogic.guide = false;
        }
        var gameLayer = new egret.Sprite();
        this.addChild(gameLayer);
        this._gl = new GameLogic(gameLayer);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function (x, y, width, heigth) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.showShareMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.share = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareApp = function (title, imgurl, query) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.updateShareMenu = function (withticket) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.createUserInfoButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.createRewardedVideoAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.rewardedVideoAdOnClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.destroyUserInfoButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.showBannerAD = function (left, top, width, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.setUserCloudStorage = function (kvobj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.onShow = function (callback, obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.onHide = function (callback, obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getLaunchOptionsSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.postGameData = function (dbname, userGameData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getGameData = function (dbname) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.createInnerAudioContext = function (bgMusic) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getUserCloudStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.exitGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var CommonFuction = (function () {
    function CommonFuction() {
    }
    //加法
    CommonFuction.jia = function (a, b) {
        // //console.log("加法:"+ a);
        // //console.log("加法:"+ b);
        //把a,b放进zong数组
        var zong = new Array();
        zong = [String(a), String(b)];
        //创建fen数组
        var fen = [];
        //把a,b较大的放在前面
        zong = this.getMax(zong[0], zong[1]);
        //把zong数组里面的元素分成单个数字
        zong[0] = zong[0].split('');
        zong[1] = zong[1].split('');
        //创建加0变量
        var jialing;
        //判断两个参数是否相同长度
        if (!(zong[0].length == zong[1].length)) {
            //创建0
            jialing = new Array(zong[0].length - zong[1].length + 1).join('0');
            //把0放进zong[1]前面
            zong[1] = jialing.split('').concat(zong[1]);
        }
        //创建补充上一位的数字
        var next = 0;
        //从个位数起对应单个计算
        for (var i = (zong[0].length - 1); i >= 0; i--) {
            //求和
            var he = Number(zong[0][i]) + Number(zong[1][i]) + next;
            //把求和的个位数先放进数组
            fen.unshift(he % 10);
            //把求和的十位数放进补充上一位的数字，留在下一次循环使用
            next = Math.floor(he / 10);
            //判断最后一次如果求和的结果为两位数则把求和的十位数加在最前面
            if (i == 0 && !(next == 0)) {
                fen.unshift(next);
            }
        }
        //把最后的结果转化成字符串
        var result = fen.join('');
        //返回字符串
        // //console.log("加法:"+ result);        
        return result;
    };
    //减法
    CommonFuction.jian = function (a, b) {
        // //console.log("减法:"+ a);
        // //console.log("减法:"+ b);
        var zong = new Array();
        zong = [String(a), String(b)];
        var fen = [];
        zong = this.getMax(zong[0], zong[1]);
        if (zong.length == 3) {
            // return false;
        }
        zong[0] = zong[0].split('');
        zong[1] = zong[1].split('');
        var jialing;
        if (!(zong[0].length == zong[1].length)) {
            jialing = new Array(zong[0].length - zong[1].length + 1).join('0');
            zong[1] = jialing.split('').concat(zong[1]);
        }
        var next = 0;
        for (var i = (zong[0].length - 1); i >= 0; i--) {
            var cha = Number(zong[0][i]) - Number(zong[1][i]) - next;
            next = 0;
            if (cha < 0) {
                cha = cha + 10;
                next = 1;
            }
            fen.unshift(cha % 10);
        }
        var result = fen.join('');
        if (result[0] == '0') {
            result = this.shanchuling(result).join('');
        }
        // //console.log("减法:"+ result);
        return result;
    };
    //乘法
    CommonFuction.cheng = function (a, b) {
        var zong = new Array();
        zong = [String(a), String(b)];
        var fen = [];
        zong = this.getMax(zong[0], zong[1]);
        zong[0] = zong[0].split('');
        zong[1] = zong[1].split('');
        //获取b的长度,处理乘法分配率的乘法
        for (var j = (zong[1].length - 1); j >= 0; j--) {
            var next = 0;
            var fentemp = [];
            var jialing = '';
            //获取a的长度处理乘法
            for (var i = (zong[0].length - 1); i >= 0; i--) {
                var ji = Number(zong[0][i]) * Number(zong[1][j]) + next;
                fentemp.unshift(ji % 10);
                next = Math.floor(ji / 10);
                if (i == 0 && !(next == 0)) {
                    fentemp.unshift(next);
                }
            }
            //后面添加0
            jialing = new Array((zong[1].length - (j + 1)) + 1).join('0');
            fentemp.push(jialing);
            fen[j] = fentemp.join('');
        }
        //处理乘法后的求和
        var cishu = fen.length;
        for (var k = 1; k < cishu; k++) {
            var hebing = this.jia(fen[0], fen[1]);
            fen.splice(0, 2, hebing);
        }
        var result = fen.join('');
        if (result[0] == '0') {
            result = this.shanchuling(result);
        }
        // //console.log("乘法:"+ result);
        return result;
    };
    /**
     * 除法
     */
    CommonFuction.chu = function (a, b) {
        var alen = a.length, blen = b.toString().length;
        var quotient = 0, remainder = 0;
        var result = [], temp = 0;
        for (var i = 0; i < alen; i++) {
            temp = remainder * 10 + parseInt(a[i]);
            if (temp < b) {
                remainder = temp;
                result.push(0);
            }
            else {
                quotient = Math.floor(temp / b);
                remainder = temp % b;
                result.push(quotient);
            }
        }
        // return [result.join("").replace(/\b(0+)/gi,""),remainder];//结果返回[商，余数]
        return result.join("").replace(/\b(0+)/gi, ""); //结果返回商
    };
    //获取最大值
    CommonFuction.getMax = function (a, b) {
        var result = [a, b];
        //如果a长度小于b长度
        if (a.length < b.length) {
            //b放前面
            result[0] = b;
            result[1] = a;
            //返回result长度为3，为了减法的不够减而准备
            result[2] = 'not';
            //返回最终数组
            return result;
        }
        //如果a长度等于b长度
        if (a.length == b.length) {
            //循环对比a,b里面的单个元素
            for (var i = 0; i < a.length; i++) {
                if (result[0][i] > result[1][i]) {
                    result[0] = a;
                    result[1] = b;
                    return result;
                }
                if (result[0][i] < result[1][i]) {
                    result[0] = b;
                    result[1] = a;
                    result[2] = 'not';
                    return result;
                }
                //假如全部相等，当最后一个元素，以上条件都不执行，则执行默认的返回结果
                if (i == a.length - 1) {
                    return result;
                }
            }
        }
        if (a.length > b.length) {
            return result;
        }
    };
    /**
     * a与b比大小
     * a<b返回false
     * 其余返回true
     */
    CommonFuction.compareMax = function (a, b) {
        // //console.log("比较:"+ a);
        // //console.log("比较:"+ b);
        // //console.log(typeof(b));
        a = String(a).split('');
        b = String(b).split('');
        var result = [a, b];
        var res;
        //如果a长度小于b长度
        if (a.length < b.length) {
            return false;
        }
        //如果a长度等于b长度
        if (a.length == b.length) {
            //循环对比a,b里面的单个元素
            for (var i = 0; i < a.length; i++) {
                if (result[0][i] > result[1][i]) {
                    result[0] = a;
                    result[1] = b;
                    return true;
                }
                if (result[0][i] < result[1][i]) {
                    result[0] = b;
                    result[1] = a;
                    result[2] = 'not';
                    return false;
                }
                //假如全部相等，当最后一个元素，以上条件都不执行，则执行默认的返回结果
                if (i == a.length - 1) {
                    res = true;
                }
            }
        }
        if (a.length > b.length) {
            return true;
        }
        // //console.log(res);
        return res;
    };
    //删除字符串前面多余的0
    CommonFuction.shanchuling = function (result) {
        //首先判断是否全部都是0，是的话直接返回一个0
        if (result == 0) {
            result = '0';
            //返回最终字符串
            return result;
        }
        //把字符串分割成数组
        result = result.split('');
        //获取数组长度
        var hebing = result.length;
        for (var j = 0; j < hebing; j++) {
            //判断数组首位是否为0
            if (result[0] == 0) {
                //把数组首位删掉
                result.splice(0, 1);
            }
            else {
                //删除完了就跳出循环
                break;
            }
        }
        //返回最终字符串
        return result;
    };
    /**
     * 数字去零计算
     */
    CommonFuction.numZero = function (num) {
        // console.log("数字去0计算"+num);
        var numString;
        if (typeof (num) == "number") {
            numString = Math.floor(num).toString();
        }
        else {
            // numString = num.split(".")[0];
            numString = num;
        }
        var numLength = numString.length;
        var zeroNumber = Math.floor((numLength - 1) / 3);
        if (zeroNumber > 0) {
            numString = numString.slice(0, -1 * zeroNumber * 3) + "." + numString.slice(numLength - zeroNumber * 3, numLength - zeroNumber * 3 + 2) + GameData.zeroConfigArr[zeroNumber - 1].company;
        }
        else {
            numString = num.toString();
        }
        return numString;
    };
    CommonFuction.compareVersion = function (v1, v2) {
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    };
    return CommonFuction;
}());
__reflect(CommonFuction.prototype, "CommonFuction");
var ElementTypeParse = (function () {
    function ElementTypeParse() {
    }
    ElementTypeParse.creatElementTypeData = function (val) {
        GameData.elementTypes = val;
    };
    return ElementTypeParse;
}());
__reflect(ElementTypeParse.prototype, "ElementTypeParse");
var GameBackGround = (function (_super) {
    __extends(GameBackGround, _super);
    function GameBackGround() {
        var _this = _super.call(this) || this;
        _this._setSceneData = false;
        _this.htimer = new egret.Timer(1000, 0);
        _this._second = 60;
        _this._minute = 2;
        return _this;
    }
    GameBackGround.prototype.changeBackground = function () {
        this.cacheAsBitmap = false;
        this.removeChildren();
        this.createBackGroundImage();
        this.createMapBg();
        this.createPlayerLevelBg();
        this.createCoinBg();
        this.createCoinOutputBg();
        // console.log("背景图share加载:"+GameLogic.closeShare);
        if (!GameLogic.closeShare && typeof (GameLogic.closeShare) != "undefined") {
            this.createShareBg();
        }
        this.cacheAsBitmap = true;
    };
    //创建背景图
    GameBackGround.prototype.createBackGroundImage = function () {
        this.dragContainer = new egret.Sprite();
        if (!this.bgImage) {
            this.bgImage = new egret.Bitmap();
        }
        this.bgImage.texture = RES.getRes(GameData.levelBackgroundImageName);
        this.bgImage.width = GameData.stageW;
        this.bgImage.height = GameData.stageH;
        this.addChild(this.bgImage);
        //前置背景图
        // //console.log(GameData.levelFrontBackgroundImageName);		
        var frontbg = new egret.Bitmap();
        frontbg.texture = RES.getRes(GameData.levelFrontBackgroundImageName);
        frontbg.width = GameData.stageW;
        frontbg.height = GameData.stageH * 0.37;
        frontbg.y = GameData.stageH - frontbg.height; //居底对齐
        this.addChild(frontbg);
    };
    //创建格子地图
    GameBackGround.prototype.createMapBg = function () {
        // //console.log('创建格子地图');
        // let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60)-girdWidth*GameData.MaxColumn;
        // SoundUtils.instance().playOpenGirdSound();
        GameBackGround.girdLockArr[GameData.currentLevel - 1] = new Array();
        var mapbg = new egret.Bitmap(); //添加地图阴影背景
        mapbg.texture = RES.getRes("ui_blackbase_png");
        mapbg.width = GameData.stageW - 40;
        mapbg.height = GameData.girdWidth * GameData.MaxRow;
        mapbg.x = 20;
        mapbg.y = GameData.startY;
        this.addChild(mapbg);
        var mapDataArray = RES.getRes("map_data_json");
        var mapAddData;
        if (GameData.currentLevel < 9) {
            mapAddData = [].concat(mapDataArray[GameData.currentLevel].addmap);
        }
        else {
            mapAddData = [].concat(mapDataArray[0].addmap);
        }
        var gird;
        for (var i = 0; i < GameData.MaxRow; i++) {
            for (var t = 0; t < GameData.MaxColumn; t++) {
                // if(GameData.mapData[i][t]!=-1){				
                if (GameData.girdBg.length <= (i * GameData.MaxRow + t)) {
                    gird = new egret.Bitmap();
                    GameData.girdBg.push(gird);
                }
                else {
                    gird = GameData.girdBg[i * GameData.MaxRow + t];
                }
                gird.width = GameData.girdWidth;
                gird.height = GameData.girdWidth * 0.6;
                gird.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * t;
                gird.y = GameData.startY + 20 + GameData.girdWidth * i;
                if (GameData.mapData[i][t] != -1) {
                    gird.texture = RES.getRes(GameData.girdImageName); //载入地块
                }
                else {
                    gird.texture = RES.getRes(GameData.girdLockImageName); //载入锁定地块						
                }
                // }
                this.addChild(gird);
                if (i * (GameData.MaxRow - 1) + t == mapAddData[0]) {
                    //console.log(i);
                    //console.log(t);
                    var girdLock = ResourceUtils.createBitmapByName("scenebox_lock_text_png");
                    girdLock.x = gird.x + GameData.girdWidth / 6;
                    girdLock.y = gird.y;
                    this.addChild(girdLock);
                    var girdLockLabel = new egret.TextField();
                    girdLockLabel.text = (GameData.currentLevel + 1).toString() + "级解锁";
                    girdLockLabel.size = 15;
                    girdLockLabel.textColor = 0xFFFFFF;
                    girdLockLabel.fontFamily = "黑体";
                    girdLockLabel.width = GameData.girdWidth;
                    girdLockLabel.textAlign = egret.HorizontalAlign.CENTER;
                    girdLockLabel.x = gird.x;
                    girdLockLabel.y = gird.y + 3;
                    this.addChild(girdLockLabel);
                    var girdLockIcon = ResourceUtils.createBitmapByName("shop_buy_lock_png");
                    girdLockIcon.x = gird.x + GameData.girdWidth / 2 - girdLockIcon.width / 2;
                    girdLockIcon.y = gird.y + GameData.girdWidth / 2 - girdLockIcon.height;
                    this.addChild(girdLockIcon);
                    mapAddData.shift();
                    GameBackGround.girdLockArr[GameData.currentLevel - 1].push({ x: gird.x, y: gird.y });
                }
            }
        }
        // //console.log("解锁地块数组:");
        // //console.log(GameBackGround.girdLockArr);
        // if(GameData.currentLevel >1 && GameData.currentLevel<9){
        // 	let m:number = 0;
        // 	while(GameBackGround.girdLockArr[GameData.currentLevel-2].length >0){
        // 		let girdLockArr:any = GameBackGround.girdLockArr[GameData.currentLevel-2];
        // 		let girdLock:any  = girdLockArr.shift();
        // 		//console.log("解锁地块:");
        // 		//console.log(GameBackGround.girdLockArr);
        // 		//console.log(girdLock);
        // 		let mcData = RES.getRes("girdRelease_json");
        // 		let mcTexture = RES.getRes("girdRelease_png");
        // 		//创建动画工厂
        // 		var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
        // 		//创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        // 		var mc = new Array();
        // 		mc[m] = new egret.MovieClip(mcDataFactory.generateMovieClipData("girdRelease"));
        // 		mc[m].x = girdLock.x;
        // 		mc[m].y = girdLock.y -20;
        // 		this.addChild(mc[m]);
        // 		mc[m].gotoAndPlay(1,-1);
        // 		mc[m].addEventListener(egret.Event.COMPLETE, function (){
        // 			// egret.log("1,COMPLETE");
        // 			// this.removeChild(mc[m]);
        // 		}, this);
        // 		m++;
        // 		// egret.setTimeout(function(){mc.gotoAndPlay(1);},this,3000);
        // 	}
        // }
    };
    /**
     * 创建等级显示区域背景图
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createPlayerLevelBg = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_level_png");
        bg.width = GameData.girdWidth * 0.44;
        bg.height = GameData.girdWidth * 0.53;
        bg.x = 20;
        bg.y = 30;
        // this.addChild(bg);
        var expBg = new egret.Bitmap();
        expBg.texture = RES.getRes("ui_base_count_png");
        expBg.width = GameData.girdWidth * 3;
        expBg.height = GameData.girdWidth / 3;
        expBg.x = 10 + bg.width;
        expBg.y = GameData.girdWidth * 0.375;
        // //console.log("等级显示背景图片"+bg.y)
        this.addChild(expBg);
    };
    /**
     * 创建金币显示区域背景图
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createCoinBg = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_money_total_png");
        bg.width = GameData.girdWidth / 3;
        bg.height = GameData.girdWidth / 3;
        bg.x = 20;
        bg.y = GameData.girdWidth - 10;
        this.addChild(bg);
        var coinBg = new egret.Bitmap();
        coinBg.texture = RES.getRes("ui_base_count_png");
        coinBg.width = GameData.girdWidth * 1.5;
        coinBg.height = GameData.girdWidth / 3;
        coinBg.x = 20 + GameData.girdWidth / 3;
        coinBg.y = bg.y;
        this.addChild(coinBg);
        // let label:egret.TextField = new egret.TextField(); 
        // label.text = "9999"; 
        // label.width =  3*GameData.girdWidth;
        // label.x = 90;
        // label.y = bg.y;
        // this.addChild( label );
    };
    /**
     * 创建秒产显示区域
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createCoinOutputBg = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_money_sec_png");
        bg.width = GameData.girdWidth / 3 + 5;
        bg.height = GameData.girdWidth / 3;
        bg.x = 25 + GameData.girdWidth / 3 + GameData.girdWidth * 1.5;
        bg.y = GameData.girdWidth - 10;
        this.addChild(bg);
        var secBg = new egret.Bitmap();
        secBg.texture = RES.getRes("ui_base_count_png");
        secBg.width = GameData.girdWidth * 1.5;
        secBg.height = GameData.girdWidth / 3;
        secBg.x = 30 + GameData.girdWidth * 1.5 + 2 * GameData.girdWidth / 3;
        secBg.y = bg.y;
        this.addChild(secBg);
        // let label:egret.TextField = new egret.TextField(); 
        // label.text = "9999"; 
        // label.x = 50+GameData.girdWidth*1.5+2*GameData.girdWidth/3;
        // label.y = 50+ GameData.girdWidth/2;
        // this.addChild( label );
    };
    /**
     * 创建分享两倍金币背景图
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createShareBg = function () {
        this.share5x = new egret.Bitmap();
        this.share5x.texture = RES.getRes("ui_share_5x_01_a_png");
        this.share5x.width = GameData.girdWidth * 1.05;
        this.share5x.height = GameData.girdWidth * 0.46;
        this.share5x.x = GameData.stageW - GameData.girdWidth * 1.3;
        this.share5x.y = GameData.girdWidth * 0.875;
        this.addChild(this.share5x);
        this.hint = ResourceUtils.createBitmapByName("ui_share_hint_png");
        this.hint.x = this.share5x.x + this.share5x.width - this.hint.width / 2;
        this.hint.y = this.share5x.y;
        this.addChild(this.hint);
        this.share5x.touchEnabled = true;
        this.share5x.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
        // this.share5x.addEventListener(egret.TouchEvent.TOUCH_TAP, this.x5profit, this);
    };
    GameBackGround.prototype.share = function () {
        //console.log("5倍分享:");
        var shareResult = platform.share("key=backgroud");
        egret.localStorage.setItem("x5Time", new Date().getTime().toString());
        // this.htimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);	
        // GameData.secCoin = CommonFuction.cheng(GameData.secCoin,'5');//秒产5
    };
    GameBackGround.prototype.x5profit = function () {
        this.share5x.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
        this.share5xOn = new egret.Bitmap();
        this.share5xOn.texture = RES.getRes("ui_share_5x_01_b_png");
        this.share5xOn.width = GameData.girdWidth * 1.05;
        this.share5xOn.height = GameData.girdWidth * 0.46;
        this.share5xOn.x = GameData.stageW - GameData.girdWidth * 1.3;
        this.share5xOn.y = GameData.girdWidth * 0.875;
        this.removeChild(this.share5x);
        this.addChild(this.share5xOn);
        this.htimeBase = ResourceUtils.createBitmapByName("ui_share_5x_timebase_png");
        this.htimeBase.x = this.share5xOn.x + (this.share5xOn.width - this.htimeBase.width) / 2;
        this.htimeBase.y = this.share5xOn.y + this.share5xOn.height + 5;
        this.addChild(this.htimeBase);
        this.htimeText = new egret.TextField();
        this.htimeText.text = "3:00";
        this.htimeText.fontFamily = "黑体";
        this.htimeText.size = 25;
        this.htimeText.textColor = 0xffffff;
        this.htimeText.textAlign = egret.HorizontalAlign.CENTER;
        this.htimeText.x = this.htimeBase.x;
        this.htimeText.y = this.htimeBase.y;
        this.htimeText.width = this.htimeBase.width;
        this.addChild(this.htimeText);
        this.share5xOn.touchEnabled = false;
        this.removeChild(this.hint);
        if (!this.htimer.running) {
            this.htimer.reset();
            this.htimer.start();
            this.cacheAsBitmap = false;
            //console.log("5倍分享:"+this.htimer.running);
        }
        GameBackGround.hTimerStatus = true;
        this.htimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    };
    GameBackGround.prototype.shareContinue = function () {
        //console.log("继续5倍秒产:");
        this.share5xOn = new egret.Bitmap();
        this.share5xOn.texture = RES.getRes("ui_share_5x_01_b_png");
        this.share5xOn.width = GameData.girdWidth * 1.05;
        this.share5xOn.height = GameData.girdWidth * 0.46;
        this.share5xOn.x = GameData.stageW - GameData.girdWidth * 1.3;
        this.share5xOn.y = GameData.girdWidth * 0.875;
        this.removeChild(this.share5x);
        this.addChild(this.share5xOn);
        this.htimeBase = ResourceUtils.createBitmapByName("ui_share_5x_timebase_png");
        this.htimeBase.x = this.share5xOn.x + (this.share5xOn.width - this.htimeBase.width) / 2;
        this.htimeBase.y = this.share5xOn.y + this.share5xOn.height + 5;
        this.addChild(this.htimeBase);
        this.htimeText = new egret.TextField();
        this.htimeText.text = "";
        this.htimeText.fontFamily = "黑体";
        this.htimeText.size = 25;
        this.htimeText.textColor = 0xffffff;
        this.htimeText.textAlign = egret.HorizontalAlign.CENTER;
        this.htimeText.x = this.htimeBase.x;
        this.htimeText.y = this.htimeBase.y;
        this.htimeText.width = this.htimeBase.width;
        this.addChild(this.htimeText);
        this.share5xOn.touchEnabled = false;
        this.removeChild(this.hint);
        //console.log(this.htimer.running);
        if (!this.htimer.running) {
            this.htimer.reset();
            this.htimer.start();
            this.cacheAsBitmap = false;
            // //console.log(this.htimer.running);
        }
        GameBackGround.hTimerStatus = true;
        this.htimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    };
    Object.defineProperty(GameBackGround.prototype, "second", {
        get: function () {
            return this._second;
        },
        set: function (second) {
            this._second = second;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameBackGround.prototype, "minute", {
        get: function () {
            return this._minute;
        },
        set: function (minute) {
            this._minute = minute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 显示倒计时
     */
    GameBackGround.prototype.timerFunc = function () {
        // //console.log("5x分享倒计时器"+ this.htimer.running);
        if (this.second == 1 && this.minute == 0) {
            this.htimer.reset();
            GameBackGround.hTimerStatus = false;
            this.timerComFunc();
        }
        this._second--;
        if (this.second == 0) {
            if (this._minute > 0) {
                this._minute--;
                this._second = 59;
            }
        }
        this.htimeText.text = this._minute.toString() + ":" + ('0' + this._second.toString()).slice(-2);
    };
    /**
     * 倒计时结束，秒产恢复
     */
    GameBackGround.prototype.timerComFunc = function () {
        this.removeChild(this.share5xOn);
        this.removeChild(this.htimeText);
        this.removeChild(this.htimeBase);
        this.createShareBg();
        GameData.secCoin = CommonFuction.chu(GameData.secCoin, 5);
        this._second = 61;
        this._minute = 2;
        this.cacheAsBitmap = true;
    };
    GameBackGround.prototype.addDragGird = function (girdLocation) {
        //console.log("显示可以合并的地块")
        var i = Math.floor(girdLocation / GameData.MaxColumn);
        var t = girdLocation % GameData.MaxColumn;
        var gird = new egret.Bitmap();
        gird.width = GameData.girdWidth;
        gird.height = GameData.girdWidth * 0.6;
        gird.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * t;
        gird.y = GameData.startY + 20 + GameData.girdWidth * i;
        if (GameData.mapData[i][t] != -1) {
            gird.texture = RES.getRes("drag_synthesis_small_png"); //载入地块
        }
        this.addChild(gird);
        // this.dragContainer.addChild(gird); 
    };
    GameBackGround.prototype.clear = function () {
        //console.log("清除背景");
        this.cacheAsBitmap = false;
        this.removeChildren();
        this.cacheAsBitmap = true;
    };
    GameBackGround.prototype.setSceneData = function (i) {
        GameData.bgMusic = "sound_bg0" + i + ".mp3";
        GameData.levelBackgroundImageName = "scene_0" + i + "_back_png";
        GameData.levelFrontBackgroundImageName = "scene_0" + i + "_front_png";
        GameData.girdImageName = "scene_0" + i + "_base_small_png";
        GameData.girdLockImageName = "scene_0" + i + "_base_small_lock_png";
        GameData.setSceneData = true;
    };
    GameBackGround.girdLockArr = [];
    GameBackGround.hTimerStatus = false;
    return GameBackGround;
}(egret.Sprite));
__reflect(GameBackGround.prototype, "GameBackGround");
var GameData = (function () {
    function GameData() {
    }
    //初始化游戏数据，仅仅创建空对象
    GameData.initData = function () {
        //console.log("GameData初始化")
        GameData.mapData = new Array();
        for (var i = 0; i < GameData.MaxRow; i++) {
            var arr = new Array();
            GameData.mapData.push(arr);
            for (var t = 0; t < GameData.MaxColumn; t++) {
                GameData.mapData[i].push(-1);
                // GameData.mapData[i][t] = -2;
            }
        }
        // //console.log(GameData.mapData)
        for (var i = 0; i < GameData.elementTypes.length; i++) {
            // //console.log("购买次数"+this._houseBuyNubmer[i]);
            if (!GameData.houseBuyNumber[i]) {
                GameData.houseBuyNumber[i] = 0; //所有房子购买次数为0
            }
        }
        GameData.levelExp = 0;
        GameData.availableMapId = new Array();
        GameData.elements = new Array();
        GameData.unusedElements = new Array();
        var len = GameData.MaxRow * GameData.MaxColumn;
        var element;
        for (var i = 0; i < len; i++) {
            element = new GameElement();
            element.id = i;
            GameData.elements.push(element);
            GameData.unusedElements.push(i);
        }
        GameData.stageW = egret.MainContext.instance.stage.stageWidth;
        GameData.stageH = egret.MainContext.instance.stage.stageHeight;
        GameData.girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        GameData.startY = GameData.girdWidth * 2;
        // //console.log("舞台宽度"+GameData.stageW);
        // //console.log("舞台高度"+GameData.stageH);
        GameData.zeroConfigArr = RES.getRes("zero_config_json");
        GameData.houseDownArr = RES.getRes("housedown_config_json");
        GameData.buyHouseConfigArray = RES.getRes("buy_house_config_json");
        GameData.availableBuyHouseArr = RES.getRes("available_buy_house_json");
    };
    GameData.closeMusic = false;
    GameData.closeBgMusic = false;
    GameData.unmapnum = 0; //空白地图块数量
    // public static stepNum:number = 0;//玩家剩余步数
    // public static levelStepNum:number =0;//当前关卡步数
    GameData.elementTypes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]; //当前关卡出现的元素类型
    GameData.levelBackgroundImageName = ""; //当前关卡背景图资源名
    GameData.levelFrontBackgroundImageName = ""; //当前关卡前置背景图资源名
    GameData.setSceneData = false; //是否已经设定场景
    GameData.bgMusic = ""; //当前关卡背景音乐
    GameData.girdImageName = ""; //当前关卡地块背景图资源名
    GameData.girdLockImageName = ""; //当前关卡锁定地块背景图资源名
    GameData.MaxRow = 5; //最大的行
    GameData.MaxColumn = 4; //最大的列
    GameData.currentElementNum = 0; //当前关卡游戏中地图可用元素数量
    GameData.girdBg = new Array(); //游戏中地图格子数组
    GameData.coin = '0'; //游戏中获得的金币
    GameData.secCoin = '0'; //游戏秒产金币数值
    GameData.oldElements = new Array(); //用于保存上一关剩下的元素，切换新关卡时候添加
    GameData.elementTypeFirstShow = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]; //元素是否第一次出现，0~51,用于第一次出现时弹出提示
    GameData.maxHouseGrade = 1; //当前房子最高等级
    GameData.houseBuyNumber = new Array(); //房子购买次数
    GameData.newHouse = false; //是否合成新房子,
    GameData.cost = '0'; //购买房屋总花费
    GameData.currentLevel = 1; //当前关卡
    GameData.levelExp = 0; //当前关卡获得的经验值,
    GameData.levelReqExp = 0; //当前关卡过关需要的经验值,
    GameData.levelCoin = '0'; //当前关卡过关奖励的金币,
    GameData.boxDownWeight = 0; //当前关卡箱子掉落权重
    GameData.ordinaryBoxHouseGrade = 1; //当前关卡普通箱打开房子等级
    GameData.giftBoxHouseGrade = 2; //当前关卡礼物箱打开房子等级
    //舞台宽高，此封装为了方便调用
    GameData.stageW = 0;
    GameData.stageH = 0;
    GameData.girdWidth = 0;
    GameData.startY = 0;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
var LevelGameDataParse = (function () {
    function LevelGameDataParse() {
    }
    /**
     * 针对当前关卡JSON数据，进行解析
     */
    LevelGameDataParse.parseLevelGameData = function (val) {
        // GameData.elementTypes = [0,1,2,3,4,5,6,7,8];
        if (!GameData.setSceneData) {
            if (val.city_map >= 5) {
                val.city_map = 5;
            }
            GameData.bgMusic = "sound_bg0" + val.city_map + ".mp3";
            GameData.levelBackgroundImageName = "scene_0" + val.city_map + "_back_png";
            GameData.levelFrontBackgroundImageName = "scene_0" + val.city_map + "_front_png";
            GameData.girdImageName = "scene_0" + val.city_map + "_base_small_png";
            GameData.girdLockImageName = "scene_0" + val.city_map + "_base_small_lock_png";
        }
        GameData.levelReqExp = val.up_exp;
        GameData.boxDownWeight = Number(val.down_weight);
        GameData.ordinaryBoxHouseGrade = Number(val.ordinarybox_lv);
        GameData.giftBoxHouseGrade = Number(val.seniorbox_lv);
    };
    return LevelGameDataParse;
}());
__reflect(LevelGameDataParse.prototype, "LevelGameDataParse");
var LevelRequire = (function () {
    function LevelRequire() {
        this.reqElements = new Array();
    }
    /**
     * 关卡卡过关条件数量
     */
    LevelRequire.prototype.getLevelReqNum = function () {
        return this.reqElements.length;
    };
    /**
     * 添加一个关卡元素，类型与数量
     */
    LevelRequire.prototype.addElements = function (type, num) {
        var element = new LevelRequireElement();
        element.num = num;
        element.type = type;
        this.reqElements.push(element);
    };
    /**
     * 启动关卡条件修改
       */
    LevelRequire.prototype.openChange = function () {
        this.reqElements = [];
    };
    /**
     * 减少关卡中得元素数量
     */
    LevelRequire.prototype.changeReqNum = function (type, num) {
        var len = this.getLevelReqNum();
        for (var i = 0; i < len; i++) {
            if (this.reqElements[i].type == type) {
                this.reqElements[i].num -= num;
                // console.log("最新数量",this.reqElements[i].num);
                return;
            }
        }
    };
    /**
     * 检测是否达到通关条件
     */
    LevelRequire.prototype.isClear = function () {
        if (GameData.levelExp >= GameData.levelReqExp)
            return true;
    };
    return LevelRequire;
}());
__reflect(LevelRequire.prototype, "LevelRequire");
var MapControl = (function () {
    function MapControl() {
    }
    /**
     * 创建全地图元素
    */
    MapControl.prototype.createElementAllMap = function () {
        this.createAllMap2();
    };
    /**
     * 创建一个空地图
     * 游戏开始时调用
     * Date:2018/08/11
     * author:bigfoot
    */
    MapControl.prototype.createAllMap2 = function () {
        var len = GameData.MaxColumn * GameData.MaxRow;
        var type = "b";
        var id = 0;
        var mapDataArray = RES.getRes("map_data_json");
        var mapData;
        if (GameData.currentLevel < 10) {
            mapData = mapDataArray[GameData.currentLevel - 1];
        }
        else {
            mapData = mapDataArray[0];
        }
        var mapNumber = mapData.map.length;
        var mapArr = mapData.addmap;
        // console.log("创建空地图:");
        for (var i = 0; i < GameData.MaxRow; i++) {
            for (var t = 0; t < GameData.MaxColumn; t++) {
                if (GameData.mapData[i][t] != -1) {
                    if (GameData.oldElements.length != 0) {
                        // console.log("创建空地图"+GameData.oldElements[0].id);					
                        // console.log("创建空地图"+GameData.oldElements[0].location);					
                        // console.log("创建空地图"+GameData.oldElements[0].type);					
                        // console.log(GameData.oldElements[0]);					
                        // id = GameData.unusedElements[0];
                        id = GameData.oldElements[0].id;
                        GameData.elements[id].type = "b0";
                        GameData.elements[id].type = GameData.oldElements[0].type;
                        // GameData.elements[id].location = i*GameData.MaxRow+t;
                        if (GameData.oldElements[0].location != 0) {
                            GameData.elements[id].location = GameData.oldElements[0].location;
                            GameData.elements[id].grade = GameData.oldElements[0].grade;
                            GameData.elements[id].time = GameData.oldElements[0].time;
                            // console.log("创建空地图old不等于0"+GameData.oldElements[0].location);
                            // console.log("创建空地图id"+id);
                            // console.log("创建空地图i:"+i);
                            // console.log("创建空地图t:"+t);
                            // console.log("创建空地图location:"+GameData.elements[id].location);	
                        }
                        else if ((GameData.oldElements[0].location == 0) && (GameData.oldElements[0].type.length !== 0)) {
                            GameData.elements[id].location = GameData.oldElements[0].location;
                            GameData.elements[id].grade = GameData.oldElements[0].grade;
                            GameData.elements[id].time = GameData.oldElements[0].time;
                            // console.log("创建空地图old等于0"+GameData.oldElements[0].location);
                            // console.log("创建空地图id"+id);
                            // console.log("创建空地图i:"+i);
                            // console.log("创建空地图t:"+t);
                            // console.log("创建空地图location:"+GameData.elements[id].location);	
                        }
                        else {
                            GameData.elements[id].location = mapArr[0];
                            GameData.elements[id].type = "b";
                            mapArr.shift();
                            // console.log("创建空地图新增id"+id);
                            // console.log("创建空地图i:"+i);
                            // console.log("创建空地图t:"+t);
                            // console.log("创建空地图location:"+GameData.elements[id].location);	
                        }
                        GameData.oldElements.shift();
                    }
                    else {
                        id = GameData.unusedElements[0];
                        GameData.elements[id].type = "b";
                        GameData.elements[id].location = i * GameData.MaxColumn + t; //修改为4*5以后计算方式改变了，发现不对改回去
                        GameData.unusedElements.shift();
                    }
                    // console.log("创建空地图map:"+GameData.mapData[i][t]);
                    GameData.mapData[i][t] = -2;
                    if (GameData.elements[id].type != "b0" && GameData.elements[id].grade == 0) {
                        GameData.availableMapId.push(id); //将可以使用的位置存入数组。
                    }
                    // console.log("创建空地图availableMapId:"+GameData.availableMapId);					
                }
                else {
                    GameData.mapData[i][t] = -1;
                }
            }
        }
        // console.log("创建空地图map:"+GameData.mapData);
    };
    /**
     * 随机创建一个类型元素
     */
    MapControl.prototype.createType = function () {
        return GameData.elementTypes[Math.floor(Math.random() * GameData.elementTypes.length)].toString();
    };
    /**
     * 针对某一个数据元素更新它得类型
     */
    MapControl.prototype.changeTypeByID = function (id) {
        GameData.elements[id].type = this.createType();
    };
    /**
     * 根据当前删除得地图元素，刷新所有元素得位置
     */
    MapControl.prototype.updateMapLocation = function () {
    };
    return MapControl;
}());
__reflect(MapControl.prototype, "MapControl");
var MapDataParse = (function () {
    function MapDataParse() {
    }
    /**
     * 根据外部加载的数据来创建地图数据,数组中存放着无法放置内容得区域，该区域数值均为-1
     */
    MapDataParse.createMapData = function (val) {
        var len = val.length;
        GameData.unmapnum = len;
        var index = 0;
        // console.log(val);
        // console.log(len);
        for (var i = 0; i < len; i++) {
            index = val[i];
            var m = Math.floor(index / GameData.MaxColumn);
            var n = index % GameData.MaxColumn;
            // console.log(index);
            // console.log( m+ "  "+ n);
            GameData.mapData[m][n] = -2;
            // GameData.availableMapId.push(index);//将可以使用的位置存入数组。
        }
        // console.log("地图数据解析："+GameData.mapData);
        GameData.currentElementNum = GameData.MaxColumn * GameData.MaxRow - len;
    };
    return MapDataParse;
}());
__reflect(MapDataParse.prototype, "MapDataParse");
// TypeScript file
/**
 * 道具逻辑
 */
var PropLogic = (function (_super) {
    __extends(PropLogic, _super);
    function PropLogic() {
        var _this = _super.call(this) || this;
        _this.isdisplay = false;
        return _this;
    }
    //道具编号以及说明
    // 0  排行榜
    // 1  声音控制
    // 2  箱子   每10秒生成一个一级元素
    // 3  删除
    // 4  道具商店
    PropLogic.prototype.useProp = function (propType) {
        switch (propType) {
            case 0:
                // this.rank();
                break;
            case 1:
                this.voice();
                break;
            case 2:
                // this.box();
                break;
            case 3:
                // this.shop();
                break;
            case 4:
                this.recycle();
                break;
        }
    };
    PropLogic.prototype.rank = function () {
        // console.log("点击排行榜");
    };
    PropLogic.prototype.voice = function () {
        // console.log('voice:');
        if (GameData.closeBgMusic) {
            SoundUtils.instance().stopBg();
        }
        else {
            GameData.closeBgMusic = false;
            SoundUtils.instance().playBg();
        }
        console.log(GameData.closeBgMusic);
    };
    PropLogic.prototype.box = function () {
        //    console.log('box_in');
    };
    PropLogic.prototype.shop = function () {
    };
    PropLogic.prototype.recycle = function () {
        // console.log('recycle');        
    };
    return PropLogic;
}(egret.Sprite));
__reflect(PropLogic.prototype, "PropLogic");
var GameLogic = (function () {
    function GameLogic(gameStage) {
        this._returnGame = true; //返回游戏
        /*------------------------------------------------------------------------------------------------*/
        this._hasOldData = false;
        this._gameStage = gameStage;
        this.init();
    }
    GameLogic.prototype.init = function () {
        GameData.initData(); //初始化数据
        if (this._returnGame && !GameLogic.guide) {
            this.loadOldData();
        }
        //console.log("当前关卡："+GameData.currentLevel);
        var mapDataArray = RES.getRes("map_data_json");
        var mapData;
        if (GameData.currentLevel < 10) {
            mapData = mapDataArray[GameData.currentLevel - 1];
        }
        else {
            mapData = mapDataArray[8];
        }
        //console.log(mapData);
        var levelDataArray = RES.getRes("level_data_json"); //初始化GameData数据
        var levelData = levelDataArray[GameData.currentLevel - 1];
        //console.log(levelData);		
        MapDataParse.createMapData(mapData.map); //创建地图数据
        LevelGameDataParse.parseLevelGameData(levelData);
        this.mapc = new MapControl();
        this.mapc.createElementAllMap();
        this.gbg = new GameBackGround();
        this._gameStage.addChild(this.gbg);
        this.gbg.changeBackground();
        if (GameData.currentLevel != 1) {
            this.setGbgShareTimer();
            GameLogic.guide = false;
        }
        else {
            GameLogic.guide = true; //默认第一关true
        }
        var lec = new egret.Sprite();
        this._gameStage.addChild(lec);
        this.levm = new LevelReqViewManage(lec);
        // this.levm.createCurrentLevelReq();
        var pvmc = new egret.Sprite();
        this._gameStage.addChild(pvmc);
        this.pvm = new PropViewManage(pvmc);
        var cc = new egret.Sprite();
        this._gameStage.addChild(cc);
        this.evm = new ElementViewManage(cc);
        SoundUtils.instance().initSound();
        SoundUtils.instance().playBg();
        //console.log("游戏场景初始化"+this._returnGame);
        if (GameLogic.guide && GameData.currentLevel == 1 && GameData.availableMapId.length == 4) {
            this.evm.showElementById(0);
            this.evm.showElementById(1);
            this.gv = new GuideView();
            this._gameStage.addChild(this.gv);
            this.gv.guideFirst();
        }
        else {
            this.wrp = new WelcomeRetrunPanel();
            if (this._returnGame && GameData.coin != '0') {
                this._gameStage.addChild(this.wrp);
                this.wrp.show(GameData.secCoin, this._due);
            }
            if (!this._hasOldData) {
                this.evm.showElement();
            }
            else {
                this.evm.addLastLevelElements();
                this.evm.timerToBox2();
                // this.evm.showElement();
            }
        }
        var csp = new egret.Sprite();
        this._gameStage.addChild(csp);
        this.csp = new ChangeScenePanel(csp);
        var nhc = new egret.Sprite();
        this._gameStage.addChild(nhc);
        this.nhp = new NewHousePanel(nhc);
        // /注册侦听器，即指定事件由  哪个对象  的哪个方法来接受
        // this.evm.addEventListener(ElementViewManageEvent.TAP_TWO_ELEMENT,this.viewTouchTap,this);
        this.evm.addEventListener(ElementViewManageEvent.OPEN_NEW_HOUSE_PANEL, this.openNewHousePanel, this);
        this.evm.addEventListener(ElementViewManageEvent.GET_NEW_HOUSE_PROFIT, this.getNewHouseProfit, this);
        this.nhp.addEventListener(ElementViewManageEvent.CLOSE_NEW_HOUSE_PANEL, this.addLevelExp, this);
        this.evm.addEventListener(ElementViewManageEvent.LEVEL_EXP_UP, this.nextLevelTest, this);
        this.evm.addEventListener(ElementViewManageEvent.CLOSE_LEVEL_UP_PANEL, this.getLevelUpProfit, this);
        this.evm.addEventListener(ElementViewManageEvent.OPEN_SCENES, this.openScenes, this);
        this.csp.addEventListener(ElementViewManageEvent.CHANGE_SCENE, this.changeScene, this);
        this.evm.addEventListener(ElementViewManageEvent.GET_PROFIT, this.addProfit, this);
        this.evm.addEventListener(ElementViewManageEvent.X5_PROFIT, this.x5Profit, this);
        this.evm.addEventListener(ElementViewManageEvent.REWARD_HOUSE, this.rewardHouse, this);
        this.evm.addEventListener(ElementViewManageEvent.GUIDE_STEP_TWO, this.guideStepTwo, this);
        this.evm.addEventListener(ElementViewManageEvent.GUIDE_STEP_THREE, this.guideStepThree, this);
        this.evm.addEventListener(ElementViewManageEvent.GUIDE_RESET, this.init, this);
    };
    GameLogic.prototype.loadOldData = function () {
        //console.log("读取旧数据")
        var userGameData = egret.localStorage.getItem("userGameData");
        if (userGameData) {
            //console.log("读取旧数据成功")
            this._hasOldData = true;
            var oldData = JSON.parse(userGameData);
            //console.log(oldData);
            GameData.closeMusic = oldData.closeMusic ? oldData.closeBgMusic : false;
            GameData.closeBgMusic = oldData.closeBgMusic ? oldData.closeBgMusic : false;
            GameData.currentLevel = oldData.currentLevel;
            GameData.levelExp = oldData.levelExp;
            GameData.cost = oldData.cost;
            GameData.coin = oldData.coin ? oldData.coin : '0';
            GameData.secCoin = oldData.secCoin;
            this._due = oldData.due;
            GameData.oldElements = oldData.inMap;
            GameData.maxHouseGrade = oldData.maxHouseGrade ? oldData.maxHouseGrade : 1;
            GameData.houseBuyNumber = oldData.buyHouseNumber;
            GameData.elementTypeFirstShow = oldData.elementTypeFirstShow;
            if (oldData.addRewrd) {
                this.evm.addReward();
            }
        }
        else {
            //console.log("没有旧数据");
            this._returnGame = false;
        }
    };
    GameLogic.prototype.onShow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wxData, userGameData, oldData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wxData = platform.getLaunchOptionsSync();
                        if (!wxData) return [3 /*break*/, 2];
                        return [4 /*yield*/, platform.getGameData("userGameData")];
                    case 1:
                        userGameData = _a.sent();
                        oldData = userGameData[0];
                        return [2 /*return*/, oldData];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GameLogic.prototype.nextLevelTest = function (evt) {
        //console.log('levelup监听事件成功');
        var shareTimer;
        if (GameBackGround.hTimerStatus) {
            shareTimer = JSON.stringify({ "status": true, "minute": this.gbg.minute, "second": this.gbg.second });
        }
        else {
            shareTimer = JSON.stringify({ "status": false });
        }
        //console.log("初始化后加速时间状态:"+GameBackGround.hTimerStatus);
        //console.log("剩余时间:"+shareTimer);
        egret.localStorage.setItem("shareTimer", shareTimer);
        var rewardIconStatus = egret.localStorage.getItem("rewardIconStatus");
        //console.log("rewardIconStatus:"+rewardIconStatus);
        GameData.currentLevel++; //关卡数目加1
        if (GameData.currentLevel >= 200) {
            this.isGameOver();
        }
        else {
            this.clear();
            GameData.oldElements = [].concat(GameData.elements);
            this._returnGame = false;
            this._hasOldData = true;
            this.init();
            if (rewardIconStatus == "true") {
                //console.log("加载免费图标")
                this.evm.addReward();
            }
            SoundUtils.instance().playLevelUpSound(); //播放升级音效
            SoundUtils.instance().playNewLandSound(); //播放开放新地块音效
            //console.log('到下一关');
            this.levelUpPanel = new LevelUpPanel();
            this._gameStage.addChild(this.levelUpPanel);
            this.levelUpPanel.show();
        }
    };
    /*************************************************新手引导*************************************************************************************************** */
    GameLogic.prototype.guideStepTwo = function () {
        // console.log('guideStepTwo监听事件成功');
        this.gv && this.gv.clear();
        this.gv && this.gv.guideTwo();
    };
    GameLogic.prototype.guideStepThree = function () {
        // console.log('guideStepThree监听事件成功');
        this.gv && this.gv.clear();
        this.gv && this.gv.guideThree();
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /**************************************************新房子********************************************************************************************* */
    GameLogic.prototype.openNewHousePanel = function (evt) {
        // console.log('openNewHousePanel监听事件成功');
        if (GameLogic.guide && evt.grade == 2) {
            this.gv.clear();
            GameLogic.guide = false;
            console.log(GameLogic.guide);
            this._gameStage.removeChild(this.gv);
            this.gbg.clear();
            this.gbg.changeBackground();
        }
        this.nhp.getNewHosuePanel(evt.grade);
    };
    GameLogic.prototype.getNewHouseProfit = function (evt) {
        // console.log('getNewHouseProfit监听事件成功');
        this.nhp.addProfit();
        // this._gameStage.removeChild(this.nhp);
        this.floatProfitText(CommonFuction.numZero(this.nhp.getProfitNum()));
    };
    GameLogic.prototype.addLevelExp = function (evt) {
        // console.log('closeNewHousePanel监听事件成功');
        this.evm.addLevelExp(GameData.maxHouseGrade);
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /**---------------------------------------------城市升级--------------------------------------------------------------------------------------------*/
    GameLogic.prototype.getLevelUpProfit = function (evt) {
        //console.log('levelupProfit监听事件成功');
        this.levelUpPanel.getLevelUpProfit();
        this._gameStage.removeChild(this.levelUpPanel);
        this.floatProfitText(CommonFuction.numZero(this.levelUpPanel.getProfitNum()));
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    GameLogic.prototype.openScenes = function (evt) {
        //console.log('打开场景监听事件成功');
        this.csp.show();
    };
    GameLogic.prototype.changeScene = function (evt) {
        //console.log('切换场景监听事件成功');
        this.gbg.clear();
        this.gbg.setSceneData(evt.sceneId);
        this.gbg.changeBackground();
        if (GameBackGround.hTimerStatus) {
            this.gbg.shareContinue();
        }
        SoundUtils.instance().stopBg();
        SoundUtils.instance().initBgSound();
        SoundUtils.instance().playBg();
    };
    GameLogic.prototype.addProfit = function () {
        //console.log('wrp获得离线收益监听事件成功');
        this.wrp.addProfit();
        this.wrp.closePanel();
        this._gameStage.removeChild(this.wrp);
        this.floatProfitText(CommonFuction.numZero(this.wrp.getProfitNum()));
    };
    /**
     * 欢迎回归收益飘字
     */
    GameLogic.prototype.floatProfitText = function (profit) {
        //console.log("增加离线收益成功");
        var wrp = new WelcomeRetrunPanel();
        var coinView = ResourceUtils.createBitmapByName("shop#shop_money_01_png");
        coinView.x = GameData.stageW / 8 + GameData.stageW * 3 / 16;
        // coinView.y = (GameData.stageH - GameData.stageW*3/4*1.464)/2;
        coinView.y = GameData.stageH - GameData.girdWidth * 1.575 * 2;
        var txtView = new egret.TextField;
        // txtView.textColor = 0xDC143C;
        txtView.textColor = 0xFFFFFF;
        txtView.text = profit;
        txtView.bold = true;
        txtView.size = 30;
        txtView.x = coinView.x + coinView.width + 20;
        txtView.y = coinView.y;
        this._gameStage.addChild(coinView);
        this._gameStage.addChild(txtView);
        var twn = egret.Tween.get(coinView);
        twn.wait(200).to({ "alpha": 1, x: 20, y: GameData.girdWidth - 10, scaleX: 1.2, scaleY: 1.2 }, 1000, egret.Ease.sineInOut).to({ scaleX: 0.6, scaleY: 0.6 }).call(function () {
            this._gameStage.removeChild(coinView);
        }, this);
        var twn = egret.Tween.get(txtView);
        twn.wait(200).to({ "alpha": 1, x: 20 + GameData.girdWidth / 3, y: GameData.girdWidth - 10, scaleX: 1.2, scaleY: 1.2 }, 1000, egret.Ease.sineInOut).to({ scaleX: 1, scaleY: 1 }).call(function () {
            this._gameStage.removeChild(txtView);
        }, this);
    };
    GameLogic.prototype.x5Profit = function () {
        this.gbg.x5profit();
    };
    GameLogic.prototype.rewardHouse = function () {
        this.evm.rewardHouse();
    };
    GameLogic.prototype.setGbgShareTimer = function () {
        var shareTimer = egret.localStorage.getItem("shareTimer");
        if (shareTimer) {
            shareTimer = JSON.parse(egret.localStorage.getItem("shareTimer"));
            //console.log("设定分享时间"+shareTimer);
            if (shareTimer.status) {
                this.gbg.minute = shareTimer.minute;
                this.gbg.second = shareTimer.second;
                this.gbg.shareContinue();
            }
        }
        // GameData.secCoin = CommonFuction.chu(GameData.secCoin,5);
    };
    GameLogic.prototype.clear = function () {
        GameData.availableMapId = [];
        while (this._gameStage.numChildren) {
            this._gameStage.removeChildAt(0);
        }
    };
    GameLogic.prototype.isGameOver = function () {
        //console.log("通关");
        if (!this.gameoverpanel) {
            this.gameoverpanel = new GameOverPanel();
            this._gameStage.addChild(this.gameoverpanel);
            this.gameoverpanel.show(true);
            GameData.currentLevel = 1; //当前关卡为1重新开始
            this.gameoverpanel.addEventListener(ElementViewManageEvent.GAME_OVER, this.init, this);
        }
    };
    GameLogic.version = "1.13.1"; //新手引导
    return GameLogic;
}());
__reflect(GameLogic.prototype, "GameLogic");
var GameElement = (function (_super) {
    __extends(GameElement, _super);
    function GameElement() {
        //游戏元素，用于标记当前舞台种出现的元素数据
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0; //唯一ID，代表当前舞台上得元素,这个ID要和view中得元素ID对应
        _this.location = 0; //位置坐标，使用0-64来进行记录
        _this.grade = 0; //元素的等级
        _this.time = 0; //创建时间
        return _this;
        // public type:string = "";//元素的类型 
    }
    return GameElement;
}(BaseElement));
__reflect(GameElement.prototype, "GameElement");
var LevelRequireElement = (function (_super) {
    __extends(LevelRequireElement, _super);
    function LevelRequireElement() {
        //游戏关卡通关条件数据
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 0; //需要消除得元素数量
        return _this;
    }
    return LevelRequireElement;
}(BaseElement));
__reflect(LevelRequireElement.prototype, "LevelRequireElement");
var ElementViewManageEvent = (function (_super) {
    __extends(ElementViewManageEvent, _super);
    // public propToElementLocation:number = 0; //携带道具点击的元素位置,这个暂时不需要了
    // public ele1:number=0;//第一个点击的元素
    // public ele2:number=0;//第二个点击的元素
    function ElementViewManageEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.sceneId = 1;
        _this.grade = 1;
        return _this;
    }
    ElementViewManageEvent.TAP_TWO_ELEMENT = "tap_two_element";
    ElementViewManageEvent.REMOVE_ANIMATION_OVER = "remove_animation_over";
    ElementViewManageEvent.UPDATE_MAP = "update_map";
    ElementViewManageEvent.UPDATE_VIEW_OVER = "update_view_over";
    ElementViewManageEvent.LEVEL_EXP_UP = "level_exp_up"; //升级
    ElementViewManageEvent.CLOSE_LEVEL_UP_PANEL = "close_level_up_panel"; //升级
    ElementViewManageEvent.OPEN_NEW_HOUSE_PANEL = "open_new_house_panel"; //打开新房子面板
    ElementViewManageEvent.GET_NEW_HOUSE_PROFIT = "get_new_house_profit"; //获取收益
    ElementViewManageEvent.CLOSE_NEW_HOUSE_PANEL = "close_new_house_panel"; //关闭新房子面板
    ElementViewManageEvent.CHANGE_SCENE = "change_scene"; //切换场景
    ElementViewManageEvent.OPEN_SCENES = "open_scenes"; //打开切换场景
    ElementViewManageEvent.BUY_NEW_HOUSE = "buy_new_house"; //购买新房屋
    ElementViewManageEvent.GET_PROFIT = "get_profit"; //获取离线收益
    ElementViewManageEvent.X5_PROFIT = "x5_profit"; //获取5倍秒产
    ElementViewManageEvent.REWARD_HOUSE = "reward_house"; //获取5倍秒产
    ElementViewManageEvent.DELETE_ELEMENT_OVER = "delete_element_over"; //元素删除完毕
    ElementViewManageEvent.GAME_OVER = "game_over"; //游戏结束
    ElementViewManageEvent.USE_PROP_CLICK = "use_prop_click";
    ElementViewManageEvent.GUIDE_STEP_TWO = "guide_step_two"; //新手引导第二步
    ElementViewManageEvent.GUIDE_STEP_THREE = "guide_step_three"; //新手引导第三步
    ElementViewManageEvent.GUIDE_RESET = "guide_reset"; //新手引导被打断，重新开始
    return ElementViewManageEvent;
}(egret.Event));
__reflect(ElementViewManageEvent.prototype, "ElementViewManageEvent");
/**
 * Created by Channing on 2014/9/17.
 */
var MyButtonForGame = (function (_super) {
    __extends(MyButtonForGame, _super);
    function MyButtonForGame(bgName, titleName) {
        var _this = 
        // console.log(bgName);
        // console.log(titleName);
        _super.call(this) || this;
        _this.sp = new egret.Sprite();
        _this.addChild(_this.sp);
        _this.bg = ResourceUtils.createBitmapByName(bgName);
        _this.sp.addChild(_this.bg);
        _this.title = ResourceUtils.createBitmapByName(titleName);
        if (_this.title.texture == null) {
            _this.title.texture = RES.getRes(titleName);
        }
        _this.title.x = (_this.bg.width - _this.title.width) >> 1;
        _this.title.y = (_this.bg.height - _this.title.height) >> 1;
        _this.sp.addChild(_this.title);
        _this.noScaleX = _this.sp.x;
        _this.noScaleY = _this.sp.y;
        return _this;
    }
    MyButtonForGame.prototype.setClick = function (func) {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickEvent, this);
        this.onClick = func;
    };
    MyButtonForGame.prototype.onClickEvent = function () {
        if (GameData.isClickBtn)
            return;
        var scaleX = (this.sp.width - this.sp.width * 0.8) / 2;
        var scaleY = (this.sp.height - this.sp.height * 0.8) / 2;
        this.tw = egret.Tween.get(this.sp);
        this.tw.to({ "scaleX": 0.7, "scaleY": 0.7, "x": scaleX, "y": scaleY }, 40).to({ "scaleX": 1, "scaleY": 1, "x": this.noScaleX, "y": this.noScaleY }, 40).call(this.onClickHandler, this);
    };
    MyButtonForGame.prototype.onClickHandler = function () {
        this.onClick();
    };
    return MyButtonForGame;
}(egret.Sprite));
__reflect(MyButtonForGame.prototype, "MyButtonForGame");
var two;
(function (two) {
    var Guide = (function (_super) {
        __extends(Guide, _super);
        function Guide() {
            return _super.call(this) || this;
        }
        /**
         * dp 确保已经定位并且没有加入到显示列表中。
         */
        Guide.prototype.init = function (dp, w, h) {
            var container = new egret.DisplayObjectContainer();
            var bg = new egret.Shape();
            bg.graphics.beginFill(0x000000, 0.8);
            bg.graphics.drawRect(0, 0, w, h);
            bg.graphics.endFill();
            container.addChild(bg);
            container.addChild(dp);
            dp.blendMode = egret.BlendMode.ERASE;
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(container);
            var bitmap = new egret.Bitmap(renderTexture);
            bitmap.pixelHitTest = true;
            this.addChild(bitmap);
        };
        Guide.prototype.clear = function () {
            while (this.numChildren) {
                this.removeChildAt(0);
            }
        };
        return Guide;
    }(egret.DisplayObjectContainer));
    two.Guide = Guide;
    __reflect(Guide.prototype, "two.Guide");
})(two || (two = {}));
/**
 * Created by FCX on 3/14/2016.
 */
var SoundBase = (function (_super) {
    __extends(SoundBase, _super);
    function SoundBase(url) {
        var _this = _super.call(this) || this;
        _this._soundURL = "bgSound";
        //默认播放位置，从头开始的
        _this._positon = 0;
        //默认不循环，设置为负数循环
        _this._loop = 1;
        //当前状态0位空，1位播放，2位暂停, 3表示加载完成,4表示加载失败
        _this._status = 0;
        if (url)
            _this._soundURL = url;
        _this._sound = new egret.Sound();
        _this._loadSound();
        return _this;
    }
    //加载音频
    SoundBase.prototype._loadSound = function () {
        if (RES.getRes(this._soundURL)) {
            this._sound = RES.getRes(this._soundURL);
        }
        else {
            //如果RES中未加载该资源，尝试绝对路径加载之。
            this._sound.once(egret.Event.COMPLETE, this.loadComplete, this);
            this._sound.once(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this);
            this._sound.load(this._soundURL);
        }
    };
    //加载音频完成
    SoundBase.prototype.loadComplete = function (e) {
        this._status = 3;
        var waring = "加载完成";
        egret.log(waring);
        //删除加载失败的监听
        this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this);
        this.dispatchEventWith(egret.Event.COMPLETE, false, waring);
    };
    //加载音频失败
    SoundBase.prototype.onLoadErr = function (e) {
        this._status = 4;
        var waring = "加载失败" + this._soundURL;
        egret.log(waring);
        //删除加载成功的监听
        this._sound.removeEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR, false, waring);
    };
    //设置url并重新加载
    SoundBase.prototype.setUrl = function (url) {
        this._soundURL = url;
        this._loadSound();
    };
    //设置循环
    SoundBase.prototype.looped = function (e) {
        this._soundChannel = null;
        this._positon = 0;
        this._status = 0;
        var waring = "播放完成";
        if (this._loop >= 0) {
            this.dispatchEventWith(egret.Event.SOUND_COMPLETE, false, waring);
        }
        else {
            this.play();
        }
    };
    //获取状态
    SoundBase.prototype.getStatus = function () {
        return this._status;
    };
    //设置音量
    SoundBase.prototype.setVolume = function (volume) {
        // console.log(this._status);
        if (1 === this._status)
            this._soundChannel.volume = volume / 100;
    };
    //显示播放时间
    SoundBase.prototype.showPosition = function () {
        if (1 === this._status)
            this._positon = this._soundChannel.position;
        return this._positon;
    };
    //播放音频
    SoundBase.prototype.play = function () {
        if (4 === this._status) {
            this._loadSound();
            return;
        }
        this._status = 1;
        if (this._soundChannel)
            this._soundChannel.stop();
        this._soundChannel = this._sound.play(this._positon, 1);
        this._soundChannel.volume = 0.3;
        this._soundChannel.once(egret.Event.SOUND_COMPLETE, this.looped, this);
        return this._status;
    };
    //设置循环
    SoundBase.prototype.setLoop = function (loop) {
        if (loop === void 0) { loop = 1; }
        this._loop = loop;
        return loop;
    };
    //设置暂停
    SoundBase.prototype.pause = function () {
        var temp = this._status;
        if (1 === temp) {
            this._positon = this._soundChannel.position;
            this._soundChannel.stop();
            this._status = 2;
        }
        egret.log(this._positon);
        return temp;
    };
    //恢复
    SoundBase.prototype.resume = function () {
        var temp = this._status;
        if (2 === temp) {
            this.play();
        }
        egret.log(this._positon);
        return temp;
    };
    //停止
    SoundBase.prototype.stop = function () {
        this._status = 0;
        this._positon = 0;
        this._soundChannel.stop();
        this._soundChannel = null;
    };
    return SoundBase;
}(egret.DisplayObjectContainer));
__reflect(SoundBase.prototype, "SoundBase");
/**
 * Created by Administrator on 2014/10/16.
 */
var SoundUtils = (function () {
    function SoundUtils() {
        if (SoundUtils._instance != null)
            throw new Error("singleton");
    }
    SoundUtils.instance = function () {
        return this._instance == null ? this._instance = new SoundUtils() : this._instance;
    };
    SoundUtils.prototype.initSound = function () {
        // this.bgSound = new SoundBase(GameData.bgMusic);
        this.bgSound = platform.createInnerAudioContext(GameData.bgMusic);
        this.levelUpSound = new SoundBase("sound_level_up_mp3");
        this.newLandSound = new SoundBase("sound_land_new_mp3");
        this.clickSound = new SoundBase("sound_click_mp3");
        this.newHouseSound = new SoundBase("sound_house_new_mp3");
        this.houseCoinSound = new SoundBase("sound_house_coin_mp3");
        this.closeSound = new SoundBase("sound_close_mp3");
        this.mergeSound = new SoundBase("sound_house_merge_mp3");
        this.boxDownSound = new SoundBase("sound_box_down_mp3");
        this.openBoxSound = new SoundBase("sound_openbox_mp3");
        this.openGiftBoxSound = new SoundBase("sound_opengiftbox_mp3");
    };
    SoundUtils.prototype.initBgSound = function () {
        // this.bgSound = new SoundBase(GameData.bgMusic);
        this.bgSound = platform.createInnerAudioContext(GameData.bgMusic);
    };
    SoundUtils.prototype.playBg = function () {
        //console.log("播放背景音乐")
        if (GameData.closeBgMusic) {
            this.bgSound.pause();
            return;
        }
        this.bgSound.loop = true;
        this.bgSound.play();
        // this.bgSound.setLoop(-1);
    };
    SoundUtils.prototype.stopBg = function () {
        this.bgSound.pause();
    };
    SoundUtils.prototype.playLevelUpSound = function () {
        if (GameData.closeMusic)
            return;
        this.levelUpSound.play();
    };
    SoundUtils.prototype.playNewLandSound = function () {
        if (GameData.closeMusic)
            return;
        this.newLandSound.play();
    };
    SoundUtils.prototype.playClickSound = function () {
        if (GameData.closeMusic)
            return;
        this.clickSound.play();
    };
    SoundUtils.prototype.playNewHouseSound = function () {
        if (GameData.closeMusic)
            return;
        this.newHouseSound.play();
    };
    SoundUtils.prototype.playHouseCoinSound = function () {
        if (GameData.closeMusic)
            return;
        this.houseCoinSound.play();
    };
    SoundUtils.prototype.playCloseSound = function () {
        if (GameData.closeMusic)
            return;
        this.closeSound.play();
    };
    SoundUtils.prototype.playMergeSound = function () {
        if (GameData.closeMusic)
            return;
        this.mergeSound.play();
    };
    SoundUtils.prototype.playBoxDownSound = function () {
        if (GameData.closeMusic)
            return;
        this.boxDownSound.play();
    };
    SoundUtils.prototype.playHitBoxSound = function () {
        if (GameData.closeMusic)
            return;
        this.clickSound.play();
    };
    SoundUtils.prototype.playOpenBoxSound = function () {
        if (GameData.closeMusic)
            return;
        this.openBoxSound.play();
    };
    SoundUtils.prototype.playOpenGiftBoxSound = function () {
        if (GameData.closeMusic)
            return;
        this.openGiftBoxSound.play();
    };
    return SoundUtils;
}());
__reflect(SoundUtils.prototype, "SoundUtils");
var ChangeScenePanel = (function (_super) {
    __extends(ChangeScenePanel, _super);
    function ChangeScenePanel(elementLayer) {
        var _this = _super.call(this) || this;
        _this._sceneContainer = new egret.Sprite();
        _this._sceneScrollView = null;
        _this._scenes = null;
        _this._openScrollX = 0;
        _this.sceneChooseCheck = ResourceUtils.createBitmapByName("scene#scene_choose_check_png");
        _this._layer = elementLayer;
        return _this;
    }
    ChangeScenePanel.prototype.show = function () {
        var changeSceneMask = new egret.Shape();
        changeSceneMask.graphics.beginFill(0x000000, 0.8);
        changeSceneMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        changeSceneMask.graphics.endFill();
        changeSceneMask.alpha = 0.8;
        changeSceneMask.touchEnabled = true;
        SoundUtils.instance().playClickSound();
        this._layer.addChild(this._sceneContainer);
        var changeSceneBase = ResourceUtils.createBitmapByName("scene#scene_choose_base_png");
        changeSceneBase.width = GameData.stageW * 0.965;
        changeSceneBase.height = changeSceneBase.width * 1.5;
        changeSceneBase.x = (GameData.stageW - changeSceneBase.width) / 2;
        changeSceneBase.y = (GameData.stageH - changeSceneBase.height) / 2;
        this._sceneContainer.addChild(changeSceneMask);
        this._sceneContainer.addChild(changeSceneBase);
        this._scenes = this.createScenes();
        //创建ScrollView
        this._sceneScrollView = new egret.ScrollView();
        this._sceneScrollView.setContent(this._scenes);
        this._sceneScrollView.width = GameData.stageW * 0.8;
        this._sceneScrollView.height = GameData.stageW * 1.25;
        this._sceneScrollView.x = (GameData.stageW - this._sceneScrollView.width) / 2;
        this._sceneScrollView.y = (GameData.stageH - this._sceneScrollView.height) / 2;
        this._sceneScrollView.anchorOffsetX = 0;
        this._sceneScrollView.anchorOffsetY = 0;
        this._sceneScrollView.setScrollLeft(this._openScrollX);
        //垂直滚动设置为 on 
        this._sceneScrollView.verticalScrollPolicy = "on";
        //水平滚动设置为 off
        this._sceneScrollView.horizontalScrollPolicy = "off";
        // //console.log(this._cards);
        this._sceneContainer.addChild(this._sceneScrollView);
        // let closeBtn = ResourceUtils.createBitmapByName("ranking_close_png");
        // closeBtn.x =  GameData.stageW - closeBtn.width*2 -changeSceneBase.x;
        // closeBtn.y = changeSceneBase.y +30;
        // closeBtn.touchEnabled = true;
        // closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closePanel,this);
        this.closeBtn = new egret.Shape();
        this.closeBtn.width = GameData.girdWidth;
        this.closeBtn.height = GameData.girdWidth;
        this.closeBtn.graphics.beginFill(0x000000, 0);
        var x = GameData.stageW - this.closeBtn.width - changeSceneBase.x - 10;
        var y = changeSceneBase.y - 5;
        this.closeBtn.graphics.drawRect(x, y, this.closeBtn.width, this.closeBtn.height);
        this.closeBtn.graphics.endFill();
        this.closeBtn.touchEnabled = true;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closePanel, this);
        this._layer.addChild(this.closeBtn);
    };
    ChangeScenePanel.prototype.createScenes = function () {
        //console.log("场景解锁:");        
        var scenes = new egret.Sprite();
        var sceneName = ["海岸绿野", "黄金农场", "塞北雪乡", "缤纷小镇", "不夜之城"];
        var unlockedLevel = [1, 6, 15, 25, 35];
        scenes.width = GameData.stageW * 0.965;
        var n = 0;
        if (GameData.setSceneId > 0) {
            n = GameData.setSceneId - 1;
        }
        else {
            for (var index = 0; index < unlockedLevel.length; index++) {
                if (GameData.currentLevel >= unlockedLevel[index]) {
                    n = index;
                }
            }
        }
        // console.log("场景选择"+n);
        for (var i = 0; i < 5; i++) {
            var sceneCard = ResourceUtils.createBitmapByName("scene#scene_choose_paper_png");
            var senceChoose = ResourceUtils.createBitmapByName("scene#scene_choose_no0" + (i + 1) + "_png");
            var changeSceneBtn = new ChooseSceneView(i + 1);
            changeSceneBtn.bitmap.texture = RES.getRes("scene#scene_choose_label_png");
            sceneCard.width = GameData.stageW * 0.79;
            sceneCard.height = sceneCard.width * 0.276;
            sceneCard.x = 0;
            sceneCard.y = 55 + (sceneCard.height + 5) * i;
            scenes.addChild(sceneCard);
            var sceneCardBlack = ResourceUtils.createBitmapByName("scene#scene_choose_black_png");
            sceneCardBlack.width = GameData.stageW * 0.79;
            sceneCardBlack.height = sceneCardBlack.width * 0.276;
            sceneCardBlack.x = 0;
            sceneCardBlack.y = 55 + (sceneCard.height + 5) * i;
            senceChoose.x = sceneCard.x + 10;
            senceChoose.y = sceneCard.y + 4;
            scenes.addChild(senceChoose);
            changeSceneBtn.y = sceneCard.y + sceneCard.height / 2 - changeSceneBtn.height / 2;
            changeSceneBtn.x = senceChoose.x + senceChoose.width + (sceneCard.width - senceChoose.width) / 2 - changeSceneBtn.width / 2;
            changeSceneBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeScene, this);
            //场景名称
            this.senceNameLabel = new egret.TextField();
            this.senceNameLabel.text = sceneName[i];
            this.senceNameLabel.textAlign = egret.HorizontalAlign.CENTER;
            this.senceNameLabel.size = 18;
            this.senceNameLabel.fontFamily = "黑体";
            this.senceNameLabel.width = sceneCard.width - senceChoose.width;
            this.senceNameLabel.x = senceChoose.x + senceChoose.width;
            this.senceNameLabel.y = changeSceneBtn.y + changeSceneBtn.height + 5;
            //场景解锁条件
            var senceUnlockedLabel = new egret.TextField();
            senceUnlockedLabel.text = GameData.currentLevel.toString() + "/" + unlockedLevel[i] + "级解锁";
            senceUnlockedLabel.textColor = 0XFFFFFF;
            senceUnlockedLabel.textAlign = egret.HorizontalAlign.CENTER;
            senceUnlockedLabel.size = 18;
            senceUnlockedLabel.fontFamily = "黑体";
            senceUnlockedLabel.width = senceChoose.width;
            senceUnlockedLabel.x = senceChoose.x;
            senceUnlockedLabel.y = this.senceNameLabel.y;
            if (GameData.currentLevel < Number(unlockedLevel[i])) {
                this.senceNameLabel.textColor = 0XD9D9D9;
                scenes.addChild(sceneCardBlack);
                changeSceneBtn.bitmap.texture = RES.getRes("scene#scene_choose_lock_png");
                changeSceneBtn.touchEnabled = false;
                scenes.addChild(this.senceNameLabel);
                scenes.addChild(senceUnlockedLabel);
            }
            else {
                changeSceneBtn.touchEnabled = true;
                this.senceNameLabel.textColor = 0X67686D;
                if (i == n) {
                    this.senceNameLabel.textColor = 0X4ABE33;
                }
                scenes.addChild(this.senceNameLabel);
            }
            scenes.addChild(changeSceneBtn);
            this.sceneChooseCheck.x = changeSceneBtn.x - 5;
            this.sceneChooseCheck.y = 50 + (sceneCard.height + 5) * n + sceneCard.height / 2 - this.sceneChooseCheck.height / 2;
            scenes.addChild(this.sceneChooseCheck);
        }
        return scenes;
    };
    ChangeScenePanel.prototype.changeScene = function (evt) {
        //console.log("切换场景");
        var scene = evt.currentTarget;
        var event = new ElementViewManageEvent(ElementViewManageEvent.CHANGE_SCENE);
        event.sceneId = scene.sceneId;
        GameData.setSceneId = scene.sceneId;
        this._scenes.removeChild(this.sceneChooseCheck);
        this.sceneChooseCheck.y = 50 + (GameData.stageW * 0.79 * 0.276 + 5) * (GameData.setSceneId - 1) + GameData.stageW * 0.79 * 0.276 / 2 - this.sceneChooseCheck.height / 2;
        this._scenes.addChild(this.sceneChooseCheck);
        this.dispatchEvent(event);
        // //console.log(event);
    };
    ChangeScenePanel.prototype.closePanel = function () {
        //console.log("关闭切换场景面板");
        while (this._sceneContainer.numChildren) {
            this._sceneContainer.removeChildAt(0);
        }
        this._layer.removeChildren();
    };
    return ChangeScenePanel;
}(egret.EventDispatcher));
__reflect(ChangeScenePanel.prototype, "ChangeScenePanel");
var ChooseSceneView = (function (_super) {
    __extends(ChooseSceneView, _super);
    function ChooseSceneView(sceneId) {
        var _this = _super.call(this) || this;
        _this.sceneId = 0;
        _this.init();
        _this.sceneId = sceneId;
        return _this;
    }
    ChooseSceneView.prototype.init = function () {
        this.touchEnabled = true;
        this.bitmap = new egret.Bitmap();
        this.addChild(this.bitmap);
    };
    return ChooseSceneView;
}(egret.Sprite));
__reflect(ChooseSceneView.prototype, "ChooseSceneView");
var ElementView = (function (_super) {
    __extends(ElementView, _super);
    //游戏中的元素
    function ElementView(tParent) {
        var _this = _super.call(this) || this;
        _this.location = 0; //位置编号，用于提供移动使用
        _this.grade = 0; //房屋等级
        _this.time = 0; //创建时间
        /*-----------------------------ID 编号相关，携带测试信息-----------------------------------*/
        _this._id = -1; //ID编号，对应GameData.elements中的数据ID，与数据下标相同
        /*-------------------------------------焦点管理相关----------------------------------------*/
        _this._focus = false;
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*-----------------------------------移动到新位置，乱序操作使用-----------------------------------------*/
        _this.speed = 700;
        _this.thisParent = tParent;
        _this.init();
        return _this;
    }
    Object.defineProperty(ElementView.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化所有数据
     */
    ElementView.prototype.init = function () {
        this.touchEnabled = true;
        this.touchChildren = false;
        this.bitmap = new egret.Bitmap();
        var bitWidth = GameData.girdWidth * 0.83;
        // let bitWidth:number =(GameData.stageW - 40)/GameData.MaxColumn*0.8;
        // this.bitmap.width =bitWidth-10;
        // this.bitmap.height=bitWidth-10;
        this.bitmap.x = -1 * bitWidth / 2;
        this.bitmap.y = -1 * bitWidth / 2;
        this.addChild(this.bitmap);
    };
    /**
     * 设置贴图
     */
    ElementView.prototype.setTexture = function (val) {
        this.bitmap.texture = RES.getRes(val);
    };
    /**
     * 设置贴图
     */
    ElementView.prototype.setWidth = function (val) {
        this.bitmap.width = this.bitmap.height = val;
    };
    Object.defineProperty(ElementView.prototype, "focus", {
        get: function () {
            return this._focus;
        },
        enumerable: true,
        configurable: true
    });
    //private _focusImg:egret.Bitmap;
    //设置选中状态的焦点样式
    ElementView.prototype.setFocus = function (val) {
        if (val != this.focus) {
            this._focus = val;
            if (val) {
                this.setTexture("e" + GameData.elements[this.id].grade + "focus_png");
            }
            else {
                this.setTexture("e" + GameData.elements[this.id].grade + "_png");
            }
        }
    };
    //点击开箱子
    ElementView.prototype.openBox = function () {
        // console.log("开箱子"+this.id);
        var evt2 = new ElementViewManageEvent(ElementViewManageEvent.GUIDE_STEP_TWO);
        var evt3 = new ElementViewManageEvent(ElementViewManageEvent.GUIDE_STEP_THREE);
        if (GameData.elements[this.id].type == "b0") {
            if (GameData.elements[this.id].grade == 0) {
                GameData.elements[this.id].grade = GameData.ordinaryBoxHouseGrade;
            }
            SoundUtils.instance().playOpenBoxSound();
        }
        else if (GameData.elements[this.id].type == "b1") {
            if (GameData.elements[this.id].grade == 0) {
                GameData.elements[this.id].grade = GameData.giftBoxHouseGrade;
            }
            SoundUtils.instance().playOpenGiftBoxSound();
        }
        // console.log(GameData.elements[this.id].grade);
        GameData.elements[this.id].type = "0";
        this.setTexture("house#houses_a_" + this.addPreZero(GameData.elements[this.id].grade) + "_big");
        GameData.elements[this.id].time = new Date().getTime(); //创建时间
        if (GameLogic.guide && GameData.currentLevel == 1 && this.id == 0) {
            this.evm.dispatchEvent(evt2);
            // console.log('guideStepTwo监听发送');
            // console.log(evt2);
        }
        if (GameLogic.guide && GameData.currentLevel == 1 && this.id == 1) {
            this.evm.dispatchEvent(evt3);
        }
    };
    //移动到新位置,使用cubicInOut算法移动，直线运动
    ElementView.prototype.move = function () {
        //console.log("乱序移动开始！",this.id,this.location,this.targetX(),this.targetY(),this.x,this.y);
        var tw = egret.Tween.get(this);
        tw.to({ x: this.targetX(), y: this.targetY() }, this.speed, egret.Ease.cubicInOut);
    };
    ElementView.prototype.moveTo = function (x, y) {
        var tw = egret.Tween.get(this);
        tw.to({ x: x, y: y }, this.speed, egret.Ease.sineInOut);
    };
    ElementView.prototype.moveTo2 = function (x, y) {
        this.x = x;
        this.y = y;
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-------------------------------------显示元素，从上方掉落----------------------------------------*/
    /*-------------------------------------掉落后添加到父级别显示列表-----------------------------------*/
    ElementView.prototype.show = function (wait) {
        // console.log(wait);
        var tw = egret.Tween.get(this);
        tw.wait(wait, false);
        tw.call(this.addThisToParent, this);
        tw.to({ x: this.targetX(), y: this.targetY() }, this.speed, egret.Ease.bounceOut);
    };
    ElementView.prototype.showBox = function (wait, y) {
        if (y === void 0) { y = 0; }
        // console.log(wait);
        var tw = egret.Tween.get(this);
        tw.wait(wait, false);
        tw.call(this.addThisToParent, this);
        tw.to({ x: this.targetX() + 10, y: this.targetY() + 28 + y }, this.speed, egret.Ease.bounceOut);
    };
    ElementView.prototype.addThisToParent = function () {
        if (!this.parent) {
            // console.log("元素掉落id:"+this.id);
            // console.log("元素掉落location:"+this.location);
            // console.log("元素掉落:"+this.x);
            // console.log("元素掉落:"+this.y);
            this.thisParent.addChild(this);
        }
    };
    ElementView.prototype.targetX = function () {
        var xx = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * (this.location % GameData.MaxColumn) + GameData.girdWidth / 2;
        return xx;
    };
    ElementView.prototype.targetY = function () {
        var yy = GameData.startY + GameData.girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + GameData.girdWidth / 2 - GameData.girdWidth / 4 - 10; //改为5*4后使用新定义
        return yy;
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*--------------------------------------移动并且返回-------------------------------------*/
    /*----------------------用于用户交换两个对象，但未找到能够连接消除的时候使用------------------------*/
    //移动到另外一个位置，然后再移动回来
    ElementView.prototype.moveAndBack = function (location, isScale) {
        if (isScale === void 0) { isScale = false; }
        var xx = 20 + GameData.girdWidth * (location % GameData.MaxColumn) + GameData.girdWidth / 2 + 5;
        var yy = GameData.startY + GameData.girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + GameData.girdWidth / 2 - 15; //改为5*4后使用新定义
        //移动时候，不仅会移动位置，还会放到或者缩小，移动回来时，scale都设置为1
        var tw = egret.Tween.get(this);
        if (isScale) {
            tw.to({ x: xx, y: yy, scaleX: 1.2, scaleY: 1.2 }, 300, egret.Ease.sineInOut).call(this.back, this);
            ;
        }
        else {
            tw.to({ x: xx, y: yy, scaleX: 0.8, scaleY: 0.8 }, 300, egret.Ease.sineInOut).call(this.back, this);
            ;
        }
    };
    ElementView.prototype.back = function () {
        var tw = egret.Tween.get(this);
        tw.to({ x: this.targetX(), y: this.targetY(), scaleX: 1, scaleY: 1 }, 300, egret.Ease.sineInOut);
    };
    /*-----------------------------此动画用于移动元素，然后消除--------------------------------------*/
    //移动到另外一个位置，然后再返回原始的scale
    ElementView.prototype.moveAndScale = function (location, isScale) {
        if (isScale === void 0) { isScale = false; }
        var xx = 20 + GameData.girdWidth * (location % GameData.MaxColumn) + GameData.girdWidth / 2 + 5;
        var yy = GameData.startY + GameData.girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + GameData.girdWidth / 2 - 15; //改为5*4后使用新定义
        var tw = egret.Tween.get(this);
        if (isScale) {
            tw.to({ x: xx, y: yy, scaleX: 1.4, scaleY: 1.4 }, 300, egret.Ease.cubicInOut).call(this.backScaleNoCall, this);
        }
        else {
            tw.to({ x: xx, y: yy, scaleX: 0.6, scaleY: 0.6 }, 300, egret.Ease.cubicInOut).call(this.backScale, this);
        }
    };
    ElementView.prototype.backScale = function () {
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut)
            .call(this.canRemove, this);
    };
    ElementView.prototype.backScaleNoCall = function () {
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut);
    };
    ElementView.prototype.canRemove = function () {
        //console.log("回调");
        var evt = new ElementViewManageEvent(ElementViewManageEvent.REMOVE_ANIMATION_OVER);
        this.evm.dispatchEvent(evt);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-------------------------------------------------------------------------------------------------------*/
    //播放动画,自己放大，然后缩回到原有大小
    ElementView.prototype.playScale = function () {
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 1.2, scaleY: 1.2 }, 300, egret.Ease.cubicInOut).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicInOut);
    };
    ElementView.prototype.playSmall = function () {
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 1.2, scaleY: 1.2 }, 300, egret.Ease.cubicInOut).to({ scaleX: 0.8, scaleY: 0.8 }, 300, egret.Ease.cubicInOut);
    };
    /*-------------------------删除元素，当元素不属于关卡条件时，执行此动画---------------------------------*/
    //播放直接消除动画,自己放大，然后缩回到原有大小，然后删除
    ElementView.prototype.playRemoveAni = function () {
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 1.4, scaleY: 1.4 }, 300, egret.Ease.cubicInOut).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicInOut).call(this.removeAniCall, this);
    };
    ElementView.prototype.playRemoveAniNoScale = function (x, y) {
        var tw = egret.Tween.get(this);
        tw.to({ x: x, y: y }, 100, egret.Ease.cubicInOut).call(this.removeAniCall, this);
    };
    //回收删除，先移动到回收站位置，再播放直接消除动画,自己放大，然后缩回到原有大小，然后删除
    ElementView.prototype.playRecycleAni = function (x, y) {
        // console.log("回收删除调用");
        // console.log("x:"+x);
        // console.log("y:"+y);
        var tw = egret.Tween.get(this);
        tw.to({ x: x, y: y, scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicInOut).call(this.removeAniCall, this);
        // tw.to({scaleX:1.4,scaleY:1.4},300, egret.Ease.cubicInOut).to({x:x,y:y,scaleX:1,scaleY:1},300, egret.Ease.cubicInOut).call(this.removeAniCall,this);
    };
    ElementView.prototype.removeAniCall = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        // 	var evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
        //    this.evm.dispatchEvent(evt);
        //    this.evm.updateMap(evt);
        var eover = new ElementViewManageEvent(ElementViewManageEvent.DELETE_ELEMENT_OVER);
        this.evm.delOver(eover);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-------------------------移动到新位置---------------------------------*/
    /**
     * 播放曲线动画
     */
    ElementView.prototype.playCurveMove = function (tx, ty) {
        var tw = egret.Tween.get(this);
        tw.to({ x: tx, y: ty }, 700, egret.Ease.quadOut).call(this.overCurveMove, this);
    };
    ElementView.prototype.overCurveMove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        var evt = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
        this.evm.updateMap(evt);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    //
    ElementView.prototype.moveNewLocation = function () {
        //console.log(this.id,this.parent);
        if (!this.parent) {
            // let GameData.startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-GameData.girdWidth*GameData.MaxColumn;
            this.y = GameData.startY - this.width;
            this.scaleX = 1;
            this.scaleY = 1;
            this.x = this.targetX();
            //被删除的元素要重新加入
            this.thisParent.addChild(this);
        }
        egret.Tween.get(this).to({ x: this.targetX(), y: this.targetY() }, this.speed, egret.Ease.bounceOut).call(this.moveNewLocationOver, this);
    };
    ElementView.prototype.moveNewLocationOver = function () {
        var evt = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_VIEW_OVER);
        //this.evm.dispatchEvent(evt);
        this.evm.moveNewLocationOver(evt);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /**
     * 数字补零
     */
    ElementView.prototype.addPreZero = function (num) {
        return ('00' + num).slice(-3);
    };
    return ElementView;
}(egret.Sprite));
__reflect(ElementView.prototype, "ElementView");
var ElementViewManage = (function (_super) {
    __extends(ElementViewManage, _super);
    function ElementViewManage(elementLayer) {
        var _this = _super.call(this) || this;
        _this._touchStatus = false; //当前触摸状态，按下时，值为true
        _this._distance = new egret.Point(); //鼠标点击时，鼠标全局坐标与_bird的位置差
        /**
         * 经验值
         */
        _this._levelExpLabel = new egret.TextField();
        _this._coinLabel = new egret.TextField();
        _this._coinSecLabel = new egret.TextField();
        _this._numText = new egret.TextField(); //倒计时数字
        _this._currentLevelNumText = new egret.TextField(); //当前关卡数字
        /**
         * 经验值进度条
         */
        _this._expBar = new egret.Bitmap();
        /**
         * 添加指示助手
         */
        _this.helpSprit = new egret.Sprite();
        _this._helpHandleOn = false;
        _this.helpTiptxtView = new egret.TextField;
        _this.hideTimer = new egret.Timer(1000, 300);
        _this._recyclePanelOn = false;
        _this.ev = new ElementView(_this._layer);
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*-----------------------------焦点相关控制--------------------------------------*/
        _this._currentTapID = -1; //当前被点击（即将获取焦点）的元素ID，如为-1则表示没有元素获取焦点或无点击对象
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*---------------------------------定时器---------------------------------------*/
        _this._countdown = 10;
        _this.timer = new egret.Timer(1000, 0);
        _this.coinTimer = new egret.Timer(1000, 0);
        _this.floatCoinTimer = new egret.Timer(1000, 0);
        _this.rewardTimer = new egret.Timer(1000, Math.round(Math.random() * 30 + 30));
        // private rewardTimer:egret.Timer = new egret.Timer(12000,1);
        _this.helpHandleTimer = new egret.Timer(6000, 1);
        _this._addReward = false; //没有标志
        _this._rewardIconSprite = new egret.Sprite();
        _this.i = 1;
        /**
         * 飘字,每1000毫秒计算一次
         */
        _this.plusIndex = 5;
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        _this.dragContainer = new egret.Sprite();
        _this._movein = false;
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*-----------------------------动画播放控制--------------------------------------*/
        _this.moveEleNum = 0;
        _this._isDeleteOver = true;
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /**
         * 合并操作过关经验值增加
         * author:bigfootzq
         * date:2018/08/20
         */
        _this.tempExp = 0;
        /**--------------------------升级弹窗----------------------------------------------------------------------------- */
        _this._levelUpPanel = new egret.Sprite();
        /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
        /**-------------------------------------------------------房子回收--------------------------------------------------------------------------------- */
        _this.recycle = new egret.Shape();
        /**
         * 打开确认删除面板
         */
        _this._confirmRecycleContainer = new egret.Sprite();
        _this._confirmBtn = new egret.Bitmap();
        _this._reclaimCheck = ResourceUtils.createBitmapByName("reclaim_check_png");
        _this._isDelete = false;
        _this._isDisableConfirm = false; //是否禁止弹出回收面板
        _this._hitEv = new ElementView(_this._layer);
        /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
        /*********************************房屋商城****************************************************************************************************** */
        _this._shopContainer = new egret.Sprite();
        _this._cardScrollView = null;
        _this._cards = null;
        _this._openScrollX = 0;
        _this._rewardShare = new egret.Bitmap();
        _this.moveLocElementNum = 0;
        _this._layer = elementLayer;
        _this.init();
        _this.createTimerBg();
        _this.createExpBar();
        _this.levelExpLabel();
        _this.createNumText();
        _this.addHelpHandle();
        // this.createRecycle();
        // this.addReward();	
        platform.onShow(_this.onShow, _this);
        platform.onHide(_this.onHide, _this);
        _this.getVideoAd();
        return _this;
    }
    /**
     * 初始化所有数据变量
     */
    ElementViewManage.prototype.init = function () {
        //console.log("evm初始化");		
        this.elementViews = new Array();
        var len = GameData.MaxColumn * GameData.MaxRow;
        var el;
        for (var i = 0; i < len; i++) {
            el = new ElementView(this._layer);
            el.id = i;
            el.location = GameData.elements[i].location;
            el.grade = GameData.elements[i].grade;
            el.time = GameData.elements[i].time;
            this.elementViews.push(el);
            el.evm = this; // 给ElementView用来触发 ElementViewManageEvent事件
            el.touchEnabled = true;
            // el.addEventListener(egret.TouchEvent.TOUCH_TAP,this.elTap,this);
            el.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this); //这里是房子拖拽
            el.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        }
        this.hitBox = new PropView(2);
        this.hitBox.id = 2;
        this._layer.addChild(this.hitBox);
        this.hitBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapTimerSpeed, this);
        var shop = new PropView(3);
        shop.id = 3;
        this._layer.addChild(shop);
        shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openShop, this);
        var scene = new PropView(4);
        scene.id = 4;
        this._layer.addChild(scene);
        scene.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeScene, this);
    };
    /**
     * 倒计时背景图
     */
    ElementViewManage.prototype.createTimerBg = function () {
        var timerBg = new egret.Bitmap();
        timerBg.texture = RES.getRes("ui_time_base_png");
        timerBg.width = GameData.girdWidth / 3;
        timerBg.height = GameData.girdWidth / 3;
        timerBg.x = GameData.stageW / 2 - GameData.girdWidth * 1.867 / 2 + timerBg.width / 2;
        timerBg.y = GameData.stageH - GameData.girdWidth * 1.658 + timerBg.width / 2;
        this._layer.addChild(timerBg);
    };
    ElementViewManage.prototype.levelExpLabel = function () {
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_level_png");
        bg.width = GameData.girdWidth * 0.44;
        bg.height = GameData.girdWidth * 0.53;
        bg.x = GameData.girdWidth / 6;
        bg.y = GameData.girdWidth / 4;
        this._layer.addChild(bg);
        //经验值
        this._levelExpLabel.text = GameData.levelExp + "/" + GameData.levelReqExp;
        this._coinSecLabel.textAlign = egret.HorizontalAlign.CENTER;
        this._levelExpLabel.width = 3 * GameData.girdWidth;
        this._levelExpLabel.x = GameData.girdWidth * 1.7;
        this._levelExpLabel.y = GameData.girdWidth * 0.375 + 5;
        this._layer.addChild(this._levelExpLabel);
        //金币值
        this._coinLabel.text = this.numZero(GameData.coin);
        this._coinLabel.textAlign = egret.HorizontalAlign.CENTER;
        // this._coinLabel.size = 18;
        this._coinLabel.width = 1.5 * GameData.girdWidth;
        // this._coinLabel.x = 10 + GameData.girdWidth/3 +  GameData.girdWidth*1.5/2 - 5;
        this._coinLabel.x = 20 + GameData.girdWidth / 3;
        this._coinLabel.y = GameData.girdWidth - 5;
        this._layer.addChild(this._coinLabel);
        //秒产金币值
        this._coinSecLabel.text = this.numZero(GameData.secCoin);
        this._coinSecLabel.textAlign = egret.HorizontalAlign.CENTER;
        // this._coinSecLabel.size = 18;
        this._coinSecLabel.width = 1.5 * GameData.girdWidth;
        // this._coinSecLabel.x = 25+GameData.girdWidth/3+GameData.girdWidth*1.5 +GameData.girdWidth/3+5 +GameData.girdWidth*1.5/2 -5;
        this._coinSecLabel.x = 30 + GameData.girdWidth * 1.5 + 2 * GameData.girdWidth / 3;
        this._coinSecLabel.y = GameData.girdWidth - 5;
        this._layer.addChild(this._coinSecLabel);
    };
    Object.defineProperty(ElementViewManage.prototype, "coinLableText", {
        get: function () {
            return this._coinLabel.text;
        },
        enumerable: true,
        configurable: true
    });
    ElementViewManage.prototype.createNumText = function () {
        this._numText.x = GameData.stageW / 2 - GameData.girdWidth * 1.867 / 2 + GameData.girdWidth / 6;
        this._numText.y = GameData.stageH - GameData.girdWidth * 1.658 + GameData.girdWidth / 6 + GameData.girdWidth / 24 + 3;
        this._numText.text = "10";
        this._numText.textColor = 0xd8241b;
        this._numText.bold = true;
        if (this._numText.text == "10") {
            this._numText.size = 25;
        }
        this._numText.width = GameData.girdWidth / 3;
        this._numText.textAlign = egret.HorizontalAlign.CENTER;
        this._layer.addChild(this._numText);
        this._currentLevelNumText.x = GameData.girdWidth / 6 - 3;
        this._currentLevelNumText.y = GameData.girdWidth * 2 / 5 - 3;
        this._currentLevelNumText.width = GameData.girdWidth * 0.44;
        this._currentLevelNumText.textAlign = egret.HorizontalAlign.CENTER;
        this._currentLevelNumText.text = GameData.currentLevel.toString();
        // this._currentLevelNumText.text = "Lv"+GameData.currentLevel.toString();
        this._currentLevelNumText.textColor = 0x1C8CAD;
        if (GameData.currentLevel < 10) {
            this._currentLevelNumText.size = 24;
        }
        else if (GameData.currentLevel >= 100) {
            this._currentLevelNumText.size = 18;
        }
        else {
            this._currentLevelNumText.size = 20;
        }
        this._currentLevelNumText.bold = true;
        this._layer.addChild(this._currentLevelNumText);
    };
    ElementViewManage.prototype.createExpBar = function () {
        this._expBar.width = GameData.girdWidth * 3;
        this._expBar.height = GameData.girdWidth / 3 * 0.8;
        this._expBar.x = GameData.girdWidth * 0.44 + 10 + 2;
        this._expBar.y = GameData.girdWidth * 0.375 + GameData.girdWidth / 30;
        // this._expBar.scaleX = GameData.levelExp/GameData.levelReqExp;
        this._expBar.texture = RES.getRes("ui_experience_png");
        // this.barMask =  new egret.Rectangle(0, 0, 0, this._expBar.height);
        this.barMask = new egret.Rectangle(0, 0, GameData.levelExp / GameData.levelReqExp * this._expBar.width, this._expBar.height);
        this._expBar.mask = this.barMask;
        this._layer.addChild(this._expBar);
    };
    ElementViewManage.prototype.addHelpTip = function () {
        this.guideBubble = new egret.Bitmap();
        this.guideBubble.texture = RES.getRes("guide_bubble_png");
        this.guideBubble.x = GameData.stageW / 2 - this.guideBubble.width / 2;
        this.guideBubble.y = GameData.stageH - GameData.girdWidth * 1.658 - this.guideBubble.height - 10;
        this.helpTiptxtView.textColor = 0x21344D;
        this.helpTiptxtView.fontFamily = "黑体";
        this.helpTiptxtView.text = "点我加速房子掉落哦！";
        // this.txtView.bold = true;
        this.helpTiptxtView.size = 26;
        this.helpTiptxtView.width = this.guideBubble.width;
        this.helpTiptxtView.textAlign = egret.HorizontalAlign.CENTER;
        this.helpTiptxtView.x = this.guideBubble.x;
        this.helpTiptxtView.y = this.guideBubble.y + 18;
        this.helpSprit.addChild(this.guideBubble);
        this.helpSprit.addChild(this.helpTiptxtView);
    };
    ElementViewManage.prototype.addHelpHandle = function () {
        // console.log("添加指示助手");
        // console.log(this.helpHandleTimer.running);
        this.addHelpTip();
        this.helpHandle = new egret.Bitmap();
        this.helpHandle.texture = RES.getRes("ui_help_png");
        this.helpHandle.x = GameData.stageW / 2;
        this.helpHandle.y = GameData.stageH - GameData.girdWidth * 1.658 / 2;
        this.helpSprit.addChild(this.helpHandle);
        var tw = egret.Tween.get(this.helpHandle, { loop: true });
        tw.to({ scaleX: 0.8, scaleY: 0.8 }, 400, egret.Ease.cubicInOut).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.cubicInOut);
        if (!this._helpHandleOn) {
            // console.log("添加指示助手成功");
            this._layer.addChild(this.helpSprit);
            this._helpHandleOn = true;
        }
    };
    /**
     * 移除指示助手
     */
    ElementViewManage.prototype.removeHelpHandle = function () {
        // console.log("移除指示助手");
        if (this._helpHandleOn) {
            // console.log("移除指示助手成功");
            this.helpSprit.removeChildren();
            this.helpSprit.parent && this.helpSprit.parent.removeChild(this.helpSprit);
            this._helpHandleOn = false;
            this.helpHandleTimer.reset();
            this.helpHandleTimer.start();
        }
    };
    ElementViewManage.prototype.onShow = function () {
        //console.log("回到前台，读取数据");
        //console.log("时间:"+new Date().getTime());
        // let userGameData =  egret.localStorage.getItem("userGameData");
        // //console.log(userGameData);
        SoundUtils.instance().playBg();
        if (GameLogic.guide && GameData.currentLevel == 1) {
            var evt = new ElementViewManageEvent(ElementViewManageEvent.GUIDE_RESET);
            this.dispatchEvent(evt);
        }
        var currentTime = new Date().getTime();
        var wspTime = egret.localStorage.getItem("wrpTime"); //欢迎回来
        var nhTime = egret.localStorage.getItem("nhTime"); //新房子
        var luTime = egret.localStorage.getItem("luTime"); //升级
        var fhTime = egret.localStorage.getItem("fhTime"); //免费房子
        var x5Time = egret.localStorage.getItem("x5Time"); //5倍加速
        var shareTime = 0;
        if (wspTime) {
            shareTime = Math.round((currentTime - Number(wspTime)) / 1000);
            if (shareTime >= 3) {
                var evt = new ElementViewManageEvent(ElementViewManageEvent.GET_PROFIT);
                this.dispatchEvent(evt);
                // egret.localStorage.removeItem("wrpTime");
            }
            else {
                this.floatText("请分享到其他群，再来领奖励", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
            }
        }
        if (nhTime) {
            shareTime = Math.round((currentTime - Number(nhTime)) / 1000);
            if (shareTime >= 3) {
                var evt = new ElementViewManageEvent(ElementViewManageEvent.GET_NEW_HOUSE_PROFIT);
                this.dispatchEvent(evt);
            }
            else {
                this.floatText("请分享到其他群，再来领奖励", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
            }
        }
        if (luTime) {
            shareTime = Math.round((currentTime - Number(luTime)) / 1000);
            if (shareTime >= 3) {
                var evt = new ElementViewManageEvent(ElementViewManageEvent.CLOSE_LEVEL_UP_PANEL);
                this.dispatchEvent(evt);
                // egret.localStorage.removeItem("luTime");
            }
            else {
                this.floatText("请分享到其他群，再来领奖励", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
            }
        }
        if (fhTime) {
            shareTime = Math.round((currentTime - Number(fhTime)) / 1000);
            if (shareTime >= 3) {
                var evt = new ElementViewManageEvent(ElementViewManageEvent.REWARD_HOUSE);
                this.dispatchEvent(evt);
                egret.localStorage.removeItem("fhTime");
            }
            else {
                this.floatText("请分享到其他群，才能领取奖励", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
            }
        }
        if (x5Time) {
            shareTime = Math.round((currentTime - Number(x5Time)) / 1000);
            if (shareTime >= 3) {
                var evt = new ElementViewManageEvent(ElementViewManageEvent.X5_PROFIT);
                this.dispatchEvent(evt);
                egret.localStorage.removeItem("x5Time");
            }
            else {
                this.floatText("请分享到其他群，再来领奖励", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
            }
        }
        SoundUtils.instance().playBg();
        // this.hideTimer.reset();
    };
    ElementViewManage.prototype.onHide = function () {
        //console.log("退出前台");
        // this.hideTimer.addEventListener(egret.TimerEvent.TIMER, this.hideTime, this);
        // this.hideTimer.start();
        // let inMapArrJson = JSON.stringify(inMapArr);
        // let userGameData = JSON.stringify({"currentLevel":GameData.currentLevel,"levelExp":GameData.levelExp,"coin":GameData.coin,"secCoin":secCoin,"due":new Date().getTime(),
        // "inMap":inMapArrJson,"maxHouseGrade":maxHouseGrade,"buyHouseNumber":buyHouseNumber,"closeMusic":GameData.closeMusic,"closeBgMusic":GameData.closeBgMusic});
        // platform.postGameData("userGameData",userGameData);
        var i = GameData.elements.length - 1;
        var inMapArr = new Array();
        var secCoin = this.addSecCoin();
        var maxHouseGrade = GameData.maxHouseGrade; //记录当前最大等级
        inMapArr = [].concat(GameData.elements);
        //console.log("退出前台,记录数据");
        var userGameData = JSON.stringify({ "currentLevel": GameData.currentLevel, "levelExp": GameData.levelExp, "cost": GameData.cost, "coin": GameData.coin, "secCoin": secCoin, "due": new Date().getTime(),
            "inMap": inMapArr, "maxHouseGrade": maxHouseGrade, "buyHouseNumber": GameData.houseBuyNumber, "closeMusic": GameData.closeMusic, "closeBgMusic": GameData.closeBgMusic, "addReward": this._addReward,
            "elementTypeFirstShow": GameData.elementTypeFirstShow });
        egret.localStorage.setItem("userGameData", userGameData);
    };
    ElementViewManage.prototype.hideTime = function () {
        // //console.log("hide计时:"+ this.hideTimer.currentCount);
        // if(this.hideTimer.currentCount == 30){//5分钟后执行退出，上传数据
        var i = GameData.elements.length - 1;
        var inMapArr = new Array();
        var secCoin = this.addSecCoin();
        var maxHouseGrade = GameData.maxHouseGrade; //记录当前最大等级
        // let buyHouseNumber = JSON.stringify(GameData.houseBuyNumber);//记下房屋购买次数
        // while(i > 0){
        // 	if(GameData.elements[i].type.length != 0){
        // 		inMapArr.push(GameData.elements[i]);
        // 	}
        // 	i--;
        // }
        inMapArr = [].concat(GameData.elements);
        //console.log("退出前台,记录数据");
        var userGameData = JSON.stringify({ "currentLevel": GameData.currentLevel, "levelExp": GameData.levelExp, "coin": GameData.coin, "secCoin": secCoin, "due": new Date().getTime(),
            "inMap": inMapArr, "maxHouseGrade": maxHouseGrade, "buyHouseNumber": GameData.houseBuyNumber, "closeMusic": GameData.closeMusic, "closeBgMusic": GameData.closeBgMusic });
        egret.localStorage.setItem("userGameData", userGameData);
        // platform.exitGame(); 
        // }
    };
    ElementViewManage.prototype.mouseDown = function (evt) {
        //console.log("Mouse Down.");
        this.ev = evt.currentTarget;
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.ev.x;
        this._distance.y = evt.stageY - this.ev.y;
        // //console.log("ev.id:"+this.ev.id);
        // //console.log("evt.stageX:"+evt.stageX);
        if (this.ev.grade == 0) {
            // //console.log("纸箱");
            // this.ev.setFocus(false);
            this.openBoxEffect(this.ev.id);
            this.ev.openBox();
            this.starHandler(this.ev.targetX(), this.ev.targetY());
            this.ev.time = GameData.elements[this.ev.id].time;
            this.ev.grade = GameData.elements[this.ev.id].grade ? GameData.elements[this.ev.id].grade : 1;
            if (GameData.elements[this.ev.id].time != 0) {
                // //console.log(GameData.levelExp);
                // this.showElementById(this.ev.id,false);
                this.ev.x = this.ev.targetX();
                this.ev.y = this.ev.targetY() - this.ev.height / 2;
                this.ev.show(100);
                this.addLevelExp(this.ev.grade); //开箱子加经验值
                this._levelExpLabel.text = GameData.levelExp.toString() + "/" + GameData.levelReqExp.toString();
                // let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.LEVEL_EXP_UP);
                // this.levelExpUp(evt);
            }
            this._touchStatus = false;
            // this._currentTapID =this. ev.id;
        }
        else {
            // //console.log("不是纸箱");
            if (!this._recyclePanelOn) {
                this.recyclePanel = new RecyclePanel();
                this._layer.addChild(this.recyclePanel);
                this.recyclePanel.show();
                this._layer.setChildIndex(this.ev, this._layer.numChildren + 1);
                this._recyclePanelOn = true;
                this.helpTiptxtView.text = "房子拖到这里出售哦";
                this.helpTiptxtView.textColor = 0xff0000;
            }
            this.showSynthesisGird(this.ev.id, this.ev.grade);
            this.addMoveinSetGird(this.ev.id);
        }
        if (this._touchStatus) {
            this.ev.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        }
        // //console.log("mouseDown,this._touchStatus:"+this._touchStatus);
    };
    ElementViewManage.prototype.mouseUp = function (evt) {
        // console.log("Mouse Up.");
        // console.log(this.ev);
        this.ev = evt.currentTarget;
        this._touchStatus = false;
        this.ev.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.clearSynthesisGird();
        // let rpy = GameData.stageH - GameData.stageW*0.3;	
        // if (this.ev.y < GameData.stageH && this.ev.y >= rpy){
        // 	//console.log("直接删除元素");
        // 	this.deleteElement(this.ev.id,evt.stageX,evt.stageY);
        // 	let housePrice:string =  this._buyHouseConfigArray[this._hitEv.grade].coinNum;
        // 	GameData.coin = CommonFuction.jia(GameData.coin,housePrice);
        // 	this._coinLabel.text = this.numZero(GameData.coin);
        // }
        if (this._recyclePanelOn) {
            this.recyclePanel.clear();
            this._layer.removeChild(this.recyclePanel);
            this._recyclePanelOn = false;
            this.helpTiptxtView.text = "点我加速房子掉落哦";
            this.helpTiptxtView.textColor = 0x21344D;
        }
        // let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60)-GameData.girdWidth*GameData.MaxRow;
        var i = Math.floor((evt.stageY - GameData.startY) / GameData.girdWidth);
        var t = Math.floor((evt.stageX - 44) / (GameData.girdWidth + 24));
        // //console.log(i);
        // //console.log(t);
        // //console.log(GameData.mapData[i][t]);
        if (i >= GameData.MaxRow) {
            this.delHouse(this.ev);
        }
        if (evt.stageY < GameData.startY || i >= GameData.MaxRow || t >= GameData.MaxColumn || i < 0 || t < 0) {
            // //console.log("back1");
            this.ev.back();
        }
        else {
            if (GameData.mapData[i][t] != -1 && GameData.mapData[i][t] != -2) {
                var ele1 = this.ev;
                var ele2 = this.elementViews[GameData.mapData[i][t]];
                // //console.log("ele1.id:"+ele1.id);
                // //console.log("ele2.id:"+ele2.id);
                if (this.ev.id != ele2.id) {
                    this.elementHitTest(ele1, ele2); //不允许撞自己
                }
                else {
                    // //console.log("back2");
                    this.ev.back();
                }
            }
            else if (GameData.mapData[i][t] == -2) {
                // console.log("moveTo");
                // console.log("moveTo:"+this.ev.x);
                // console.log("moveTo:"+this.ev.y);
                // console.log("moveTo:"+this.ev.location);
                var m = Math.floor(GameData.elements[this.ev.id].location / GameData.MaxColumn);
                var n = GameData.elements[this.ev.id].location % GameData.MaxColumn;
                GameData.mapData[i][t] = this.ev.id;
                var tempLocation = i * GameData.MaxColumn + t;
                // //console.log("tempLocation"+tempLocation);			
                for (var l = 0; l < GameData.availableMapId.length; l++) {
                    if (GameData.elements[GameData.availableMapId[l]].location == tempLocation) {
                        // //console.log("id："+GameData.availableMapId[l]);								
                        GameData.elements[GameData.availableMapId[l]].location = this.ev.location;
                    }
                }
                GameData.elements[this.ev.id].location = this.elementViews[this.ev.id].location = this.ev.location = tempLocation;
                // GameData.elements[this.ev.id].grade = this.elementViews[this.ev.id].grade = this.ev.grade;
                this.ev.moveTo(this.ev.targetX(), this.ev.targetY());
                // this.showElementById(this.ev.id,false);
                GameData.mapData[m][n] = -2;
            }
            else {
                this.ev.back();
            }
        }
        // //console.log("mouseUp,this._touchStatus:"+this._touchStatus);
    };
    ElementViewManage.prototype.mouseMove = function (evt) {
        // //console.log("moving now ! touchStatus :" +this._touchStatus);
        // //console.log("moving now ! this.ev.id :" +this.ev.id);
        if (this._touchStatus) {
            this.ev.x = evt.stageX - this._distance.x;
            this.ev.y = evt.stageY - this._distance.y;
            // //console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
            // //console.log("moving now ! Mouse: [ev.X:"+this.ev.x+",ev.Y:"+this.ev.y+"]");
            // //console.log("moving now ! Mouse: [_distance.X:"+this._distance.x+",_distance.Y:"+this._distance.y+"]");
            var rpy = GameData.stageH - GameData.stageW * 0.4;
            var temp = 0;
            if (this.ev.y < GameData.stageH && this.ev.y >= rpy) {
                // this.recyclePanel.setMask(false);
                temp = this.ev.y;
            }
            //遮罩变色失败，暂时屏蔽
            // if(this.ev.y < rpy && this.ev.y <temp){
            // 	//console.log("向上移动"+temp)
            // 	if(!this.recyclePanel.mask){
            // 		this.recyclePanel.setMask(true);
            // 	}
            // }
            var i = Math.floor((evt.stageY - GameData.startY) / GameData.girdWidth);
            var t = Math.floor((evt.stageX - 44) / (GameData.girdWidth + 24));
            var tempi = void 0;
            var tempt = void 0;
            if (i >= 0 && i < 5 && t >= 0 && t < 5) {
                if (i != tempi || t != tempt) {
                    if (this.moveinSetGrid.parent) {
                        this.dragContainer.removeChild(this.moveinSetGrid);
                    }
                    if (GameData.mapData[i][t] != -1) {
                        this.moveinSetGrid.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * t;
                        this.moveinSetGrid.y = GameData.startY + 20 + GameData.girdWidth * i;
                        this.dragContainer.addChild(this.moveinSetGrid);
                    }
                }
                tempi = i;
                tempt = t;
            }
        }
    };
    /******************************碰撞检测相关*****************************************************************/
    ElementViewManage.prototype.elementHitTest = function (ev1, ev2) {
        // //console.log("ev1 id"+ev1.id);
        // //console.log("ev2 id"+ev2.id);
        var rectA = ev1.getBounds();
        var rectB = ev2.getBounds();
        //必须加上方块所在的x，y
        rectA.x += ev1.x;
        rectA.y += ev1.y;
        rectB.x += ev2.x;
        rectB.y += ev2.y;
        // let isHit:boolean = ev1.hitTestPoint(ev2.targetX(),ev2.targetY());
        var isHit = rectA.intersects(rectB);
        // //console.log(isHit);
        if (isHit) {
            // //console.log("ev1 grade"+ev1.grade);
            // //console.log("ev2 grade"+ev2.grade);
            var i = Math.floor(GameData.elements[ev1.id].location / GameData.MaxColumn);
            var t = GameData.elements[ev1.id].location % GameData.MaxColumn;
            var m = Math.floor(GameData.elements[ev2.id].location / GameData.MaxColumn);
            var n = GameData.elements[ev2.id].location % GameData.MaxColumn;
            if (this.elementViews[ev1.id].grade == this.elementViews[ev2.id].grade && this.elementViews[ev2.id].grade <= GameData.elementTypes.length) {
                // //console.log(GameData.elementTypeFirstShow);
                if (!GameData.elementTypeFirstShow[GameData.elements[ev1.id].grade]) {
                    // console.log("恭喜合成新房子:"+GameData.elements[ev1.id].grade );//房子第一次出现
                    //console.log(GameData.elementTypeFirstShow);
                    GameData.elementTypeFirstShow[GameData.elements[ev1.id].grade] = true;
                    // this.newHousePanel = new NewHousePanel();
                    // this._layer.parent.addChild(this.newHousePanel);
                    // this.newHousePanel.getNewHosuePanel(this.elementViews[ev1.id].grade+1);
                    GameData.newHouse = true;
                    var evt = new ElementViewManageEvent(ElementViewManageEvent.OPEN_NEW_HOUSE_PANEL);
                    evt.grade = Number(this.elementViews[ev1.id].grade) + 1;
                    this.dispatchEvent(evt);
                    if (Number(this.elementViews[ev1.id].grade) + 1 >= GameData.maxHouseGrade) {
                        GameData.maxHouseGrade = Number(this.elementViews[ev1.id].grade) + 1; //当前获得房屋最高等级
                    }
                    if (GameData.maxHouseGrade == 2) {
                        // this.addHelpTip();
                        this.timerToBox2();
                    }
                    if (GameData.maxHouseGrade == 2) {
                        this.addReward();
                    }
                    SoundUtils.instance().playNewHouseSound(); //播放获得新房子音效
                }
                else {
                    this.addLevelExp(Number(GameData.elements[ev2.id].grade) + 1); //根据新和成的房子等级加经验值
                }
                //console.log("消除动画");
                if (GameData.elements[ev1.id].type !== 'b0' && GameData.elements[ev1.id].type !== 'b1') {
                    this._isDeleteOver = false;
                    ev1.removeAniCall();
                    this.ev = null;
                }
                // //console.log("mapData删除后的值"+GameData.mapData[i][t]);					
                this.elementViews[ev1.id].grade = GameData.elements[ev1.id].grade = 0; //删除的元素级别置为0
                this.elementViews[ev1.id].time = GameData.elements[ev1.id].time = 0; //删除后元素的创建时间置为0;
                GameData.elements[ev2.id].grade = Number(GameData.elements[ev2.id].grade) + 1; //合并后升级
                this.elementViews[ev2.id].grade = GameData.elements[ev2.id].grade;
                this._levelExpLabel.text = GameData.levelExp.toString() + "/" + GameData.levelReqExp.toString();
                this.barMask = new egret.Rectangle(0, 0, GameData.levelExp / GameData.levelReqExp * this._expBar.width, this._expBar.height);
                this._expBar.mask = this.barMask;
                SoundUtils.instance().playMergeSound(); //播放合成音效
                this.openBoxEffect(ev2.id); //合成房子特效
                this.showElementById(ev2.id, false);
                this.starHandler(ev2.targetX(), ev2.targetY());
                GameData.elements[ev2.id].time = new Date().getTime(); //合并时间;
                this.elementViews[ev2.id].time = GameData.elements[ev2.id].time;
                if (GameData.availableMapId.length == 0) {
                    this.timer.start();
                    if (!this.helpHandleTimer.running) {
                        this.helpHandleTimer.reset();
                        this.helpHandleTimer.start();
                    }
                    // //console.log(GameData.availableMapId.length);
                    GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
                    GameData.availableMapId.push(ev1.id); //将空白地块加入可用地图数组
                }
                else {
                    GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
                    GameData.availableMapId.push(ev1.id); //将空白地块加入可用地图数组
                    // console.log("合成房子后回收空白地块");
                    // console.log(GameData.availableMapId.length);
                    // console.log(GameData.availableMapId);
                }
                // this.delOver(eover);
            }
            else {
                this.changeLocationWithScaleOrBack(ev1.id, ev2.id, true);
                GameData.mapData[i][t] = ev2.id;
                GameData.mapData[m][n] = ev1.id;
            }
        }
        else {
            this.ev.back(); //如果没碰到弹回原处
        }
    };
    // public setNewElementFocus(location:number){
    // 	this.elementViews[this._currentTapID].setFocus(false);
    // 	this.elementViews[location].setFocus(true);
    // 	this._currentTapID=location;
    // }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /**
     * 添加上一关留存在地图上的元素
     */
    ElementViewManage.prototype.addLastLevelElements = function () {
        //console.log("添加上一关的留存元素:")
        var ele;
        var len = GameData.MaxRow * GameData.MaxColumn;
        for (var l = 0; l < len; l++) {
            ele = this.elementViews[l];
            ele.grade = GameData.elements[l].grade;
            ele.location = GameData.elements[l].location;
            ele.time = GameData.elements[l].time;
            ele.x = ele.targetX();
            ele.y = GameData.startY - ele.width;
            var i = Math.floor(ele.location / GameData.MaxColumn);
            var t = ele.location % GameData.MaxColumn; //修改成4*5地图后，t的计算方式变化
            // //console.log("所有id: "+ele.id);
            // //console.log("type: "+GameData.elements[l].type );
            if (GameData.elements[l].type == "b1") {
                ele.grade = 0;
                GameData.mapData[i][t] = ele.id;
                ele.setTexture("ui_box_gift_png");
                ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50, -7);
                // //console.log("添加上一关的留存元素:"+GameData.elements[l].type);						
            }
            else if (ele.grade == 0 && GameData.elements[l].type == "b0") {
                GameData.mapData[i][t] = ele.id;
                ele.setTexture("ui_box_general_png");
                ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50);
                // //console.log("添加上一关的留存元素:"+GameData.elements[l].type);		
            }
            else if (GameData.elements[l].grade != 0 && GameData.elements[l].type != "b1") {
                GameData.mapData[i][t] = ele.id;
                ele.setTexture("house#houses_a_" + this.addPreZero(ele.grade) + "_big");
                ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50);
                // GameData.availableMapId.splice(l,1);//将使用过的MapId从可用数组里面删除
                // //console.log("availableMapId:"+GameData.availableMapId);
            }
            // console.log("剩余空地:");
            // console.log(GameData.availableMapId.length);
            // console.log(GameData.availableMapId);
            //console.log("添加上一关的留存元素"+ele.time);									
        }
    };
    /*
    *开场随机元素掉落，2018/08/10
    *author:bigfoot
    */
    ElementViewManage.prototype.showElement = function () {
        //console.log("开场随机元素掉落");		
        var ele;
        if (GameData.availableMapId.length != 0) {
            var l = Math.floor(Math.random() * GameData.availableMapId.length);
            var id = GameData.availableMapId[l]; //随机从可以使用的MapId里面抽取一个
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn; //修改成4*5地图后，t的计算方式变化
            // //console.log("随机id: "+id);
            // //console.log("随机i: "+i);
            // //console.log("随机t: "+t);
            // //console.log(GameData.mapData[i][t]);
            if (GameData.mapData[i][t] != -1) {
                GameData.mapData[i][t] = id;
                ele = this.elementViews[GameData.mapData[i][t]];
                GameData.elements[id].type = "b0";
                ele.setTexture("ui_box_general_png");
                ele.x = ele.targetX();
                ele.y = GameData.startY - ele.width;
                ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50);
                SoundUtils.instance().playBoxDownSound(); //播放箱子掉落音效
                GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
                this.timerToBox2();
                // console.log("剩余空地:");
                // console.log(GameData.availableMapId.length);
                // console.log(GameData.availableMapId);
            }
        }
        else {
            this.timerToBox2();
        }
        // //console.log("可用地图Id: "+GameData.availableMapId);
    };
    /*
    *单个随机纸箱掉落，2018/08/16
    *author:bigfoot
    */
    ElementViewManage.prototype.showRandomElement = function () {
        //console.log("随机掉落开始");	
        var ele;
        // console.log("可用地图Id: "+GameData.availableMapId);
        // //console.log("mapData: "+GameData.mapData);
        // //console.log("elements: "+GameData.elements);
        for (var l = 0; l < GameData.availableMapId.length; l++) {
            var id = GameData.availableMapId[l];
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn;
            // //console.log("随机id: "+id);
            // //console.log("随机元素的type: "+GameData.elements[id].type);
            // //console.log("随机元素的location: "+GameData.elements[id].location);
            // //console.log("随机i: "+i);
            // //console.log("随机t: "+t);
            if (GameData.mapData[i][t] != -2) {
                GameData.availableMapId.splice(l, 1);
            }
        }
        // console.log("可用地图Id2: "+GameData.availableMapId);
        if (GameData.availableMapId.length == 0) {
            this.timer.stop();
            this.removeHelpHandle();
            this.helpHandleTimer.stop(); //没有多余空地时候不显示指示助手
        }
        else {
            var l = Math.floor(Math.random() * GameData.availableMapId.length);
            var id = GameData.availableMapId[l]; //随机从可以使用的MapId里面抽取一个
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn;
            GameData.mapData[i][t] = id;
            ele = this.elementViews[GameData.mapData[i][t]];
            ele.location = GameData.elements[id].location;
            var ran = Math.ceil(Math.random() * 100);
            if (ran <= GameData.boxDownWeight) {
                GameData.elements[id].type = "b0";
                ele.setTexture("ui_box_general_png");
            }
            else if (GameData.boxDownWeight < ran) {
                GameData.elements[id].type = "b1";
                ele.setTexture("ui_box_gift_png");
            }
            ele.x = ele.targetX();
            ele.y = GameData.startY - ele.width;
            ele.grade = 0;
            // //console.log("ele.y: "+ele.y)
            // //console.log("ele.targety: "+ele.targetY())
            ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50, -7);
            SoundUtils.instance().playBoxDownSound(); //播放箱子掉落音效
            GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
            // //console.log("随机id: "+id);
            // //console.log("随机元素的type: "+GameData.elements[id].type);
            // //console.log("随机元素的location: "+ele.location);
            // //console.log("随机元素的grade: "+ele.grade);
            // //console.log("随机i: "+i);
            // //console.log("随机t: "+t);
            // //console.log("随机元素: ");
            // //console.log(GameData.elements[id]);
            // //console.log(GameData.mapData[i][t]);
            // console.log("剩余空地:");
            // console.log(GameData.availableMapId.length);
            // console.log(GameData.availableMapId);
        }
    };
    /*
    *指定id元素创建，2018/08/16
    *author:bigfoot
    */
    ElementViewManage.prototype.showElementById = function (id, isFirst) {
        if (isFirst === void 0) { isFirst = true; }
        // console.log("指定id元素掉落");
        // let GameData.startY:number  = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-GameData.girdWidth*GameData.MaxRow;
        var ele;
        var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
        var t = GameData.elements[id].location % GameData.MaxColumn;
        if (GameData.mapData[i][t] != -1) {
            // GameData.mapData[i][t] = id;
            ele = this.elementViews[id];
            ele.x = ele.targetX();
            if (isFirst) {
                ele.y = GameData.startY - ele.width;
            }
            else {
                // ele.y = ele.targetY() + ele.height/4;
                ele.y = ele.targetY();
            }
            // console.log(GameData.elements[id].type);
            if (GameData.elements[id].type == "b") {
                GameData.elements[id].type = "b0";
                GameData.mapData[i][t] = id;
                ele.setTexture("ui_box_general_png");
                ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50);
                var index = GameData.availableMapId.indexOf(id);
                GameData.availableMapId.splice(index, 1);
            }
            else {
                ele.setTexture("house#houses_a_" + this.addPreZero(this.elementViews[id].grade) + "_big");
                ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50);
            }
            // console.log("剩余空地:");
            // console.log(GameData.availableMapId.length);
            // console.log(GameData.availableMapId);
            // this._currentTapID = -1;
        }
    };
    ElementViewManage.prototype.timerToBox2 = function () {
        // //console.log("开场元素掉落完成以后可用地图Id: "+GameData.availableMapId);
        // this.timer = new egret.Timer(1000, 0);//
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFuc, this);
        this.coinTimer.addEventListener(egret.TimerEvent.TIMER, this.addCoin, this);
        this.floatCoinTimer.addEventListener(egret.TimerEvent.TIMER, this.floatCoin, this);
        this.rewardTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.addReward, this);
        this.helpHandleTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.addHelpHandle, this);
        this.timer.start();
        this.coinTimer.start();
        this.floatCoinTimer.start();
        this.helpHandleTimer.start();
        if (!this._addReward && GameData.maxHouseGrade >= 4) {
            this.rewardTimer.start();
        }
        else {
            this.rewardTimer.reset(); //如果已经有了，那么重新开始计时
            this.rewardTimer.start();
        }
    };
    /**
     * 生成免费分享奖励
     */
    ElementViewManage.prototype.addReward = function () {
        // console.log("生成免费奖励图标");
        this._rewardShareIcon = ResourceUtils.createBitmapByName("shop#shop_bubble_png");
        this._rewardShareIcon.x = GameData.stageW - 15 - GameData.girdWidth * 0.93 - this._rewardShareIcon.width;
        this._rewardShareIcon.y = GameData.stageH - GameData.girdWidth * 0.966 - 30;
        if (!this._addReward && GameData.maxHouseGrade >= 2) {
            // console.log("生成免费奖励图标成功");
            this._addReward = true; //如果没有免费标志，那么加上
            this._layer.addChild(this._rewardIconSprite);
            this._rewardIconSprite.addChild(this._rewardShareIcon);
            this.rewardTimer.reset();
            this.rewardTimer.start();
        }
        else {
            // console.log("已经有图标了，重置时间");
            this.rewardTimer.reset(); //如果已经有了，那么重新开始计时
            this.rewardTimer.start();
        }
        // console.log("生成免费奖励倒计时："+this.rewardTimer.currentCount);
    };
    ElementViewManage.prototype.timeFuc = function () {
        // console.log("生成免费奖励倒计时状态："+this.rewardTimer.running);
        this._numText.text = this._countdown.toString();
        // this.hitBox.setBoxImg(10 -this._countdown +1);
        this._countdown-- ? this._countdown < 0 : this._countdown = 1;
        if (this._countdown == 0 && this._isDeleteOver) {
            this.timer.delay = 1000;
            this.showRandomElement();
            this.hitBox.ResetMcFrameRate();
            this._countdown = 10;
        }
        // //console.log(this._countdown);
        // //console.log(this._isDeleteOver);
    };
    Object.defineProperty(ElementViewManage.prototype, "countdown", {
        get: function () {
            return this._countdown;
        },
        set: function (countdown) {
            this._countdown = countdown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 点击倒计时加速，每点击一下减一秒
     */
    ElementViewManage.prototype.tapTimerSpeed = function (evt) {
        this.removeHelpHandle();
        if (this.helpTiptxtView)
            this.helpTiptxtView.parent && this.helpTiptxtView.parent.removeChild(this.helpTiptxtView);
        if (this.guideBubble)
            this.guideBubble.parent && this.guideBubble.parent.removeChild(this.guideBubble);
        SoundUtils.instance().playHitBoxSound();
        var pv = evt.currentTarget;
        // //console.log("pv.id"+pv.id);
        if (pv.id == 2) {
            if (this.timer.delay > 0) {
                // this.timer.delay -= 100;
                this.timer.delay = 0.7 * this.timer.delay;
            }
            else {
                this.timer.delay = 1000;
            }
            pv.setPlayTime(1);
        }
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /********************************************************************************* */
    /*---------------------------------------------------金币计算------------------------------------------------------*、
    /**
     * 总金币计算
     * author:bigfootzq
     * date:2018/09/11
     */
    ElementViewManage.prototype.addCoin = function () {
        // console.log("生成免费奖励次数："+this.rewardTimer.repeatCount);
        // console.log("生成免费奖励当前次数："+this.rewardTimer.currentCount);	
        // console.log(this.rewardTimer.repeatCount - this.rewardTimer.currentCount);	
        // //console.log("每秒加金币："+GameData.secCoin);
        var secTotalcoin = this.addSecCoin();
        // let gbg= new GameBackGround();
        // //console.log(GameBackGround.hTimerStatus);
        if (GameBackGround.hTimerStatus) {
            GameData.secCoin = CommonFuction.cheng(secTotalcoin, '5');
            this.floatCoinTimer.delay = 200;
        }
        else {
            GameData.secCoin = secTotalcoin;
            this.floatCoinTimer.delay = 1000;
        }
        // GameData.coin  += Number(secTotalcoin);
        GameData.coin = CommonFuction.jia(GameData.coin, GameData.secCoin);
        this._coinLabel.text = this.numZero(GameData.coin);
        this._coinSecLabel.text = this.numZero(GameData.secCoin);
    };
    /**
     * 数字补零
     */
    ElementViewManage.prototype.addPreZero = function (num) {
        return ('00' + num).slice(-3);
    };
    /**
     * 数字去零计算
     */
    ElementViewManage.prototype.numZero = function (num) {
        // //console.log("数字去0计算"+num);
        var numString;
        if (typeof (num) == "number") {
            numString = Math.floor(num).toString();
        }
        else {
            // numString = num.split(".")[0];
            numString = num;
        }
        var numLength = numString.length;
        var zeroNumber = Math.floor((numLength - 1) / 3);
        if (zeroNumber > 0) {
            numString = numString.slice(0, -1 * zeroNumber * 3) + "." + numString.slice(numLength - zeroNumber * 3, numLength - zeroNumber * 3 + 2) + GameData.zeroConfigArr[zeroNumber - 1].company;
        }
        else {
            numString = num.toString();
        }
        return numString;
    };
    /**
     * 数字去零计算舍去小数点
     */
    ElementViewManage.prototype.numZero2 = function (num) {
        // //console.log("数字去0计算"+num);
        var numString;
        if (typeof (num) == "number") {
            numString = Math.floor(num).toString();
        }
        else {
            // numString = num.split(".")[0];
            numString = num;
        }
        var numLength = numString.length;
        var zeroNumber = Math.floor((numLength - 1) / 3);
        if (zeroNumber > 0) {
            numString = numString.slice(0, -1 * zeroNumber * 3) + GameData.zeroConfigArr[zeroNumber - 1].company;
        }
        else {
            numString = Math.round(num).toString();
        }
        return numString;
    };
    /**
     * 秒产金币计算
     * author:bigfootzq
     * date:2018/09/11
     */
    ElementViewManage.prototype.addSecCoin = function () {
        var secTotalcoin = '0';
        //遍历GameData.elements[],对每个等级的房子乘以秒产，每秒刷新一次
        for (var l = 0; l < this.elementViews.length; l++) {
            if (this.elementViews[l].grade != 0) {
                // let houseSecCoin:number = houseDownArr[this.elementViews[l].grade-1].coin_num * Math.pow(10,houseDownArr[this.elementViews[l].grade-1].coin_Base);
                var houseSecCoin = GameData.houseDownArr[this.elementViews[l].grade - 1].coin_num;
                // secTotalcoin = CommonFuction.jia(secTotalcoin,CommonFuction.cheng(this.elementViews[l].grade.toString(),houseSecCoin));
                secTotalcoin = CommonFuction.jia(secTotalcoin, houseSecCoin);
            }
        }
        // //console.log("每秒增加金币："+secTotalcoin );
        // if (CommonFuction.compareMax(secTotalcoin,GameData.secCoin)){
        // 	GameData.secCoin = secTotalcoin
        // }
        // //console.log("每秒增加金币返回值："+GameData.secCoin );
        return secTotalcoin;
    };
    ElementViewManage.prototype.floatCoin = function () {
        for (var l = 0; l < this.elementViews.length; l++) {
            if (this.elementViews[l].time != 0 && this.elementViews[l].grade > 0) {
                // //console.log("飘字 : ");
                // //console.log(this.elementViews[l].grade-1);
                var houseSecCoin = GameData.houseDownArr[this.elementViews[l].grade - 1].coin_num;
                // let houseSecCoin:number = houseDownArr[this.elementViews[l].grade-1].coin_num * Math.pow(10,houseDownArr[this.elementViews[l].grade-1].coin_Base);
                var curretTime = new Date().getTime();
                var timeDiffrent = Math.floor((curretTime - this.elementViews[l].time) / 1000);
                // //console.log("curretTime : "+ curretTime );
                // //console.log("thisTime : "+ this.elementViews[l].time);
                // //console.log("timeDiffrent : "+ timeDiffrent );
                // //console.log(houseDownArr[this.elementViews[l].grade-1].coin_time);
                // //console.log("求余 : ");
                // //console.log(Number(timeDiffrent) % Number(houseDownArr[this.elementViews[l].grade-1].coin_time*2) );
                var speed = void 0;
                var index = 1;
                if (GameBackGround.hTimerStatus) {
                    speed = 160;
                    index = 5;
                }
                else {
                    speed = 800;
                    index = 1;
                    this.plusIndex = 1;
                }
                if (Number(timeDiffrent) % Number(GameData.houseDownArr[this.elementViews[l].grade - 1].coin_time * 2) == 0 && this._isDeleteOver) {
                    // console.log("飘出金币")
                    this.plusIndex--;
                    // console.log(this.plusIndex);
                    if (this.plusIndex == 0) {
                        this.elementViews[l].playScale();
                        SoundUtils.instance().playHouseCoinSound();
                        this.plusIndex = index;
                    }
                    this.floatCoinText(this.numZero2(houseSecCoin), this.elementViews[l].targetX() - 15, this.elementViews[l].targetY() - 15, speed);
                }
            }
        }
    };
    ElementViewManage.prototype.showSynthesisGird = function (id, grade) {
        var gbg = new GameBackGround();
        for (var l = 0; l < this.elementViews.length; l++) {
            if (this.elementViews[l].grade == grade && this.elementViews[l].grade > 0 && this.elementViews[l].id != id) {
                //console.log(this.elementViews[l].location);
                var i = Math.floor(this.elementViews[l].location / GameData.MaxColumn);
                var t = this.elementViews[l].location % GameData.MaxColumn;
                var gird = new egret.Bitmap();
                gird.width = GameData.girdWidth;
                gird.height = GameData.girdWidth * 0.6;
                gird.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * t;
                gird.y = GameData.startY + 20 + GameData.girdWidth * i;
                if (GameData.mapData[i][t] != -1) {
                    gird.texture = RES.getRes("drag_synthesis_small_png"); //载入地块
                }
                this._layer.addChildAt(this.dragContainer, 0);
                this.dragContainer.addChild(gird);
            }
        }
    };
    ElementViewManage.prototype.addMoveinSetGird = function (id) {
        this.moveinSetGrid = new egret.Bitmap();
        var i = Math.floor(this.elementViews[id].location / GameData.MaxColumn);
        var t = this.elementViews[id].location % GameData.MaxColumn;
        this.moveinSetGrid.width = GameData.girdWidth;
        this.moveinSetGrid.height = GameData.girdWidth * 0.6;
        this.moveinSetGrid.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * t;
        this.moveinSetGrid.y = GameData.startY + 20 + GameData.girdWidth * i;
        this.moveinSetGrid.texture = RES.getRes("drag_moveinset_small_png"); //载入地块
        this.dragContainer.addChild(this.moveinSetGrid);
        this._movein = true;
    };
    ElementViewManage.prototype.clearSynthesisGird = function () {
        while (this.dragContainer.numChildren) {
            this.dragContainer.removeChildAt(0);
        }
    };
    /*-----------------------------播放 删除动画--------------------------------------*/
    /**
     * isBack = true
     * 可以交换，但是交换后没有发生位置移动
     * 移除焦点
     * 播放一个交换的动画，然后两个位置再换回来
     * isBack=false
     * 播放 删除动画-
    */
    ElementViewManage.prototype.changeLocationWithScaleOrBack = function (id1, id2, isBack) {
        //从 e1id 交换到 e2id
        var e1id = id1; //有焦点的元素
        var e2id = id2;
        if (this.elementViews[id2].focus) {
            e1id = id2;
            e2id = id1;
        }
        var temp = this.elementViews[e1id].location;
        this.elementViews[e1id].location = this.elementViews[e2id].location;
        this.elementViews[e2id].location = temp;
        GameData.elements[e1id].location = this.elementViews[e1id].location;
        GameData.elements[e2id].location = this.elementViews[e2id].location;
        // this.elementViews[e1id].setFocus(false);
        if (this._layer.getChildIndex(this.elementViews[e1id]) < this._layer.getChildIndex(this.elementViews[e2id])) {
            this._layer.swapChildren(this.elementViews[e1id], this.elementViews[e2id]);
        }
        if (isBack) {
            var xx = this.elementViews[e1id].targetX();
            var yy = this.elementViews[e1id].targetY();
            var x = this.elementViews[e2id].targetX();
            var y = this.elementViews[e2id].targetY();
            this.elementViews[e1id].moveTo(xx, yy);
            this.elementViews[e2id].moveTo(x, y);
            // this.elementViews[e1id].moveAndBack(this.elementViews[e2id].location,true);
            // this.elementViews[e2id].moveAndBack(this.elementViews[e1id].location);
        }
        else {
            this.elementViews[e1id].moveAndScale(this.elementViews[e2id].location, true);
            this.elementViews[e2id].moveAndScale(this.elementViews[e1id].location);
        }
        this._currentTapID = -1;
    };
    /**
     * 播放曲线动画，此类型动画用于可消除过关条件得情况
     */
    ElementViewManage.prototype.playReqRemoveAn = function (id, tx, ty) {
        this.moveEleNum++;
        var el = this.elementViews[id];
        if (el.parent) {
            this._layer.setChildIndex(el, this._layer.numChildren);
        }
        el.playCurveMove(tx, ty);
    };
    /**
     * 播放放大动画，播放后直接删除,用于可删除元素，但元素类型不是关卡过关条件
     */
    ElementViewManage.prototype.playRemoveAni = function (id) {
        // this.moveEleNum++;
        var el = this.elementViews[id];
        if (el.parent) {
            this._layer.setChildIndex(el, this._layer.numChildren);
        }
        el.playRemoveAni();
    };
    /**
     * scale控制播放放大动画，默认放大，播放后直接删除,用于可删除元素，但元素类型不是关卡过关条件
     */
    ElementViewManage.prototype.playRecycleAni = function (id, x, y, scale) {
        if (scale === void 0) { scale = true; }
        // this.moveEleNum++;
        var el = this.elementViews[id];
        if (el.parent) {
            this._layer.setChildIndex(el, this._layer.numChildren);
        }
        if (scale) {
            el.playRecycleAni(x, y);
        }
        else {
            el.playRemoveAniNoScale(x, y);
        }
    };
    /**
     * 删除完毕重新开始计时
     */
    ElementViewManage.prototype.delOver = function (evt) {
        if (evt) {
            // //console.log("删除完毕");
            this._isDeleteOver = true;
        }
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    //删除动画完成，现在更新地图元素
    ElementViewManage.prototype.updateMap = function (evt) {
        this.moveEleNum--;
        if (this.moveEleNum == 0) {
            this.dispatchEvent(evt);
        }
    };
    ElementViewManage.prototype.addLevelExp = function (grade) {
        var levelExp = 0;
        if (grade >= 1) {
            levelExp = GameData.houseDownArr[grade - 1].down_exp;
        }
        GameData.levelExp += Number(levelExp);
        this._levelExpLabel.text = GameData.levelExp.toString() + "/" + GameData.levelReqExp.toString();
        this.barMask = new egret.Rectangle(0, 0, GameData.levelExp / GameData.levelReqExp * this._expBar.width, this._expBar.height);
        this._expBar.mask = this.barMask;
        this.tempExp += Number(levelExp);
        if (this.tempExp >= 80) {
            //console.log("将总资产上传到云");
            var score = CommonFuction.jia(GameData.coin, GameData.cost);
            platform.setUserCloudStorage([{ key: "score", value: this.numZero(score) + "" }]); //将总资产上传到云
            this.tempExp = 0;
        }
        if (GameData.levelExp >= GameData.levelReqExp && !GameData.newHouse) {
            var evt = new ElementViewManageEvent(ElementViewManageEvent.LEVEL_EXP_UP);
            this.levelExpUp(evt);
        }
    };
    /**
     *
     */
    ElementViewManage.prototype.starHandler = function (x, y) {
        //console.log("经验值黄星");
        var star1 = ResourceUtils.createBitmapByName("star_png");
        star1.width = GameData.girdWidth * 0.44;
        star1.height = GameData.girdWidth * 0.53;
        star1.x = x - star1.width / 2;
        star1.y = y - star1.height / 2;
        ;
        this._layer.addChild(star1);
        var star2 = ResourceUtils.createBitmapByName("star_png");
        star2.width = GameData.girdWidth * 0.44 * 0.8;
        star2.height = GameData.girdWidth * 0.53 * 0.8;
        star2.x = x - star2.width / 2;
        star2.y = y - star2.height / 2;
        ;
        this._layer.addChild(star2);
        var star3 = ResourceUtils.createBitmapByName("star_png");
        star3.width = GameData.girdWidth * 0.44 * 0.4;
        star3.height = GameData.girdWidth * 0.53 * 0.4;
        star3.x = x - star3.width / 2;
        star3.y = y - star3.height / 2;
        ;
        this._layer.addChild(star3);
        var tw1 = egret.Tween.get(star1);
        var tw2 = egret.Tween.get(star2);
        var tw3 = egret.Tween.get(star3);
        tw1.to({ x: 20, y: 30 }, 1000, egret.Ease.cubicInOut);
        tw2.wait(250).to({ scaleX: 0.8, scaleY: 0.8, x: 29, y: 39 }, 750, egret.Ease.cubicInOut);
        tw3.wait(500).to({ scaleX: 0.4, scaleY: 0.4, x: 48, y: 58 }, 500, egret.Ease.cubicInOut).call(function () {
            this._layer.removeChild(star1);
            this._layer.removeChild(star2);
            this._layer.removeChild(star3);
            ;
        }, this);
    };
    /**
     * 经验值超过过关经验值的时候发出消息
     * author:bigfootzq
     * date:2018/09/01
     */
    ElementViewManage.prototype.levelExpUp = function (evt) {
        if (GameData.levelExp >= GameData.levelReqExp) {
            // //console.log("levelExpup函数"+GameData.coin)
            // //console.log("levelExpup函数"+GameData.levelCoin)
            // GameData.coin +=  Number(GameData.levelCoin);//通关加奖励金币
            this.timer.stop(); //这一关结束了，暂停计时器
            this.coinTimer.stop();
            this.floatCoinTimer.stop();
            SoundUtils.instance().stopBg();
            // //console.log("免费ICON的布尔值："+this._addReward.toString())
            egret.localStorage.setItem("rewardIconStatus", this._addReward.toString());
            this.dispatchEvent(evt);
            var userGameData = egret.localStorage.getItem("userGameData");
            if (userGameData) {
                //console.log("读取旧数据成功")
                var oldData = JSON.parse(userGameData);
                //console.log(oldData);
                if (CommonFuction.compareMax(oldData.cost, GameData.cost)) {
                    GameData.cost = oldData.cost;
                }
            }
            else {
                //console.log("没有旧数据");        
            }
            var score = CommonFuction.jia(GameData.coin, GameData.cost);
            platform.setUserCloudStorage([{ key: "score", value: this.numZero(score) + "" }]); //将总资产上传到云
        }
    };
    ElementViewManage.prototype.getLevelUpPanel = function () {
        this.timer.stop();
        this._layer.addChild(this._levelUpPanel);
        var levelUpMask = new egret.Shape();
        levelUpMask.graphics.beginFill(0x000000, 0.8);
        levelUpMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        levelUpMask.graphics.endFill();
        levelUpMask.alpha = 0.8;
    };
    ElementViewManage.prototype.createRecycle = function () {
        //console.log("添加回收站");
        this.recycle.width = GameData.girdWidth * 0.6 + 5;
        this.recycle.height = GameData.girdWidth * 0.708 + 5;
        var x = GameData.stageW - 10 - this.recycle.width * 3 / 2 - 5;
        var y = GameData.stageH - this.recycle.height - GameData.girdWidth * 1.21 - 15;
        this.recycle.graphics.beginFill(0x000000, 0);
        // this.recycle.graphics.drawRect(this.recycle.x,this.recycle.y,this.recycle.width,this.recycle.height);
        this.recycle.graphics.drawRect(x, y, this.recycle.width, this.recycle.height);
        this.recycle.graphics.endFill();
        this._layer.addChild(this.recycle);
    };
    ElementViewManage.prototype.openConfirmRecycle = function () {
        this.timer.stop();
        this.floatCoinTimer.stop();
        SoundUtils.instance().playClickSound();
        this._layer.addChild(this._confirmRecycleContainer);
        var confirmBase = ResourceUtils.createBitmapByName("reclaim_base_png");
        confirmBase.x = GameData.stageW / 2 - confirmBase.width / 2;
        confirmBase.y = GameData.stageH / 2 - confirmBase.height / 2;
        var confirmMask = new egret.Shape();
        confirmMask.graphics.beginFill(0x000000, 0.8);
        confirmMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        confirmMask.graphics.endFill();
        confirmMask.alpha = 0.8;
        this._confirmRecycleContainer.addChild(confirmMask);
        this._confirmRecycleContainer.addChild(confirmBase);
        var grade = this._hitEv.grade;
        var newHouse = ResourceUtils.createBitmapByName("house#houses_a_" + this.addPreZero(grade) + "_big");
        newHouse.x = confirmBase.x + confirmBase.width / 2 - newHouse.width / 2;
        newHouse.y = confirmBase.y + GameData.stageW / 10;
        //房子等级
        var houseLevelLabel = new egret.TextField();
        houseLevelLabel.text = "LV " + grade.toString();
        houseLevelLabel.textAlign = egret.HorizontalAlign.CENTER;
        houseLevelLabel.fontFamily = "黑体";
        houseLevelLabel.size = 20;
        houseLevelLabel.textColor = 0X7D3705;
        houseLevelLabel.width = newHouse.width;
        houseLevelLabel.x = newHouse.x;
        houseLevelLabel.y = newHouse.y + newHouse.height + 15;
        this._confirmRecycleContainer.addChild(newHouse);
        this._confirmRecycleContainer.addChild(houseLevelLabel);
        //房子价格
        var newHouseCoin = ResourceUtils.createBitmapByName("shop#shop_money_01_png");
        newHouseCoin.x = confirmBase.x + confirmBase.width / 4 + 18;
        newHouseCoin.y = houseLevelLabel.y + houseLevelLabel.height + 25;
        var housePriceLabel = new egret.TextField();
        // let housePrice:number =  this._buyHouseConfigArray[this._hitEv.grade-1].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade-1].coinBase);
        // let housePrice:number =  Number(this._buyHouseConfigArray[this._hitEv.grade-1].coinNum);
        var housePrice = GameData.buyHouseConfigArray[this._hitEv.grade - 1].coinNum;
        housePriceLabel.text = this.numZero(housePrice);
        housePriceLabel.textAlign = egret.HorizontalAlign.CENTER;
        housePriceLabel.size = 20;
        housePriceLabel.fontFamily = "黑体";
        housePriceLabel.width = newHouse.width;
        housePriceLabel.height = newHouseCoin.height;
        housePriceLabel.x = houseLevelLabel.x;
        housePriceLabel.y = newHouseCoin.y + 4;
        this._confirmRecycleContainer.addChild(newHouseCoin);
        this._confirmRecycleContainer.addChild(housePriceLabel);
        this._confirmBtn = ResourceUtils.createBitmapByName("reclaim_sure_png");
        this._confirmBtn.touchEnabled = true;
        this._confirmBtn.x = confirmBase.x + (confirmBase.width / 2 - this._confirmBtn.width) / 2;
        this._confirmBtn.y = confirmBase.y + confirmBase.height * 3 / 4 - 20;
        var closeBtn = ResourceUtils.createBitmapByName("reclaim_cancel_png");
        closeBtn.touchEnabled = true;
        closeBtn.x = confirmBase.x + confirmBase.width / 2 + (confirmBase.width / 2 - closeBtn.width) / 2;
        closeBtn.y = confirmBase.y + confirmBase.height * 3 / 4 - 20;
        this._confirmRecycleContainer.addChild(this._confirmBtn);
        this._confirmRecycleContainer.addChild(closeBtn);
        this._confirmBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm, this);
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeConfirmRecycle, this);
        var disableConfirm = new egret.Shape();
        disableConfirm.graphics.beginFill(0x000000, 0);
        disableConfirm.graphics.drawRect(confirmBase.x + confirmBase.width / 5, confirmBase.y + confirmBase.height * 0.85, 60, 25);
        disableConfirm.graphics.endFill();
        disableConfirm.touchEnabled = true;
        disableConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.disableConfirm, this);
        this._confirmRecycleContainer.addChild(disableConfirm);
        this._reclaimCheck.x = confirmBase.x + confirmBase.width / 5 + 5;
        this._reclaimCheck.y = confirmBase.y + confirmBase.height * 0.85;
    };
    /**
     * 关闭确认删除面板
     */
    ElementViewManage.prototype.closeConfirmRecycle = function () {
        //console.log("关闭删除面板");
        this.timer.start();
        this.floatCoinTimer.start();
        SoundUtils.instance().playCloseSound();
        while (this._confirmRecycleContainer.numChildren) {
            this._confirmRecycleContainer.removeChildAt(0);
        }
        this._layer.removeChild(this._confirmRecycleContainer);
        this._hitEv.back();
    };
    ElementViewManage.prototype.confirm = function () {
        //console.log("确认删除")
        var x = GameData.stageW - 10 - this.recycle.width - 5;
        var y = GameData.stageH - this.recycle.height / 2 - GameData.girdWidth * 1.21 - 15;
        this.deleteElement(this._hitEv.id, x, y);
        var housePrice = GameData.buyHouseConfigArray[this._hitEv.grade].coinNum;
        // let housePrice:number =  this._buyHouseConfigArray[this._hitEv.grade].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade].coinBase);
        // GameData.coin += Number(housePrice);
        GameData.coin = CommonFuction.jia(GameData.coin.toString, housePrice);
        this._coinLabel.text = this.numZero(GameData.coin);
        this.closeConfirmRecycle();
    };
    ElementViewManage.prototype.disableConfirm = function () {
        if (!this._isDisableConfirm) {
            this._confirmRecycleContainer.addChild(this._reclaimCheck);
            this._isDisableConfirm = true;
        }
        else {
            if (this._reclaimCheck.parent) {
                this._reclaimCheck.parent.removeChild(this._reclaimCheck);
                this._isDisableConfirm = false;
            }
        }
    };
    /***
     * 删除房子
     * author:bigfootzq
     * date:2018/11/22
     */
    ElementViewManage.prototype.recycleHouse = function (evt) {
        this._hitEv = evt.currentTarget;
        var isHit = this.recycle.hitTestPoint(evt.stageX, evt.stageY);
        //console.log("删除碰撞检测"+isHit);
        if (isHit) {
            //console.log("删除元素");
            if (this._isDisableConfirm) {
                //console.log("直接删除元素");
                this.deleteElement(this._hitEv.id, evt.stageX, evt.stageY);
                // let housePrice:number =  this._buyHouseConfigArray[this._hitEv.grade].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade].coinBase);
                var housePrice = GameData.buyHouseConfigArray[this._hitEv.grade].coinNum;
                GameData.coin = CommonFuction.jia(GameData.coin, housePrice);
                this._coinLabel.text = this.numZero(GameData.coin);
            }
            else {
                this.openConfirmRecycle();
                var x = GameData.stageW - 10 - this.recycle.width - 5;
                var y = GameData.stageH - this.recycle.height / 2 - GameData.girdWidth * 1.21 - 15;
                this._hitEv.moveTo(x, y);
            }
        }
        else {
            this._hitEv.back();
        }
    };
    /***
     * 新版删除房子
     * author:bigfootzq
     * date:2018/12/24
     */
    ElementViewManage.prototype.delHouse = function (ev) {
        this._hitEv = ev;
        var x = GameData.stageW / 2 - GameData.girdWidth * 1.3 / 2;
        ;
        var y = GameData.stageH - GameData.girdWidth * 1.64;
        var rectA = this._hitEv.getBounds();
        var rectB = new egret.Rectangle(x, y, GameData.girdWidth * 1.3, GameData.girdWidth * 1.44);
        ;
        //必须加上方块所在的x，y
        rectA.x += this._hitEv.x;
        rectA.y += this._hitEv.y;
        // rectB.x += x;
        // rectB.y += y;
        // let isHit:boolean = ev1.hitTestPoint(ev2.targetX(),ev2.targetY());
        var isHit = rectA.intersects(rectB);
        //console.log("删除碰撞检测"+isHit);
        if (isHit) {
            //console.log("直接删除元素");
            // console.log(this._hitEv);
            // console.log(this._hitEv.id);
            // console.log(GameData.elements[this._hitEv.id].grade);
            // let housePrice:number =  this._buyHouseConfigArray[this._hitEv.grade].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade].coinBase);
            var housePrice = GameData.buyHouseConfigArray[this._hitEv.grade - 1].sellcoefficient;
            GameData.coin = CommonFuction.jia(GameData.coin, housePrice);
            this.delfloatCoinText(this._hitEv.x, this._hitEv.y, this._hitEv.grade);
            this._coinLabel.text = this.numZero(GameData.coin);
            this.deleteElement(this._hitEv.id, this._hitEv.x, this._hitEv.y);
        }
        else {
            this._hitEv.back();
        }
    };
    /**
     * 直接删除元素
     * author:bigfootzq
     * date:2018/11/18
     */
    ElementViewManage.prototype.deleteElement = function (id, x, y) {
        var i = Math.floor(this.elementViews[id].location / GameData.MaxColumn);
        var t = this.elementViews[id].location % GameData.MaxColumn;
        if (GameData.elements[id].type !== 'b0' || GameData.elements[id].type !== 'b1') {
            this._isDeleteOver = false;
            this.playRecycleAni(id, x, y);
        }
        this.elementViews[id].grade = GameData.elements[id].grade = 0;
        this.elementViews[id].time = GameData.elements[id].time = 0;
        if (GameData.availableMapId.length == 0) {
            this.timer.start();
            //console.log(GameData.availableMapId.length);
            GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
            GameData.availableMapId.push(id); //将空白地块加入可用地图数组
            if (!this.helpHandleTimer.running) {
                this.helpHandleTimer.reset();
                this.helpHandleTimer.start();
            }
        }
        else {
            GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
            GameData.availableMapId.push(id); //将空白地块加入可用地图数组
        }
    };
    /**
     * 回收房屋金币飘字
     */
    ElementViewManage.prototype.delfloatCoinText = function (x, y, grade) {
        // console.log("删除房屋金币飘字");
        var housePrice = GameData.buyHouseConfigArray[grade - 1].sellcoefficient;
        var coinView = ResourceUtils.createBitmapByName("shop#shop_money_01_png");
        coinView.x = x;
        coinView.y = y;
        var txtView = new egret.TextField;
        // txtView.textColor = 0xDC143C;
        txtView.textColor = 0xFFFFFF;
        txtView.text = this.numZero(housePrice);
        txtView.bold = true;
        txtView.size = 30;
        txtView.x = coinView.x + coinView.width;
        txtView.y = coinView.y;
        this._layer.addChild(coinView);
        this._layer.addChild(txtView);
        var twn = egret.Tween.get(coinView);
        twn.wait(200).to({ "alpha": 1, x: 20, y: GameData.girdWidth - 10, scaleX: 1.2, scaleY: 1.2 }, 1000, egret.Ease.sineInOut).to({ scaleX: 1, scaleY: 1 }).call(function () {
            this._layer.removeChild(coinView);
        }, this);
        var twn = egret.Tween.get(txtView);
        twn.wait(200).to({ "alpha": 1, x: 20 + GameData.girdWidth / 3, y: GameData.girdWidth - 10, scaleX: 1.2, scaleY: 1.2 }, 1000, egret.Ease.sineInOut).to({ scaleX: 1, scaleY: 1 }).call(function () {
            this._layer.removeChild(txtView);
        }, this);
    };
    ElementViewManage.prototype.openShop = function () {
        //console.log('打开商店');
        this.timer.stop();
        this.rewardTimer.stop();
        SoundUtils.instance().playClickSound();
        this._layer.parent.addChild(this._shopContainer);
        var shopBase = ResourceUtils.createBitmapByName("shop#shop_base_png");
        shopBase.width = GameData.stageW;
        shopBase.height = shopBase.width * 0.618;
        shopBase.x = 0;
        shopBase.y = GameData.stageH - shopBase.height;
        var shopMask = new egret.Shape();
        shopMask.graphics.beginFill(0x000000, 0.8);
        shopMask.graphics.drawRect(shopBase.x, shopBase.y + GameData.stageW / 16, shopBase.width, shopBase.height);
        shopMask.graphics.endFill();
        shopMask.alpha = 0.8;
        this._shopContainer.addChild(shopMask);
        this._shopContainer.addChild(shopBase);
        var closeShopBtn = ResourceUtils.createBitmapByName("shop#shop_close_png");
        closeShopBtn.touchEnabled = true;
        closeShopBtn.x = GameData.stageW - closeShopBtn.width;
        closeShopBtn.y = GameData.stageH - shopBase.height;
        this._shopContainer.addChild(closeShopBtn);
        closeShopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeShop, this);
        //创建内容，
        this._cards = this.createCards();
        // this._cards.cacheAsBitmap = true;
        // this._cards.touchEnabled = true;
        // //创建ScrollView
        this._cardScrollView = new egret.ScrollView();
        this._cardScrollView.setContent(this._cards);
        this._cardScrollView.width = shopBase.width;
        this._cardScrollView.height = shopBase.height;
        this._cardScrollView.x = shopBase.width / 2;
        this._cardScrollView.y = GameData.stageH - shopBase.height / 2;
        this._cardScrollView.anchorOffsetX = this._cardScrollView.width / 2;
        this._cardScrollView.anchorOffsetY = this._cardScrollView.height / 2;
        this._cardScrollView.setScrollLeft(this._openScrollX);
        //垂直滚动设置为 on 
        this._cardScrollView.verticalScrollPolicy = "off";
        //水平滚动设置为 auto
        this._cardScrollView.horizontalScrollPolicy = "on";
        // //console.log(this._cards);
        this._shopContainer.addChild(this._cardScrollView);
    };
    ElementViewManage.prototype.closeShop = function () {
        //console.log("关闭商店");
        this.timer.start();
        this.rewardTimer.start();
        SoundUtils.instance().playCloseSound();
        while (this._shopContainer.numChildren) {
            this._shopContainer.removeChildAt(0);
        }
        this._layer.parent.removeChild(this._shopContainer);
    };
    ElementViewManage.prototype.createCards = function (level) {
        if (level === void 0) { level = 0; }
        var cards = new egret.Sprite();
        this._shopCardArr = new Array();
        this._housePriceLabelArr = new Array();
        this._buyBtnArr = new Array();
        cards.height = GameData.stageW * 0.375;
        // cards.cacheAsBitmap = true;
        // cards.width = GameData.stageW*2.5;//不定义滚动卡片的宽度
        this.availableHouseLevel = GameData.availableBuyHouseArr[GameData.maxHouseGrade - 1].availableLevel;
        // //console.log( this._buyHouseConfigArray);
        // //console.log(availableHouseLevel);
        // //console.log(GameData.maxHouseGrade);
        for (var i = 0; i <= GameData.elementTypes.length; i++) {
            //房卡底图
            var shopCard = ResourceUtils.createBitmapByName("shop#shop_card_png");
            var houseNameLabel = new egret.TextField();
            var houseLevel = i + 1;
            var shopHouse = null;
            var houseLevelLabel = new egret.TextField();
            this._housePriceLabel = new egret.TextField();
            // let housePrice:number =   this._buyHouseConfigArray[i].coinNum * Math.pow(10, this._buyHouseConfigArray[i].coinBase) * (1+ this._buyHouseConfigArray[i].buff*GameData.houseBuyNumber[i]/10000); 
            var housePrice = '0';
            if (GameData.houseBuyNumber[i] < GameData.buyHouseConfigArray[i].additionmax) {
                //  housePrice =  Number(this._buyHouseConfigArray[i].coinNum)  + this._buyHouseConfigArray[i].addition * GameData.houseBuyNumber[i];
                housePrice = CommonFuction.jia(GameData.buyHouseConfigArray[i].coinNum, CommonFuction.cheng(GameData.buyHouseConfigArray[i].addition, GameData.houseBuyNumber[i].toString()));
            }
            else {
                // housePrice =  Number(this._buyHouseConfigArray[i].coinNum)  + this._buyHouseConfigArray[i].additionmax * GameData.houseBuyNumber[i];	
                housePrice = CommonFuction.jia(GameData.buyHouseConfigArray[i].coinNum, CommonFuction.cheng(GameData.buyHouseConfigArray[i].addition, GameData.buyHouseConfigArray[i].additionmax));
            }
            //  //console.log(housePrice);
            var buyBtn = ResourceUtils.createBitmapByName("shop#shop_buy_02_png");
            var buyBtnCoin = ResourceUtils.createBitmapByName("shop#shop_money_02_png");
            var shopBuyLock = ResourceUtils.createBitmapByName("shop#shop_buy_lock_png");
            this.buyBtnView = new ShopCardView(houseLevel);
            this.buyBtnView.houseLevel = houseLevel;
            this.buyBtnView.housePrcice = housePrice;
            // this._shopCardArr.push(buyBtnView);
            if (houseLevel <= this.availableHouseLevel) {
                shopHouse = ResourceUtils.createBitmapByName("house#houses_a_" + this.addPreZero(houseLevel) + "_big");
                houseNameLabel.text = GameData.availableBuyHouseArr[i].housename;
                if (CommonFuction.compareMax(GameData.coin, housePrice)) {
                    // buyBtn = ResourceUtils.createBitmapByName("shop_buy_01_png");
                    this.buyBtnView.bitmap.texture = RES.getRes("shop#shop_buy_01_png");
                    this.buyBtnView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyHouse, this);
                    buyBtnCoin = ResourceUtils.createBitmapByName("shop#shop_money_01_png");
                    this._housePriceLabel.textColor = 0X681B00;
                    this._openScrollX = 20 + (10 + shopCard.width) * i - 10 - shopCard.width / 2;
                }
                else {
                    buyBtn = ResourceUtils.createBitmapByName("shop#shop_buy_02_png");
                    buyBtnCoin = ResourceUtils.createBitmapByName("shop#shop_money_02_png");
                    this._housePriceLabel.textColor = 0X333333;
                }
            }
            else {
                shopHouse = ResourceUtils.createBitmapByName("house#houses_a_" + this.addPreZero(houseLevel) + "_black");
                buyBtn = ResourceUtils.createBitmapByName("shop#shop_buy_02_png");
                houseNameLabel.text = "???";
            }
            shopCard.width = GameData.stageW / 4;
            shopCard.height = GameData.stageW * 0.375;
            shopCard.y = shopCard.height / 2;
            shopCard.x += 20 + (10 + shopCard.width) * i;
            //房子名称
            houseNameLabel.textAlign = egret.HorizontalAlign.CENTER;
            houseNameLabel.size = 18;
            houseNameLabel.textColor = 0XFFFFFF;
            houseNameLabel.width = shopCard.width * 0.8;
            houseNameLabel.x = shopCard.x + shopCard.width / 10;
            houseNameLabel.y = shopCard.y + 24;
            //房子
            shopHouse.x = shopCard.x + shopCard.width / 2 - shopHouse.width / 2;
            shopHouse.y = shopCard.y + shopCard.height / 2 - shopHouse.height / 2;
            //购买按钮
            this.buyBtnView.x = buyBtn.x = shopCard.x + (shopCard.width - buyBtn.width) / 2;
            this.buyBtnView.y = buyBtn.y = shopCard.y + shopCard.height - buyBtn.height / 2;
            shopBuyLock.x = buyBtn.x + buyBtn.width / 2 - shopBuyLock.width / 2;
            shopBuyLock.y = buyBtn.y + (buyBtn.height - shopBuyLock.height) / 2;
            //房子等级
            houseLevelLabel.text = "LV " + houseLevel.toString();
            houseLevelLabel.textAlign = egret.HorizontalAlign.CENTER;
            houseLevelLabel.fontFamily = "黑体";
            houseLevelLabel.bold = true;
            houseLevelLabel.size = 18;
            houseLevelLabel.textColor = 0X7D3705;
            houseLevelLabel.width = shopCard.width * 0.8;
            houseLevelLabel.x = shopCard.x + shopCard.width / 10;
            houseLevelLabel.y = buyBtn.y - houseLevelLabel.height - 8;
            //购买按钮金币
            buyBtnCoin.x = buyBtn.x + 8;
            buyBtnCoin.y = buyBtn.y + (buyBtn.height - buyBtnCoin.height) / 2 - 3;
            //房子价格
            this._housePriceLabel.text = this.numZero(housePrice);
            this._housePriceLabel.textAlign = egret.HorizontalAlign.CENTER;
            this._housePriceLabel.size = 20;
            this._housePriceLabel.width = buyBtn.width - buyBtnCoin.width;
            this._housePriceLabel.height = buyBtn.height;
            this._housePriceLabel.x = buyBtnCoin.x + buyBtnCoin.width;
            this._housePriceLabel.y = buyBtnCoin.y + 5;
            // //console.log(this.numZero(housePrice));
            this._housePriceLabelArr.push(this._housePriceLabel);
            this._buyBtnArr.push(buyBtnCoin);
            cards.addChild(shopCard);
            cards.addChild(houseNameLabel);
            cards.addChild(shopHouse);
            cards.addChild(houseLevelLabel);
            if ((houseLevel == this.availableHouseLevel) && GameData.houseBuyNumber[houseLevel - 1] == 0) {
                this._newIcon = ResourceUtils.createBitmapByName("shop#shop_new_png");
                this._newIcon.x = 20 + (10 + shopCard.width) * (this.availableHouseLevel - 1) + shopCard.width / 2 - this._newIcon.width / 2;
                this._newIcon.y = houseNameLabel.y + houseNameLabel.height + 10;
                cards.addChild(this._newIcon);
            }
            if (houseLevel <= this.availableHouseLevel) {
                if (CommonFuction.compareMax(GameData.coin, housePrice)) {
                    cards.addChild(this.buyBtnView);
                }
                else {
                    cards.addChild(buyBtn);
                }
                cards.addChild(buyBtnCoin);
                cards.addChild(this._housePriceLabel);
            }
            else {
                cards.addChild(buyBtn);
                cards.addChild(shopBuyLock);
            }
            // if ( this.availableHouseLevel >= 2 && i == this.availableHouseLevel-1 && this._addReward){
            //     this._rewardShare = ResourceUtils.createBitmapByName("shop#shop_reward_share_png");
            //     this._rewardShare.touchEnabled = true;
            //     // this._rewardShare.width = shopCard.width*3/5;
            //     this._rewardShare.width = buyBtn.width
            //     // this._rewardShare.x = 20+ (10+shopCard.width)*(this.availableHouseLevel-2) + (shopCard.width - this._rewardShare.width)/2;
            //   	// this._rewardShare.y = shopCard.y - this._rewardShare.height/2;
            //   	this._rewardShare.x = buyBtn.x;
            //   	this._rewardShare.y = buyBtn.y;
            //     cards.addChildAt(this._rewardShare,cards.numChildren); 
            //     this._rewardShare.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rewardShare,this);
            // }
            if (this.availableHouseLevel >= 1 && i == this.availableHouseLevel - 1 && this._addReward) {
                console.log("免费视频图标");
                console.log(i);
                console.log(this._rewardShare);
                if (GameData.getVideoAd) {
                    this._rewardShare.texture = RES.getRes("shop#shop_reward_video_png");
                    this._rewardShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardVideo, this);
                }
                else {
                    this._rewardShare.texture = RES.getRes("shop#shop_reward_share_png");
                    this._rewardShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardShare, this);
                }
                this._rewardShare.touchEnabled = true;
                // this._rewardShare.width = shopCard.width*3/5;
                this._rewardShare.width = buyBtn.width;
                // this._rewardShare.x = 20+ (10+shopCard.width)*(this.availableHouseLevel-2) + (shopCard.width - this._rewardShare.width)/2;
                // this._rewardShare.y = shopCard.y - this._rewardShare.height/2;
                this._rewardShare.x = buyBtn.x;
                this._rewardShare.y = buyBtn.y;
                cards.addChildAt(this._rewardShare, cards.numChildren);
            }
            // if (i == 1){
            //     let rewardVideo:egret.Bitmap = ResourceUtils.createBitmapByName("shop_reward_video_png");
            //     rewardVideo.touchEnabled = true;
            //     rewardVideo.width = shopCard.width*3/5;
            //     rewardVideo.x = 20+ shopCard.width + 20 +(shopCard.width - rewardVideo.width)/2 ;
            //     rewardVideo.y = shopCard.y - rewardVideo.height/2
            //     cards.addChild(rewardVideo);
            //     rewardVideo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rewardVedio,this);
            // }
        }
        return cards;
    };
    ElementViewManage.prototype.buyHouse = function (evt) {
        //console.log("购买房屋");     
        var newHouse = evt.currentTarget;
        var housePrice = '0';
        if (GameData.houseBuyNumber[newHouse.houseLevel - 1] < GameData.buyHouseConfigArray[newHouse.houseLevel - 1].additionmax) {
            //  housePrice =  Number(this._buyHouseConfigArray[i].coinNum)  + this._buyHouseConfigArray[i].addition * GameData.houseBuyNumber[i];
            housePrice = CommonFuction.jia(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].coinNum, CommonFuction.cheng(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].addition, GameData.houseBuyNumber[newHouse.houseLevel - 1].toString()));
        }
        else {
            // housePrice =  Number(this._buyHouseConfigArray[i].coinNum)  + this._buyHouseConfigArray[i].additionmax * GameData.houseBuyNumber[i];	
            housePrice = CommonFuction.jia(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].coinNum, CommonFuction.cheng(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].addition, GameData.buyHouseConfigArray[newHouse.houseLevel - 1].additionmax));
        }
        if (CommonFuction.compareMax(GameData.coin, housePrice)) {
            for (var l = 0; l < GameData.availableMapId.length; l++) {
                var id = GameData.availableMapId[l];
                var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
                var t = GameData.elements[id].location % GameData.MaxColumn;
                if (GameData.mapData[i][t] != -2) {
                    GameData.availableMapId.splice(l, 1);
                }
            }
            if (GameData.availableMapId.length == 0) {
                //console.log("没有多余空地,无法购买")
                this.removeHelpHandle();
                this.helpHandleTimer.stop(); //没有多余空地时候不显示指示助手
                this.floatText("没有多余空地啦", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
            }
            else {
                var l = Math.floor(Math.random() * GameData.availableMapId.length);
                var id = GameData.availableMapId[l]; //随机从可以使用的MapId里面抽取一个
                var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
                var t = GameData.elements[id].location % GameData.MaxColumn;
                var ele = this.elementViews[id];
                GameData.mapData[i][t] = id;
                ele.grade = 0;
                GameData.elements[id].grade = newHouse.houseLevel;
                ele.location = GameData.elements[id].location;
                GameData.elements[id].type = "b1";
                ele.setTexture("ui_box_gift_png");
                ele.x = ele.targetX();
                ele.y = GameData.startY - ele.width;
                ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50, -7);
                SoundUtils.instance().playBoxDownSound(); //播放箱子掉落音效
                GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
                // console.log("剩余空地:");
                // console.log(GameData.availableMapId.length);
                // console.log(GameData.availableMapId);
                if (newHouse.houseLevel == this.availableHouseLevel && GameData.houseBuyNumber[newHouse.houseLevel - 1] == 0) {
                    var cards = this._newIcon.parent;
                    if (cards) {
                        cards.removeChild(this._newIcon);
                    }
                }
                GameData.houseBuyNumber[newHouse.houseLevel - 1] += 1;
                // let housePrice:number =   this._buyHouseConfigArray[newHouse.houseLevel-1].coinNum * Math.pow(10, this._buyHouseConfigArray[newHouse.houseLevel-1].coinBase) * (1+ this._buyHouseConfigArray[newHouse.houseLevel-1].buff*GameData.houseBuyNumber[newHouse.houseLevel-1]/10000);	
                // let housePrice:number = 0;
                // if (GameData.houseBuyNumber[newHouse.houseLevel-1] < this._buyHouseConfigArray[newHouse.houseLevel-1].additionmax){
                // 	housePrice  =   Number(this._buyHouseConfigArray[newHouse.houseLevel-1].coinNum  + this._buyHouseConfigArray[newHouse.houseLevel-1].addition * GameData.houseBuyNumber[newHouse.houseLevel-1]);
                // }else{
                // 	housePrice =  Number(this._buyHouseConfigArray[newHouse.houseLevel-1].coinNum  + this._buyHouseConfigArray[newHouse.houseLevel-1].additionmax * GameData.houseBuyNumber[newHouse.houseLevel-1]);				
                // }
                if (GameData.houseBuyNumber[newHouse.houseLevel - 1] < GameData.buyHouseConfigArray[newHouse.houseLevel - 1].additionmax) {
                    //  housePrice =  Number(this._buyHouseConfigArray[i].coinNum)  + this._buyHouseConfigArray[i].addition * GameData.houseBuyNumber[i];
                    housePrice = CommonFuction.jia(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].coinNum, CommonFuction.cheng(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].addition, GameData.houseBuyNumber[newHouse.houseLevel - 1].toString()));
                }
                else {
                    // housePrice =  Number(this._buyHouseConfigArray[i].coinNum)  + this._buyHouseConfigArray[i].additionmax * GameData.houseBuyNumber[i];	
                    housePrice = CommonFuction.jia(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].coinNum, CommonFuction.cheng(GameData.buyHouseConfigArray[newHouse.houseLevel - 1].addition, GameData.buyHouseConfigArray[newHouse.houseLevel - 1].additionmax));
                }
                // //console.log("购买房屋:"+ housePrice);
                this._housePriceLabelArr[newHouse.houseLevel - 1].text = this.numZero(housePrice);
                // GameData.coin -= Number(newHouse.housePrcice);
                GameData.coin = CommonFuction.jian(GameData.coin, newHouse.housePrcice);
                this._coinLabel.text = this.numZero(GameData.coin);
                // GameData.cost += Number(newHouse.housePrcice);//购买房屋的总花费
                GameData.cost = CommonFuction.jia(GameData.cost, newHouse.housePrcice);
            }
        }
        else {
            // //console.log(this.buyBtnView.parent);
            // this._cards.removeChild(this.buyBtnView);
            // this.buyBtnView.bitmap.texture = RES.getRes("shop_money_02_png");
            // this._cards.addChild(this.buyBtnView);
            this.floatText("没有足够的金币", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
        }
    };
    ElementViewManage.prototype.rewardShare = function () {
        // console.log("rewardShare");	
        if (!GameLogic.closeShare && typeof (GameLogic.closeShare) != "undefined") {
            var shareResult = platform.share("key=reward");
            egret.localStorage.setItem("fhTime", new Date().getTime().toString());
            // //console.log(shareResult);	
        }
        else {
            this.rewardHouse();
        }
    };
    ElementViewManage.prototype.getVideoAd = function () {
        console.log("拉取视频广告");
        this.rewardedVideoAd = platform.createRewardedVideoAd();
        this.rewardedVideoAd.onLoad(function () {
            console.log("拉取成功");
            GameData.getVideoAd = true;
        });
        this.rewardedVideoAd.onError(function (err) {
            console.log(err);
            GameData.getVideoAd = false;
        });
    };
    ElementViewManage.prototype.rewardVideo = function () {
        var _this = this;
        console.log("rewardVedio");
        if (GameData.availableMapId.length == 0) {
            //console.log("没有多余空地,无法获得免费房屋")
            this.removeHelpHandle();
            this.helpHandleTimer.stop(); //没有多余空地时候不显示指示助手
            this.floatText("没有多余空地啦", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
        }
        else {
            this.rewardedVideoAd.load().then(function () { return _this.rewardedVideoAd.show(); }).catch(function (err) { return console.log(err.errMsg); });
            this.rewardedVideoAd.onClose(function (res) {
                if (!_this.rewardedVideoAd)
                    return;
                _this.rewardedVideoAd.offClose();
                if (res && res.isEnded || res === undefined) {
                    _this.rewardHouse();
                }
                else {
                    _this.floatText("只有看完广告才能领取奖励哦！", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
                }
            });
        }
    };
    //免费获得房屋
    ElementViewManage.prototype.rewardHouse = function () {
        // console.log("获得免费房屋")
        for (var l = 0; l < GameData.availableMapId.length; l++) {
            var id = GameData.availableMapId[l];
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn;
            if (GameData.mapData[i][t] != -2) {
                GameData.availableMapId.splice(l, 1);
            }
        }
        if (GameData.availableMapId.length == 0) {
            //console.log("没有多余空地,无法获得免费房屋")
            this.removeHelpHandle();
            this.helpHandleTimer.stop(); //没有多余空地时候不显示指示助手
            this.floatText("没有多余空地啦", 0, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
        }
        else {
            var l = Math.floor(Math.random() * GameData.availableMapId.length);
            var id = GameData.availableMapId[l]; //随机从可以使用的MapId里面抽取一个
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn;
            var ele = this.elementViews[id];
            GameData.mapData[i][t] = id;
            ele.grade = 0;
            GameData.elements[id].grade = GameData.availableBuyHouseArr[GameData.maxHouseGrade - 1].availableLevel;
            ele.location = GameData.elements[id].location;
            GameData.elements[id].type = "b1";
            ele.setTexture("ui_box_gift_png");
            ele.x = ele.targetX();
            ele.y = GameData.startY - ele.width;
            ele.showBox((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (i * GameData.MaxRow + t) * 50, -7);
            // ele.showBox(3000);
            SoundUtils.instance().playBoxDownSound(); //播放箱子掉落音效
            GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
            // console.log("剩余空地:");
            // console.log(GameData.availableMapId.length);
            // console.log(GameData.availableMapId);
            // console.log("标志位"+this._addReward);
            //获得免费房屋后移除里外两个标志
            if (this._addReward) {
                // console.log("移除里外两个标志");
                this._rewardShare.parent && this._rewardShare.parent.removeChild(this._rewardShare);
                this._rewardIconSprite.removeChildren();
                this._rewardIconSprite.parent && this._rewardIconSprite.parent.removeChild(this._rewardIconSprite);
                // console.log(this._rewardShareIcon.parent);
                this._addReward = false; //标志位置为false
                // console.log(this._addReward);
                this.rewardTimer.reset(); //计时器重置
                this.rewardTimer.start(); //计时器重置
                // console.log(this.rewardTimer.running);
            }
        }
        SoundUtils.instance().playBg();
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /**-----------------------------------------------飘字动画------------------------------------------------------------------------------------------------- */
    ElementViewManage.prototype.floatText = function (text, x, y, speed) {
        var txtView = new egret.TextField;
        // txtView.textColor = 0xffffff;
        txtView.textColor = 0xE84818;
        txtView.text = text;
        txtView.size = 30;
        txtView.x = x;
        txtView.y = y;
        txtView.width = GameData.stageW;
        txtView.textAlign = egret.HorizontalAlign.CENTER;
        txtView.fontFamily = "黑体";
        txtView.strokeColor = 0xffffff;
        txtView.stroke = 1;
        this._layer.parent ? this._layer.parent.addChild(txtView) : this._layer.addChild(txtView);
        var twn = egret.Tween.get(txtView);
        twn.wait(speed).to({ "alpha": 0.1, y: y - 40, scaleX: 1, scaleY: 1 }, 500).wait(500).call(function () {
            this._layer.parent ? this._layer.parent.removeChild(txtView) : this._layer.addChild(txtView);
        }, this);
    };
    ElementViewManage.prototype.floatCoinText = function (text, x, y, speed) {
        var txtView = new egret.TextField;
        // txtView.textColor = 0xDC143C;
        txtView.textColor = 0xFFFFFF;
        txtView.fontFamily = "黑体";
        txtView.text = text;
        txtView.bold = true;
        txtView.size = 30;
        txtView.width = GameData.girdWidth * 2 / 3;
        txtView.textAlign = egret.HorizontalAlign.LEFT;
        txtView.x = x;
        txtView.y = y;
        var coinView = ResourceUtils.createBitmapByName("shop#shop_money_01_png");
        coinView.x = x - coinView.width;
        coinView.y = y;
        this._layer.addChild(coinView);
        this._layer.addChild(txtView);
        var twn = egret.Tween.get(coinView);
        twn.wait(100).to({ "alpha": 0.1, y: y - 30, scaleX: 1, scaleY: 1 }, 800, egret.Ease.sineInOut).call(function () {
            this._layer.removeChild(coinView);
        }, this);
        var twn = egret.Tween.get(txtView);
        twn.wait(100).to({ "alpha": 0.1, y: y - 30, scaleX: 1, scaleY: 1 }, 800, egret.Ease.sineInOut).call(function () {
            this._layer.removeChild(txtView);
        }, this);
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /**------------------------------------开箱子特效------------------------------------------------------------------- */
    ElementViewManage.prototype.openBoxEffect = function (id) {
        //console.log("开箱子加特效")
        var type = GameData.elements[id].type;
        var mcData = RES.getRes("openbox_json");
        var mcTexture = RES.getRes("openbox_png");
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        if (type == "b0") {
            var mc1_1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("openbox"));
            mc1_1.width = this.elementViews[id].width;
            mc1_1.height = this.elementViews[id].height;
            mc1_1.x = this.elementViews[id].targetX() - GameData.girdWidth * 4 / 5 - 7;
            mc1_1.y = this.elementViews[id].targetY() - GameData.girdWidth * 4 / 5 - 15;
            // //console.log(mc1.x);
            // //console.log(mc1.y);
            this._layer.addChild(mc1_1);
            mc1_1.gotoAndPlay(1);
            mc1_1.addEventListener(egret.Event.COMPLETE, function () {
                // egret.log("1,COMPLETE");
                this._layer.removeChild(mc1_1);
            }, this);
        }
        else if (type == "b1") {
            var mc2_1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("opengift"));
            mc2_1.width = this.elementViews[id].width;
            mc2_1.height = this.elementViews[id].height;
            mc2_1.x = this.elementViews[id].targetX() - GameData.girdWidth * 4 / 5 - 7;
            mc2_1.y = this.elementViews[id].targetY() - GameData.girdWidth * 4 / 5 - 7;
            this._layer.addChild(mc2_1);
            mc2_1.gotoAndPlay(1);
            mc2_1.addEventListener(egret.Event.COMPLETE, function () {
                // egret.log("1,COMPLETE");
                this._layer.removeChild(mc2_1);
            }, this);
        }
        else {
            //console.log("合成房子特效")
            var mc3_1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("synthesis"));
            mc3_1.width = this.elementViews[id].width;
            mc3_1.height = this.elementViews[id].height;
            mc3_1.x = this.elementViews[id].targetX() - GameData.girdWidth * 4 / 5 - 7;
            mc3_1.y = this.elementViews[id].targetY() - GameData.girdWidth * 4 / 5;
            this._layer.addChild(mc3_1);
            mc3_1.gotoAndPlay(1);
            mc3_1.addEventListener(egret.Event.COMPLETE, function () {
                // egret.log("1,COMPLETE");
                this._layer.removeChild(mc3_1);
            }, this);
        }
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /**--------------------------------------------------------切换场景----------------------------------------------------------------------------------- */
    ElementViewManage.prototype.changeScene = function () {
        //console.log("打开切换场景");
        var event = new ElementViewManageEvent(ElementViewManageEvent.OPEN_SCENES);
        this.dispatchEvent(event);
        //console.log(event);
        // let changeScenePanel = new ChangeScenePanel()
        // 	this._layer.parent.addChild(changeScenePanel);
        // 	changeScenePanel.show();
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /*-----------------------------更新整个地图中元素位置--------------------------------------*/
    ElementViewManage.prototype.updateMapData = function () {
        //console.log("重新布局");
        var len = this.elementViews.length;
        //this.moveLocElementNum = 0;
        for (var i = 0; i < len; i++) {
            this.elementViews[i].location = GameData.elements[i].location;
            this.elementViews[i].setTexture("e" + GameData.elements[i].type + "_png");
            this.elementViews[i].moveNewLocation();
        }
    };
    ElementViewManage.prototype.moveNewLocationOver = function (event) {
        this.moveLocElementNum++;
        if (this.moveLocElementNum == (GameData.MaxColumn * GameData.MaxRow)) {
            var evt = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_VIEW_OVER);
            this.dispatchEvent(evt);
            this.moveLocElementNum = 0; //重置
        }
    };
    return ElementViewManage;
}(egret.EventDispatcher));
__reflect(ElementViewManage.prototype, "ElementViewManage");
var GameOverPanel = (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this._isSuccess = false;
        return _this;
    }
    GameOverPanel.prototype.show = function (isSuccess) {
        this._isSuccess = isSuccess;
        this._view = new egret.Bitmap();
        this._view.texture = RES.getRes("scene_01_back_png");
        this._view.width = GameData.stageW;
        this._view.height = GameData.stageH;
        this.addChild(this._view);
        this.scaleX = 0.1;
        this.scaleY = 0.1;
        egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.bounceOut).call(this.playStarAni, this);
        this.playStarAni();
        this.initBtn();
    };
    GameOverPanel.prototype.playStarAni = function () {
        var gameover = new egret.Bitmap();
        gameover.texture = RES.getRes("gameovertitle_png");
        gameover.width = this._view.width / 2;
        gameover.height = 60;
        gameover.x = this._view.x + (this._view.width - gameover.width) / 2;
        gameover.y = GameData.stageH / 2;
        gameover.scaleX = 0;
        gameover.scaleY = 0;
        this.addChild(gameover);
        egret.Tween.get(gameover).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.bounceOut);
        console.log("播放动画");
        /*
        console.log(this._isSuccess);
        if(this._isSuccess)
        {
            //成功动画
            let success:egret.Bitmap = new egret.Bitmap();
            success.texture = RES.getRes("success_png");
            success.width = (this._view.width-50)/3;
            success.height = success.width;
            success.x = (GameData.stageW-success.width*2)/3 +this._view.x;
            success.y = 150+this._view.y;
            success.scaleX = 1.5;
            success.scaleY = 1.5;
            success.alpha = 0;
            this.addChild(success);
            egret.Tween.get(success).to({scaleX:1,scaleY:1,alpha:1},700,egret.Ease.circIn);
          
    

        }
        else
        {
            //失败动画
            let fail:egret.Bitmap = new egret.Bitmap();
            fail.texture = RES.getRes("fail_png");
            fail.width = (this._view.width-50)/3;
            fail.height = fail.width;
            fail.x = (GameData.stageW-fail.width*2)/3 +this._view.x;
            fail.y = 150+this._view.y;
            fail.scaleX = 1.5;
            fail.scaleY = 1.5;
            fail.alpha = 0;
            this.addChild(fail);
            egret.Tween.get(fail).to({scaleX:1,scaleY:1,alpha:1},700,egret.Ease.circIn);

        

        }
        */
    };
    GameOverPanel.prototype.initBtn = function () {
        this._btn = new egret.Shape();
        this._btn.graphics.lineStyle(1, 0x666666, 1);
        this._btn.graphics.beginFill(0xffffff);
        this._btn.graphics.drawRect(0, 0, 160, 80);
        this._btn.graphics.endFill();
        this._btn.width = 160;
        this._btn.height = 80;
        this._btn.x = GameData.stageW / 2 - this._btn.width / 2;
        this._btn.y = GameData.stageH / 2 + 100;
        this._btn.touchEnabled = true;
        this._btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.reset, this);
        this.addChild(this._btn);
        this._btnLabel = new egret.TextField();
        this._btnLabel.size = 20;
        this._btnLabel.textColor = 0x333333;
        this._btnLabel.text = "再来一次";
        this._btnLabel.width = 160;
        this._btnLabel.height = 80;
        this._btnLabel.bold = true;
        this._btnLabel.x = this._btn.x;
        this._btnLabel.y = this._btn.y;
        this._btnLabel.textAlign = "center";
        this._btnLabel.verticalAlign = "middle";
        this.addChild(this._btnLabel);
    };
    GameOverPanel.prototype.reset = function () {
        var egameover = new ElementViewManageEvent(ElementViewManageEvent.GAME_OVER);
        this.dispatchEvent(egameover);
    };
    GameOverPanel.prototype.clear = function () {
        while (this.numChildren) {
            this.removeChildAt(0);
        }
    };
    return GameOverPanel;
}(egret.Sprite));
__reflect(GameOverPanel.prototype, "GameOverPanel");
/**
 * Created by Channing on 2014/9/17.
 */
var GameSceneView = (function (_super) {
    __extends(GameSceneView, _super);
    // private _gameOverScene:GameOverView;
    function GameSceneView() {
        var _this = _super.call(this) || this;
        GameSceneView.game = _this;
        _this.initView();
        return _this;
    }
    GameSceneView.prototype.initView = function () {
        this.gameContainer = new egret.Sprite();
        this.addChild(this.gameContainer);
        this.showHome();
    };
    GameSceneView.prototype.clear = function () {
        while (this.gameContainer.numChildren) {
            this.gameContainer.removeChildAt(0);
        }
    };
    GameSceneView.prototype.start = function () {
        this.clear();
        var gameLayer = new egret.Sprite();
        this.gameContainer.addChild(gameLayer);
        this._gl = new GameLogic(gameLayer);
    };
    GameSceneView.prototype.gameOver = function () {
        // this.clear();
        // this._gameOverScene = new GameOverView();
        // this.gameContainer.addChild(this._gameOverScene);
    };
    GameSceneView.prototype.showHome = function () {
        this.clear();
        this._startScene = new GameStartView();
        this.gameContainer.addChild(this._startScene);
    };
    return GameSceneView;
}(egret.Sprite));
__reflect(GameSceneView.prototype, "GameSceneView");
/**
 * Created by Channing on 2014/9/17.
 * Edited by bigfootzq on 2018/09/18
 */
var GameStartView = (function (_super) {
    __extends(GameStartView, _super);
    function GameStartView() {
        var _this = _super.call(this) || this;
        _this.initView();
        return _this;
    }
    GameStartView.prototype.initView = function () {
        //console.log("GameStartView初始化");
        var bg = ResourceUtils.createBitmapByName("loading_base_png");
        bg.width = GameData.scentWidth;
        bg.height = GameData.scentHeight;
        var bgLogo = ResourceUtils.createBitmapByName("loading_logo_png");
        bgLogo.width = GameData.scentWidth * 0.95;
        bgLogo.height = bgLogo.width * 1.167;
        bgLogo.x = (GameData.scentWidth - bgLogo.width) / 2;
        bgLogo.y = bgLogo.x * 2;
        this.addChild(bg);
        this.addChild(bgLogo);
        var start_btn = new MyButtonForGame("loading_start_png", "loading_start_png");
        this.addChild(start_btn);
        var _swidth = GameData.scentWidth / 2 - start_btn.width / 2;
        var _sheight = GameData.scentHeight * 3 / 4 - start_btn.height;
        start_btn.x = _swidth;
        start_btn.y = _sheight;
        // //console.log(start_btn.y);
        this.userInfoButton = platform.createUserInfoButton();
        //console.log(this.userInfoButton);           
        start_btn.setClick(this.showStartView.bind(this));
        this.thisContainer = new egret.Sprite();
        this.addChild(this.thisContainer);
        // this.onShow().then(oldData =>{
        // 	GameData.closeMusic = oldData.closeMusic?oldData.closeBgMusic:false;
        // 	GameData.closeBgMusic = oldData.closeBgMusic?oldData.closeBgMusic:false;
        // 	GameData.curretLevel = 3;
        // 	GameData.levelExp = oldData.levelExp;
        // 	GameData.coin = Number(oldData.coin)?Number(oldData.coin):0;
        // 	let secCoin = Number(oldData.secCoin);
        // 	let due = oldData.due;
        //     GameData.oldElements = JSON.parse(oldData.inMap);
        // 	GameData.maxHouseGrade = oldData.maxHouseGrade?oldData.maxHouseGrade:1;
        // 	GameData.houseBuyNumber = oldData.buyHouseNumber;
        // 	//console.log("获取旧数据后的关卡："+GameData.curretLevel);
        // 	//console.log("获取旧数据后的关卡："+GameData.oldElements);
        // });
    };
    GameStartView.prototype.showStartView = function () {
        if (this.parent)
            this.parent.removeChild(this);
        GameSceneView.game.start();
        this.userInfoButton.hide();
    };
    GameStartView.prototype.onShow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wxData, userGameData, oldData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wxData = platform.getLaunchOptionsSync();
                        if (!wxData) return [3 /*break*/, 2];
                        return [4 /*yield*/, platform.getGameData("userGameData")];
                    case 1:
                        userGameData = _a.sent();
                        oldData = userGameData[0];
                        //console.log(oldData);
                        return [2 /*return*/, oldData];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GameStartView.prototype.showOtherView = function () {
        //EgretShare.moreGame();
    };
    return GameStartView;
}(egret.Sprite));
__reflect(GameStartView.prototype, "GameStartView");
var GuideView = (function (_super) {
    __extends(GuideView, _super);
    function GuideView() {
        var _this = _super.call(this) || this;
        _this.maskIcon = new egret.Shape();
        _this.maskIcon2 = new egret.Shape();
        _this.txtView = new egret.TextField;
        _this.guide = new two.Guide();
        return _this;
    }
    GuideView.prototype.guideFirst = function () {
        //----------------------镂空一个圆----------------------------0------------
        this.maskIcon.graphics.beginFill(0x000000, 1);
        this.maskIcon.graphics.drawCircle(0, 0, 60);
        this.maskIcon.graphics.endFill();
        this.maskIcon.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * (5 % GameData.MaxColumn) + GameData.girdWidth / 2;
        ;
        this.maskIcon.y = GameData.startY + GameData.girdWidth * (Math.floor(5 / GameData.MaxColumn)) + GameData.girdWidth / 2 - 20;
        // maskIcon.scaleY = 0.6;
        //-------------------------------------------------------------------------
        this.guide.init(this.maskIcon, GameData.stageW, GameData.stageH);
        this.guide.touchEnabled = true;
        this.addChild(this.guide);
        this.guideBubble = new egret.Bitmap();
        this.guideBubble.texture = RES.getRes("guide_bubble_png");
        this.guideBubble.x = this.maskIcon.x - this.guideBubble.width / 2;
        this.guideBubble.y = this.maskIcon.y - this.maskIcon.height / 2 - this.guideBubble.height - 10;
        // txtView.textColor = 0xDC143C;
        this.txtView.textColor = 0x21344D;
        this.txtView.fontFamily = "黑体";
        this.txtView.text = "老板，点这里哦";
        // this.txtView.bold = true;
        this.txtView.size = 26;
        this.txtView.width = this.guideBubble.width;
        this.txtView.textAlign = egret.HorizontalAlign.CENTER;
        this.txtView.x = this.guideBubble.x;
        this.txtView.y = this.guideBubble.y + 18;
        this.addChild(this.guideBubble);
        this.addChild(this.txtView);
        this.helpHandle = new egret.Bitmap();
        this.helpHandle.texture = RES.getRes("ui_help_png");
        this.helpHandle.x = this.maskIcon.x;
        this.helpHandle.y = this.maskIcon.y;
        this.addChild(this.txtView);
        var tw = egret.Tween.get(this.helpHandle, { loop: true });
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicInOut).to({ scaleX: 0.8, scaleY: 0.8 }, 300, egret.Ease.cubicInOut);
        this.addChild(this.helpHandle);
    };
    GuideView.prototype.guideTwo = function () {
        this.guide.clear();
        this.maskIcon.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * (6 % GameData.MaxColumn) + GameData.girdWidth / 2;
        ;
        this.maskIcon.y = GameData.startY + GameData.girdWidth * (Math.floor(6 / GameData.MaxColumn)) + GameData.girdWidth / 2 - 20;
        this.guide.init(this.maskIcon, GameData.stageW, GameData.stageH);
        this.guide.touchEnabled = true;
        this.addChild(this.guide);
        this.guideBubble.x = this.maskIcon.x - this.guideBubble.width / 2;
        this.guideBubble.y = this.maskIcon.y - this.maskIcon.height / 2 - this.guideBubble.height - 10;
        this.txtView.text = "好棒，再点一个哦";
        this.txtView.x = this.guideBubble.x;
        this.txtView.y = this.guideBubble.y + 18;
        this.addChild(this.guideBubble);
        this.addChild(this.txtView);
        this.helpHandle.x = this.maskIcon.x;
        this.helpHandle.y = this.maskIcon.y;
        var tw = egret.Tween.get(this.helpHandle, { loop: true });
        tw.to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicInOut).to({ scaleX: 0.8, scaleY: 0.8 }, 300, egret.Ease.cubicInOut);
        this.addChild(this.helpHandle);
    };
    GuideView.prototype.guideThree = function () {
        this.guide.clear();
        this.maskIcon2.graphics.beginFill(0x000000, 1);
        this.maskIcon2.graphics.drawCircle(0, 0, 140);
        this.maskIcon2.graphics.endFill();
        this.maskIcon2.scaleY = 0.6;
        this.maskIcon2.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * 1.5 + GameData.girdWidth / 2;
        this.maskIcon2.y = GameData.startY + GameData.girdWidth * (Math.floor(6 / GameData.MaxColumn)) + GameData.girdWidth / 2 - 20;
        this.guide.init(this.maskIcon2, GameData.stageW, GameData.stageH);
        this.guide.touchEnabled = true;
        this.addChild(this.guide);
        this.guideBubble.x = this.maskIcon2.x - this.maskIcon2.width / 2;
        this.guideBubble.y = this.maskIcon2.y - this.maskIcon2.height / 2 - this.txtView.height;
        this.txtView.text = "拖动合成高级房子";
        this.txtView.x = this.guideBubble.x;
        this.txtView.y = this.guideBubble.y + 18;
        this.addChild(this.guideBubble);
        this.addChild(this.txtView);
        this.helpHandle.x = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) + GameData.girdWidth / 2;
        this.helpHandle.y = GameData.startY + GameData.girdWidth * (Math.floor(6 / GameData.MaxColumn)) + GameData.girdWidth / 2 - 20;
        var newX = 20 + GameData.girdWidth / 5 + (GameData.girdWidth + GameData.girdWidth / 5) * 2 + GameData.girdWidth / 2;
        egret.Tween.removeTweens(this.helpHandle);
        var tw = egret.Tween.get(this.helpHandle, { loop: true });
        tw.to({ x: newX, y: this.helpHandle.y, scaleX: 1, scaleY: 1 }, 2500, egret.Ease.sineIn);
        this.addChild(this.helpHandle);
    };
    GuideView.prototype.clear = function () {
        this.guide.clear();
        while (this.numChildren) {
            this.removeChildAt(0);
        }
    };
    return GuideView;
}(egret.Sprite));
__reflect(GuideView.prototype, "GuideView");
var LevelElementView = (function (_super) {
    __extends(LevelElementView, _super);
    function LevelElementView() {
        var _this = _super.call(this) || this;
        _this.eltype = ""; //代表元素类型
        _this.init();
        return _this;
    }
    Object.defineProperty(LevelElementView.prototype, "num", {
        get: function () {
            return Number(this.bittext.text);
        },
        set: function (val) {
            if (val <= 0) {
                if (!this.checkmarkbit) {
                    this.checkmarkbit = new egret.Bitmap();
                    this.checkmarkbit.texture = RES.getRes("checkmark_png");
                    this.checkmarkbit.x = (this.bitmap.width - this.checkmarkbit.width) / 2;
                    this.checkmarkbit.y = this.bitmap.height + this.bitmap.y - this.checkmarkbit.height / 2;
                    this.addChild(this.checkmarkbit);
                    this.removeChild(this.bittext);
                }
            }
            else {
                this.bittext.text = val.toString();
            }
        },
        enumerable: true,
        configurable: true
    });
    LevelElementView.prototype.init = function () {
        this.touchChildren = false;
        if (!this.bitmap) {
            this.bitmap = new egret.Bitmap();
        }
        var bitWidth = (GameData.stageW - 40) / GameData.MaxColumn;
        this.bitmap.width = bitWidth;
        this.bitmap.height = bitWidth;
        this.addChild(this.bitmap);
        this.bittext = new egret.BitmapText();
        this.bittext.font = RES.getRes("number_fnt");
        this.bittext.text = "0";
        this.bittext.x = (bitWidth - this.bittext.width) / 2;
        this.bittext.y = this.bitmap.height + this.bitmap.y - this.bittext.height / 2;
        //console.log(this.bittext.height  );
        this.addChild(this.bittext);
    };
    LevelElementView.prototype.setTexture = function (val) {
        this.bitmap.texture = RES.getRes(val);
    };
    return LevelElementView;
}(egret.Sprite));
__reflect(LevelElementView.prototype, "LevelElementView");
var LevelReqViewManage = (function () {
    function LevelReqViewManage(layer) {
        this._layer = layer;
        this.init();
    }
    LevelReqViewManage.prototype.init = function () {
        this.elements = new Array();
    };
    /**
     * 创建当前关卡的过关条件元素
     */
    //   public createCurrentLevelReq(){
    // 	  let len:number = GameData.levelReq.getLevelReqNum();
    // 	  let el:LevelElementView;
    // 	  for (let i = 0; i < len; i++) {
    // 		  if(this.elements.length<=i){
    // 			  el = new LevelElementView();
    // 			  this.elements.push(el);
    // 		  }	
    // 		  else{
    // 			  el = this.elements[i];
    // 		  }	
    // 		  el.eltype =GameData.levelReq.reqElements[i].type;
    // 		  el.setTexture("e"+el.eltype+"_png");
    // 		  el.x=43+(5+el.width)*i;
    // 		  el.y=95;		
    // 		  el.num = GameData.levelReq.reqElements[i].num;
    // 		  this._layer.addChild(el);
    // 	  }
    // 	   if(!this.stepNumText){
    // 			this.stepNumText = new egret.BitmapText();
    // 			//this.stepNumText.
    // 			this.stepNumText.font = RES.getRes("number_fnt");
    // 			this.stepNumText.x = GameData.stageW - 95;
    // 			this.stepNumText.y = 90;
    // 			this.stepNumText.scaleX = 1.5;
    // 			this.stepNumText.scaleY = 1.5;
    // 			this._layer.addChild(this.stepNumText);
    // 			this.stepNumText.text = GameData.stepNum.toString();
    // 		  }
    //   }
    /**
     * 判断是否有指定类型
     * */
    LevelReqViewManage.prototype.haveReqType = function (type) {
        var l = this.elements.length;
        for (var i = 0; i < l; i++) {
            if (this.elements[i].eltype == type) {
                return true;
            }
        }
        return false;
    };
    /**
     * 通过类型，获取当前元素再视图中的位置信息
     */
    LevelReqViewManage.prototype.getPointByType = function (type) {
        var p = new egret.Point();
        var len = this.elements.length;
        for (var i = 0; i < len; i++) {
            if (this.elements[i].eltype == type) {
                p.x = this.elements[i].x + this.elements[i].width / 2;
                p.y = this.elements[i].y + this.elements[i].height / 2;
            }
        }
        return p;
    };
    return LevelReqViewManage;
}());
__reflect(LevelReqViewManage.prototype, "LevelReqViewManage");
var LevelUpPanel = (function (_super) {
    __extends(LevelUpPanel, _super);
    function LevelUpPanel() {
        return _super.call(this) || this;
    }
    LevelUpPanel.prototype.show = function () {
        //console.log("显示城市升级面板")
        this.bannerAd = platform.showBannerAD(20 / GameData.stageW, (GameData.stageH - GameData.girdWidth * 1.6 - 30) / GameData.stageH, 0.9375, "adunit-42c00de5dda2948e");
        var LevelUpMask = new egret.Shape();
        LevelUpMask.graphics.beginFill(0x000000, 0.8);
        LevelUpMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        LevelUpMask.graphics.endFill();
        LevelUpMask.alpha = 0.8;
        LevelUpMask.touchEnabled = true;
        var LevelUpEffect = ResourceUtils.createBitmapByName("effect_lvup_b_08_png");
        LevelUpEffect.x = GameData.stageW / 2 - LevelUpEffect.width / 2;
        LevelUpEffect.y = GameData.girdWidth + 20;
        this.addChild(LevelUpMask);
        this._mcData = RES.getRes("effect_lvup_json");
        this._mcTexture = RES.getRes("effect_lvup_png");
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(this._mcData, this._mcTexture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var mc1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("level_up_a"));
        var mc2 = new egret.MovieClip(mcDataFactory.generateMovieClipData("level_up_b"));
        mc1.x = mc2.x = GameData.stageW / 2 - LevelUpEffect.width / 2;
        mc1.y = mc2.y = GameData.girdWidth + 20;
        this.addChild(mc2); //a上层，b下层
        this.addChild(mc1);
        //添加播放完成事件
        mc1.addEventListener(egret.Event.COMPLETE, function () {
            // egret.log("1,COMPLETE");
            this.removeChild(mc1);
        }, this);
        // //添加循环播放完成事件
        // mc1.addEventListener(egret.Event.LOOP_COMPLETE, function (){
        //     egret.log("1,LOOP_COMPLETE");
        // }, this);
        //  //添加播放完成事件
        // mc2.addEventListener(egret.Event.COMPLETE, function (){
        //     egret.log("2,COMPLETE");
        //     mc2.gotoAndStop(8);
        // }, this);
        // //添加循环播放完成事件
        // mc2.addEventListener(egret.Event.LOOP_COMPLETE, function (){
        //     egret.log("2,LOOP_COMPLETE");
        // }, this);
        //播放升级动画
        // mc1.gotoAndStop(4);
        mc1.gotoAndPlay(1);
        mc1.addEventListener(egret.MovieClipEvent.FRAME_LABEL, function (e) {
            // //console.log(e.type,e.frameLabel, mc1.currentFrame);//frame_label @fall 6
            mc2.gotoAndPlay(1);
        }, this);
        // mc1.play();
        var currentLevelLabel = new egret.TextField();
        currentLevelLabel.text = GameData.currentLevel.toString();
        currentLevelLabel.width = GameData.girdWidth * 3 / 4;
        currentLevelLabel.x = LevelUpEffect.x + LevelUpEffect.width / 2 - currentLevelLabel.width / 2;
        currentLevelLabel.y = LevelUpEffect.y + LevelUpEffect.height * 0.44 - currentLevelLabel.height / 2;
        currentLevelLabel.fontFamily = "黑体";
        if (GameData.currentLevel <= 100) {
            currentLevelLabel.size = 40;
        }
        else {
            currentLevelLabel.size = 32;
        }
        currentLevelLabel.textColor = 0x2F8ED1;
        currentLevelLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(currentLevelLabel);
        var newMap = "";
        var str = "";
        if (GameData.currentLevel < 10) {
            switch (GameData.currentLevel) {
                case 2:
                    newMap = "14、15";
                    break;
                case 3:
                    newMap = "2、3";
                    break;
                case 4:
                    newMap = "18、19";
                    break;
                case 5:
                    newMap = "1、4";
                    break;
                case 6:
                    newMap = "5、8";
                    break;
                case 7:
                    newMap = "9、12";
                    break;
                case 8:
                    newMap = "13、16";
                    break;
                case 9:
                    newMap = "17、20";
                    break;
            }
            str = "解锁：                \n\n1，第" + newMap + "地块\n";
        }
        else {
            if (GameData.currentLevel == 11) {
                str = "解锁：\n\n1，所有地块都已经解锁\n2，解锁黄金农场背景";
            }
            else if (GameData.currentLevel == 21) {
                str = "解锁：\n\n1，所有地块都已经解锁\n2，解锁塞北雪乡背景";
            }
            else if (GameData.currentLevel == 31) {
                str = "解锁：\n\n1，所有地块都已经解锁\n2，解锁缤纷小镇背景";
            }
            else if (GameData.currentLevel == 41) {
                str = "解锁：\n\n1，所有地块都已经解锁\n2，解锁不夜之城背景";
            }
            else {
                str = "解锁：\n\n1，所有地块都已经解锁\n";
            }
        }
        var LevelUpLabel = new egret.TextField();
        LevelUpLabel.text = str;
        LevelUpLabel.width = GameData.stageW / 2;
        LevelUpLabel.x = GameData.stageW / 2 - LevelUpLabel.width / 2;
        LevelUpLabel.y = LevelUpEffect.y + LevelUpEffect.height * 3 / 4;
        LevelUpLabel.fontFamily = "黑体";
        LevelUpLabel.size = 30;
        LevelUpLabel.textColor = 0xFFFFFF;
        LevelUpLabel.textAlign = egret.HorizontalAlign.CENTER;
        // this.addChild(LevelUpLabel);//不加了
        var getBtn = ResourceUtils.createBitmapByName("lvup_obtain_png");
        getBtn.x = GameData.stageW / 2 - getBtn.width / 2;
        getBtn.y = GameData.stageH - GameData.girdWidth * 1.575 * 1.8 - getBtn.height;
        getBtn.touchEnabled = true;
        getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
        var LevelUpProfitTextLabel = new egret.TextField();
        LevelUpProfitTextLabel.text = "升级福利";
        LevelUpProfitTextLabel.width = GameData.girdWidth * 5 / 4;
        LevelUpProfitTextLabel.height = GameData.girdWidth / 3;
        LevelUpProfitTextLabel.x = GameData.stageW / 2 - LevelUpLabel.width / 2;
        LevelUpProfitTextLabel.y = getBtn.y - LevelUpProfitTextLabel.height - 30;
        LevelUpProfitTextLabel.fontFamily = "黑体";
        LevelUpProfitTextLabel.size = 35;
        LevelUpProfitTextLabel.textColor = 0xFFE974;
        LevelUpProfitTextLabel.textAlign = egret.HorizontalAlign.LEFT;
        // this.addChild(LevelUpProfitTextLabel);
        var LevelUpCoin = ResourceUtils.createBitmapByName("ui_money_total_png");
        LevelUpCoin.x = LevelUpProfitTextLabel.x + LevelUpProfitTextLabel.width + 20;
        LevelUpCoin.x = getBtn.x;
        LevelUpCoin.y = LevelUpProfitTextLabel.y - (LevelUpCoin.height - LevelUpProfitTextLabel.height) / 2;
        // LevelUpCoin.width = LevelUpCoin.height =  LevelUpProfitTextLabel.height;
        this.addChild(LevelUpCoin);
        //奖励玩家当前可购买最大的房子金币*2
        var availableBuyHouseGrade = 1;
        if (GameData.maxHouseGrade >= 4) {
            availableBuyHouseGrade = GameData.maxHouseGrade - 2;
        }
        else {
            availableBuyHouseGrade = 1;
        }
        this.levelUpProfit = CommonFuction.cheng(GameData.buyHouseConfigArray[availableBuyHouseGrade - 1].coinNum, 2);
        var LevelUpProfitLabel = new egret.TextField();
        LevelUpProfitLabel.text = CommonFuction.numZero(this.levelUpProfit);
        LevelUpProfitLabel.width = GameData.girdWidth * 2;
        LevelUpProfitLabel.height = GameData.girdWidth / 3;
        LevelUpProfitLabel.x = LevelUpCoin.x + LevelUpCoin.width + 20;
        LevelUpProfitLabel.y = getBtn.y - LevelUpProfitLabel.height - 28;
        LevelUpProfitLabel.fontFamily = "黑体";
        LevelUpProfitLabel.size = 35;
        // LevelUpProfitLabel.textColor = 0xFFE974;
        LevelUpProfitLabel.textColor = 0xFFFFFF;
        LevelUpProfitLabel.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(LevelUpProfitLabel);
        var waitTime = 0;
        if (!GameLogic.closeShare) {
            this.addChild(getBtn);
            waitTime = 3000;
        }
        else {
            waitTime = 500;
        }
        var closeBtn = new egret.TextField();
        closeBtn.width = getBtn.width;
        closeBtn.text = "跳过";
        closeBtn.textAlign = egret.HorizontalAlign.CENTER;
        closeBtn.fontFamily = "黑体";
        closeBtn.size = 36;
        closeBtn.textColor = 0Xffffff;
        closeBtn.x = getBtn.x;
        closeBtn.y = getBtn.y + getBtn.height + 40;
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closePanel, this);
        this._idTimeout = egret.setTimeout(function () {
            this.addChild(closeBtn);
        }, this, waitTime);
    };
    LevelUpPanel.prototype.share = function () {
        platform.share("key=welcome");
        egret.localStorage.setItem("luTime", new Date().getTime().toString());
    };
    LevelUpPanel.prototype.getLevelUpProfit = function () {
        // console.log("获取升级金币");
        this.closePanel();
        // console.log(this.levelUpProfit);
        GameData.coin = CommonFuction.jia(this.levelUpProfit, GameData.coin.toString());
        egret.localStorage.removeItem("luTime");
        this.bannerAd.destroy();
    };
    LevelUpPanel.prototype.getProfitNum = function () {
        return this.levelUpProfit;
    };
    LevelUpPanel.prototype.closePanel = function () {
        //console.log("关闭城市升级面板");
        SoundUtils.instance().playCloseSound();
        egret.clearTimeout(this._idTimeout);
        while (this.numChildren) {
            this.removeChildAt(0);
        }
        this.bannerAd.destroy();
    };
    return LevelUpPanel;
}(egret.Sprite));
__reflect(LevelUpPanel.prototype, "LevelUpPanel");
var NewHousePanel = (function (_super) {
    __extends(NewHousePanel, _super);
    function NewHousePanel(elementLayer) {
        var _this = _super.call(this) || this;
        /**--------------------------新房子弹窗-------------------------------------------------------- */
        _this._newHousePanel = new egret.Sprite();
        _this._layer = elementLayer;
        return _this;
    }
    NewHousePanel.prototype.getNewHosuePanel = function (grade) {
        // console.log("打开新房子面板");
        this.bannerAd = platform.showBannerAD(20 / GameData.stageW, (GameData.stageH - GameData.girdWidth * 1.6 - 20) / GameData.stageH, 0.9375, "adunit-155e6e7e9650473b");
        this._layer.addChild(this._newHousePanel);
        var newHouseBase = ResourceUtils.createBitmapByName("newhouses_base_png");
        newHouseBase.x = GameData.stageW / 2 - newHouseBase.width / 2;
        newHouseBase.y = GameData.startY - newHouseBase.height / 2;
        var newHouseMask = new egret.Shape();
        newHouseMask.graphics.beginFill(0x000000, 0.8);
        newHouseMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        newHouseMask.graphics.endFill();
        newHouseMask.alpha = 0.8;
        newHouseMask.touchEnabled = true;
        var houseNameLabel = new egret.TextField();
        houseNameLabel.text = GameData.availableBuyHouseArr[grade - 1].housename;
        houseNameLabel.textAlign = egret.HorizontalAlign.CENTER;
        houseNameLabel.fontFamily = "黑体";
        houseNameLabel.size = 30;
        houseNameLabel.textColor = 0XFFFFFF;
        houseNameLabel.width = 200;
        houseNameLabel.x = GameData.stageW / 2 - houseNameLabel.width / 2;
        houseNameLabel.y = newHouseBase.y + newHouseBase.height * 0.6;
        var mcData = RES.getRes("newhouse_json");
        var mcTexture = RES.getRes("newhouse_png");
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        var mc = new egret.MovieClip(mcDataFactory.generateMovieClipData("newhouse"));
        mc.x = GameData.stageW / 2 - 200;
        mc.y = GameData.stageH / 2 - 300;
        var newHouse = ResourceUtils.createBitmapByName("house#houses_a_" + this.addPreZero(grade) + "_big");
        newHouse.width = newHouse.height = 200;
        newHouse.x = GameData.stageW / 2 - newHouse.width / 2;
        newHouse.y = mc.y + mc.height / 2 - newHouse.height / 2 - 40;
        //房子等级
        var houseLevelLabel = new egret.TextField();
        houseLevelLabel.text = "LV " + grade.toString();
        houseLevelLabel.textAlign = egret.HorizontalAlign.CENTER;
        houseLevelLabel.fontFamily = "黑体";
        houseLevelLabel.size = 30;
        houseLevelLabel.textColor = 0Xffffff;
        houseLevelLabel.width = newHouse.width;
        houseLevelLabel.x = newHouse.x;
        houseLevelLabel.y = newHouse.y + newHouse.height + 5;
        var shareBtn = ResourceUtils.createBitmapByName("lvup_obtain_png");
        shareBtn.x = GameData.stageW / 2 - shareBtn.width / 2;
        shareBtn.y = GameData.stageH - GameData.girdWidth * 1.575 * 1.8 - shareBtn.height;
        shareBtn.touchEnabled = true;
        shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
        var newHouseCoin = ResourceUtils.createBitmapByName("ui_money_total_png");
        newHouseCoin.x = shareBtn.x - newHouseCoin.width / 2;
        newHouseCoin.y = shareBtn.y - newHouseCoin.height - 50;
        this.housePrice = GameData.houseDownArr[GameData.maxHouseGrade].first_synthesis;
        var newHouseCoinLabel = new egret.TextField();
        newHouseCoinLabel.text = "X" + CommonFuction.numZero(this.housePrice);
        newHouseCoinLabel.textAlign = egret.HorizontalAlign.LEFT;
        newHouseCoinLabel.fontFamily = "黑体";
        newHouseCoinLabel.size = 48;
        newHouseCoinLabel.textColor = 0Xffffff;
        newHouseCoinLabel.x = newHouseCoin.x + newHouseCoin.width + 10;
        newHouseCoinLabel.y = newHouseCoin.y;
        var closeBtn = new egret.TextField();
        closeBtn.width = shareBtn.width;
        closeBtn.text = "跳过";
        closeBtn.textAlign = egret.HorizontalAlign.CENTER;
        closeBtn.fontFamily = "黑体";
        closeBtn.size = 36;
        closeBtn.textColor = 0Xffffff;
        closeBtn.x = shareBtn.x;
        closeBtn.y = shareBtn.y + shareBtn.height + 60;
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeNewHousePanel, this);
        this._newHousePanel.addChild(newHouseMask);
        this._newHousePanel.addChild(newHouseBase);
        this._newHousePanel.addChild(houseNameLabel);
        this._newHousePanel.addChild(mc);
        mc.gotoAndPlay(1, -1);
        this._newHousePanel.addChild(newHouse);
        this._newHousePanel.addChild(houseLevelLabel);
        var waitTime = 0;
        if (!GameLogic.closeShare) {
            this._newHousePanel.addChild(shareBtn);
            waitTime = 3000;
        }
        else {
            waitTime = 500;
        }
        this._newHousePanel.addChild(newHouseCoin);
        this._newHousePanel.addChild(newHouseCoinLabel);
        this._idTimeout = egret.setTimeout(function () {
            this._newHousePanel.addChild(closeBtn);
        }, this, waitTime);
    };
    NewHousePanel.prototype.closeNewHousePanel = function () {
        // console.log("关闭新房子面板")
        SoundUtils.instance().playCloseSound();
        egret.clearTimeout(this._idTimeout);
        while (this._newHousePanel.numChildren) {
            this._newHousePanel.removeChildAt(0);
        }
        this._layer.removeChild(this._newHousePanel);
        GameData.newHouse = false;
        var event = new ElementViewManageEvent(ElementViewManageEvent.CLOSE_NEW_HOUSE_PANEL);
        var res = this.dispatchEvent(event);
        // console.log(res);
        // console.log(event);
        this.bannerAd.destroy();
    };
    NewHousePanel.prototype.share = function () {
        //console.log("新房子分享")
        platform.share("key=house");
        egret.localStorage.setItem("nhTime", new Date().getTime().toString());
    };
    NewHousePanel.prototype.addProfit = function () {
        // console.log("新房子获取收益");
        // console.log(this.housePrice);		
        GameData.coin = CommonFuction.jia(this.housePrice, GameData.coin.toString());
        this.closeNewHousePanel();
        // SoundUtils.instance().playCloseSound();
        // egret.clearTimeout(this._idTimeout);
        // while(this._newHousePanel.numChildren){
        //     this._newHousePanel.removeChildAt(0);
        // }
        // this.removeChild(this._newHousePanel);
        egret.localStorage.removeItem("nhTime");
    };
    NewHousePanel.prototype.getProfitNum = function () {
        return this.housePrice;
    };
    /**
     * 数字补零
     */
    NewHousePanel.prototype.addPreZero = function (num) {
        return ('00' + num).slice(-3);
    };
    return NewHousePanel;
}(egret.EventDispatcher));
__reflect(NewHousePanel.prototype, "NewHousePanel");
var PropView = (function (_super) {
    __extends(PropView, _super);
    function PropView(type) {
        var _this = _super.call(this) || this;
        _this._type = 0; //道具类型
        _this.id = -1;
        _this._type = type;
        _this.init();
        return _this;
    }
    Object.defineProperty(PropView.prototype, "proptype", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    PropView.prototype.init = function () {
        this.createView();
        this.addChild(this._view_active);
        this.setFocus(true);
    };
    PropView.prototype.createView = function () {
        this.touchEnabled = true;
        var _interval = 15;
        var _width = (GameData.stageW - _interval * 6) / 5;
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        if (!this._view_active) {
            var grow = new egret.GlowFilter(0xffffff, 1, 10, 10, 10);
            this._view_active = new egret.Bitmap();
            this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            switch (this._type) {
                case 0:
                    this._view_active.width = girdWidth;
                    this._view_active.height = girdWidth;
                    // this._view_active.filters = [grow];		
                    this._view_active.x = 20;
                    this._view_active.y = GameData.stageH - this._view_active.height - 10;
                    var userInfo = platform.getUserInfo(20, GameData.stageH - GameData.girdWidth - 10, GameData.girdWidth, GameData.girdWidth);
                    // console.log(userInfo);
                    break;
                case 1:
                    this._view_active.width = girdWidth * 0.6;
                    this._view_active.height = girdWidth * 0.6;
                    // this._view_active.x = 20 +this._view_active.width/2 -5;
                    // this._view_active.filters = [grow];	
                    this._view_active.x = 20;
                    this._view_active.y = GameData.stageH - this._view_active.height - girdWidth - 30;
                    break;
                case 2:
                    // this._view_active.width = girdWidth*1.575;
                    // this._view_active.height = girdWidth*1.575;
                    this._view_active.x = GameData.stageW / 2 - this._view_active.width / 2;
                    this._view_active.y = GameData.stageH - this._view_active.height;
                    var mcData = RES.getRes("hitbox_json");
                    var mcTexture = RES.getRes("hitbox_png");
                    //创建动画工厂
                    var mcDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
                    //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
                    this.mc1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("hitbox_a"));
                    this.mc2 = new egret.MovieClip(mcDataFactory.generateMovieClipData("hitbox_b"));
                    this.mc2.x = this.mc1.x = GameData.stageW / 2 - this._view_active.width / 2;
                    ;
                    this.mc2.y = this.mc1.y = GameData.stageH - this._view_active.height;
                    //添加播放完成事件
                    this.mc1.addEventListener(egret.Event.COMPLETE, function () {
                        // egret.log("1,COMPLETE");
                        this.removeChild(this.mc1);
                        this.addChild(this.mc2);
                        this.mc2.gotoAndPlay(1);
                    }, this);
                    break;
                case 3:
                    this._view_active.width = girdWidth * 0.93;
                    this._view_active.height = girdWidth * 0.966;
                    this._view_active.x = GameData.stageW - 20 - this._view_active.width;
                    this._view_active.y = GameData.stageH - this._view_active.height - 10;
                    break;
                case 4:
                    this._view_active.width = girdWidth * 0.758;
                    this._view_active.height = girdWidth * 0.766;
                    this._view_active.x = GameData.stageW - 20 - this._view_active.width;
                    this._view_active.y = GameData.stageH - this._view_active.height - girdWidth * 0.966 - 20;
                    break;
            }
        }
        // console.log(this._view_active.x);
        // console.log(this._view_active.y);
    };
    PropView.prototype.getActivateTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "ui_ranking_png";
                break;
            case 1:
                textureName = "ui_sound_open_png";
                break;
            case 2:
                textureName = "ui_bigbox_hit_01_png";
                break;
            case 3:
                textureName = "ui_shop_png";
                break;
            case 4:
                textureName = "ui_map_png";
                break;
        }
        return textureName;
    };
    PropView.prototype.setFocus = function (val) {
        if (val) {
            this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
        }
        else {
            // this._view_active.texture = RES.getRes(this.getDisableTexture(this._type));
            if (this._type == 1) {
                this._view_active.texture = RES.getRes("ui_sound_close_png");
            }
        }
    };
    PropView.prototype.setPlayTime = function (playTimes) {
        if (this._type == 2) {
            this.addChild(this.mc1);
            // console.log(this.mc1.frameRate);
            if (!this.mc1.isPlaying) {
                this.mc1.gotoAndPlay(2, playTimes);
            }
            else {
                this.mc1.frameRate++;
            }
        }
    };
    PropView.prototype.ResetMcFrameRate = function () {
        // egret.log("重置mc1的播放速度");
        this.mc1.frameRate = 18;
    };
    return PropView;
}(egret.Sprite));
__reflect(PropView.prototype, "PropView");
var PropViewManage = (function () {
    function PropViewManage(root) {
        this._currentID = -1;
        this._voice = true;
        this.isdisplay = false;
        this._layer = root;
        this.init();
    }
    PropViewManage.prototype.init = function () {
        this._props = new Array();
        // this.testdata();
        this.createData();
        // this.createTimerBg();
    };
    /**
     * 生成道具栏
     */
    PropViewManage.prototype.createData = function () {
        for (var i = 0; i < 5; i++) {
            var prop = new PropView(i);
            if (i == 0 || i == 1) {
                this._layer.addChild(prop);
            }
            this._props.push(prop);
            prop.id = i;
            prop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
        }
    };
    PropViewManage.prototype.createRank = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var rank = new egret.Bitmap();
        rank.texture = RES.getRes("ui_ranking_png");
        rank.width = girdWidth;
        rank.height = girdWidth;
        rank.x = 20;
        rank.y = GameData.stageH - rank.height - 10;
        this._layer.addChild(rank);
        rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    PropViewManage.prototype.createVoice = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var voice = new egret.Bitmap();
        voice.texture = RES.getRes("ui_sound_open_png");
        voice.width = girdWidth * 0.6;
        voice.height = girdWidth * 0.6;
        voice.x = 20 + voice.width / 2 - 5;
        voice.y = GameData.stageH - voice.height - girdWidth - 30;
        this._layer.addChild(voice);
        voice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    PropViewManage.prototype.createBox = function () {
        //console.log("添加底部箱子：")
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var box = new egret.Bitmap();
        box.texture = RES.getRes("ui_bigbox_hit_png");
        box.width = girdWidth * 1.575;
        box.height = girdWidth * 1.575;
        box.x = GameData.stageW / 2 - box.width / 2;
        box.y = GameData.stageH - box.height;
        this._layer.addChild(box);
        box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    PropViewManage.prototype.createShop = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var shop = new egret.Bitmap();
        shop.texture = RES.getRes("ui_shop_png");
        shop.width = girdWidth * 0.93;
        shop.height = girdWidth * 0.966;
        shop.x = GameData.stageW - 20 - shop.width;
        shop.y = GameData.stageH - shop.height - 10;
        this._layer.addChild(shop);
        shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    PropViewManage.prototype.createRecycle = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var recycle = new egret.Bitmap();
        recycle.texture = RES.getRes("ui_recycle_png");
        recycle.width = girdWidth * 0.6;
        recycle.height = girdWidth * 0.708;
        recycle.x = GameData.stageW - 10 - recycle.width * 3 / 2;
        recycle.y = GameData.stageH - recycle.height - girdWidth * 1.21;
        this._layer.addChild(recycle);
        recycle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
    };
    PropViewManage.prototype.createTimerBg = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var timerBg = new egret.Bitmap();
        timerBg.texture = RES.getRes("ui_time_base_png");
        timerBg.width = girdWidth / 3;
        timerBg.height = girdWidth / 3;
        timerBg.x = 110 * 3 + 15;
        timerBg.y = GameData.stageH - 110 - 20;
        this._layer.addChild(timerBg);
    };
    /**
     * 处理道具被点击事件
     */
    PropViewManage.prototype.click = function (evt) {
        console.log(this._currentID);
        console.log(evt.currentTarget.id);
        // //console.log(this._voice );
        // if(this._currentID!=-1){
        //     if(this._currentID ==(<PropView>evt.currentTarget).id && this._currentID != 1){
        //         this._currentID=-1;
        //         PropViewManage.propType=-1;                
        //     } else{
        //         SoundUtils.instance().playClickSound();
        //         this._currentID =(<PropView>evt.currentTarget).id;
        //         if(this._currentID == 1){
        //                 if (this._voice == true){
        //                 this._voice  = false;
        //                 this._props[1].setFocus(false);
        //                 GameData.closeBgMusic = true;
        //                 GameData.closeMusic = true;
        //             }else{
        //                 this._voice  = true;                  
        //                 this._props[1].setFocus(true);
        //                 GameData.closeBgMusic = false;
        //                 GameData.closeMusic = false;                
        //                 SoundUtils.instance().playCloseSound();  
        //             }
        //         }
        //         PropViewManage.propType = this._props[this._currentID].proptype;
        //         if(PropViewManage.propType == 0){
        //             this.openRanking();
        //         }else{                        
        //             let pl:PropLogic = new PropLogic();
        //             pl.useProp(PropViewManage.propType);//操作数据
        //         }
        //     }
        //     this._currentID=-1;
        // }else{
        var pl = new PropLogic();
        SoundUtils.instance().playClickSound();
        this._currentID = evt.currentTarget.id;
        if (this._currentID == 1) {
            if (this._voice == true) {
                this._voice = false;
                this._props[1].setFocus(false);
                GameData.closeBgMusic = true;
                GameData.closeMusic = true;
            }
            else {
                this._voice = true;
                this._props[1].setFocus(true);
                GameData.closeBgMusic = false;
                GameData.closeMusic = false;
                SoundUtils.instance().playCloseSound();
            }
        }
        PropViewManage.propType = this._props[this._currentID].proptype;
        if (PropViewManage.propType == 0) {
            this.openRanking();
        }
        else {
            pl.useProp(PropViewManage.propType); //操作数据
        }
        // }
    };
    PropViewManage.prototype.openRanking = function () {
        //console.log("点击排行榜");
        SoundUtils.instance().playClickSound();
        // let openDataContext = wx.getOpenDataContext();
        var platform = window.platform;
        var score = CommonFuction.jia(GameData.coin, GameData.cost);
        platform.setUserCloudStorage([{ key: "score", value: CommonFuction.numZero(score) + "" }]); //将总资产上传到云
        this.rankingContainer = new egret.Sprite();
        this.rankingContainer.width = GameData.stageW * 0.98;
        this.rankingContainer.height = this.rankingContainer.width * 1.5;
        // rankingContainer.x = GameData.stageW*0.1;
        // rankingContainer.y = (GameData.stageH - GameData.stageW*1.5)/2;
        //console.log("打开排行榜");
        //处理遮罩，避免开放数据域事件影响主域。
        this.rankingListMask = new egret.Shape();
        this.rankingListMask.graphics.beginFill(0x000000, 1);
        this.rankingListMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        this.rankingListMask.graphics.endFill();
        this.rankingListMask.alpha = 0.5;
        this.rankingListMask.touchEnabled = true;
        this._layer.stage.addChild(this.rankingContainer);
        this.rankingContainer.addChild(this.rankingListMask);
        // this.rankingBase = new egret.Bitmap();
        // this.rankingBase = ResourceUtils.createBitmapByName("ranking_base_png");
        // this.rankingBase.width =  GameData.stageW*0.98;
        // this.rankingBase.height = this.rankingBase.width*1.5;
        // this.rankingBase.x = (GameData.stageW-this.rankingBase.width)/2;
        // this.rankingBase.y = (GameData.stageH-this.rankingBase.height)/2;
        // this.rankingContainer.addChild(this.rankingBase);
        // this.closeBtn = ResourceUtils.createBitmapByName("ranking_close_png");
        // this.closeBtn.touchEnabled = true;
        // this.closeBtn.x = GameData.stageW - this.closeBtn.width*2 -5;
        // this.closeBtn.y = (1136 - GameData.stageW*1.5) + GameData.stageW*1.5*0.038 +5;
        this.closeBtn = new egret.Shape();
        this.closeBtn.width = GameData.girdWidth;
        this.closeBtn.height = GameData.girdWidth;
        this.closeBtn.graphics.beginFill(0x000000, 0);
        var x = GameData.stageW - GameData.stageW * 0.01 - this.closeBtn.width - 5;
        var y = (1136 - GameData.stageW * 1.5) + GameData.stageW * 1.5 * 0.038 - 5;
        this.closeBtn.graphics.drawRect(x, y, this.closeBtn.width, this.closeBtn.height);
        this.closeBtn.graphics.endFill();
        this.closeBtn.touchEnabled = true;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeRanking, this);
        // this.ranking = platform.openDataContext.createDisplayObject(null, GameData.stageW,GameData.stageH);
        // this.rankingContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
        // this.rankingContainer.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        // this.rankingContainer.addChild(this.ranking);
        var bitmapdata_1 = new egret.BitmapData(window["sharedCanvas"]);
        bitmapdata_1.$deleteSource = false;
        var texture = new egret.Texture();
        texture._setBitmapData(bitmapdata_1);
        this.bitmap = new egret.Bitmap(texture);
        this.bitmap.width = GameData.stageW;
        this.bitmap.height = GameData.stageH;
        // this._layer.stage.addChild(this.bitmap);
        // this._layer.stage.addChild(this.closeBtn);
        this.rankingContainer.addChild(this.bitmap);
        this.rankingContainer.addChild(this.closeBtn);
        //主域向子域发送自定义消息
        this.isdisplay = true;
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            text: 'hello',
            year: (new Date()).getFullYear(),
            command: "open"
        });
        //主要示例代码结束        
    };
    PropViewManage.prototype.closeRanking = function () {
        //console.log("关闭排行榜");
        SoundUtils.instance().playCloseSound();
        var platform = window.platform;
        if (this.isdisplay) {
            // this.ranking.parent && this.ranking.parent.removeChild(this.ranking);
            // this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            // this.rankingBase.parent && this.rankingBase.parent.removeChild(this.rankingBase);
            this.closeBtn.parent && this.closeBtn.parent.removeChild(this.closeBtn);
            this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap);
            while (this.rankingContainer.numChildren) {
                this.rankingContainer.removeChildAt(0);
            }
            this._layer.stage.removeChild(this.rankingContainer);
            this.isdisplay = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
    };
    PropViewManage.prototype.onTouchBegin = function (event) {
        //console.log("触摸排行榜");
        this.startDeltaY = event.stageY;
        //console.log("rank touchbegin:", this.startDeltaY );
    };
    PropViewManage.prototype.onTouchMove = function (event) {
        //console.log("滑动排行榜");
        var deltaY = event.stageY;
        if (this.lastDeltaY == deltaY) {
            return;
        }
        this.lastDeltaY = deltaY - this.startDeltaY; //大于0往下，小于0往上
        // if(this.lastDeltaY >= 0){//往下滑动
        //     this.lastDeltaY = this.lastDeltaY;
        // }else{//往上滑动
        //     this.lastDeltaY = -1*this.lastDeltaY;
        // }
        //console.log("rank touchmove startDeltaY:", this.startDeltaY);
        //console.log("rank touchmove nowDeltalY:", deltaY);
        //console.log("rank touchmove:",  this.lastDeltaY);
        var platform = window.platform;
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            moveY: this.lastDeltaY,
            year: (new Date()).getFullYear(),
            command: "paging"
        });
    };
    PropViewManage.propType = -1; //道具类型
    return PropViewManage;
}());
__reflect(PropViewManage.prototype, "PropViewManage");
var RecyclePanel = (function (_super) {
    __extends(RecyclePanel, _super);
    function RecyclePanel() {
        return _super.call(this) || this;
    }
    RecyclePanel.prototype.show = function () {
        //console.log("显示回收面板");
        this.recyclePanel = new egret.Shape();
        this.deletePanel = new egret.Shape();
        this.recyclePanel.width = GameData.stageW;
        this.recyclePanel.height = this.recyclePanel.width * 0.4;
        this.recyclePanel.x = 0;
        this.recyclePanel.y = GameData.stageH - this.recyclePanel.height;
        this.deletePanel.graphics.beginFill(0xFF5A49);
        this.deletePanel.graphics.drawRect(0, this.recyclePanel.y, this.recyclePanel.width, this.recyclePanel.height);
        this.deletePanel.graphics.endFill();
        this.recyclePanel.graphics.lineStyle(1, 0x666666, 1);
        this.recyclePanel.graphics.beginFill(0xFF9B26);
        this.recyclePanel.graphics.drawRect(0, 0, this.recyclePanel.width, this.recyclePanel.height);
        this.recyclePanel.graphics.endFill();
        // this.addChild(this.recyclePanel);
        // this.addChild(this.deletePanel);
        this.recyclePanel.mask = this.deletePanel;
        var recycleIcon = ResourceUtils.createBitmapByName("ui_recycle_new_png");
        recycleIcon.x = (this.recyclePanel.width - recycleIcon.width) / 2;
        recycleIcon.y = this.recyclePanel.y + this.recyclePanel.height / 2 - recycleIcon.height / 2;
        // this.addChild(recycleIcon);
        var mcData = RES.getRes("hitbox_json");
        var mcTexture = RES.getRes("hitbox_png");
        //创建动画工厂
        var mcDataFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
        //创建 MovieClip，将工厂生成的 MovieClipData 传入参数
        this.mc1 = new egret.MovieClip(mcDataFactory.generateMovieClipData("del"));
        var delBox = new egret.Bitmap();
        delBox.texture = RES.getRes("ui_bigbox_hit_01_png");
        this.mc1.x = GameData.stageW / 2 - delBox.width / 2;
        ;
        this.mc1.y = GameData.stageH - delBox.height;
        this.addChild(this.mc1);
        this.mc1.gotoAndPlay(1);
    };
    RecyclePanel.prototype.setMask = function (set) {
        if (set === void 0) { set = true; }
        if (set) {
            //console.log("显示回收面板遮罩");    
            this.recyclePanel.mask = this.deletePanel;
        }
        else {
            //console.log("撤销回收面板遮罩");                
            this.recyclePanel.mask = null;
        }
    };
    RecyclePanel.prototype.clear = function () {
        //console.log("清空回收面板");            
        while (this.numChildren) {
            this.removeChildAt(0);
        }
    };
    return RecyclePanel;
}(egret.Sprite));
__reflect(RecyclePanel.prototype, "RecyclePanel");
var ShopCardView = (function (_super) {
    __extends(ShopCardView, _super);
    function ShopCardView(grade) {
        var _this = _super.call(this) || this;
        _this.houseLevel = 0;
        _this.housePrcice = '0';
        _this.init();
        _this.houseLevel = grade;
        return _this;
    }
    ShopCardView.prototype.init = function () {
        this.touchEnabled = true;
        this.bitmap = new egret.Bitmap();
        this.addChild(this.bitmap);
    };
    return ShopCardView;
}(egret.Sprite));
__reflect(ShopCardView.prototype, "ShopCardView");
var WelcomeRetrunPanel = (function (_super) {
    __extends(WelcomeRetrunPanel, _super);
    function WelcomeRetrunPanel() {
        return _super.call(this) || this;
    }
    WelcomeRetrunPanel.prototype.show = function (secCoin, due) {
        //  console.log("显示欢迎回来面板")
        var panelBase = ResourceUtils.createBitmapByName("profit_base_png");
        panelBase.width = GameData.stageW * 3 / 4;
        panelBase.height = panelBase.width * 1.464;
        panelBase.x = GameData.stageW / 8;
        panelBase.y = (GameData.stageH - panelBase.height) / 2;
        this.addChild(panelBase);
        var currentTime = new Date().getTime();
        var timeDiffrent = Math.floor((currentTime - due) / 1000); //计算离线时间，单位秒
        if (timeDiffrent >= 8 * 60 * 60) {
            timeDiffrent = 8 * 60 * 60; //最多计算8小时的收益
        }
        if (GameBackGround.hTimerStatus) {
            secCoin = CommonFuction.chu(secCoin, 5);
        }
        this.profitNum = CommonFuction.cheng(secCoin, timeDiffrent.toString());
        var profit = this.numZero(this.profitNum);
        var profitLabel = new egret.TextField();
        profitLabel.text = profit;
        profitLabel.width = panelBase.width / 3 + panelBase.width / 10;
        profitLabel.x = panelBase.x + panelBase.width / 4;
        profitLabel.y = panelBase.y + panelBase.width - 3;
        profitLabel.fontFamily = "黑体";
        profitLabel.size = 50;
        profitLabel.textColor = 0xFFD7B7;
        profitLabel.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(profitLabel);
        var profitMultipLabel = new egret.TextField();
        profitMultipLabel.text = "X10";
        profitMultipLabel.width = panelBase.width / 5;
        profitMultipLabel.x = profitLabel.x + profitLabel.width + 5;
        profitMultipLabel.y = profitLabel.y;
        profitMultipLabel.fontFamily = "黑体";
        profitMultipLabel.size = 50;
        profitMultipLabel.textColor = 0xFFD83C;
        profitMultipLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(profitMultipLabel);
        var getBtn = ResourceUtils.createBitmapByName("profit_receive_png");
        getBtn.width = panelBase.width / 2;
        getBtn.height = getBtn.width * 0.3125;
        getBtn.x = panelBase.x + (panelBase.width - getBtn.width) / 2;
        getBtn.y = panelBase.y + panelBase.height - getBtn.height * 3 / 2;
        getBtn.touchEnabled = true;
        getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getProfit, this);
        if (!GameLogic.closeShare) {
            this.addChild(getBtn);
        }
        var closeBtn = ResourceUtils.createBitmapByName("ranking_close_png");
        closeBtn.x = panelBase.x + panelBase.width - closeBtn.width - 4;
        closeBtn.y = panelBase.y + 4;
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closePanel, this);
        this.addChild(closeBtn);
    };
    WelcomeRetrunPanel.prototype.getProfit = function () {
        // console.log("获取收益");
        var shareResult = platform.share("key=welcome");
        egret.localStorage.setItem("wrpTime", new Date().getTime().toString());
        // GameData.coin += this.profitNum*10;
        // this.closePanel();
        // let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.GET_PROFIT);
        // this.dispatchEvent(evt);
        // console.log(evt);
        /*
        if (share){
            let coinView = ResourceUtils.createBitmapByName("shop_money_01_png");
            coinView.x =  GameData.stageW/8+GameData.stageW*3/16;
            coinView.y = (GameData.stageH - GameData.stageW*3/4*1.464)/2;
            var txtView: egret.TextField = new egret.TextField;
            // txtView.textColor = 0xDC143C;
            txtView.textColor = 0xFFFFFF;
            txtView.text = this.numZero(this.profitNum*10);
            txtView.bold = true;
            txtView.size = 30;
            txtView.x = coinView.x +coinView.width;
            txtView.y = coinView.y;
            this.addChild(coinView);
            this.addChild(txtView);

            var twn: egret.Tween = egret.Tween.get(coinView);
            twn.wait(1000).to({ "alpha": 0.1 ,x:20,y:GameData.girdWidth -10,scaleX:1,scaleY:1}, 8000,egret.Ease.sineInOut).call(function () {
                this.removeChild(coinView);
            }, this);

            
            var twn: egret.Tween = egret.Tween.get(txtView);
            twn.wait(1000).to({ "alpha": 0.1 ,x:20+GameData.girdWidth/3,y:GameData.girdWidth -10,scaleX:1,scaleY:1}, 8000,egret.Ease.sineInOut).call(function () {
                this.removeChild(txtView);
            }, this);
        }
        */
    };
    WelcomeRetrunPanel.prototype.closePanel = function () {
        // console.log("关闭欢迎回来面板");
        while (this.numChildren) {
            this.removeChildAt(0);
        }
        egret.localStorage.removeItem("wrpTime");
    };
    WelcomeRetrunPanel.prototype.addProfit = function () {
        // console.log("增加收益")
        var profitNumString = CommonFuction.cheng(this.profitNum, '10');
        GameData.coin = CommonFuction.jia(GameData.coin, CommonFuction.cheng(this.profitNum, '10'));
    };
    WelcomeRetrunPanel.prototype.getProfitNum = function () {
        return CommonFuction.cheng(this.profitNum, '10');
    };
    /**
     * 数字去零计算
     */
    WelcomeRetrunPanel.prototype.numZero = function (num) {
        // console.log("数字去0计算"+num);
        var numString;
        if (typeof (num) == "number") {
            numString = Math.floor(num).toString();
        }
        else {
            // numString = num.split(".")[0];
            numString = num;
        }
        var numLength = numString.length;
        var zeroNumber = Math.floor((numLength - 1) / 3);
        if (zeroNumber > 0) {
            numString = numString.slice(0, -1 * zeroNumber * 3) + "." + numString.slice(numLength - zeroNumber * 3, numLength - zeroNumber * 3 + 2) + GameData.zeroConfigArr[zeroNumber - 1].company;
        }
        else {
            numString = num.toString();
        }
        return numString;
    };
    return WelcomeRetrunPanel;
}(egret.Sprite));
__reflect(WelcomeRetrunPanel.prototype, "WelcomeRetrunPanel");
;window.Main = Main;