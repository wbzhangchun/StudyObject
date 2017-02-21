window.onload = function() {
	/*nav部分*/
	var aLi = document.querySelectorAll(".li_list");
	var aSub = document.querySelectorAll("nav li div");
	for(var i = 0; i < aLi.length; i++) {
		(function(a) {
			aLi[a].onmouseover = function() {
				aSub[a].style.display = "block";
			};
			aLi[a].onmouseout = function() {
				aSub[a].style.display = "none";
			};
		})(i);
	}
	var App_icon = document.querySelector(".app_icon");
	var Sub_phone = document.getElementById("sub_phone");
	var Login_icon = document.querySelector(".login_icon");
	var Submenu = document.querySelector(".login_icon .submenu");
	App_icon.onmouseover = function() {
		Sub_phone.style.display = "block";
	}
	App_icon.onmouseout = function() {
		Sub_phone.style.display = "none";
	}
	Login_icon.onmouseover = function() {
		Submenu.style.display = "block";
	}
	Login_icon.onmouseout = function() {
		Submenu.style.display = "none";
	}
	var Close_btn = document.getElementById("close_btn");
	var Searchbox = document.querySelector(".searchbox");
	var Search_icon = document.querySelector(".search_icon");

	Search_icon.onclick = function() {
		fadeIn(Searchbox);
		Close_btn.onclick = (function() {
			fadeOut(Searchbox);
		})
	};

	function setOpacity(elem, level) {
		if(elem.filters) {
			elem.style.filter = "alpha(opacity=" + level + ")";
		} else {
			elem.style.opacity = level / 100;
		}
	}

	function fadeIn(elem) {
		elem.style.webkitTransition = "width 4s ease-out";
		elem.style.MozTransition = "width 4s ease-out";
		elem.style.msTransition = "width 4s ease-out";
		elem.style.Width= 850+"px";
		setOpacity(elem, 0);
		elem.style.zIndex="1000";
		for(var i = 0; i < 10; i++) {
			(function() {
				var pos = i * 20;
				setTimeout(function() {
					setOpacity(elem, pos)
				}, i * 10);
			})(i);
		}
	};

	function fadeOut(elem) {
		elem.style.webkitTransition = "width 0.5s ease-in";
		elem.style.MozTransition = "width 0.5s ease-in";
		elem.style.msTransition = "width 0.5s ease-in";
		elem.style.Width = 85 + 'px';
		elem.style.zIndex="-1000";
		for(var i = 0; i <= 10; i++) {
			(function() {
				var pos = 100 - i * 10;
				setTimeout(function() {
					setOpacity(elem, pos)
				}, i * 25);
			})(i);
		}
	};
	/*gotop部分*/
	var Companyapp = document.querySelector(".company_app");
	var Appewm = document.querySelector(".appewm");
	Companyapp.onmouseover = function() {
		Appewm.style.display = "block";
	};
	Companyapp.onmouseout = function() {
		Appewm.style.display = "none";
	};

	/*banner部分*/
	banner();

	function banner() {
		var oBan = document.querySelector(".banner");
		var aSpan = document.querySelectorAll(".banner_list span");
		var Arr = ["image/aa.jpg", "image/bb.jpg", "image/cc.jpg", "image/dd.jpg", "image/ee.jpg"];
		var oPrev = document.getElementById("prev");
		var oNext = document.getElementById("next");
		var oPic = document.getElementById("picture");
		var timer = null;
		var num = 0;

		function changeH() {
			oPic.src = Arr[num];
			for(var i = 0; i < Arr.length; i++) {
				if(aSpan[i].className = "on") {
					aSpan[i].className = "";
				}
				aSpan[num].className = 'on';
			}
		}
		clearTimeout(autoPlay, 4000);
		oBan.onmouseover = function() {
			clearInterval(timer);
			oPrev.style.filter = "alpha(opacity=50)";
			oPrev.style.opacity = "50";
			oNext.style.filter = "alpha(opacity=50)";
			oNext.style.opacity = "50";
		}
		oBan.onmouseout = function() {
			autoPlay();
			oPrev.style.filter = "alpha(opacity=-50)";
			oPrev.style.opacity = "-50";
			oNext.style.filter = "alpha(opacity=-50)";
			oNext.style.opacity = "-50";
		};

		function autoPlay() {
			timer = setInterval(function() {
				num++;
				num %= Arr.length;
				changeH();
			}, 4000);
		}
		oNext.onclick = function() {
			oPrev.onclick = function() {
				num--;
				if(num == -1) {
					num = Arr.length - 1;
				}
				changeH();
			}
			num++;
			if(num == Arr.length) {
				num = 0;
			}
			changeH();
		};
		for(var i = 0; i < aSpan.length; i++) {
			(function(a) {
				aSpan[a].onclick = function() {
					oPic.src = Arr[a];
					for(var i = 0; i < Arr.length; i++) {
						if(aSpan[i].className = "on") {
							aSpan[i].className = "";
						}
						this.className = 'on';
					};
				};
			})(i);
		};
	};

	/*foot部分*/
	var iphone = document.querySelector(".iphone");
	var oAnd = document.querySelector(".Android");
	var iP_img = document.querySelector("#iphone_img");
	var And_img = document.querySelector("#a_img");
	oAnd.onmouseover = function() {
		And_img.style.display="block";
	};
	iphone.onmouseover = function() {
		iP_img.style.display="block";
	};
	oAnd.onmouseout = function() {
		And_img.style.display="none";
	};
	iphone.onmouseout = function() {
		iP_img.style.display="none";
	};

}
$(document).ready(function(){
		/*stroy部分*/
	var t = null;
	var n = 0;
	var count;
	$(function() {
		count = $('#student_list li').length;
		/*$("#student_list li:not(:first-child)").hide();*/
		$(".story_pagination span").each(function() {
			var index = $(this).text() - 1;
			n = index;
			$(this).click(function() {
				$(".story_pagination span").toggleClass('change_w');
			});
		});
		var ac = 0;
		$('.story_pagination span').eq(0).click(function() {

			if(ac == 0) {
				$('.move').animate({
					left: '-1000px'
				}, "slow");
				ac = 1;
			}
		});
		$('.story_pagination span').eq(1).click(function() {

			if(ac == 1) {
				$('.move').animate({
					left: '0'
				}, "slow");
				ac = 0;
			}
		});
		autoMove = function() {
			if(n >= (count - 1)) {
				n = 0;
				$('.move').animate({
					left: '-1000px'
				}, "slow");
			} else {
				++n;
				$('.move').animate({
					left: '0'
				}, "slow");
			}
		}
		t = setInterval('autoMove()', 4000);
		$("#student_list").hover(function() {
			clearInterval(t),
				function() {
					t = setInterval('autoMove()', 4000);
				}
		});

		$(".story_pagination span").eq(n).trigger("click")
	});
});