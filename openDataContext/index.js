/**
 * 微信开放数据域
 * 使用 Canvas2DAPI 在 SharedCanvas 渲染一个排行榜，
 * 并在主域中渲染此 SharedCanvas
 */



/**
 * 资源加载组，将所需资源地址以及引用名进行注册
 * 之后可通过assets.引用名方式进行获取
 */
const assetsUrl = {
  box: "openDataContext/assets/ranking_no4.png",
  box1: "openDataContext/assets/ranking_no1.png",
  box2: "openDataContext/assets/ranking_no2.png",
  box3: "openDataContext/assets/ranking_no3.png",
  head: "openDataContext/assets/ranking_head.png",
  panel: "openDataContext/assets/ranking_base.png",
  expend: "openDataContext/assets/ranking_expend.png",
  button_l: "openDataContext/assets/button_l.png",
  button_r: "openDataContext/assets/button_r.png"
};


/**
 * 资源加载组，将所需资源地址以及引用名进行注册
 * 之后可通过assets.引用名方式进行获取
 */
var assets = {};
console.log();
/**
 * canvas 大小
 * 这里暂时写死
 * 需要从主域传入
 */
let canvasWidth;
let canvasHeight;



//获取canvas渲染上下文
const context = sharedCanvas.getContext("2d");
context.globalCompositeOperation = "source-over";


/**
 * 所有头像数据
 * 包括姓名，头像图片，得分
 * 排位序号i会根据parge*perPageNum+i+1进行计算
 */
let totalGroup = [{
  key: 1,
  name: "1111111111",
  url: assets.icon,
  scroes: 10000
}];
/**
 * 创建排行榜
 */
function drawRankPanel() {
  // console.log("创建排行榜");
  // console.log(assets);
  //绘制背景
  context_drawImage(assets.panel, offsetX_rankToBorder, offsetY_rankToBorder, rankWidth, rankHeight);
  //绘制标题
  // const title = assets.title;
  
  //根据title的宽高计算一下位置;
  // const titleX = offsetX_rankToBorder + (rankWidth - title.width) / 2;
  // const titleY = offsetY_rankToBorder + title.height + 40;
  //context_drawImage(title, titleX, titleY);
  //获取当前要渲染的数据组

  //起始id
  const startID = perPageMaxNum * page;
  currentGroup = totalGroup.slice(startID, startID + perPageMaxNum);
  //创建头像Bar
  drawRankByGroup(currentGroup);
  drawByData(selfInfo,4.5);
  //创建按钮
  // drawButton()
}
/**
 * 根据屏幕大小初始化所有绘制数据
 */
function init() {
	//排行榜绘制数据初始化,可以在此处进行修改
	rankWidth = stageWidth *0.98;
	rankHeight = rankWidth * 1.5;
	barWidth = rankWidth * 4 / 5;
	barHeight = stageHeight / 2 / perPageMaxNum;
	offsetX_rankToBorder = (stageWidth - rankWidth) / 2;
	offsetY_rankToBorder = (stageHeight - rankHeight) / 2;
	preOffsetY = (rankHeight - barHeight) / (perPageMaxNum + 1) -10;
	fontSize = Math.floor(stageWidth / 25);
	startX = offsetX_rankToBorder + (rankWidth - barWidth) / 2;
	startY = offsetY_rankToBorder + preOffsetY + barHeight/2;
	avatarSize = barHeight*4/5 - 10;
	intervalX = barWidth / 20;
	textOffsetY = (barHeight + fontSize) / 2;
	textMaxSize = barWidth / 3;
	// indexWidth = context.measureText("99").width;
	indexWidth = barWidth / 6;
	//按钮绘制数据初始化
	buttonWidth = barWidth / 3;
	buttonHeight = barHeight / 2;
	buttonOffset = rankWidth / 3;
	lastButtonX = offsetX_rankToBorder + buttonOffset - buttonWidth;
	nextButtonX = offsetX_rankToBorder + 2 * buttonOffset;
	nextButtonY = lastButtonY = offsetY_rankToBorder + rankHeight - 50 - buttonHeight;
	let data = wx.getSystemInfoSync();
	canvasWidth = data.windowWidth;
	canvasHeight = data.windowHeight;
	const sharedCanvas = wx.getSharedCanvas();
	console.log("sharedCanvas");
	console.log(sharedCanvas);
	var sharedCanvasWidth = sharedCanvas.width;
	var sharedCanvasHeight = sharedCanvas.height;
}

/**
 * 创建两个点击按钮
 */
function drawButton() {
  context_drawImage(assets.button_r, nextButtonX, nextButtonY, buttonWidth, buttonHeight);
  context_drawImage(assets.button_l, lastButtonX, lastButtonY, buttonWidth, buttonHeight);
}


/**
 * 根据当前绘制组绘制排行榜
 */
function drawRankByGroup(currentGroup) {
  for (let i = 0; i < currentGroup.length; i++) {
    const data = currentGroup[i];
    drawByData(data, i);
  }
}

/**
 * 根据绘制信息以及当前i绘制元素
 */
function drawByData(data, i) {
  let x = startX;
  //绘制底框
  if (data.key == 0){
	context_drawImage(assets.box1, startX, startY + i * preOffsetY, barWidth, barHeight);
	x += indexWidth/2;	
  }else if (data.key == 1){
	context_drawImage(assets.box2, startX, startY + i * preOffsetY, barWidth, barHeight); 
	x += indexWidth/2;
  }else if (data.key == 2){
	context_drawImage(assets.box3, startX, startY + i * preOffsetY, barWidth, barHeight);
	x += indexWidth/2;
  }else{
	context_drawImage(assets.box, startX, startY + i * preOffsetY, barWidth, barHeight);
	x += indexWidth/2;
	//设置字体
	context.font = fontSize*2 + "px 黑体";
	context.fillStyle = 'white';
	//绘制序号
	let key = data.key + 1;
	context.fillText(key + "", x, startY + i * preOffsetY + textOffsetY, textMaxSize);
  }
  
  x += indexWidth/2 + intervalX*3/2 ;
  //绘制头像
  var image = wx.createImage();
  image.src = data.url
  image.onload = function () {
    renderDirty = true;
  }
   //绘制头像白边
  context_drawImage(assets.head, x - 10, startY + i * preOffsetY + (barHeight - avatarSize) / 2 - 10, avatarSize, avatarSize);
  context.drawImage(image, x, startY + i * preOffsetY + (barHeight - avatarSize) / 2, avatarSize*0.8, avatarSize*0.8);
  x += avatarSize + intervalX*2;
  //绘制名称
  context.font = fontSize*4/5 + "px 黑体";
  context.fillStyle = 'white';
  context.fillText(data.name + "", x, startY + i * preOffsetY + textOffsetY/2, textMaxSize);
  x -= intervalX;
  
  context.font = fontSize + "px 黑体 bolder";
  context.fillStyle = '#B5392C';
  context.fillText("消耗" + "", x, startY + i * preOffsetY + textOffsetY + barHeight/8, textMaxSize);
  //绘制消耗金币
  x += 2*intervalX + 20;
  context_drawImage(assets.expend, x, startY + i * preOffsetY + barHeight/2, barHeight/3, barHeight/3);
  x += 2*intervalX;
  //绘制分数
  context.fillText(":"+data.scores + "", x, startY + i * preOffsetY + textOffsetY + barHeight/8, textMaxSize);
}

/**
 * 点击处理
 */
function onTouchEnd(event) {
  let x = event.clientX * sharedCanvas.width / canvasWidth;
  let y = event.clientY * sharedCanvas.height / canvasHeight;
  if (x > lastButtonX && x < lastButtonX + buttonWidth &&
    y > lastButtonY && y < lastButtonY + buttonHeight) {
    //在last按钮的范围内
    if (page > 0) {
      buttonClick(0);

    }
  }
  if (x > nextButtonX && x < nextButtonX + buttonWidth &&
    y > nextButtonY && y < nextButtonY + buttonHeight) {
    //在next按钮的范围内
    if ((page + 1) * perPageMaxNum < totalGroup.length) {
      buttonClick(1);
    }
  }

}
/**
 * 根据传入的buttonKey 执行点击处理
 * 0 为上一页按钮
 * 1 为下一页按钮
 */
function buttonClick(buttonKey) {
  let old_buttonY;
  if (buttonKey == 0) {
    //上一页按钮
    old_buttonY = lastButtonY;
    lastButtonY += 10;
    page--;
    renderDirty = true;
    console.log('上一页' + page);
    setTimeout(() => {
      lastButtonY = old_buttonY;
      //重新渲染必须标脏
      renderDirty = true;
    }, 100);
  } else if (buttonKey == 1) {
    //下一页按钮
    old_buttonY = nextButtonY;
    nextButtonY += 10;
    page++;
    renderDirty = true;
    console.log('下一页' + page);
    setTimeout(() => {
      nextButtonY = old_buttonY;
      //重新渲染必须标脏
      renderDirty = true;
    }, 100);
  }

}

/////////////////////////////////////////////////////////////////// 相关缓存数据

///////////////////////////////////数据相关/////////////////////////////////////

/**
 * 渲染标脏量
 * 会在被标脏（true）后重新渲染
 */
let renderDirty = true;

/**
 * 当前绘制组
 */
let currentGroup = [];
/**
 * 每页最多显示个数
 */
let perPageMaxNum = 5;
/**
 * 当前页数,默认0为第一页
 */
let page = 0;
///////////////////////////////////绘制相关///////////////////////////////
/**
 * 舞台大小
 */
let stageWidth;
let stageHeight;
/**
 * 排行榜大小
 */
let rankWidth;
let rankHeight;

/**
 * 每个头像条目的大小
 */
let barWidth;
let barHeight;
/**
 * 条目与排行榜边界的水平距离
 */
let offsetX_barToRank
/**
 * 绘制排行榜起始点X
 */
let startX;
/**
 * 绘制排行榜起始点Y
 */
let startY;
/**
 * 每行Y轴间隔offsetY
 */
let preOffsetY;
/**
 * 按钮大小
 */
let buttonWidth;
let buttonHeight;
/**
 * 上一页按钮X坐标
 */
let lastButtonX;
/**
 * 下一页按钮x坐标
 */
let nextButtonX;
/**
 * 上一页按钮y坐标
 */
let lastButtonY;
/**
 * 下一页按钮y坐标
 */
let nextButtonY;
/**
 * 两个按钮的间距
 */
let buttonOffset;

/**
 * 字体大小
 */
let fontSize;
/**
 * 文本文字Y轴偏移量
 * 可以使文本相对于图片大小居中
 */
let textOffsetY;
/**
 * 头像大小
 */
let avatarSize;
/**
 * 名字文本最大宽度，名称会根据
 */
let textMaxSize;
/**
 * 绘制元素之间的间隔量
 */
let intervalX;
/**
 * 排行榜与舞台边界的水平距离
 */
let offsetX_rankToBorder;
/**
 * 排行榜与舞台边界的竖直距离
 */
let offsetY_rankToBorder;
/**
 * 绘制排名的最大宽度
 */
let indexWidth;

//////////////////////////////////////////////////////////
/**
 * 监听点击
 */
wx.onTouchEnd((event) => {
  const l = event.changedTouches.length;
  for (let i = 0; i < l; i++) {
    onTouchEnd(event.changedTouches[i]);
  }
});


/**
 * 是否加载过资源的标记量
 */
let hasLoadRes;

/**
 * 资源加载
 */
function preloadAssets() {
  let preloaded = 0;
  let count = 0;
  for (let asset in assetsUrl) {
    count++;
    const img = wx.createImage();
    img.onload = () => {
      preloaded++;
      if (preloaded == count) {
        // console.log("加载完成");
        hasLoadRes = true;
      }

    }
    img.src = assetsUrl[asset];
    assets[asset] = img;

    
  }
}


/**
 * 绘制屏幕
 * 这个函数会在加载完所有资源之后被调用
 */
function createScene() {
  if (sharedCanvas.width && sharedCanvas.height) {
    // console.log('初始化完成')
    stageWidth = sharedCanvas.width;
    stageHeight = sharedCanvas.height;
    init();
    return true;
  } else {
    console.log('创建开放数据域失败，请检查是否加载开放数据域资源');
    return false;
  }
}


//记录requestAnimationFrame的ID
let requestAnimationFrameID;
let hasCreateScene;

/**
 * 增加来自主域的监听函数
 */
function addOpenDataContextListener() {
  // console.log('增加监听函数')
  wx.onMessage((data) => {
    // console.log(data);
    if (data.command == 'open') {
      if (!hasCreateScene) {
        //创建并初始化
        // console.log('创建并初始化')
        
        hasCreateScene = createScene();
      }
      
      totalGroup = [];
      page = 0;
      renderDirty = true;
      // 创建并初始化
		getUserInfo();
		getUserScore();
		setFirendList();

      requestAnimationFrameID = requestAnimationFrame(loop);
    } else if (data.command == 'close' && requestAnimationFrameID) {
      cancelAnimationFrame(requestAnimationFrameID);
      requestAnimationFrameID = null
    } else if (data.command == 'loadRes' && !hasLoadRes) {
      /**
       * 加载资源函数
       * 只需要加载一次
       */
      // console.log('加载资源')
      preloadAssets();
    } else if (data.command == 'paging' && !renderDirty){
		
		let deltaY = data.deltaY;
		console.log("收到移动Y坐标"+deltaY);
		const newOffsetY = offsetY + deltaY;
		// if (newOffsetY < 0) {
			// // console.log("前面没有更多了");
			// return;
		// }
		// if (newOffsetY + sharedCanvasHeight > contentHeight) {
			// // console.log("后面没有更多了");
			// return;
		// }
		// let rank_page_height = barHeight * perPageMaxNum;
		// let pageIndex = Math.floor(offsetY / rank_page_height);
		// page += pageIndex;
		// console.log("page:"+page)
		// offsetY = newOffsetY;
		renderDirty = true;//标脏，重新绘制排行榜
	}
  });
}

addOpenDataContextListener();

let selfName;
let selfHead;
let selfNode;
//获取自己头像、名称信息用于比较
function getUserInfo(){
	wx.getUserInfo({
		openIdList: ['selfOpenId'],
		lang: 'zh_CN',
		success(res){
			if(res.data){
				console.log(res.data);
				if(res.data[0].nickName != undefined && res.data[0].avatarUrl != undefined){
					selfName = res.data[0].nickName;
					console.log("自己的信息1:nickname=" + res.data[0].nickName);
					selfHead = res.data[0].avatarUrl;
					console.log("自己的信息1:avatarUrl=" + res.data[0].avatarUrl);
					// selfNode.active = true;
				}else{
					console.log("自己的信息1:undefined");
				}
			}                
		},
		fail(){
			//console.log(res)
			console.log("获取自己的信息失败");
		}
	})
}
//获取自己的积分信息
let selfScore;
function getUserScore(){
	wx.getUserCloudStorage({
		keyList: ["score"],
		success(res){
			console.log("自己的托管数据");
			if(res.KVDataList){
				var dList = res.KVDataList;
				console.log("自己的托管数据1:dList.length=" + dList.length);
				for(var i = 0; i < dList.length; i++){
					if(dList[i].key == "score"){
						console.log("自己的托管数据1:" + dList[i].value);
						selfScore = dList[i].value;
						break;
					}
				}
			}                
		},
		fail(){
			//console.log(res)
			console.log("获取自己的托管数据失败");
		}
	})
}

let selfInfo = {};
function setSelfInfo(selfDataIndex){
	selfInfo.name = selfName;
	selfInfo.url = selfHead;
	selfInfo.scores = selfScore;
	selfInfo.key = selfDataIndex;
}

function setGroupList(groupid) {
  wx.getGroupCloudStorage({
    shareTicket: groupid,
    keyList: ["score"],
    success: res => {
      // console.log("getFriendCloudStorage", res);
      if (!res.data) { return; }
      // console.log("qqq", 1);
	  sortList(res.data, false); 
      kvlist2totogroup(res.data);

    },
    fail: err => {
      // console.log(err);
    },
    complete: () => {
    }
  });
}

let offsetY;
let contentHeight;

function setFirendList() {
  wx.getFriendCloudStorage({
    keyList: ["score"],
    success: res => {
		console.log("getFriendCloudStorage", res);
		if (!res.data) { return; }
		console.log("qqq", 1);
		sortList(res.data, true); 
		kvlist2totogroup(res.data);
		offsetY = 0;
		contentHeight = res.data.length * (barHeight+10);//算出排行榜总高度
		//获得自己对应的data索引
		var selfDataIndex = null;
		//先比较昵称
		var sameNameList = [];
		for(var i = 0; i < res.data.length; i++){
			if(res.data[i].nickname == selfName){
				sameNameList.push(i);
			}
		}
		if(sameNameList.length < 1){
			console.log("Rank:好友的信息1：未找到同名自己");
		}else if(sameNameList.length == 1){
			console.log("Rank:好友的信息2：找到1个同名自己");
			selfDataIndex = sameNameList[0];
		}else{
			//再比较头像
			var sameHeadList = [];
			for(var i = 0; i < sameNameList.length; i++){
				if(res.data[i].avatarUrl == selfHead){
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
						if(dList[j].key == "score" && dList[j].value == selfScore){
							sameMaxScoreList.push(i);
						}
					}
				}
				if(sameMaxScoreList.length < 1){
					console.log("Rank:好友的信息3：未找到同周最高积分自己");
				}else if(sameMaxScoreList.length == 1){
					selfDataIndex = sameMaxScoreList[0];
				}else{ //到这里，发现多个同昵称、同头像、同最高积分的玩家，只能随机了
					var value = Math.floor(Math.random() * (sameMaxScoreList.length - 1 + 1) + 1) - 1;
					selfDataIndex = sameMaxScoreList[value - 1];
				}
			}
		}
		console.log("Rank:selfDataIndex=" + selfDataIndex);
		//设置自己的信息
		setSelfInfo(selfDataIndex);
		
    },
    fail: err => {
      console.log(err);
    },
    complete: () => {
    }
  });
}


//把微信的数据转化成我们的数据
function kvlist2totogroup(reslist) {
  let dataList = [];
  reslist.forEach((data) => {
    if (data.KVDataList.length > 0) {
      dataList.push(data);
    }
  });
  if (dataList.length === 0) {
    return;
  }
  dataList.sort((a, b) => {
    return a.KVDataList[0].value - b.KVDataList[0].value;
  });
  totalGroup = [];
  for (var i = 0; i < dataList.length; i++) {
    var obj = {};
    obj.key = i;
    obj.name = dataList[i].nickname;
    obj.url = dataList[i].avatarUrl;
    obj.scores = dataList[i].KVDataList[0].value;
    totalGroup.push(obj);
  }


  renderDirty = true;
}

/**
 * 循环函数
 * 每帧判断一下是否需要渲染
 * 如果被标脏，则重新渲染
 */
function loop() {
  if (renderDirty) {
    // console.log(`stageWidth :${stageWidth}   stageHeight:${stageHeight}`)
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, sharedCanvas.width, sharedCanvas.height);

    drawRankPanel();
    renderDirty = false;
  }
  requestAnimationFrameID = requestAnimationFrame(loop);
}

/**
 * 图片绘制函数
 */
function context_drawImage(image, x, y, width, height) {
  if (image.width != 0 && image.height != 0 && context) {
    if (width && height) {
      context.drawImage(image, x, y, width, height);
    } else {
      context.drawImage(image, x, y);
    }
  }
}

//排序函数
function sortList(ListData, order){ //排序(ListData：res.data;order:true降序，false升序)
	ListData.sort(function(a,b){
		var AMaxScore = 0;
		var KVDataList = a.KVDataList;
		for(var i = 0; i < KVDataList.length; i++){
			if(KVDataList[i].key == "score"){
			AMaxScore = KVDataList[i].value;
			}
		}


		var BMaxScore = 0;
		KVDataList = b.KVDataList;
		for(var i = 0; i<KVDataList.length; i++){
			if(KVDataList[i].key == "score"){
			BMaxScore = KVDataList[i].value;
			}
		}


		if(order){
			return parseInt(AMaxScore) - parseInt(BMaxScore);
		}else{
			return parseInt(BMaxScore) - parseInt(AMaxScore);
		}
	});
	return ListData;
}
