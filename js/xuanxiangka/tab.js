(function ($) {
	// 创建Tab构造函数
	var Tab = function (tab) {
		// 获取菜单LI
		var aMenuLi = tab.find('.one_ul li');


		// 获取所有的panel
		var aPanel = tab.find('.tab');

		aMenuLi.mouseover(function () {
			var index = $(this).index();
			
			// 切换菜单
			aMenuLi.removeClass('active').eq(index).addClass('active');
			// 切换panel
			aPanel.removeClass('active').eq(index).addClass('active');
		

		});
		$('.one').mouseleave(function () {
			var index = $(this).index();
          $('.tab').removeClass('active');
        });
	};
	// 注册成jQuery方法
	$.fn.extend({
		tab: function () {
			this.each(function (k, v) {
				new Tab($(v));
			});
		}
	});
})(jQuery);