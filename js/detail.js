//获取所需页面元素
			//获取大盒子
			let oBigDiv = document.getElementById("div1");
			//获取小图所在的盒子
			let oSmallPic = byClassName(document,'small_pic')[0];
			//获取遮罩层
			let oMark = byClassName(document,'mark')[0];
			//获取滑块
			let oFloat = byClassName(document,'float_layer')[0];
			//获取大图所在的盒子
			let oBigPic = byClassName(document,'big_pic')[0];
			//获取大图
			let oBigImage = oBigPic.getElementsByTagName('img')[0];
			//给遮罩层加鼠标移入事件
			oMark.onmouseenter = function(){
				oFloat.style.display = 'block';
				oBigPic.style.display = 'block';
			}
			//给遮罩层加鼠标移出事件
			oMark.onmouseleave = function(){
				oFloat.style.display = 'none';
				oBigPic.style.display = 'none';
			}
			//鼠标跟随
			oMark.onmousemove = function(evt){
				//事件对象的兼容
				let e = evt || window.event;
				let left = e.pageX - oBigDiv.offsetLeft - oMark.offsetLeft - oFloat.offsetWidth / 2;
				let top = e.pageY - oBigDiv.offsetTop - oMark.offsetTop - oFloat.offsetHeight / 2;
				//设置边界
				if(left <= oMark.offsetLeft){
					left = oMark.offsetLeft;
				}else if(left >= oMark.offsetWidth - oFloat.offsetWidth){
					left = oMark.offsetWidth - oFloat.offsetWidth;
				}
				if(top <= oMark.offsetTop){
					top = oMark.offsetTop;
				}else if(top >= oMark.offsetHeight - oFloat.offsetHeight){
					top = oMark.offsetHeight - oFloat.offsetHeight;
				}
				oFloat.style.left = left + 'px';
				oFloat.style.top = top + 'px';
				
				
				//计算滑块在小图中移动的比例
				let pX = left / (oMark.offsetWidth - oFloat.offsetWidth);
				let pY = top / (oMark.offsetHeight - oFloat.offsetHeight);
				//设置大图的移动
				oBigImage.style.left = - pX * (oBigImage.offsetWidth - oBigPic.offsetWidth) + 'px';
				oBigImage.style.top = - pY * (oBigImage.offsetHeight - oBigPic.offsetHeight) + 'px';
			}
			
			
			function byClassName(obj,className){
				if(obj.getElementsByClassName){
					return obj.getElementsByClassName(className);
				}else{
					let arr = [];
					let eles = document.getElementsByTagName('*');
					for(let i = 0,len = eles.length;i < len;i ++){
						if(eles[i].className === className){
							arr.push(eles[i]);
						}
					}
					return arr;
				}
			}