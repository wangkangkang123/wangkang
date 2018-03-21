
function $(id) {
	return document.getElementById(id);
}

var oBoxa  	   = $('boxa');
var oSmallBox  = $('small-box');
var aSmallImg  = Array.from(oSmallBox.children);
var oMiddleBox = $('middle-box');
var oMiddleImg = $('middle-img');
var oTwone       =$('twone');
//给缩略图添加鼠标进入事件
aSmallImg.forEach( v => {
	v.onmouseover = function () {
		// 先去掉所有的class名
		aSmallImg.forEach(v => v.className = '');

		// 当前img添加class
		this.className = 'active';

		// 改变中型图片的地址
		oMiddleImg.src = this.src;
	};
});
aMiddleImg.forEach( v => {
	v.onmouseover = function () {
		// 先去掉所有的class名
		aMiddleImg.forEach(v => v.className = '');

		// 当前img添加class
		this.className = 'active';

		// 改变中型图片的地址
		oTwone.src = this.src;
	};
});

