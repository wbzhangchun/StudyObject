$(document).ready(function(){
   $(window).on('load',function(){
      imgLocation();
      //json数据存放图片的地址，用于扩充图片时候使用。
      var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpeg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpeg"}]};
      //通过屏幕的滚动来加载图片
        window.onscroll=function(){
            if(scrollside()){
          	//循环进行json数据的读取和函数的调用
          	    $.each(dataImg.data,function(index,value){
          		    //添加一个container到wrapper下面
                    var container=$("<div>").addClass("container").appendTo($('.wrapper'));
                    var content=$("<div>").addClass("content").appendTo(container);
                    /*console.log("../image/"+$(value).attr("src"));*/
                    //添加如片到内容
                    $("<img>").attr("src","./image/"+$(value).attr("src")).appendTo(content);
          	    });
          	   //创建出图片后，需要重新添加图片。
          	    imgLocation();
            }  
        };
        //onresize 事件会在窗口或框架被调整大小时发生
        window.onresize=function(){
            imgLocation();
        };

   });
});
function scrollside(){
    var oC=$('.container');
    var lastHeight=oC.last().get(0).offsetTop+Math.floor(oC.last().height()/2);
    var documentHeight=$(document).width();
    var srcollTop=$(window).scrollTop();
    return(lastHeight<srcollTop+documentHeight)?true:false;
}

function imgLocation(){
	//通过qu(0)来获取第一个盒子的宽度
    //宽度都相同，因此获取那个container的宽度都可以。
	var oC=$('.container');
	var oCWidth=oC.eq(0).width();
	//计算一排能放几个图片 num取整数。
	var num=Math.floor($(window).width()/oCWidth);
	var conArr=[];
	oC.each(function(index,value){
		value.style.cssText='';//重置当前对象的style属性
		//index:确定从哪个图片开始  value：确定当前是哪个对象
		/*console.log(index+'---'+value);*/
		var oCHeight=oC.eq(index).height();//获取每个盒子的高度 其中第一排直接放在数组中。
		if(index<num){
            conArr[index]=oCHeight;
           /* console.log(oCHeight);*/
		}else{
			/*
                当放置第二排时，需要考虑第一排的高度
                获取最小盒子的高度
                从数组中获取最小盒子的位置，从而为了放置下一排的盒子。
             */
			var minHeight=Math.min.apply(null,conArr);//获取最小高度
			/*console.log(minHeight);*/
			var minoCindex=$.inArray(minHeight,conArr);//获取最小位置
			/*console.log(minoCindex);*/
			/*console.log(value);*/
			$(value).css({
				"position":"absolute",
				"top":minHeight,
				"left":oC.eq(minoCindex).position().left,
			});
			/*
                获取图片的对象，然后对图像进行操作。
                实际上操作的是box，位置的放置通过CSS来控制。
            */
			conArr[minoCindex]+=oC.eq(index).height();//重新计算高度
		}
	})
}