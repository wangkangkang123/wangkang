var oOne_ul = document.getElementById('one_ul');

setTimeout(function () {
	One_ul.style.display = 'none';
}, 5000);


// 吸顶效果
var oOne_ul = document.getElementById('one_ul');
window.onscroll = function () {
	var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;


	if(iScrollT > 100) {
		One_ul.className = 'show';
	} else {
		oOne_ul.className = '';
	}
}