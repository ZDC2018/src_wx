/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

    name = 'wxgame'

    login() {
        return new Promise((resolve, reject) => {
            wx.login({
                success: (res) => {
                    resolve(res)
                }
            })
        })
    }
    showShareMenu() {
      return new Promise((resolve, reject) => {
        wx.showShareMenu({
          withShareTicket: true
        })
      })
    }

    
    share() {
      wx.shareAppMessage({
        title: "地产之王",
        imageUrl: "resource/res/success.png",
        query: ""
      });
    }
	
	onShow(fun, obj) {
		wx.onShow(function () {
		fun.call(obj);
		console.log("微信前台");
		})
	}
	onHide(fun, obj) {
		wx.onHide(function () {
		fun.call(obj);
		console.log("微信退出前台");
		})
	}
	
	postGameData(dbname,gamedata){
		wx.cloud.init({
		  env: 'zdc2018test-bfed60'
		})
		console.log(dbname);
		const db = wx.cloud.database();
		db.collection( dbname ).add({  
			data:gamedata,
			success: function(res) {
				console.log("插入成功")
				console.log(res)
			},
			fail: function(res) {
				console.log("插入失败")
				console.log(res)
			}
		})
	}
	getGameData(dbname){
		wx.cloud.init({
		  env: 'zdc2018test-bfed60'
		})
		console.log(dbname);
		const db = wx.cloud.database();
		db.collection( dbname ).where({
		  _openid: 'oWfvD5A2ot_CjXkz45K073aGe6MU'
		}).get({  
			success: function(res) {
				console.log("获取成功")
				console.log(res)
			},
			fail: function(res) {
				console.log("获取失败")
				console.log(res)
			}
		})
	}
    createUserInfoButton(){
      let stageWidth = 640;
      let stageHeight = 1138;
      let button = wx.createUserInfoButton({
        type: 'text',
        text: '用户信息',
        style: {
          left: 150,
          top: 100,
          width: 100,
          height: 40,
          lineHeight: 40,
          backgroundColor: '#ff0000',
          color: '#ffffff',
          textAlign: 'center',
          fontSize: 16,
          borderRadius: 4
        }
      })
      button.onTap((res) => {
        console.log(res)
      })
      return button;
    }
    destroyUserInfoButton(){
      UserInfoButton.destroy()
    }
    getUserInfo() {
        return new Promise((resolve, reject) => {
            wx.getUserInfo({
                withCredentials: true,
                success: function (res) {
                    var userInfo = res.userInfo
                    var nickName = userInfo.nickName
                    var avatarUrl = userInfo.avatarUrl
                    var gender = userInfo.gender //性别 0：未知、1：男、2：女
                    var province = userInfo.province
                    var city = userInfo.city
                    var country = userInfo.country
                    resolve(userInfo);
                }
            })
        })
    }
	setUserCloudStorage(KVDataList) {
		return new Promise((resolve, reject) => {
		  wx.setUserCloudStorage({
			KVDataList: KVDataList,
			success: res => {
			  console.log('success', res);
			  resolve(res);
			},
			fail: res => {
			  console.log('fail', res);
			}
		  })
		})
	}
	
	getUserCloudStorage(){
		return new Promise((resolve,reject) => {
			wx.getUserCloudStroage({
				keyList: ["score"],
				success(res){
					console.log("自己的托管数据");
					if(res.KVDataList){
						var dList = res.KVDataList;
						console.log("自己的托管数据1:dList.length=" + dList.length);
						for(var i = 0; i < dList.length; i++){
							if(dList[i].key == "score"){
								console.log("自己的托管数据1:" + dList[i].value);
								resolve(dList[i].value);
							}
						}
					}                
				},
				fail(){
					//console.log(res)
					console.log("获取自己的托管数据失败");
				}
			})
		})
	}


    openDataContext = new WxgameOpenDataContext();
}

class WxgameOpenDataContext {

    createDisplayObject(type, width, height) {
        const bitmapdata = new egret.BitmapData(sharedCanvas);
        bitmapdata.$deleteSource = false;
        const texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        const bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;
        console.log(width);
        console.log(height);
        if (egret.Capabilities.renderMode == "webgl") {
            const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
            const context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            if (!context.wxBindCanvasTexture) {
                egret.startTick((timeStarmp) => {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
            }
        }
        return bitmap;
    }


    postMessage(data) {
        const openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage(data);
    }
}


window.platform = new WxgamePlatform();