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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.scrollView = new egret.ScrollView();
        /**
         * 便于演示数据，这里使用家数据
         * 有关获取还有的接口参考：https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/open-data.html?t=2018323
         */
        // _this.gameData = [
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 100, time: 1000 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 101, time: 100 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 102, time: 1700 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 103, time: 1800 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 104, time: 1900 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 105, time: 1070 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 106, time: 1030 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 107, time: 1010 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 108, time: 1020 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 109, time: 1030 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 111, time: 1040 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 112, time: 1050 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 123, time: 1060 }] },
            // { openId: '', avatarUrl: '', nickName: 'peony', data: [{ score: 167, time: 1080 }] }
        // ];
        wx.onMessage(function (data) {
            // console.log(data);
            if (data.isDisplay) {
                //获取小游戏开放数据接口 --- 开始
				_this.selfInfo = {};
				wx.getUserInfo({
					openIdList: ['selfOpenId'],
					lang: 'zh_CN',
					success(res){
						if(res.data){
							// console.log(res.data);
							if(res.data[0].nickName != undefined && res.data[0].avatarUrl != undefined){
								_this.selfInfo.name = res.data[0].nickName;
								// console.log("自己的信息1:nickname=" + res.data[0].nickName);
								// console.log("自己的信息1:nickname=" + _this.selfInfo.name);
								_this.selfInfo.url = res.data[0].avatarUrl;
								// console.log("自己的信息1:avatarUrl=" + res.data[0].avatarUrl);
								// console.log("自己的信息1:avatarUrl=" + _this.selfInfo.url);
								// selfNode.active = true;
							}else{
								// console.log("自己的信息1:undefined");
							}
						}                
					},
					fail(){
						//console.log(res)
						// console.log("获取自己的信息失败");
					}
				})
				
				wx.getUserCloudStorage({
					keyList: ["score"],
					success(res){
						// console.log("自己的托管数据");
						if(res.KVDataList){
							var dList = res.KVDataList;
							// console.log("自己的托管数据1:dList.length=" + dList.length);
							for(var i = 0; i < dList.length; i++){
								if(dList[i].key == "score"){
									// console.log("自己的托管数据1:" + dList[i].value);
									_this.selfInfo.scores = dList[i].value;
									break;
								}
							}
						}                
					},
					fail(){
						//console.log(res)
						// console.log("获取自己的托管数据失败");
					}
				})
				
                wx.getFriendCloudStorage({
                    keyList: ["score"],
                    success: function (res) {
                        console.log(res.data);
						sortList(res.data, false);
						_this.gameData = res.data;
						var selfDataIndex = null;
						//先比较昵称
						var sameNameList = [];
						for(var i = 0; i < res.data.length; i++){
							if(res.data[i].nickname == _this.selfInfo.name){
								sameNameList.push(i);
							}
						}
						if(sameNameList.length < 1){
							// console.log("Rank:好友的信息1：未找到同名自己");
						}else if(sameNameList.length == 1){
							// console.log("Rank:好友的信息2：找到1个同名自己");
							selfDataIndex = sameNameList[0];
						}else{
							//再比较头像
							var sameHeadList = [];
							for(var i = 0; i < sameNameList.length; i++){
								if(res.data[i].avatarUrl == _this.selfInfo.avatarUrl){
									sameHeadList.push(i);
								}
							}
							if(sameHeadList.length < 1){
								console.log("Rank:好友的信息3：未找到同头像自己");
							}else if(sameHeadList.length == 1){
								selfDataIndex = sameHeadList[0];
							}else{
								//再比较最高积分
								var sameMaxScoreList = [];
								for(var i = 0; i < sameNameList.length; i++){
									var dList = res.data[sameNameList[i]].KVDataList;
									for(var j = 0; j < dList.length; j++){
										if(dList[j].key == "score" && dList[j].value == _this.selfInfo.scores){
											sameMaxScoreList.push(i);
										}
									}
								}
								if(sameMaxScoreList.length < 1){
									// console.log("Rank:好友的信息3：未找到同周最高积分自己");
								}else if(sameMaxScoreList.length == 1){
									selfDataIndex = sameMaxScoreList[0];
								}else{ //到这里，发现多个同昵称、同头像、同最高积分的玩家，只能随机了
									var value = Math.floor(Math.random() * (sameMaxScoreList.length - 1 + 1) + 1) - 1;
									selfDataIndex = sameMaxScoreList[value - 1];
								}
							}
						}
						_this.selfInfo.key = selfDataIndex;
						// console.log("排行榜，自己的信息:" + _this.selfInfo.key);
						// console.log("排行榜，自己的信息:" + _this.selfInfo.name);
						// console.log("排行榜，自己的信息:" + _this.selfInfo.scores);
                        _this.runGame();
                    },
                    fail: function (err) {
                        // console.log(err);
                    },
                    complete: function () {
                    }
                });
                //监听消息 isDisplay
            }
            else {
                _this.cancelGame();
            }
        });
        //获取小游戏开放数据接口 --- 结束
		var imageLoader = new egret.ImageLoader();
		imageLoader.addEventListener(egret.Event.COMPLETE, function (event) {
			var imageLoader = event.currentTarget;
			_this.ranking_base = new egret.Texture();
			_this.ranking_base._setBitmapData(imageLoader.data);
		}, _this);
		imageLoader.load("openDataContext/assets/ranking_base.png");
		
		var imageLoaderHead = new egret.ImageLoader();
		imageLoaderHead.addEventListener(egret.Event.COMPLETE, function (event) {
			var imageLoader = event.currentTarget;
			_this.ranking_head = new egret.Texture();
			_this.ranking_head._setBitmapData(imageLoader.data);
		}, _this);
		imageLoaderHead.load("openDataContext/assets/ranking_head.png");	
		
		var imageLoaderExpend = new egret.ImageLoader();
		imageLoaderExpend.addEventListener(egret.Event.COMPLETE, function (event) {
			var imageLoader = event.currentTarget;
			_this.ranking_expend = new egret.Texture();
			_this.ranking_expend._setBitmapData(imageLoader.data);
		}, _this);
		imageLoaderExpend.load("openDataContext/assets/ranking_expend.png");
                
        var imageLoader1 = new egret.ImageLoader();
        imageLoader1.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.ranking_no1 = new egret.Texture();
            _this.ranking_no1._setBitmapData(imageLoader.data);
        }, _this);  
		imageLoader1.load("openDataContext/assets/ranking_no1.png");	
		
        var imageLoader2 = new egret.ImageLoader();
        imageLoader2.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.ranking_no2 = new egret.Texture();
            _this.ranking_no2._setBitmapData(imageLoader.data);
        }, _this); 
		imageLoader2.load("openDataContext/assets/ranking_no2.png");
        var imageLoader3 = new egret.ImageLoader();
        imageLoader3.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.ranking_no3 = new egret.Texture();
            _this.ranking_no3._setBitmapData(imageLoader.data);
        }, _this); 
		imageLoader3.load("openDataContext/assets/ranking_no3.png");		
        var imageLoader4 = new egret.ImageLoader();
        imageLoader4.addEventListener(egret.Event.COMPLETE, function (event) {
            var imageLoader = event.currentTarget;
            _this.ranking_no4 = new egret.Texture();
            _this.ranking_no4._setBitmapData(imageLoader.data);
        }, _this);
		imageLoader4.load("openDataContext/assets/ranking_no4.png");
        //测试点击
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            // console.log('子域输出点击');
        }, _this);
        return _this;
    }
	
    Main.prototype.runGame = function () {
		// console.log('运行排行榜子项目');
		var sharedCanvas = wx.getSharedCanvas();
		// console.log(sharedCanvas.width);
		// console.log(sharedCanvas.height);
        var _this = this;
        var bitmap = new egret.Bitmap(this.ranking_base);
		var stageWidth = window["sharedCanvas"].width;
		var stageHeight = window["sharedCanvas"].height;
	
		var rankWidth = 640 *0.98;
		// var rankWidth = stageWidth *0.98;
		var rankHeight = rankWidth * 1.5;
		var perPageMaxNum = 5;
		var barWidth = rankWidth * 4 / 5;
		var barHeight = barWidth *0.21;
		var preOffsetY = (rankHeight - barHeight) / (perPageMaxNum + 1) -20;
		var fontSize = Math.floor(stageWidth / 25);
		var indexWidth = barWidth/6;
		var	avatarSize = barHeight*4/5 - 10;
		var	intervalX = barWidth / 20;
		var	textOffsetY = (barHeight + fontSize) / 2;
		var	textMaxSize = barWidth / 3;
		
		bitmap.x = (640 - rankWidth)/2;
        bitmap.y = (1136 - rankHeight);
		// bitmap.x = (stageWidth - rankWidth)/2;
        // bitmap.y = (stageHeight - rankHeight)/2;
		var startX = bitmap.x + (rankWidth - barWidth) / 2;
		var startY = bitmap.y + preOffsetY + barHeight/2 +10;
		var avatarSize = barHeight*4/5 - 10;
		var intervalX = barWidth / 20;
		var textOffsetY = (barHeight + fontSize) / 2;
		var textMaxSize = barWidth / 3;
		// console.log(stageWidth);
		// console.log(stageHeight);
		// console.log(rankWidth);
		// console.log(rankHeight);
		// console.log(bitmap.x);
		// console.log(bitmap.y);
		// console.log(preOffsetY);
        this.addChild(bitmap);
        var listContainer = new egret.Sprite();
		// listContainer.cacheAsBitmap = true;
        this.scrollView.setContent(listContainer);
        this.scrollView.x = startX;
        this.scrollView.y = startY;
        this.scrollView.width = bitmap.width;
        this.scrollView.height = preOffsetY*perPageMaxNum;
        this.addChild(this.scrollView);
		
		//绘制自己条目
		var itemSelf = new egret.DisplayObjectContainer();
		itemSelf.x = startX;
		itemSelf.y = startY + 5.1 * preOffsetY;
		switch(_this.selfInfo.key){
			case 0:
				var rankingBox = new egret.Bitmap(_this.ranking_no1);
				break;
			case 1:
				var rankingBox = new egret.Bitmap(_this.ranking_no2);
				break;
			case 2:
				var rankingBox = new egret.Bitmap(_this.ranking_no3);
				break;
			default:
				var rankingBox = new egret.Bitmap(_this.ranking_no4);
				break;
		}
		
		itemSelf.addChild(rankingBox);
		var x = indexWidth/2;
		//绘制序号
		var keyTxt = new egret.TextField();
		keyTxt.fontFamily = "黑体";
		keyTxt.bold = true;
		if(_this.selfInfo.key <10){
			keyTxt.size = 50;
		}else{
			keyTxt.size = 45;
		}
		keyTxt.x = x;
		keyTxt.y = barHeight/4-5;
		keyTxt.text = _this.selfInfo.key+1;
		if (_this.selfInfo.key >= 3){
			itemSelf.addChild(keyTxt);
		}
		x += indexWidth/2 + intervalX*3/2 ;
		//头像白边
		var headBase = new egret.Bitmap(_this.ranking_head);
		headBase.x = x;
		headBase.y = (barHeight - avatarSize) / 2 - 5;
		// itemSelf.addChild(headBase);
		//头像
		var imageLoader5 = new egret.ImageLoader();;	
		imageLoader5.addEventListener(egret.Event.COMPLETE, function (event) {
			var imageLoader = event.currentTarget;
			_this.avatar = new egret.Texture();
			_this.avatar._setBitmapData(imageLoader.data);

			var avatar = new egret.Bitmap(_this.avatar);
			avatar.width = avatarSize * 0.8;
			avatar.height = avatarSize * 0.8;
			avatar.x = headBase.x+10;
			avatar.y = (barHeight - avatarSize) / 2 + 5;
			itemSelf.addChild(avatar);
		}, _this);
		imageLoader5.load(_this.selfInfo.url);
		
		
		x += avatarSize + intervalX*2;
		//名字
		var nicktxt = new egret.TextField();
		nicktxt.fontFamily = "黑体";
		nicktxt.size = 20;
		nicktxt.textColor = 0x0DF90D
		nicktxt.x = x;
		nicktxt.y = barHeight/8 +3;
		nicktxt.width = barWidth/3;
		nicktxt.textAlign = egret.HorizontalAlign.CENTER;
		nicktxt.text = cutstr(_this.selfInfo.name,8);
		itemSelf.addChild(nicktxt);
		
		
		//得分金币图标
		var expendCoin = new egret.Bitmap(_this.ranking_expend);
		expendCoin.x = x + 45;
		expendCoin.y = 50;
		itemSelf.addChild(expendCoin);
		
		x -= intervalX
		//得分
		var numtxt = new egret.TextField();
		numtxt.fontFamily = "黑体";
		numtxt.size = 24;
		numtxt.textColor = 0XB5392C;
		numtxt.x = x -5;
		numtxt.y = 58;
		numtxt.text = '总资产      :' + _this.selfInfo.scores;
		itemSelf.addChild(numtxt);
		this.addChild(itemSelf);
		
		
		//循环绘制条目
        this.gameData.forEach(function (value, index) {
			// console.log('item:'+ index);
			// console.log('item:'+ value.nickname);
			// console.log('item:'+ value.avatarUrl);
			// console.log('item:'+ value.KVDataList[0].value);
			
			
			
            var item = new egret.DisplayObjectContainer();
            item.y = index * preOffsetY;
            listContainer.addChild(item);
			switch(index){
				case 0:
					var rankingBox = new egret.Bitmap(_this.ranking_no1);
					break;
				case 1:
					var rankingBox = new egret.Bitmap(_this.ranking_no2);
					break;
				case 2:
					var rankingBox = new egret.Bitmap(_this.ranking_no3);
					break;
				default:
					var rankingBox = new egret.Bitmap(_this.ranking_no4);
					break;
			}
            
            item.addChild(rankingBox);
			var x = indexWidth/2;
			//绘制序号
			var keyTxt = new egret.TextField();
			keyTxt.fontFamily = "黑体";
            keyTxt.bold = true;
			if(index <10){
				keyTxt.size = 50;
			}else{
				keyTxt.size = 45;
			}
            keyTxt.x = x;
            keyTxt.y = barHeight/4-5;
            keyTxt.text = index+1;
			if (index >= 3){
				item.addChild(keyTxt);
			}
			x += indexWidth/2 + intervalX*3/2 ;
			//头像白边
			var headBase = new egret.Bitmap(_this.ranking_head);
			headBase.x = x;
			headBase.y = (barHeight - avatarSize) / 2 - 5;
			// item.addChild(headBase);
			//头像
			var imageLoader5 = new egret.ImageLoader();
			imageLoader5.addEventListener(egret.Event.COMPLETE, function (event) {
				var imageLoader = event.currentTarget;
				_this.avatar = new egret.Texture();
				_this.avatar._setBitmapData(imageLoader.data);

				var avatar = new egret.Bitmap(_this.avatar);
				avatar.width = avatarSize * 0.8;
				avatar.height = avatarSize * 0.8;
				avatar.x = headBase.x+10;
				avatar.y = (barHeight - avatarSize) / 2 + 5;
				item.addChild(avatar);
			}, _this);
			imageLoader5.load(value.avatarUrl);
			
			
			x += avatarSize + intervalX*2;
			//名字
            var nicktxt = new egret.TextField();
			nicktxt.fontFamily = "黑体";
			nicktxt.size = 20;
            nicktxt.x = x;
            nicktxt.y = barHeight/8 +3;
			nicktxt.width = barWidth/3;
			nicktxt.textAlign = egret.HorizontalAlign.CENTER;
            nicktxt.text = cutstr(value.nickname,12);
            item.addChild(nicktxt);
	
		
			//得分金币图标
			var expendCoin = new egret.Bitmap(_this.ranking_expend);
			expendCoin.x = x + 45;
			expendCoin.y = 50;
			item.addChild(expendCoin);
			
			x -= intervalX
  
			//得分
            var numtxt = new egret.TextField();
			numtxt.fontFamily = "黑体";
			numtxt.size = 24;
			numtxt.textColor = 0XB5392C;
            numtxt.x = x -5;
            numtxt.y = 58;
            numtxt.text = '总资产      :' + value.KVDataList[0].value;
            item.addChild(numtxt);
        }, this);
		
		
    };
    Main.prototype.cancelGame = function () {
        for (var i = 0, l = this.numChildren; i < l; i++) {
            this.removeChildAt(0);
        }
        this.scrollView.removeContent();
        // console.log('停止开放数据域');
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");



//排序函数
function sortList(ListData, order){ //排序(ListData：res.data;order:true降序，false升序)
	
	ListData.sort(function(a,b){
		
		
		var AMaxScore = 0;
		var AMaxScoreZero = 0;
		var AZero = '';
		var KVDataList = a.KVDataList;
		for(var i = 0; i < KVDataList.length; i++){
			if(KVDataList[i].key == "score"){
			AMaxScore = KVDataList[i].value;	
			AMaxScoreZero = getZeroNum(AMaxScore);
			}
		}


		var BMaxScore = 0;
		var BMaxScoreZero = 0;
		var BZero = '';
		KVDataList = b.KVDataList;
		for(var i = 0; i<KVDataList.length; i++){
			if(KVDataList[i].key == "score"){
			BMaxScore = KVDataList[i].value;
			BMaxScoreZero = getZeroNum(BMaxScore);
			}
		}
		if (AMaxScoreZero != BMaxScoreZero){
			// console.log("排序函数");
			// console.log(AMaxScoreZero);
			// console.log(BMaxScoreZero);
			if (order){
				return AMaxScoreZero - BMaxScoreZero;
			}else{
				return BMaxScoreZero - AMaxScoreZero;
			}
		}else{
			if(order){
				return parseFloat(AMaxScore) - parseFloat(BMaxScore);
			}else{
				return parseFloat(BMaxScore) - parseFloat(AMaxScore);
			}	
		}
	});
	return ListData;
}

function getZeroNum(score){
	var strNum = parseFloat(score);
	// console.log(strNum);
	var items = score.split(strNum.toString());
	//会得到一个数组，数组中包括利用o分割后的多个字符串（不包括o）
	var newStr = items.join("");//数组转成字符串,元素是通过指定的分隔符进行分隔的。此时以空串分割：即直接连接
	newStr = shanchuling(newStr);
	// console.log("newStr=" + newStr);
	var zeroDataJson = '[{"zero_number":"3","company":"K"},{"zero_number":"6","company":"M"},{"zero_number":"9","company":"B"},{"zero_number":"12","company":"t"},{"zero_number":"15","company":"q"},{"zero_number":"18","company":"Q"},{"zero_number":"21","company":"s"},{"zero_number":"24","company":"S"},{"zero_number":"27","company":"o"},{"zero_number":"30","company":"n"},{"zero_number":"33","company":"d"},{"zero_number":"36","company":"U"},{"zero_number":"39","company":"D"},{"zero_number":"42","company":"T"},{"zero_number":"45","company":"Qt"},{"zero_number":"48","company":"Qd"},{"zero_number":"51","company":"Sd"},{"zero_number":"54","company":"St"},{"zero_number":"57","company":"O"},{"zero_number":"60","company":"N"},{"zero_number":"63","company":"v"},{"zero_number":"66","company":"c"},{"zero_number":"69","company":"Ka"},{"zero_number":"72","company":"Kb"},{"zero_number":"75","company":"Kc"},{"zero_number":"78","company":"Kd"},{"zero_number":"81","company":"Ke"},{"zero_number":"84","company":"Kf"},{"zero_number":"87","company":"Kg"},{"zero_number":"90","company":"Kh"},{"zero_number":"93","company":"Ki"},{"zero_number":"96","company":"Kj"},{"zero_number":"99","company":"Kk"},{"zero_number":"102","company":"Kl"},{"zero_number":"105","company":"Km"},{"zero_number":"108","company":"Kn"},{"zero_number":"111","company":"Ko"},{"zero_number":"114","company":"Kp"},{"zero_number":"117","company":"Kq"},{"zero_number":"120","company":"Kr"},{"zero_number":"123","company":"Ks"},{"zero_number":"126","company":"Kt"},{"zero_number":"129","company":"Ku"},{"zero_number":"132","company":"Kv"},{"zero_number":"135","company":"Kw"},{"zero_number":"138","company":"Kx"},{"zero_number":"141","company":"ky"},{"zero_number":"144","company":"Kz"},{"zero_number":"147","company":"Ma"},{"zero_number":"150","company":"Mb"},{"zero_number":"153","company":"Mc"},{"zero_number":"156","company":"Md"},{"zero_number":"159","company":"Me"},{"zero_number":"162","company":"Mf"},{"zero_number":"165","company":"Mg"},{"zero_number":"168","company":"Mh"},{"zero_number":"171","company":"Mi"},{"zero_number":"174","company":"Mj"},{"zero_number":"177","company":"Mk"},{"zero_number":"180","company":"Ml"},{"zero_number":"183","company":"Mm"},{"zero_number":"186","company":"Mn"},{"zero_number":"189","company":"Mo"},{"zero_number":"192","company":"Mp"},{"zero_number":"195","company":"Mq"},{"zero_number":"198","company":"Mr"},{"zero_number":"201","company":"Ms"},{"zero_number":"204","company":"Mt"},{"zero_number":"207","company":"Mu"},{"zero_number":"210","company":"Mv"},{"zero_number":"213","company":"Mw"},{"zero_number":"216","company":"Mx"},{"zero_number":"219","company":"My"},{"zero_number":"222","company":"Mz"},{"zero_number":"225","company":"Ba"},{"zero_number":"228","company":"Bb"},{"zero_number":"231","company":"Bc"},{"zero_number":"234","company":"Bd"},{"zero_number":"237","company":"Be"},{"zero_number":"240","company":"Bf"},{"zero_number":"243","company":"Bg"},{"zero_number":"246","company":"Bh"},{"zero_number":"249","company":"Bi"},{"zero_number":"252","company":"Bj"},{"zero_number":"255","company":"Bk"},{"zero_number":"258","company":"Bl"},{"zero_number":"261","company":"Bm"},{"zero_number":"264","company":"Bn"},{"zero_number":"267","company":"Bo"},{"zero_number":"270","company":"Bp"},{"zero_number":"273","company":"Bq"},{"zero_number":"276","company":"Br"},{"zero_number":"279","company":"Bs"},{"zero_number":"282","company":"Bt"},{"zero_number":"285","company":"Bu"},{"zero_number":"288","company":"Bv"},{"zero_number":"291","company":"Bw"},{"zero_number":"294","company":"Bx"},{"zero_number":"297","company":"By"},{"zero_number":"300","company":"Bz"}]';

	var zeroData = JSON.parse(zeroDataJson);
	for(let i in zeroData){
		if (newStr == zeroData[i].company){
			// console.log(zeroData[i].zero_number);
			return parseInt(zeroData[i].zero_number);
		}else if(newStr == '0'){
			return 0;
		}
	}	
}

function shanchuling(result) {
	//首先判断是否全部都是0，是的话直接返回一个0
	if(result == 0) {
		result = '0';
		//返回最终字符串
		return result;
	}
	//把字符串分割成数组
	result = result.split('');
	for(var j=0; j<=result.length; j++) {
		if(result[0] == 0 || result[0] == '.') {
			result.splice(0,1);
		}
	}
	result = result.join("");
	//返回最终字符串
	return result;		
}

	function getLength(str) {
        ///<summary>获得字符串实际长度，中文2，英文1</summary>
        ///<param name="str">要获得长度的字符串</param>
        var realLength = 0, len = str.length, charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;
            else realLength += 2;
        }
        return realLength;
    };

    //js截取字符串，中英文都能用  
    //如果给定的字符串大于指定长度，截取指定长度返回，否者返回源字符串。  
    //字符串，长度  

    /** 
     * js截取字符串，中英文都能用 
     * @param str：需要截取的字符串 
     * @param len: 需要截取的长度 
     */
    function cutstr(str, len) {
        var str_length = 0;
        var str_len = 0;
        var str_cut = new String();
        str_len = str.length;
        for (var i = 0; i < str_len; i++) {
            var a = str.charAt(i);
            str_length++;
            if (escape(a).length > 4) {
                //中文字符的长度经编码之后大于4  
                str_length++;
            }
            str_cut = str_cut.concat(a);
            if (str_length >= len) {
                str_cut = str_cut.concat("...");
                return str_cut;
            }
        }
        //如果给定字符串小于指定长度，则返回源字符串；  
        if (str_length < len) {
            return str;
        }
    }
// // 微信关系数据的获取
// // 上传方法类似、开发者自行填写
// declare namespace wx {
//     /**
//      * 监听消息
//      */
//     const onMessage: (callback: (data: { [key: string]: any }) => void) => void;
//     /**
//      * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
//      * @param keyList 要拉取的 key 列表
//      * @param success 接口调用成功的回调函数
//      * @param fail 	接口调用失败的回调函数
//      * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
//      */
//     const getFriendCloudStorage: (Object: {
//         keyList?: string[],
//         success?: (res: {
//             data: UserGameData[]
//         }) => void,
//         fail?: (err: any) => void,
//         complete?: () => void,
//     }) => void;
//     /**
//      * 在小游戏是通过群分享卡片打开的情况下，可以通过调用该接口获取群同玩成员的游戏数据。该接口只可在开放数据域下使用。
//      * @param shareTicket 群分享对应的 shareTicket
//      * @param keyList 要拉取的 key 列表
//      * @param success 接口调用成功的回调函数
//      * @param fail 接口调用失败的回调函数
//      * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
//      */
//     const getGroupCloudStorage: (Object: {
//         shareTicket: string,
//         keyList: string[],
//         success?: (res: {
//             data: UserGameData[]
//         }) => void,
//         fail?: (err?: any) => void,
//         complete?: () => void,
//     }) => void;
//     /**
//      * 用户数据
//      */
//     type UserGameData = {
//         /** 用户的微信头像 url */
//         avatarUrl: string,
//         /** 用户的微信昵称 */
//         nickName: string,
//         /** 用户的 openId */
//         openId: string,
//         /**用户自定义数据 */
//         KVList: KVData[]
//     }
//     type KVData = {
//         key: string,
//         value: string
//     }
// } 
;window.Main = Main;