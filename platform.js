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
          withShareTicket: true,
			  success: res => {
			  // console.log("showShareMenu true");
			  resolve(res);
			}
        })
      })
    }
	
    
    share(query) {
      let shareArr = [
		{title: " @我，猜一下，这是哪个城市的夜景？",url: "shareImg/fx01.png"},
		{title: "考古学家高度还原始部落，原来长这样！！",url: "shareImg/fx02.png"},
		{title: "你绝对不敢相信，这是地球上真实存在的漂浮岛！！",url: "shareImg/fx03.png"},
		{title: " @我，这个目标真的很小……",url: "shareImg/fx04.png"},
		{title: "老板，您的房子到了！",url: "shareImg/fx05.png"}];
      
      // var ran = Math.floor(Math.random()*100);
	  // var num = 0;
	  // if (ran <=30){
		  // num = 0;
	  // }else if (ran >30 && ran <= 70){
		  // num = 1;
	  // }else{
		  // num = 2;
	  // }
	  var num = Math.floor(Math.random()*5);
      wx.shareAppMessage({
        title: shareArr[num].title,
        imageUrl: shareArr[num].url,
        success(res){
          // console.log("转发成功!!!")
          return true;
        },
        fail(res){
          // console.log("转发失败!!!")
          return false;
        } 
		})
		// console.log(num);
		// return new Promise((resolve,reject) =>{
		// wx.shareAppMessage({
			// title: shareArr[num].title,
			// imageUrl: shareArr[num].url,
			// query: query,
			// success: (res) {
				// console.log("success" + res)
			// },
			// fail:(res){
				  // console.log("fail"+res);
			// }
			// });
		// })
    }
	
	updateShareMenu(withShareTicket) {
		return new Promise((resolve, reject) => {
		  wx.updateShareMenu({
			withShareTicket: withShareTicket,
			success: res => {
			  resolve(res)
			},
			fail: res => {
			  resolve(false)
			}
		  })
		})
	  }
	shareApp(title, imageUrl, query) {
		return this.updateShareMenu(true).then((res) => {
		  if (res) {
			return new Promise((resolve, reject) => {
			  wx.shareAppMessage({
				title: title,
				imageUrl: imageUrl,
				query: query,
				success: res => {
				  resolve(res);
				},
				fail: res => {
				  // console.log(res);
				  resolve(false);
				}
			  })
			})
		  }
		});
	  }

	
	onShow(fun, obj) {
		wx.onShow(function (res) {
		
		fun.call(obj);
		// console.log("微信前台");
		// console.log(res.query);
		return new Promise((resolve,reject) => {
			resolve(res.query);
		})

		})
	}
	onHide(fun, obj) {
		wx.onHide(function () {
		fun.call(obj);
		// console.log("微信退出前台");
		})
	}
	getLaunchOptionsSync(){
		
		let wxData =wx.getLaunchOptionsSync();
		// console.log(wxData);
		return new Promise((resolve,reject) => {
			resolve(wxData);
		})
	}
	
	postGameData(dbname,gamedata){
		wx.cloud.init({
		  env: 'zdc2018test-bfed60'
		})
		// console.log(dbname);
		const db = wx.cloud.database();
		db.collection( dbname ).add({  
			data:gamedata,
			success: function(res) {
				// console.log("插入成功")
				// console.log(res)
			},
			fail: function(res) {
				// console.log("插入失败")
				// console.log(res)
			}
		})
	}
	getGameData(dbname){
		wx.cloud.init({
		  env: 'zdc2018test-bfed60'
		})
		let oldData = new Array();
		// console.log(dbname);
		const db = wx.cloud.database();
		return new Promise((resolve, reject) => {
            db.collection( dbname ).limit(1).where({
			_openid: 'oWfvD5A2ot_CjXkz45K073aGe6MU'
			}).orderBy('due','desc').get().then(res => {
			// console.log("微信获取成功");
			// console.log(res.data);
			resolve(res.data);
			});
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
        // console.log(res)
      })
      return button;
    }
    destroyUserInfoButton(){
      UserInfoButton.destroy()
    }
	getUserInfo(xPercent, yPercent, wPercent, hPercent) {
			let sysInfo = wx.getSystemInfoSync();
			//获取微信界面大小
			let width = sysInfo.screenWidth;
			let height = sysInfo.screenHeight;
			return new Promise((resolve, reject) => {
				let sysInfo = wx.getSystemInfoSync();
				let sdkVersion = sysInfo.SDKVersion;
				// sdkVersion = sdkVersion.replace(/\./g, "");
				// sdkVersion = sdkVersion.substr(0, 3);
				// let sdkVersionNum = parseInt(sdkVersion);
				// console.log("platform获取用户授权:", sdkVersion);
				//if (sdkVersionNum >= 201) {
				if (sdkVersion >= "2.0.1") {
					var button = wx.createUserInfoButton({
						type: 'text',
						text: '',
						//image: "resource/assets_game/main/button_wx_getuserinfo.png",
						style: {
							left: xPercent,
							top: yPercent,
							width: wPercent,
							height: hPercent,
							// backgroundColor: '#ff0000',
							// color: '#ffffff',
						}
					});
					button.onTap((res) => {
						if(res.userInfo){
							// console.log("用户授权:", res);
							var userInfo = res.userInfo;
							var nickName = userInfo.nickName;
							var avatarUrl = userInfo.avatarUrl;
							var gender = userInfo.gender; //性别 0：未知、1：男、2：女
							var province = userInfo.province;
							var city = userInfo.city;
							var country = userInfo.country;
							button.destroy();
							resolve(userInfo);
						}
					});
					// console.log(button);
				}else {
					wx.getUserInfo({
						withCredentials: true,
						success: res => {
							var userInfo = res.userInfo;
							var nickName = userInfo.nickName;
							var avatarUrl = userInfo.avatarUrl;
							var gender = userInfo.gender; //性别 0：未知、1：男、2：女
							var province = userInfo.province;
							var city = userInfo.city;
							var country = userInfo.country;
							resolve(userInfo);
						},
						fail: res => {
							wx.showModal({
								title: '友情提醒',
								content: '请允许微信获得授权!',
								confirmText: "授权",
								showCancel: false,
								success: res => {
									resolve(null);
								}
							});
						}
					});
				}
			})
	}

	setUserCloudStorage(KVDataList) {
		return new Promise((resolve, reject) => {
		  wx.setUserCloudStorage({
			KVDataList: KVDataList,
			success: res => {
			  // console.log('success', res);
			  resolve(res);
			},
			fail: res => {
			  // console.log('fail', res);
			}
		  })
		})
	}
	
	getUserCloudStorage(){
		return new Promise((resolve,reject) => {
			wx.getUserCloudStroage({
				keyList: ["score"],
				success(res){
					// console.log("自己的托管数据");
					if(res.KVDataList){
						var dList = res.KVDataList;
						// console.log("自己的托管数据1:dList.length=" + dList.length);
						for(var i = 0; i < dList.length; i++){
							if(dList[i].key == "score"){
								// console.log("自己的托管数据1:" + dList[i].value);
								resolve(dList[i].value);
							}
						}
					}                
				},
				fail(){
					//console.log(res)
					// console.log("获取自己的托管数据失败");
				}
			})
		})
	}
	
	createRewardedVideoAd(){
		var sysInfo = wx.getSystemInfoSync();
		var sdkVersion = sysInfo.SDKVersion;
		if (this.compareVersion(sdkVersion, '2.0.4') >= 0) {
			this.rewardedVideoAd = wx.createRewardedVideoAd({adUnitId: 'adunit-0fb861fe7b1ca7fe'})
			console.log(this.rewardedVideoAd);
			return this.rewardedVideoAd;	
		}else{
			wx.showModal({
				title: '提示',
				content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
			})
		}
	}
	
	
	showBannerAD(left,top,width,id){
		var sysInfo = wx.getSystemInfoSync();
		console.log(sysInfo);
		var  left1 = left*sysInfo.windowWidth;
		var  top1 = top*sysInfo.windowHeight;
		var  width1 = width*sysInfo.windowWidth;
		var  height = 90/1135*sysInfo.windowHeight;
		// console.log(left1);
		// console.log(top1);
		// console.log(width);
		// console.log(height);
		var sdkVersion = sysInfo.SDKVersion;
		if (this.compareVersion(sdkVersion, '2.0.4') >= 0) {
			const bannerAd = wx.createBannerAd({
			  adUnitId: id,
			  style: {
				left: left1,
				top: top1,
				width: width1,
				height: 77
			  }
			})

			bannerAd.show()
			// console.log(bannerAd);
			return bannerAd;
		}
		
	}
	/**
	*
	*/
	createInnerAudioContext(bgMusic){
		const innerAudioContext = wx.createInnerAudioContext()
		innerAudioContext.autoplay = true
		innerAudioContext.src = "resource/res/sound/"+bgMusic;
		console.log(innerAudioContext.src)
		innerAudioContext.onError((res) => {
		  console.log(res.errMsg)
		  console.log(res.errCode)
		})
		return innerAudioContext;
		
	}
	
	compareVersion(v1, v2) {
		v1 = v1.split('.')
		v2 = v2.split('.')
		const len = Math.max(v1.length, v2.length)

		while (v1.length < len) {
			v1.push('0')
		}
		while (v2.length < len) {
			v2.push('0')
		}

		for (let i = 0; i < len; i++) {
			const num1 = parseInt(v1[i])
			const num2 = parseInt(v2[i])

			if (num1 > num2) {
			  return 1
			} else if (num1 < num2) {
			  return -1
			}
		}

		return 0
	}
	
	exitGame(){
		wx.exitMiniProgram();
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
        // console.log(width);
        // console.log(height);
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