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
var ElementViewManageEvent = (function (_super) {
    __extends(ElementViewManageEvent, _super);
    function ElementViewManageEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        // public propToElementLocation:number = 0; //携带道具点击的元素位置,这个暂时不需要了
        _this.ele1 = 0; //第一个点击的元素
        _this.ele2 = 0; //第二个点击的元素
        return _this;
    }
    ElementViewManageEvent.TAP_TWO_ELEMENT = "tap_two_element";
    ElementViewManageEvent.REMOVE_ANIMATION_OVER = "remove_animation_over";
    ElementViewManageEvent.UPDATE_MAP = "update_map";
    ElementViewManageEvent.UPDATE_VIEW_OVER = "update_view_over";
    ElementViewManageEvent.LEVEL_EXP_UP = "level_exp_up"; //升级
    ElementViewManageEvent.BUY_NEW_HOUSE = "buy_new_house"; //购买新房屋
    ElementViewManageEvent.DELETE_ELEMENT_OVER = "delete_element_over"; //元素删除完毕
    ElementViewManageEvent.GAME_OVER = "game_over"; //游戏结束
    ElementViewManageEvent.USE_PROP_CLICK = "use_prop_click";
    return ElementViewManageEvent;
}(egret.Event));
__reflect(ElementViewManageEvent.prototype, "ElementViewManageEvent");
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
        console.log(GameData.scentWidth);
        console.log(GameData.scentHeight);
        //初始化Resource资源加载库
        //initiate Resource loading library
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
        //加载开放域资源
        var platform = window.platform;
        platform.openDataContext.postMessage({
            command: 'loadRes'
        });
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            console.log('输出主域点击事件');
        }, this);
    };
    /**
     * game资源组加载完成
     * game resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.groupName == "preload")) return [3 /*break*/, 4];
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
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
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
    /**
 * 创建游戏场景
 */
    Main.prototype.createGameScene = function () {
        var maskRect = new egret.Rectangle();
        maskRect.width = this.stage.stageWidth;
        maskRect.height = this.stage.stageHeight;
        maskRect.y = 0;
        this._scene = new GameSceneView();
        this._scene.y = 0;
        this._scene.width = this.stage.stageWidth;
        this._scene.height = this.stage.stageHeight;
        this._scene.mask = maskRect;
        this.addChild(this._scene);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
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
    DebugPlatform.prototype.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("打开share");
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.createUserInfoButton = function () {
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
    DebugPlatform.prototype.showAD = function () {
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
    DebugPlatform.prototype.getUserCloudStorage = function () {
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
        return _super.call(this) || this;
    }
    GameBackGround.prototype.changeBackground = function () {
        this.cacheAsBitmap = false;
        this.removeChildren();
        this.createBackGroundImage();
        this.createMapBg();
        this.createPlayerLevelBg();
        this.createCoinBg();
        this.createCoinOutputBg();
        this.createShareBg();
        this.cacheAsBitmap = true;
    };
    // private static girdBg: egret.Bitmap[] = new Array();
    //创建背景图
    GameBackGround.prototype.createBackGroundImage = function () {
        if (!this.bgImage) {
            this.bgImage = new egret.Bitmap();
        }
        this.bgImage.texture = RES.getRes(GameData.levelBackgroundImageName);
        this.bgImage.width = GameData.stageW;
        this.bgImage.height = GameData.stageH;
        this.addChild(this.bgImage);
        //前置背景图
        // console.log(GameData.levelFrontBackgroundImageName);		
        var frontbg = new egret.Bitmap();
        frontbg.texture = RES.getRes(GameData.levelFrontBackgroundImageName);
        frontbg.width = GameData.stageW;
        frontbg.height = GameData.stageH * 0.37;
        frontbg.y = GameData.stageH - frontbg.height; //居底对齐
        this.addChild(frontbg);
    };
    //创建格子地图
    GameBackGround.prototype.createMapBg = function () {
        // console.log('createMapBg');
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow; //格子宽度
        // let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60)-girdWidth*GameData.MaxColumn;
        var startY = girdWidth * 3 / 2;
        var mapbg = new egret.Bitmap(); //添加地图阴影背景
        mapbg.texture = RES.getRes("ui_blackbase_png");
        mapbg.width = GameData.stageW - 40;
        mapbg.height = girdWidth * GameData.MaxRow;
        mapbg.x = 20;
        mapbg.y = startY;
        this.addChild(mapbg);
        // console.log('addMapGird');
        var gird;
        // console.log(girdWidth);
        // console.log(GameData.stageW);
        // console.log(GameData.stageH);
        // console.log(startY);
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
                gird.width = girdWidth;
                gird.height = girdWidth * 0.6;
                gird.x = 20 + girdWidth / 5 + (girdWidth + girdWidth / 5) * t;
                gird.y = startY + 20 + girdWidth * i;
                if (GameData.mapData[i][t] != -1) {
                    gird.texture = RES.getRes("scene_01_base_small_png"); //载入地块
                }
                else {
                    gird.texture = RES.getRes("scene_01_base_small_lock_png"); //载入锁定地块						
                }
                // }
                this.addChild(gird);
            }
        }
    };
    /**
     * 创建等级显示区域背景图
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createPlayerLevelBg = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_level_png");
        bg.width = girdWidth * 0.44;
        bg.height = girdWidth * 0.53;
        bg.x = 20;
        bg.y = 30;
        // this.addChild(bg);
        var expBg = new egret.Bitmap();
        expBg.texture = RES.getRes("ui_base_count_png");
        expBg.width = girdWidth * 3;
        expBg.height = girdWidth / 3;
        expBg.x = 10 + bg.width;
        expBg.y = girdWidth * 0.375;
        console.log("等级显示背景图片" + bg.y);
        this.addChild(expBg);
    };
    /**
     * 创建金币显示区域背景图
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createCoinBg = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_money_total_png");
        bg.width = girdWidth / 3;
        bg.height = girdWidth / 3;
        bg.x = 20;
        bg.y = girdWidth - 10;
        this.addChild(bg);
        var coinBg = new egret.Bitmap();
        coinBg.texture = RES.getRes("ui_base_count_png");
        coinBg.width = girdWidth * 1.5;
        coinBg.height = girdWidth / 3;
        coinBg.x = 20 + girdWidth / 3;
        coinBg.y = bg.y;
        this.addChild(coinBg);
        // let label:egret.TextField = new egret.TextField(); 
        // label.text = "9999"; 
        // label.width =  3*girdWidth;
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
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_money_sec_png");
        bg.width = girdWidth / 3 + 5;
        bg.height = girdWidth / 3;
        bg.x = 25 + girdWidth / 3 + girdWidth * 1.5;
        bg.y = girdWidth - 10;
        this.addChild(bg);
        var secBg = new egret.Bitmap();
        secBg.texture = RES.getRes("ui_base_count_png");
        secBg.width = girdWidth * 1.5;
        secBg.height = girdWidth / 3;
        secBg.x = 30 + girdWidth * 1.5 + 2 * girdWidth / 3;
        secBg.y = bg.y;
        this.addChild(secBg);
        // let label:egret.TextField = new egret.TextField(); 
        // label.text = "9999"; 
        // label.x = 50+girdWidth*1.5+2*girdWidth/3;
        // label.y = 50+ girdWidth/2;
        // this.addChild( label );
    };
    /**
     * 创建分享两倍金币背景图
     * author:bigfoot
     * date:2018/08/18
     */
    GameBackGround.prototype.createShareBg = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_share_01_png");
        bg.width = girdWidth * 1.05;
        bg.height = girdWidth * 0.46;
        bg.x = GameData.stageW - girdWidth * 1.3;
        bg.y = girdWidth * 0.875;
        this.addChild(bg);
        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
    };
    GameBackGround.prototype.share = function () {
        platform.share();
    };
    return GameBackGround;
}(egret.Sprite));
__reflect(GameBackGround.prototype, "GameBackGround");
var GameData = (function () {
    function GameData() {
    }
    //初始化游戏数据，仅仅创建空对象
    GameData.initData = function () {
        GameData.mapData = new Array();
        for (var i = 0; i < GameData.MaxRow; i++) {
            var arr = new Array();
            GameData.mapData.push(arr);
            for (var t = 0; t < GameData.MaxColumn; t++) {
                GameData.mapData[i].push(-1);
                // GameData.mapData[i][t] = -2;
            }
        }
        // console.log("初始化："+GameData.mapData)
        // console.log(GameData.mapData)
        for (var i = 0; i < 8; i++) {
            // console.log("购买次数"+this._houseBuyNubmer[i]);
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
        // console.log("舞台宽度"+GameData.stageW);
        // console.log("舞台高度"+GameData.stageH);
    };
    GameData.closeMusic = false;
    GameData.closeBgMusic = false;
    GameData.unmapnum = 0; //空白地图块数量
    GameData.levelBackgroundImageName = ""; //当前关卡背景图资源名
    GameData.levelFrontBackgroundImageName = ""; //当前关卡前置背景图资源名
    GameData.MaxRow = 5; //最大的行
    GameData.MaxColumn = 4; //最大的列
    GameData.currentElementNum = 0; //当前关卡游戏中地图可用元素数量
    GameData.girdBg = new Array(); //游戏中地图格子数组
    GameData.coin = 0; //游戏中获得的金币
    GameData.oldElements = new Array(); //用于保存上一关剩下的元素，切换新关卡时候添加
    GameData.elementTypeFirstShow = [true, true, false, false, false, false, false, false]; //元素是否第一次出现，0~7,用于第一次出现时弹出提示
    GameData.maxHouseGrade = 1; //当前房子最高等级
    GameData.houseBuyNumber = new Array(); //房子购买次数
    GameData.cost = 0; //购买房屋总花费
    GameData.curretLevel = 1; //当前关卡
    GameData.levelExp = 0; //当前关卡获得的经验值,
    GameData.levelReqExp = 0; //当前关卡过关需要的经验值,
    GameData.levelCoin = 0; //当前关卡过关奖励的金币,
    GameData.boxDownWeight = 0; //当前关卡箱子掉落权重
    GameData.giftBoxHouseGrade = 2; //当前关卡礼物箱打开房子等级
    //舞台宽高，此封装为了方便调用
    GameData.stageW = 0;
    GameData.stageH = 0;
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
        GameData.elementTypes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        GameData.levelBackgroundImageName = "scene_01_back_png";
        GameData.levelFrontBackgroundImageName = "scene_01_front_png";
        GameData.levelReqExp = val.up_exp;
        GameData.levelCoin = val.coin_num * Math.pow(10, val.coin_Base);
        GameData.boxDownWeight = Number(val.down_weight);
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
                console.log("最新数量", this.reqElements[i].num);
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
        if (GameData.curretLevel < 10) {
            mapData = mapDataArray[GameData.curretLevel - 1];
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
                        // GameData.elements[id].type = "b0";
                        GameData.elements[id].type = GameData.oldElements[0].type;
                        // GameData.elements[id].location = i*GameData.MaxRow+t;
                        if (GameData.oldElements[0].location != 0) {
                            GameData.elements[id].location = GameData.oldElements[0].location;
                            GameData.elements[id].grade = GameData.oldElements[0].grade;
                            // console.log("创建空地图old不等于0"+GameData.oldElements[0].location);
                            // console.log("创建空地图id"+id);
                            // console.log("创建空地图i:"+i);
                            // console.log("创建空地图t:"+t);
                            // console.log("创建空地图location:"+GameData.elements[id].location);	
                        }
                        else if ((GameData.oldElements[0].location == 0) && (GameData.oldElements[0].type.length !== 0)) {
                            GameData.elements[id].location = GameData.oldElements[0].location;
                            GameData.elements[id].grade = GameData.oldElements[0].grade;
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
        console.log("地图数据解析：" + GameData.mapData);
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
        console.log("点击排行榜");
    };
    PropLogic.prototype.voice = function () {
        console.log('voice:');
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
        console.log('box_in');
    };
    PropLogic.prototype.shop = function () {
    };
    PropLogic.prototype.recycle = function () {
        console.log('recycle');
    };
    return PropLogic;
}(egret.Sprite));
__reflect(PropLogic.prototype, "PropLogic");
var GameLogic = (function () {
    function GameLogic(gameStage) {
        this._gameStage = gameStage;
        platform.onShow(this.onShow, this);
        this.init();
    }
    GameLogic.prototype.init = function () {
        GameData.initData(); //初始化数据
        console.log(GameData.curretLevel);
        var mapDataArray = RES.getRes("map_data_json");
        var mapData;
        if (GameData.curretLevel < 10) {
            mapData = mapDataArray[GameData.curretLevel - 1];
        }
        else {
            mapData = mapDataArray[0];
        }
        console.log(mapData);
        var levelDataArray = RES.getRes("level_data_json"); //初始化GameData数据
        var levelData = levelDataArray[GameData.curretLevel - 1];
        console.log(levelData);
        MapDataParse.createMapData(mapData.map); //创建地图数据
        LevelGameDataParse.parseLevelGameData(levelData);
        var element = [0, 1, 2, 3, 4, 5, 6, 7];
        ElementTypeParse.creatElementTypeData(element);
        this.mapc = new MapControl();
        this.mapc.createElementAllMap();
        var gbg = new GameBackGround();
        this._gameStage.addChild(gbg);
        gbg.changeBackground();
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
        if (GameData.curretLevel == 1) {
            this.evm.showElement();
        }
        else {
            this.evm.addLastLevelElements();
            this.evm.timerToBox2();
            // this.evm.showElement();
        }
        // /注册侦听器，即指定事件由  哪个对象  的哪个方法来接受
        //下面监听的事件 只能evm 来触发
        // this.evm.addEventListener(ElementViewManageEvent.REMOVE_ANIMATION_OVER,this.removeAndOver,this);
        // this.evm.addEventListener(ElementViewManageEvent.TAP_TWO_ELEMENT,this.viewTouchTap,this);
        // this.evm.addEventListener(ElementViewManageEvent.UPDATE_MAP,this.createNewElement,this);
        // this.evm.addEventListener(ElementViewManageEvent.UPDATE_VIEW_OVER,this.checkOtherElementLink,this);
        this.evm.addEventListener(ElementViewManageEvent.LEVEL_EXP_UP, this.nextLevelTest, this);
        // this.evm.addEventListener(ElementViewManageEvent.USE_PROP_CLICK,this.usePropClick,this);
    };
    /*-----------------------------携带道具被点击--------------------------------------
    private usePropClick(evt:PropViewManageEvent)
    {
        PropLogic.useProp(PropViewManage.propType);//操作数据
        this.pvm.useProp();
        // this.removeAndOver(null);  //播放删除动画，道具如今已经改变，所以不用播放删除动画
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    GameLogic.prototype.onShow = function () {
        console.log("回到前台");
        console.log("读取数据");
        platform.getGameData("userGameData");
    };
    GameLogic.prototype.nextLevelTest = function (evt) {
        console.log('levelup监听事件成功');
        GameData.curretLevel++; //关卡数目加1
        if (GameData.curretLevel >= 100) {
            this.isGameOver();
        }
        else {
            this.clear();
            GameData.oldElements = [].concat(GameData.elements);
            this.init();
            SoundUtils.instance().playLevelUpSound(); //播放升级音效
            SoundUtils.instance().playNewLandSound(); //播放开放新地块音效
            console.log('到下一关');
        }
    };
    GameLogic.prototype.clear = function () {
        GameData.availableMapId = [];
        while (this._gameStage.numChildren) {
            this._gameStage.removeChildAt(0);
        }
    };
    /*-----------------------------视图管理器中存在两个被tap的元素，进行判断--------------------------------------
    private viewTouchTap(evt:ElementViewManageEvent){
        if (GameData.elements[evt.ele1].type ==  GameData.elements[evt.ele2].type ){//如果两个点击元素type相同，都是房子，那么检测是否可以合并
            if(GameData.elements[evt.ele1].grade ==  GameData.elements[evt.ele2].grade){//如果等级相同，那么合并
                    // console.log("消除动画");
                    this.evm.playRemoveAni(evt.ele1);
                    // this.evm.playRemoveAni(evt.ele2);
                    // console.log(evt.ele1);
                    let i = Math.floor( GameData.elements[evt.ele1].location /GameData.MaxColumn);
                    let t = GameData.elements[evt.ele1].location % GameData.MaxColumn;
                    console.log("删除的房子id:"+GameData.elements[evt.ele1].id+ "删除的房子location:"+GameData.elements[evt.ele1].location);
                    console.log("i:"+i);
                    console.log("t:"+t);
                    GameData.mapData[i][t] = -2 //删除元素后把这块格子置为-2,表示无元素
                    
                    GameData.elements[evt.ele2].grade = GameData.elements[evt.ele2].grade + 1;//合并后升级
                    this.evm.addLevelExp(GameData.elements[evt.ele2].grade);//根据新和成的房子等级加经验值
                    this.evm.showElementById(evt.ele2);
                    // console.log(GameData.elements[evt.ele2]);
                    this.isGameOver();
            }else{//如果等级不同，那么交换位置
                    this.evm.changeLocationWithScaleOrBack(evt.ele1,evt.ele2,true);
            }
        }else{

        }
        
    }
    */
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-----------------------------元素置换动画播放结束，数据操作，并播放删除动画--------------------------------------*/
    /**
     * 即将删除的元素移动结束
     * 开始搜索删除数据，并且播放删除动画
     * 更新地图数据
     * 更新其他数据
     */
    GameLogic.prototype.removeAndOver = function (evt) {
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*---------------------------所有元素都删除完毕后，创建新元素，并刷新视图---------------------------------*/
    GameLogic.prototype.createNewElement = function (evt) {
        //多次调用 问题 通过计数器 解决
        console.log("刷新地图数据！！！！！！！！");
        this.mapc.updateMapLocation();
        this.evm.updateMapData();
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-----------------------------删除动画完成后，检测地图中是否存在剩余可消除元素--------------------------------------*/
    GameLogic.prototype.checkOtherElementLink = function (evt) {
        console.log("所有动画逻辑结束");
        //检测步数和关卡数
        this.isGameOver();
    };
    GameLogic.prototype.isGameOver = function () {
        console.log("通关");
        if (!this.gameoverpanel) {
            this.gameoverpanel = new GameOverPanel();
            this._gameStage.addChild(this.gameoverpanel);
            this.gameoverpanel.show(true);
            GameData.curretLevel = 1; //当前关卡为1重新开始
            this.gameoverpanel.addEventListener(ElementViewManageEvent.GAME_OVER, this.init, this);
        }
    };
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
        _this.loadingbgUrl = "resource/res/ui/loading_base.png";
        _this.loadingBarBaseUrl = "resource/res/ui/loading_march_01.png";
        _this.loadingBarUrl = "resource/res/ui/loading_march_02.png";
        _this.loadingBarCarUrl = "resource/res/ui/loading_march_03.png";
        _this._loadingBackGround = new egret.Bitmap();
        _this._loadingBar = new egret.Bitmap();
        _this._loadingBarBase = new egret.Bitmap();
        _this._loadingBarCar = new egret.Bitmap();
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        //背景图
        var urlLoader = new egret.URLLoader();
        urlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        urlLoader.load(new egret.URLRequest(this.loadingbgUrl));
        // this._loadingBackGround.x = this._loadingBackGround.y = 0;
        this._loadingBackGround.width = this._stageWidth;
        this._loadingBackGround.height = this._stageHeight;
        //载入进度条
        var loadingBarBaseUrlLoader = new egret.URLLoader();
        loadingBarBaseUrlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        loadingBarBaseUrlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loadingBarBaseUrlLoader.load(new egret.URLRequest(this.loadingBarBaseUrl));
        var loadingBarUrlLoader = new egret.URLLoader();
        loadingBarUrlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        loadingBarUrlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loadingBarUrlLoader.load(new egret.URLRequest(this.loadingBarUrl));
        var loadingBarCarUrlLoader = new egret.URLLoader();
        loadingBarCarUrlLoader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
        loadingBarCarUrlLoader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        loadingBarCarUrlLoader.load(new egret.URLRequest(this.loadingBarCarUrl));
        this._loadingBarBase.width = this._stageWidth * 0.61;
        this._loadingBarBase.height = this._stageWidth * 0.073;
        this._loadingBarBase.x = (this._stageWidth - this._loadingBarBase.width) / 2;
        this._loadingBarBase.y = this._stageHeight * 3 / 4 - this._loadingBarBase.height;
        this._loadingBar.width = this._stageWidth * 0.61;
        this._loadingBar.height = this._stageWidth * 0.073;
        this._loadingBar.x = (this._stageWidth - this._loadingBar.width) / 2;
        this._loadingBar.y = this._stageHeight * 3 / 4 - this._loadingBar.height;
        this._loadingBarCar.x = (this._stageWidth - this._loadingBar.width) / 2;
        this._loadingBarCar.y = this._stageHeight * 3 / 4 - this._loadingBar.height * 1.78;
        var barMask = new egret.Rectangle(0, 0, 0, this._loadingBar.height);
        this._loadingBar.mask = barMask;
        //载入百分比
        this.textField = new egret.TextField();
        this.textField.x = 0;
        this.textField.y = this._stageHeight * 3 / 4 + this.textField.height + 50;
        this.textField.width = this._stageWidth;
        this.textField.height = 100;
        this.textField.textAlign = "center";
        this.textField.fontFamily = "黑体";
        this.textField.size = 30;
        this.addChild(this._loadingBackGround);
        this.addChild(this._loadingBarBase);
        this.addChild(this._loadingBar);
        this.addChild(this._loadingBarCar);
        this.addChild(this.textField);
    };
    LoadingUI.prototype.onComplete = function (e) {
        var urlLoader = e.target;
        var texture = urlLoader.data;
        if (urlLoader._request.url == this.loadingbgUrl) {
            this._loadingBackGround.texture = texture;
            console.log(this._loadingBackGround);
        }
        else if (urlLoader._request.url == this.loadingBarBaseUrl) {
            this._loadingBarBase.texture = texture;
        }
        else if (urlLoader._request.url == this.loadingBarUrl) {
            this._loadingBar.texture = texture;
        }
        else if (urlLoader._request.url == this.loadingBarCarUrl) {
            this._loadingBarCar.texture = texture;
        }
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        var barMask = new egret.Rectangle(0, 0, current / total * this._loadingBar.width, this._loadingBar.height);
        this._loadingBar.mask = barMask;
        this._loadingBarCar.x = this._loadingBar.x + current / total * this._loadingBar.width - this._loadingBarCar.width / 2;
        this.textField.text = "\u52A0\u8F7D\u4E2D..." + Math.floor((current / total) * 100) + '%';
        // this.textField.text = `加载中...${current}/${total}`;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
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
        console.log(this._status);
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
        this.bgSound = new SoundBase("bgSound");
        this.levelUpSound = new SoundBase("sound_level_up");
        this.newLandSound = new SoundBase("sound_newland");
        this.clickSound = new SoundBase("sound_click");
        this.newHouseSound = new SoundBase("sound_house_new");
        this.closeSound = new SoundBase("sound_close");
        this.mergeSound = new SoundBase("sound_house_merge");
        this.boxDownSound = new SoundBase("sound_box_down");
    };
    SoundUtils.prototype.playBg = function () {
        console.log("播放背景音乐");
        if (GameData.closeBgMusic) {
            this.bgSound.pause();
            return;
        }
        this.bgSound.play();
        this.bgSound.setLoop(-1);
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
    return SoundUtils;
}());
__reflect(SoundUtils.prototype, "SoundUtils");
var ElementView = (function (_super) {
    __extends(ElementView, _super);
    //游戏中的元素
    function ElementView(tParent) {
        var _this = _super.call(this) || this;
        _this.location = 0; //位置编号，用于提供移动使用
        _this.grade = 0; //房屋等级
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
        var bitWidth = (GameData.stageW - 40) / GameData.MaxColumn * 0.8;
        this.bitmap.width = bitWidth - 10;
        this.bitmap.height = bitWidth - 10;
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
        if (GameData.elements[this.id].type == "b0") {
            GameData.elements[this.id].grade = 1;
        }
        else if (GameData.elements[this.id].type == "b1") {
            if (GameData.elements[this.id].grade == 0) {
                GameData.elements[this.id].grade = GameData.giftBoxHouseGrade;
            }
        }
        GameData.elements[this.id].type = "0";
        this.setTexture("e" + GameData.elements[this.id].grade + "_png");
    };
    //移动到新位置,使用cubicInOut算法移动，直线运动
    ElementView.prototype.move = function () {
        //console.log("乱序移动开始！",this.id,this.location,this.targetX(),this.targetY(),this.x,this.y);
        var tw = egret.Tween.get(this);
        tw.to({ x: this.targetX(), y: this.targetY() }, this.speed, egret.Ease.cubicInOut);
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
    ElementView.prototype.addThisToParent = function () {
        if (!this.parent) {
            // console.log("元素掉落id:"+this.id);
            // console.log("元素掉落location:"+this.location);
            // console.log("元素掉落:"+this.targetX());
            // console.log("元素掉落:"+this.targetY());
            this.thisParent.addChild(this);
        }
    };
    ElementView.prototype.targetX = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var xx = 20 + girdWidth / 5 + (girdWidth + girdWidth / 5) * (this.location % GameData.MaxColumn) + girdWidth / 2 + 5;
        return xx;
    };
    ElementView.prototype.targetY = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var startY = girdWidth * 3 / 2;
        var yy = startY + girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + girdWidth / 2 - girdWidth / 4 - 10; //改为5*4后使用新定义
        return yy;
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*--------------------------------------移动并且返回-------------------------------------*/
    /*----------------------用于用户交换两个对象，但未找到能够连接消除的时候使用------------------------*/
    //移动到另外一个位置，然后再移动回来
    ElementView.prototype.moveAndBack = function (location, isScale) {
        if (isScale === void 0) { isScale = false; }
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var xx = 20 + girdWidth * (location % GameData.MaxColumn) + girdWidth / 2 + 5;
        var startY = girdWidth * 3 / 2;
        var yy = startY + girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + girdWidth / 2 - 15; //改为5*4后使用新定义
        //移动时候，不仅会移动位置，还会放到或者缩小，移动回来时，scale都设置为1
        var tw = egret.Tween.get(this);
        if (isScale) {
            tw.to({ x: xx, y: yy, scaleX: 1.2, scaleY: 1.2 }, 300, egret.Ease.cubicOut).call(this.back, this);
            ;
        }
        else {
            tw.to({ x: xx, y: yy, scaleX: 0.8, scaleY: 0.8 }, 300, egret.Ease.cubicOut).call(this.back, this);
            ;
        }
    };
    ElementView.prototype.back = function () {
        var tw = egret.Tween.get(this);
        tw.to({ x: this.targetX(), y: this.targetY(), scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicOut);
    };
    /*-----------------------------此动画用于移动元素，然后消除--------------------------------------*/
    //移动到另外一个位置，然后再返回原始的scale
    ElementView.prototype.moveAndScale = function (location, isScale) {
        if (isScale === void 0) { isScale = false; }
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn;
        var xx = 20 + girdWidth * (location % GameData.MaxColumn) + girdWidth / 2 + 5;
        var startY = girdWidth * 3 / 2;
        var yy = startY + girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + girdWidth / 2 - 15; //改为5*4后使用新定义
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
    /*-----------------此动画用于将元素移动到关卡积分器位置,然后移除显示列表----------------------------*/
    /*-------------------------删除元素，当元素不属于关卡条件时，执行此动画---------------------------------*/
    //播放直接消除动画,自己放大，然后缩回到原有大小，然后删除
    ElementView.prototype.playRemoveAni = function () {
        var tw = egret.Tween.get(this);
        tw.to({ scaleX: 1.4, scaleY: 1.4 }, 300, egret.Ease.cubicInOut).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.cubicInOut).call(this.removeAniCall, this);
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
    /*-------------------------移动到新位置，方块被消除后重新生成下落使用---------------------------------*/
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
    //根据列编号，重新计算元素X轴位置，从其实Y轴开始播放下落动画
    ElementView.prototype.moveNewLocation = function () {
        //console.log(this.id,this.parent);
        if (!this.parent) {
            var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn;
            // let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxColumn;
            var startY = girdWidth * 3 / 2;
            this.y = startY - this.width;
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
    return ElementView;
}(egret.Sprite));
__reflect(ElementView.prototype, "ElementView");
/**
 *
 */
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
        /*-----------------------------拖拽控制相关------------------------------------------------------------*/
        _this.ev = new ElementView(_this._layer);
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*-----------------------------焦点相关控制--------------------------------------*/
        _this._currentTapID = -1; //当前被点击（即将获取焦点）的元素ID，如为-1则表示没有元素获取焦点或无点击对象
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*---------------------------------定时器---------------------------------------*/
        _this._countdown = 10;
        _this.timer = new egret.Timer(1000, 0);
        _this.coinTimer = new egret.Timer(1000, 0);
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*-----------------------------动画播放控制--------------------------------------*/
        _this.moveEleNum = 0;
        _this._isDeleteOver = true;
        /**--------------------------新房子弹窗-------------------------------------------------------- */
        _this._newHousePanel = new egret.Sprite();
        /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
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
        _this._buyHouseConfigArray = RES.getRes("buy_house_config_json");
        _this._hitEv = new ElementView(_this._layer);
        /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
        /*********************************房屋商城****************************************************************************************************** */
        _this._shopContainer = new egret.Sprite();
        _this._cardScrollView = null;
        _this._cards = null;
        _this._openScrollX = 0;
        _this.moveLocElementNum = 0;
        _this._layer = elementLayer;
        _this.init();
        _this.createTimerBg();
        _this.createExpBar();
        _this.levelExpLabel();
        _this.createNumText();
        _this.createRecycle();
        platform.onHide(_this.onHide, _this);
        return _this;
    }
    /**
     * 初始化所有数据变量
     */
    ElementViewManage.prototype.init = function () {
        console.log("evm初始化");
        this.elementViews = new Array();
        var len = GameData.MaxColumn * GameData.MaxRow;
        var el;
        for (var i = 0; i < len; i++) {
            el = new ElementView(this._layer);
            el.id = i;
            el.location = GameData.elements[i].location;
            this.elementViews.push(el);
            el.evm = this; // 给ElementView用来触发 ElementViewManageEvent事件
            el.touchEnabled = true;
            // el.addEventListener(egret.TouchEvent.TOUCH_TAP,this.elTap,this);
            el.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this); //这里是房子拖拽
            el.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        }
        var hitBox = new PropView(2);
        hitBox.id = 2;
        this._layer.addChild(hitBox);
        hitBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tapTimerSpeed, this);
        var shop = new PropView(3);
        shop.id = 3;
        this._layer.addChild(shop);
        shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openShop, this);
    };
    /**
     * 倒计时背景图
     */
    ElementViewManage.prototype.createTimerBg = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var timerBg = new egret.Bitmap();
        timerBg.texture = RES.getRes("ui_time_base_png");
        timerBg.width = girdWidth / 3;
        timerBg.height = girdWidth / 3;
        timerBg.x = GameData.stageW / 2 - girdWidth * 1.575 / 2 + timerBg.width / 2;
        timerBg.y = GameData.stageH - girdWidth * 1.575 + timerBg.width / 2;
        this._layer.addChild(timerBg);
    };
    ElementViewManage.prototype.levelExpLabel = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("ui_level_png");
        bg.width = girdWidth * 0.44;
        bg.height = girdWidth * 0.53;
        bg.x = girdWidth / 6;
        bg.y = girdWidth / 4;
        this._layer.addChild(bg);
        //经验值
        this._levelExpLabel.text = "0/" + GameData.levelReqExp;
        this._levelExpLabel.width = 3 * girdWidth;
        this._levelExpLabel.x = girdWidth * 1.7;
        this._levelExpLabel.y = girdWidth * 0.375;
        this._layer.addChild(this._levelExpLabel);
        //金币值
        this._coinLabel.text = GameData.coin.toString();
        this._coinLabel.textAlign = egret.HorizontalAlign.CENTER;
        // this._coinLabel.size = 18;
        this._coinLabel.width = 1.5 * girdWidth;
        // this._coinLabel.x = 10 + girdWidth/3 +  girdWidth*1.5/2 - 5;
        this._coinLabel.x = 20 + girdWidth / 3;
        this._coinLabel.y = girdWidth - 5;
        this._layer.addChild(this._coinLabel);
        //秒产金币值
        this._coinSecLabel.text = "0";
        this._coinSecLabel.textAlign = egret.HorizontalAlign.CENTER;
        // this._coinSecLabel.size = 18;
        this._coinSecLabel.width = 1.5 * girdWidth;
        // this._coinSecLabel.x = 25+girdWidth/3+girdWidth*1.5 +girdWidth/3+5 +girdWidth*1.5/2 -5;
        this._coinSecLabel.x = 30 + girdWidth * 1.5 + 2 * girdWidth / 3;
        this._coinSecLabel.y = girdWidth - 5;
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
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        this._numText.x = GameData.stageW / 2 - girdWidth * 1.575 / 2 + girdWidth / 6 + girdWidth / 12;
        this._numText.y = GameData.stageH - girdWidth * 1.575 + girdWidth / 6 + girdWidth / 24;
        this._numText.text = "10";
        this._numText.textColor = 0xd8241b;
        this._numText.bold = true;
        // this._numText.size = 16;
        this._layer.addChild(this._numText);
        this._currentLevelNumText.x = girdWidth / 5 + girdWidth / 30;
        this._currentLevelNumText.y = girdWidth * 2 / 5;
        this._currentLevelNumText.text = "Lv" + GameData.curretLevel.toString();
        this._currentLevelNumText.textColor = 0x1C8CAD;
        this._currentLevelNumText.size = 15;
        // this._currentLevelNumText.bold = true;
        this._layer.addChild(this._currentLevelNumText);
    };
    ElementViewManage.prototype.createExpBar = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        this._expBar.width = girdWidth * 3;
        this._expBar.height = girdWidth / 3 * 0.8;
        this._expBar.x = girdWidth * 0.44 + 10 + 2;
        this._expBar.y = girdWidth * 0.375 + girdWidth / 30;
        // this._expBar.scaleX = GameData.levelExp/GameData.levelReqExp;
        this._expBar.texture = RES.getRes("ui_experience_png");
        var barMask = new egret.Rectangle(0, 0, 0, this._expBar.height);
        this._expBar.mask = barMask;
        this._layer.addChild(this._expBar);
    };
    ElementViewManage.prototype.onHide = function () {
        console.log("退出前台,上传数据");
        var i = GameData.elements.length;
        var inMapArr = new Array();
        var secCoin = this.addSecCoin();
        var maxHouseGrade = GameData.maxHouseGrade; //记录当前最大等级
        var buyHouseNumber = JSON.stringify(GameData.houseBuyNumber); //记下房屋购买次数
        // while(i > 0){
        // 	if(GameData.elements[i].location != 0){
        // 		inMapArr.push(GameData.elements[i]);
        // 	}
        // 	i--;
        // }
        inMapArr = [].concat(GameData.elements);
        var inMapArrJson = JSON.stringify(inMapArr);
        var userGameData = { "curretLevel": GameData.curretLevel, "levelExp": GameData.levelExp, "coin": this.numZero(GameData.coin), "secCoin": secCoin, "due": new Date().getTime(),
            "inMap": inMapArrJson, "maxHouseGrade": maxHouseGrade, "buyHouseNumber": buyHouseNumber, "closeMusic": GameData.closeMusic, "closeBgMusic": GameData.closeBgMusic };
        platform.postGameData("userGameData", userGameData);
    };
    ElementViewManage.prototype.mouseDown = function (evt) {
        // console.log("Mouse Down.");
        this.ev = evt.currentTarget;
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.ev.x;
        this._distance.y = evt.stageY - this.ev.y;
        // console.log("ev.id:"+this.ev.id);
        // console.log("evt.stageX:"+evt.stageX);
        if (this.ev.grade == 0) {
            // console.log("纸箱");
            // this.ev.setFocus(false);
            this.ev.openBox();
            this.ev.grade = GameData.elements[this.ev.id].grade;
            this.addLevelExp(this.ev.grade); //开箱子加经验值
            this._levelExpLabel.text = GameData.levelExp.toString() + "/" + GameData.levelReqExp.toString();
            this.showElementById(this.ev.id);
            // this._currentTapID =this. ev.id;
        }
        else {
            // console.log("不是纸箱");
        }
        this._layer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    ElementViewManage.prototype.mouseUp = function (evt) {
        // console.log("Mouse Up."+this.ev.id);
        this._touchStatus = false;
        this._layer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        this.recycleHouse(evt);
        // let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60)-girdWidth*GameData.MaxRow;
        var startY = girdWidth * 3 / 2;
        var i = Math.floor((evt.stageY - startY) / girdWidth);
        var t = Math.floor((evt.stageX - 44) / (girdWidth + 24));
        if (evt.stageY < startY || i >= GameData.MaxRow || t >= GameData.MaxColumn || i < 0 || t < 0) {
            this.ev.back();
        }
        else {
            if (GameData.mapData[i][t] != -1 && GameData.mapData[i][t] != -2) {
                // console.log(GameData.mapData[i][t]);
                var ele1 = this.ev;
                var ele2 = this.elementViews[GameData.mapData[i][t]];
                // console.log("ele1.id:"+ele1.id);
                // console.log("ele2.id:"+ele2.id);
                if (this.ev.id != ele2.id) {
                    this.elementHitTest(ele1, ele2); //不允许撞自己
                }
                else {
                    this.ev.back();
                }
            }
            else if (GameData.mapData[i][t] == -2) {
                var m = Math.floor(GameData.elements[this.ev.id].location / GameData.MaxColumn);
                var n = GameData.elements[this.ev.id].location % GameData.MaxColumn;
                GameData.mapData[i][t] = this.ev.id;
                var tempLocation = i * GameData.MaxColumn + t;
                console.log("tempLocation" + tempLocation);
                for (var l = 0; l < GameData.availableMapId.length; l++) {
                    if (GameData.elements[GameData.availableMapId[l]].location == tempLocation) {
                        console.log("id：" + GameData.availableMapId[l]);
                        GameData.elements[GameData.availableMapId[l]].location = this.ev.location;
                    }
                }
                GameData.elements[this.ev.id].location = this.ev.location = tempLocation;
                this.ev.back();
                GameData.mapData[m][n] = -2;
            }
            else {
                this.ev.back();
            }
        }
    };
    ElementViewManage.prototype.mouseMove = function (evt) {
        if (this._touchStatus) {
            this.ev.x = evt.stageX - this._distance.x;
            this.ev.y = evt.stageY - this._distance.y;
            // console.log("moving now ! Mouse: [X:"+evt.stageX+",Y:"+evt.stageY+"]");
            // console.log("moving now ! Mouse: [ev.X:"+this.ev.x+",ev.Y:"+this.ev.y+"]");
        }
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /******************************碰撞检测相关*****************************************************************/
    ElementViewManage.prototype.elementHitTest = function (ev1, ev2) {
        // console.log("ev1 id"+ev1.id);
        // console.log("ev2 id"+ev2.id);
        var isHit = ev1.hitTestPoint(ev2.targetX(), ev2.targetY());
        console.log(isHit);
        if (isHit) {
            // console.log("ev1 grade"+ev1.grade);
            // console.log("ev2 grade"+ev2.grade);
            var i = Math.floor(GameData.elements[ev1.id].location / GameData.MaxColumn);
            var t = GameData.elements[ev1.id].location % GameData.MaxColumn;
            var m = Math.floor(GameData.elements[ev2.id].location / GameData.MaxColumn);
            var n = GameData.elements[ev2.id].location % GameData.MaxColumn;
            if (GameData.elements[ev1.id].grade == GameData.elements[ev2.id].grade && GameData.elements[ev2.id].grade < GameData.elementTypes.length) {
                if (!GameData.elementTypeFirstShow[GameData.elements[ev1.id].grade]) {
                    console.log("恭喜合成新房子:" + GameData.elements[ev1.id].grade); //房子第一次出现
                    GameData.elementTypeFirstShow[GameData.elements[ev1.id].grade] = true;
                    this.getNewHosuePanel(GameData.elements[ev1.id].grade + 1);
                    GameData.maxHouseGrade = GameData.elements[ev1.id].grade + 1; //当前获得房屋最高等级
                    SoundUtils.instance().playNewHouseSound(); //播放获得新房子音效
                }
                console.log("消除动画");
                if (GameData.elements[ev1.id].type !== 'b0') {
                    this._isDeleteOver = false;
                    this.playRemoveAni(ev1.id);
                }
                // console.log("删除的房子id:"+GameData.elements[ev1.id].id+ "删除的房子location:"+GameData.elements[ev1.id].location);
                // console.log("mapData删除前的值"+GameData.mapData[i][t]);
                // console.log("i:"+i);
                // console.log("t:"+t);
                // console.log("mapData删除后的值"+GameData.mapData[i][t]);					
                GameData.elements[ev1.id].grade = 0; //删除的元素级别置为0
                GameData.elements[ev2.id].grade = GameData.elements[ev2.id].grade + 1; //合并后升级
                this.elementViews[ev1.id].grade = 0;
                this.elementViews[ev2.id].grade += 1;
                this.addLevelExp(GameData.elements[ev2.id].grade); //根据新和成的房子等级加经验值
                this._levelExpLabel.text = this._levelExpLabel.text = GameData.levelExp.toString() + "/" + GameData.levelReqExp.toString();
                // this._expBar.scaleX = GameData.levelExp/GameData.levelReqExp;
                var barMask = new egret.Rectangle(0, 0, GameData.levelExp / GameData.levelReqExp * this._expBar.width, this._expBar.height);
                this._expBar.mask = barMask;
                SoundUtils.instance().playMergeSound(); //播放合成音效
                this.showElementById(ev2.id, false);
                if (GameData.availableMapId.length == 0) {
                    this.timer.start();
                    console.log(GameData.availableMapId.length);
                    GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
                    GameData.availableMapId.push(ev1.id); //将空白地块加入可用地图数组
                }
                else {
                    GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
                    GameData.availableMapId.push(ev1.id); //将空白地块加入可用地图数组
                }
                var evt = new ElementViewManageEvent(ElementViewManageEvent.LEVEL_EXP_UP);
                this.levelExpUp(evt);
                // this.delOver(eover);
                // console.log(GameData.elements[evt.ele2]);
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
        // console.log("添加上一关的留存元素:")
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var startY = girdWidth * 3 / 2;
        var ele;
        var len = GameData.MaxRow * GameData.MaxColumn;
        for (var l = 0; l < len; l++) {
            ele = this.elementViews[l];
            ele.grade = GameData.elements[l].grade;
            ele.location = GameData.elements[l].location;
            ele.x = ele.targetX();
            ele.y = startY - ele.width;
            // console.log("所有id: "+ele.id);
            if (ele.grade != 0) {
                // console.log("添加id: "+ele.id);
                // console.log("location: "+ele.location);
                // console.log("x: "+ele.targetX());
                // console.log("y: "+ele.targetY());
                var i = Math.floor(ele.location / GameData.MaxColumn);
                var t = ele.location % GameData.MaxColumn; //修改成4*5地图后，t的计算方式变化
                GameData.mapData[i][t] = ele.id;
                ele.setTexture("e" + ele.grade + "_png");
                ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
                // GameData.availableMapId.splice(l,1);//将使用过的MapId从可用数组里面删除
                // console.log("availableMapId:"+GameData.availableMapId);
            }
            else if (ele.grade == 0 && GameData.elements[l].type == "b0") {
                // console.log("添加纸箱id: "+ele.id);		
                var i = Math.floor(ele.location / GameData.MaxColumn);
                var t = ele.location % GameData.MaxColumn; //修改成4*5地图后，t的计算方式变化
                GameData.mapData[i][t] = ele.id;
                ele.setTexture("ui_box_general_png");
                ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
            }
            else if (ele.grade == 0 && GameData.elements[l].type == "b1") {
                // console.log("添加纸箱id: "+ele.id);		
                var i = Math.floor(ele.location / GameData.MaxColumn);
                var t = ele.location % GameData.MaxColumn; //修改成4*5地图后，t的计算方式变化
                GameData.mapData[i][t] = ele.id;
                ele.setTexture("ui_box_gift_png");
                ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
            }
            // console.log("availableMapId:"+GameData.availableMapId);									
        }
    };
    /*
    *开场随机元素掉落，2018/08/10
    *author:bigfoot
    */
    ElementViewManage.prototype.showElement = function () {
        console.log("开场随机元素掉落");
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var startY = girdWidth * 3 / 2;
        var ele;
        var l = Math.floor(Math.random() * GameData.availableMapId.length);
        var id = GameData.availableMapId[l]; //随机从可以使用的MapId里面抽取一个
        var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
        var t = GameData.elements[id].location % GameData.MaxColumn; //修改成4*5地图后，t的计算方式变化
        // console.log("随机id: "+id);
        // console.log("随机i: "+i);
        // console.log("随机t: "+t);
        // console.log(GameData.mapData[i][t]);
        if (GameData.mapData[i][t] != -1) {
            GameData.mapData[i][t] = id;
            ele = this.elementViews[GameData.mapData[i][t]];
            GameData.elements[id].type = "b0";
            ele.setTexture("ui_box_general_png");
            ele.x = ele.targetX();
            ele.y = startY - ele.width;
            ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
            GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
            this.timerToBox2();
        }
        // console.log("可用地图Id: "+GameData.availableMapId);
    };
    /*
    *单个随机纸箱掉落，2018/08/16
    *author:bigfoot
    */
    ElementViewManage.prototype.showRandomElement = function () {
        console.log("随机掉落开始");
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        var startY = girdWidth * 3 / 2;
        var ele;
        // console.log("可用地图Id: "+GameData.availableMapId);
        // console.log("mapData: "+GameData.mapData);
        // console.log("elements: "+GameData.elements);
        for (var l = 0; l < GameData.availableMapId.length; l++) {
            var id = GameData.availableMapId[l];
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn;
            // console.log("随机id: "+id);
            // console.log("随机元素的type: "+GameData.elements[id].type);
            // console.log("随机元素的location: "+GameData.elements[id].location);
            // console.log("随机i: "+i);
            // console.log("随机t: "+t);
            if (GameData.mapData[i][t] != -2) {
                GameData.availableMapId.splice(l, 1);
            }
        }
        if (GameData.availableMapId.length == 0) {
            this.timer.stop();
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
            ele.y = startY - ele.width;
            ele.grade = 0;
            // console.log("ele.y: "+ele.y)
            // console.log("ele.targety: "+ele.targetY())
            ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
            GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
            // console.log("随机id: "+id);
            // console.log("随机元素的type: "+GameData.elements[id].type);
            // console.log("随机元素的location: "+ele.location);
            // console.log("随机元素的grade: "+ele.grade);
            // console.log("随机i: "+i);
            // console.log("随机t: "+t);
            // console.log("随机元素: ");
            // console.log(GameData.elements[id]);
            // console.log(GameData.mapData[i][t]);
        }
    };
    /*
    *指定id元素创建，2018/08/16
    *author:bigfoot
    */
    ElementViewManage.prototype.showElementById = function (id, isFirst) {
        if (isFirst === void 0) { isFirst = true; }
        var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
        // let startY:number  = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxRow;
        var startY = girdWidth * 3 / 2;
        var ele;
        var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
        var t = GameData.elements[id].location % GameData.MaxColumn;
        if (GameData.mapData[i][t] != -1) {
            // GameData.mapData[i][t] = id;
            ele = this.elementViews[id];
            if (GameData.elements[id].type == "b0") {
                ele.setTexture("ui_box_general_png");
            }
            else {
                ele.setTexture("e" + GameData.elements[id].grade + "_png");
            }
            ele.x = ele.targetX();
            if (isFirst) {
                ele.y = startY - ele.width;
            }
            else {
                ele.y = ele.targetY() + ele.height / 4;
            }
            ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
            // this._currentTapID = -1;
        }
    };
    ElementViewManage.prototype.timerToBox2 = function () {
        // console.log("开场元素掉落完成以后可用地图Id: "+GameData.availableMapId);
        // this.timer = new egret.Timer(1000, 0);//
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeFuc, this);
        this.coinTimer.addEventListener(egret.TimerEvent.TIMER, this.addCoin, this);
        this.timer.start();
        this.coinTimer.start();
    };
    ElementViewManage.prototype.timeFuc = function () {
        this._countdown-- ? this._countdown < 0 : this._countdown = 0;
        this._numText.text = this._countdown.toString();
        if (this._countdown == 0 && this._isDeleteOver) {
            this.timer.delay = 1000;
            this.showRandomElement();
            SoundUtils.instance().playBoxDownSound(); //播放箱子掉落音效
            this._countdown = 10;
        }
        // console.log(this._countdown);
        // console.log(this._isDeleteOver);
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
        var pv = evt.currentTarget;
        // console.log("pv.id"+pv.id);
        if (pv.id == 2) {
            if (this.timer.delay > 0) {
                // this.timer.delay -= 100;
                this.timer.delay = 0.5 * this.timer.delay;
            }
            else {
                this.timer.delay = 1000;
            }
            // console.log("点击加速"+this.timer.delay );
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
        var secTotalcoin = this.addSecCoin();
        GameData.coin += secTotalcoin;
        this._coinLabel.text = this.numZero(GameData.coin);
        this._coinSecLabel.text = this.numZero(secTotalcoin);
    };
    /**
     * 数字去零计算
     */
    ElementViewManage.prototype.numZero = function (num) {
        var numString = Math.floor(num).toString();
        var zeroConfigArr = RES.getRes("zero_config_json");
        var numLength = numString.length;
        var zeroNumber = Math.floor((numLength - 1) / 3);
        if (zeroNumber > 0) {
            numString = numString.slice(0, 2) + "." + numString.slice(3, 5) + zeroConfigArr[zeroNumber - 1].company;
        }
        else {
            numString = num.toString();
        }
        return numString;
    };
    /**
     * 秒产金币计算
     * author:bigfootzq
     * date:2018/09/11
     */
    ElementViewManage.prototype.addSecCoin = function () {
        var secTotalcoin = 0;
        var houseDownArr = RES.getRes("housedown_config_json"); //读取房子等级生成金币数据
        //遍历GameData.elements[],对每个等级的房子乘以秒产，每秒刷新一次
        for (var l = 0; l < GameData.elements.length; l++) {
            if (GameData.elements[l].grade != 0) {
                var houseSecCoin = houseDownArr[GameData.elements[l].grade - 1].coin_num * Math.pow(10, houseDownArr[GameData.elements[l].grade - 1].coin_Base);
                // this.floatText("+"+houseSecCoin.toString(),this.elementViews[l].targetX() -15,this.elementViews[l].targetY()-35,500);
                secTotalcoin += GameData.elements[l].grade * houseSecCoin;
            }
        }
        // console.log("每秒增加金币："+secTotalcoin );
        return secTotalcoin;
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
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
        if (isBack === void 0) { isBack = false; }
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
            this.elementViews[e1id].moveAndBack(this.elementViews[e2id].location, true);
            this.elementViews[e2id].moveAndBack(this.elementViews[e1id].location);
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
     * 删除完毕重新开始计时
     */
    ElementViewManage.prototype.delOver = function (evt) {
        if (evt) {
            // console.log("删除完毕");
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
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /**
     * 合并操作过关经验值增加
     * author:bigfootzq
     * date:2018/08/20
     */
    ElementViewManage.prototype.addLevelExp = function (grade) {
        var levelExp = 0;
        var houseDownArr = RES.getRes("housedown_config_json"); //读取房子等级生成金币数据
        if (grade >= 2) {
            levelExp = houseDownArr[grade - 2].down_exp;
        }
        GameData.levelExp += Number(levelExp);
        // var gbg:GameBackGround = new GameBackGround();
        // gbg.setLevelExp();		
    };
    /**
     * 经验值超过过关经验值的时候发出消息
     * author:bigfootzq
     * date:2018/09/01
     */
    ElementViewManage.prototype.levelExpUp = function (evt) {
        if (GameData.levelExp >= GameData.levelReqExp) {
            // console.log("levelExpup函数"+GameData.levelExp)
            GameData.coin += GameData.levelCoin; //通关加奖励金币
            this.timer.stop(); //这一关结束了，暂停计时器
            this.coinTimer.stop();
            SoundUtils.instance().stopBg();
            this.dispatchEvent(evt);
        }
    };
    ElementViewManage.prototype.getNewHosuePanel = function (grade) {
        this.timer.stop();
        this._layer.addChild(this._newHousePanel);
        var newHouseBase = ResourceUtils.createBitmapByName("new_base_png");
        newHouseBase.width = GameData.stageW * 2 / 5;
        newHouseBase.height = newHouseBase.width * 1.18;
        newHouseBase.x = GameData.stageW / 2 - newHouseBase.width / 2;
        newHouseBase.y = GameData.stageH / 2 - newHouseBase.height / 2;
        var newHouseMask = new egret.Shape();
        newHouseMask.graphics.beginFill(0x000000, 1);
        newHouseMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        newHouseMask.graphics.endFill();
        newHouseMask.alpha = 0.8;
        newHouseMask.touchEnabled = true;
        var newHouse = ResourceUtils.createBitmapByName("e" + grade + "_big_png");
        newHouse.x = newHouseBase.x + newHouseBase.width / 2 - newHouse.width / 2;
        newHouse.y = newHouseBase.y + newHouseBase.height / 2 - newHouse.height / 2;
        //房子等级
        var houseLevelLabel = new egret.TextField();
        houseLevelLabel.text = "LV " + grade.toString();
        houseLevelLabel.textAlign = egret.HorizontalAlign.CENTER;
        houseLevelLabel.fontFamily = "黑体";
        houseLevelLabel.size = 20;
        houseLevelLabel.textColor = 0X7D3705;
        houseLevelLabel.width = newHouse.width;
        houseLevelLabel.x = newHouse.x;
        houseLevelLabel.y = newHouse.y + newHouse.height + 5;
        var shareBtn = ResourceUtils.createBitmapByName("new_share_png");
        shareBtn.x = newHouseBase.x + 10;
        shareBtn.y = newHouseBase.y + newHouseBase.height - shareBtn.height - 10;
        shareBtn.touchEnabled = true;
        shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
        var closeBtn = ResourceUtils.createBitmapByName("reclaim_sure_png");
        closeBtn.x = newHouseBase.x + newHouseBase.width / 2 + 10;
        closeBtn.y = shareBtn.y;
        closeBtn.touchEnabled = true;
        closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeNewHousePanel, this);
        this._newHousePanel.addChild(newHouseMask);
        this._newHousePanel.addChild(newHouseBase);
        this._newHousePanel.addChild(newHouse);
        this._newHousePanel.addChild(houseLevelLabel);
        this._newHousePanel.addChild(shareBtn);
        this._newHousePanel.addChild(closeBtn);
    };
    ElementViewManage.prototype.closeNewHousePanel = function () {
        SoundUtils.instance().playCloseSound();
        this._layer.removeChild(this._newHousePanel);
        this.timer.start();
    };
    ElementViewManage.prototype.share = function () {
        platform.share();
    };
    ElementViewManage.prototype.createRecycle = function () {
        console.log("添加回收站");
        var girdWidth = GameData.stageW / 6;
        this.recycle.width = girdWidth * 0.6 + 5;
        this.recycle.height = girdWidth * 0.708 + 5;
        var x = GameData.stageW - 10 - this.recycle.width * 3 / 2 - 5;
        var y = GameData.stageH - this.recycle.height - girdWidth * 1.21 - 15;
        this.recycle.graphics.beginFill(0x000000, 0);
        // this.recycle.graphics.drawRect(this.recycle.x,this.recycle.y,this.recycle.width,this.recycle.height);
        this.recycle.graphics.drawRect(x, y, this.recycle.width, this.recycle.height);
        this.recycle.graphics.endFill();
        this._layer.addChild(this.recycle);
    };
    ElementViewManage.prototype.openConfirmRecycle = function () {
        this.timer.stop();
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
        var newHouse = ResourceUtils.createBitmapByName("e" + grade + "_big_png");
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
        var newHouseCoin = ResourceUtils.createBitmapByName("shop_money_01_png");
        newHouseCoin.x = confirmBase.x + confirmBase.width / 4 + 18;
        newHouseCoin.y = houseLevelLabel.y + houseLevelLabel.height + 25;
        var housePriceLabel = new egret.TextField();
        var housePrice = this._buyHouseConfigArray[this._hitEv.grade - 1].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade - 1].coinBase);
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
        console.log("关闭删除面板");
        this.timer.start();
        SoundUtils.instance().playCloseSound();
        this._layer.removeChild(this._confirmRecycleContainer);
    };
    ElementViewManage.prototype.confirm = function () {
        console.log("确认删除");
        this.deleteElement(this._hitEv.id);
        var housePrice = this._buyHouseConfigArray[this._hitEv.grade].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade].coinBase);
        GameData.coin += housePrice;
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
    ElementViewManage.prototype.recycleHouse = function (evt) {
        this._hitEv = evt.currentTarget;
        var isHit = this.recycle.hitTestPoint(evt.stageX, evt.stageY);
        console.log("删除碰撞检测" + isHit);
        if (isHit) {
            console.log("删除元素");
            if (this._isDisableConfirm) {
                console.log("直接删除元素");
                this.deleteElement(this._hitEv.id);
                var housePrice = this._buyHouseConfigArray[this._hitEv.grade].coinNum * Math.pow(10, this._buyHouseConfigArray[this._hitEv.grade].coinBase);
                GameData.coin += housePrice;
                this._coinLabel.text = this.numZero(GameData.coin);
            }
            else {
                this.openConfirmRecycle();
            }
        }
        else {
            this._hitEv.back();
        }
    };
    /**
     * 删除元素
     */
    ElementViewManage.prototype.deleteElement = function (id) {
        var i = Math.floor(this.elementViews[id].location / GameData.MaxColumn);
        var t = this.elementViews[id].location % GameData.MaxColumn;
        if (GameData.elements[id].type !== 'b0' || GameData.elements[id].type !== 'b1') {
            this._isDeleteOver = false;
            this.playRemoveAni(id);
        }
        this.elementViews[id].grade = GameData.elements[id].grade = 0;
        if (GameData.availableMapId.length == 0) {
            this.timer.start();
            console.log(GameData.availableMapId.length);
            GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
            GameData.availableMapId.push(id); //将空白地块加入可用地图数组
        }
        else {
            GameData.mapData[i][t] = -2; //删除元素后把这块格子置为-2,表示无元素
            GameData.availableMapId.push(id); //将空白地块加入可用地图数组
        }
    };
    ElementViewManage.prototype.openShop = function () {
        console.log('打开商店');
        this.timer.stop();
        SoundUtils.instance().playClickSound();
        this._layer.addChild(this._shopContainer);
        var shopBase = ResourceUtils.createBitmapByName("shop_base_png");
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
        var closeShopBtn = ResourceUtils.createBitmapByName("shop_close_png");
        closeShopBtn.touchEnabled = true;
        closeShopBtn.x = GameData.stageW - closeShopBtn.width;
        closeShopBtn.y = GameData.stageH - shopBase.height;
        this._shopContainer.addChild(closeShopBtn);
        closeShopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeShop, this);
        //创建内容，
        this._cards = this.createCards();
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
        // console.log(this._cardScrollView);
        // console.log(this._cards);
        this._shopContainer.addChild(this._cardScrollView);
    };
    ElementViewManage.prototype.closeShop = function () {
        console.log("关闭排行榜");
        this.timer.start();
        SoundUtils.instance().playCloseSound();
        this._layer.removeChild(this._shopContainer);
    };
    ElementViewManage.prototype.createCards = function () {
        var cards = new egret.DisplayObjectContainer();
        this._shopCardArr = new Array();
        cards.height = GameData.stageW * 0.375;
        cards.width = GameData.stageW * 2.5;
        var availableBuyHouseArr = RES.getRes("available_buy_house_json");
        var availableHouseLevel = availableBuyHouseArr[GameData.maxHouseGrade - 1].availableLevel;
        // console.log( this._buyHouseConfigArray);
        // console.log(availableHouseLevel);
        // console.log(GameData.maxHouseGrade);
        for (var i = 0; i < 8; i++) {
            //房卡底图
            var shopCard = ResourceUtils.createBitmapByName("shop_card_png");
            var houseNameLabel = new egret.TextField();
            var houseLevel = i + 1;
            var shopHouse = null;
            var houseLevelLabel = new egret.TextField();
            this._housePriceLabel = new egret.TextField();
            var housePrice = this._buyHouseConfigArray[i].coinNum * Math.pow(10, this._buyHouseConfigArray[i].coinBase) * (1 + this._buyHouseConfigArray[i].buff * GameData.houseBuyNumber[i] / 10000);
            var buyBtn = ResourceUtils.createBitmapByName("shop_buy_02_png");
            var buyBtnCoin = ResourceUtils.createBitmapByName("shop_money_02_png");
            var shopBuyLock = ResourceUtils.createBitmapByName("shop_buy_lock_png");
            var buyBtnView = new ShopCardView(houseLevel);
            buyBtnView.houseLevel = houseLevel;
            buyBtnView.housePrcice = housePrice;
            this._shopCardArr.push(buyBtnView);
            if (houseLevel <= availableHouseLevel) {
                shopHouse = ResourceUtils.createBitmapByName("e" + houseLevel + "_png");
                houseNameLabel.text = "房屋";
                if (housePrice <= GameData.coin) {
                    // buyBtn = ResourceUtils.createBitmapByName("shop_buy_01_png");
                    buyBtnView.bitmap.texture = RES.getRes("shop_buy_01_png");
                    buyBtnView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyHouse, this);
                    buyBtnCoin = ResourceUtils.createBitmapByName("shop_money_01_png");
                    this._housePriceLabel.textColor = 0X681B00;
                    this._openScrollX = 20 + (10 + shopCard.width) * i - 10 - shopCard.width / 2;
                }
                else {
                    buyBtn = ResourceUtils.createBitmapByName("shop_buy_02_png");
                    buyBtnCoin = ResourceUtils.createBitmapByName("shop_money_02_png");
                    this._housePriceLabel.textColor = 0X333333;
                }
            }
            else {
                shopHouse = ResourceUtils.createBitmapByName("e" + houseLevel + "_black_png");
                buyBtn = ResourceUtils.createBitmapByName("shop_buy_02_png");
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
            buyBtnView.x = buyBtn.x = shopCard.x + (shopCard.width - buyBtn.width) / 2;
            buyBtnView.y = buyBtn.y = shopCard.y + shopCard.height - buyBtn.height / 2;
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
            console.log(this.numZero(housePrice));
            cards.addChild(shopCard);
            cards.addChild(houseNameLabel);
            cards.addChild(shopHouse);
            cards.addChild(houseLevelLabel);
            if ((houseLevel == availableHouseLevel) && GameData.houseBuyNumber[houseLevel - 1] == 0) {
                this._newIcon = ResourceUtils.createBitmapByName("shop_new_png");
                this._newIcon.x = 20 + (10 + shopCard.width) * (availableHouseLevel - 1) + shopCard.width / 2 - this._newIcon.width / 2;
                this._newIcon.y = houseNameLabel.y + houseNameLabel.height + 10;
                cards.addChild(this._newIcon);
            }
            if (houseLevel <= availableHouseLevel) {
                if (housePrice <= GameData.coin) {
                    cards.addChild(buyBtnView);
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
            if (i == 0) {
                var rewardShare = ResourceUtils.createBitmapByName("shop_reward_share_png");
                rewardShare.touchEnabled = true;
                rewardShare.width = shopCard.width * 3 / 5;
                rewardShare.x = 20 + (shopCard.width - rewardShare.width) / 2;
                rewardShare.y = shopCard.y - rewardShare.height / 2;
                cards.addChild(rewardShare);
                rewardShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.share, this);
            }
            if (i == 1) {
                var rewardVideo = ResourceUtils.createBitmapByName("shop_reward_video_png");
                rewardVideo.touchEnabled = true;
                rewardVideo.width = shopCard.width * 3 / 5;
                rewardVideo.x = 20 + shopCard.width + 20 + (shopCard.width - rewardVideo.width) / 2;
                rewardVideo.y = shopCard.y - rewardVideo.height / 2;
                cards.addChild(rewardVideo);
                rewardVideo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardVedio, this);
            }
        }
        return cards;
    };
    ElementViewManage.prototype.buyHouse = function (evt) {
        console.log("购买房屋");
        // console.log(evt.currentTarget);
        var newHouse = evt.currentTarget;
        for (var l = 0; l < GameData.availableMapId.length; l++) {
            var id = GameData.availableMapId[l];
            var i = Math.floor(GameData.elements[id].location / GameData.MaxColumn);
            var t = GameData.elements[id].location % GameData.MaxColumn;
            if (GameData.mapData[i][t] != -2) {
                GameData.availableMapId.splice(l, 1);
            }
        }
        if (GameData.availableMapId.length == 0) {
            console.log("没有多余空地,无法购买");
            this.floatText("没有多余空地啦", GameData.stageW * 0.4, GameData.stageH - GameData.stageW * 0.618 - 100, 1000);
        }
        else {
            GameData.coin -= newHouse.housePrcice;
            this._coinLabel.text = this.numZero(GameData.coin);
            GameData.cost += newHouse.housePrcice; //购买房屋的总花费
            platform.setUserCloudStorage([{ key: "score", value: this.numZero(GameData.cost) + "" }]); //将总花费上传到云
            var girdWidth = (GameData.stageW - 40) / GameData.MaxRow;
            var startY = girdWidth * 3 / 2;
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
            ele.y = startY - ele.width;
            console.log(ele);
            ele.show((50 * GameData.MaxColumn * GameData.MaxRow - 50 * GameData.unmapnum) - (5 * GameData.MaxRow + 5) * 50);
            GameData.availableMapId.splice(l, 1); //将使用过的MapId从可用数组里面删除
            if (GameData.houseBuyNumber[newHouse.houseLevel - 1] == 0) {
                var cards = this._newIcon.parent;
                cards.removeChild(this._newIcon);
            }
            GameData.houseBuyNumber[newHouse.houseLevel - 1] += 1;
            var housePrice = this._buyHouseConfigArray[newHouse.houseLevel - 1].coinNum * Math.pow(10, this._buyHouseConfigArray[newHouse.houseLevel - 1].coinBase) * (1 + this._buyHouseConfigArray[newHouse.houseLevel - 1].buff * GameData.houseBuyNumber[newHouse.houseLevel - 1] / 10000);
            this._housePriceLabel.text = this.numZero(housePrice);
            console.log(GameData.houseBuyNumber);
        }
    };
    ElementViewManage.prototype.rewardShare = function () {
        platform.share();
    };
    ElementViewManage.prototype.rewardVedio = function () {
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /**-----------------------------------------------飘字动画------------------------------------------------------------------------------------------------- */
    ElementViewManage.prototype.floatText = function (text, x, y, speed) {
        var txtView = new egret.TextField;
        txtView.textColor = 0xffffff;
        txtView.text = text;
        txtView.size = 30;
        txtView.x = x;
        txtView.y = y;
        this._layer.addChild(txtView);
        var twn = egret.Tween.get(txtView);
        twn.wait(speed).to({ "alpha": 0 }, 500).call(function () {
            this._layer.removeChild(txtView);
        }, this);
    };
    /**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    /*-----------------------------更新整个地图中元素位置--------------------------------------*/
    ElementViewManage.prototype.updateMapData = function () {
        console.log("重新布局");
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
        console.log("GameStartView初始化");
        var bg = ResourceUtils.createBitmapByName("loading_base_png");
        bg.width = GameData.scentWidth;
        bg.height = GameData.scentHeight;
        this.addChild(bg);
        var start_btn = new MyButtonForGame("loading_start_png", "loading_start_png");
        this.addChild(start_btn);
        var _swidth = GameData.scentWidth / 2 - start_btn.width / 2;
        var _sheight = GameData.scentHeight * 3 / 4 - start_btn.height;
        start_btn.x = _swidth;
        start_btn.y = _sheight;
        // console.log(start_btn.y);
        this.userInfoButton = platform.createUserInfoButton();
        console.log(this.userInfoButton);
        start_btn.setClick(this.showStartView.bind(this));
        this.thisContainer = new egret.Sprite();
        this.addChild(this.thisContainer);
    };
    GameStartView.prototype.showStartView = function () {
        if (this.parent)
            this.parent.removeChild(this);
        GameSceneView.game.start();
        this.userInfoButton.hide();
    };
    GameStartView.prototype.showOtherView = function () {
        //EgretShare.moreGame();
    };
    return GameStartView;
}(egret.Sprite));
__reflect(GameStartView.prototype, "GameStartView");
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
var PropView = (function (_super) {
    __extends(PropView, _super);
    function PropView(type) {
        var _this = _super.call(this) || this;
        _this._type = -1; //道具类型
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
            this._view_active = new egret.Bitmap();
            this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            switch (this._type) {
                case 0:
                    this._view_active.width = girdWidth;
                    this._view_active.height = girdWidth;
                    this._view_active.x = 20;
                    this._view_active.y = GameData.stageH - this._view_active.height - 10;
                    break;
                case 1:
                    this._view_active.width = girdWidth * 0.6;
                    this._view_active.height = girdWidth * 0.6;
                    this._view_active.x = 20 + this._view_active.width / 2 - 5;
                    this._view_active.y = GameData.stageH - this._view_active.height - girdWidth - 30;
                    break;
                case 2:
                    this._view_active.width = girdWidth * 1.575;
                    this._view_active.height = girdWidth * 1.575;
                    this._view_active.x = GameData.stageW / 2 - this._view_active.width / 2;
                    this._view_active.y = GameData.stageH - girdWidth * 1.575;
                    break;
                case 3:
                    this._view_active.width = girdWidth * 0.93;
                    this._view_active.height = girdWidth * 0.966;
                    this._view_active.x = GameData.stageW - 20 - this._view_active.width;
                    this._view_active.y = GameData.stageH - this._view_active.height - 10;
                    break;
                case 4:
                    this._view_active.width = girdWidth * 0.6;
                    this._view_active.height = girdWidth * 0.708;
                    this._view_active.x = GameData.stageW - 10 - this._view_active.width * 3 / 2;
                    this._view_active.y = GameData.stageH - this._view_active.height - girdWidth * 1.21;
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
                textureName = "ui_bigbox_hit_png";
                break;
            case 3:
                textureName = "ui_shop_png";
                break;
            case 4:
                textureName = "ui_recycle_png";
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
            if (i != 2 && i != 3) {
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
        console.log("添加底部箱子：");
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
        // console.log(this._currentID);
        // console.log(evt.currentTarget.id);
        // console.log(this._voice );
        // if(this._currentID!=-1){
        //     // this._props[this._currentID].setFocus(false);
        //     if(this._currentID ==(<PropView>evt.currentTarget).id){
        //         this._currentID=-1;
        //         PropViewManage.propType=-1;                
        //     }
        //     else{
        SoundUtils.instance().playClickSound();
        this._currentID = evt.currentTarget.id;
        if (this._voice == true && this._currentID == 1) {
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
        PropViewManage.propType = this._props[this._currentID].proptype;
        if (PropViewManage.propType == 0) {
            this.openRanking();
        }
        else {
            var pl = new PropLogic();
            pl.useProp(PropViewManage.propType); //操作数据
        }
        //     }
        // }else{
        //     this._currentID =(<PropView>evt.currentTarget).id;
        //     // this._props[this._currentID].setFocus(true);
        //     PropViewManage.propType = this._props[this._currentID].proptype;
        // }
    };
    PropViewManage.prototype.openRanking = function () {
        console.log("点击排行榜");
        SoundUtils.instance().playClickSound();
        // let openDataContext = wx.getOpenDataContext();
        var platform = window.platform;
        var rankingContainer = new egret.Sprite();
        console.log("打开排行榜");
        //处理遮罩，避免开放数据域事件影响主域。
        this.rankingListMask = new egret.Shape();
        this.rankingListMask.graphics.beginFill(0x000000, 1);
        this.rankingListMask.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);
        this.rankingListMask.graphics.endFill();
        this.rankingListMask.alpha = 0.5;
        this.rankingListMask.touchEnabled = true;
        this._layer.stage.addChild(rankingContainer);
        rankingContainer.addChild(this.rankingListMask);
        this.closeBtn = ResourceUtils.createBitmapByName("ranking_close_png");
        this.closeBtn.touchEnabled = true;
        this.closeBtn.x = GameData.stageW - this.closeBtn.width * 2 - 5;
        this.closeBtn.y = GameData.stageW / 5 + 12;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeRanking, this);
        //主要示例代码开始
        this.ranking = platform.openDataContext.createDisplayObject(null, GameData.stageW, GameData.stageH);
        rankingContainer.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        rankingContainer.addChild(this.ranking);
        rankingContainer.addChild(this.closeBtn);
        //主域向子域发送自定义消息
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            text: 'hello',
            year: (new Date()).getFullYear(),
            command: "open"
        });
        //主要示例代码结束            
        this.isdisplay = true;
    };
    PropViewManage.prototype.closeRanking = function () {
        console.log("关闭排行榜");
        SoundUtils.instance().playCloseSound();
        var platform = window.platform;
        if (this.isdisplay) {
            this.ranking.parent && this.ranking.parent.removeChild(this.ranking);
            this.rankingListMask.parent && this.rankingListMask.parent.removeChild(this.rankingListMask);
            this.closeBtn.parent && this.closeBtn.parent.removeChild(this.closeBtn);
            this.isdisplay = false;
            platform.openDataContext.postMessage({
                isDisplay: this.isdisplay,
                text: 'hello',
                year: (new Date()).getFullYear(),
                command: "close"
            });
        }
    };
    PropViewManage.prototype.onTouchMove = function (event) {
        console.log("触摸排行榜");
        console.log(event);
        var deltaY = event.stageY;
        if (this.lastDeltaY == deltaY) {
            return;
        }
        this.lastDeltaY = deltaY;
        console.log("rank touchmove:", deltaY);
        var platform = window.platform;
        platform.openDataContext.postMessage({
            isDisplay: this.isdisplay,
            deltaY: deltaY,
            year: (new Date()).getFullYear(),
            command: "paging"
        });
    };
    PropViewManage.propType = -1; //道具类型
    return PropViewManage;
}());
__reflect(PropViewManage.prototype, "PropViewManage");
var ShopCardView = (function (_super) {
    __extends(ShopCardView, _super);
    function ShopCardView(grade) {
        var _this = _super.call(this) || this;
        _this.houseLevel = 0;
        _this.housePrcice = 0;
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
;window.Main = Main;