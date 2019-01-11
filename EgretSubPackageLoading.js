class EgretSubPackageLoading extends egret.DisplayObjectContainer {
  constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    EgretSubPackageLoading.instance = this;
  }

  onAddToStage() {
    let _self = this;

    _self.bg = new egret.Bitmap();
    _self.bg.x = 0;
    _self.bg.y = 0;
    _self.bg.width = _self.stage.stageWidth;
    _self.bg.height = _self.stage.stageHeight;
    // 加载背景图资源
    let img_loader = new egret.ImageLoader();
    img_loader.addEventListener(egret.Event.COMPLETE, (evt) => {
      var loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      _self.bg.texture = texture;
    }, this);
    img_loader.load('preload/loading_base.png');

    _self.logo = new egret.Bitmap();
    // 加载背景Logo
    let logo_loader = new egret.ImageLoader();
    logo_loader.addEventListener(egret.Event.COMPLETE, (evt) => {
      var loader = evt.currentTarget;
      let texture = new egret.Texture();
      texture.bitmapData = loader.data;
      _self.logo.texture = texture;
    }, this);
    logo_loader.load('preload/loading_logo.png');
	
	this.txt = new egret.TextField();
	this.txt.textAlign = egret.HorizontalAlign.CENTER;
	this.txt.width = this.stage.stageWidth;
	this.txt.y = this.stage.stageHeight*3/4 - this.txt.size;
	this.txt.textColor = 0xffffff;
	//健康游戏忠告
	let adviceText = new egret.TextField();
	adviceText.x =  0;
	adviceText.y = this.stage.stageHeight - this.stage.stageWidth/4;
	adviceText.width = this.stage.stageWidth;
	adviceText.textAlign = egret.HorizontalAlign.CENTER;
	adviceText.fontFamily = "黑体";
	adviceText.size = 20;
	adviceText.text = "抵制不良游戏，拒绝盗版游戏。\n注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。\n合理安排时间，享受健康生活。"
	
    _self.addChild(_self.bg);
    _self.addChild(_self.logo);
	_self.addChild(this.txt);
	_self.addChild(adviceText);
  }

  setProgress(res) {
    // iOS真机为totalBytesWriten 微信官方将于近期修复 2018.6.19
    this.txt.text  = `${res.totalBytesWritten || res.totalBytesWriten} / ${res.totalBytesExpectedToWrite}`;
    // console.log(res.progress);
  }

  onSuccess() {
    const stage = this.stage;
    EgretSubPackageLoading.instance = null;
    // 创建文档类，开发者需要根据自身项目更改
    const main = new Main();
    // 先加入Main界面，然后在延时去掉loading界面，避免中间出现闪屏
    stage.addChild(main);
    egret.setTimeout(()=>{
      stage.removeChild(this);
    },this,500);
  }
}

window.EgretSubPackageLoading = EgretSubPackageLoading;