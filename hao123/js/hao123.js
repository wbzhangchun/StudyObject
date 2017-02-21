window.onload=function(){
   var skin=document.querySelector(".skin");
   var change_screen=document.querySelector(".change_screen");
   var cancel=document.querySelector(".cancel");

   skin.onclick=function(){
   	   change_screen.style.display="block";
   }

   var aSkin_list=document.querySelectorAll(".screen_wrap img");
   var wraper=document.querySelector(".wraper");
   var Preserve=document.querySelector(".preserve");
   var cancel=document.querySelector(".cancel");
   var arr=["bg-1.jpg","bg-2.jpg","bg-3.jpg","bg-4.jpg","bg-5.jpg","bg-6.jpg","bg-7.png","bg-8.jpg","bg-9.jpg","bg-10.jpg","bg-11.jpg","bg-12.jpg"];
    if(window.localStorage.getItem('bg')){
       	wraper.style.background=window.localStorage.getItem('bg');
    }
    for(var i = 0; i < aSkin_list.length; i++) {
   	
  	    (function(a) {
  		    aSkin_list[a].onclick = function() {
  			    wraper.style.background = 'url(image/' + arr[a] + ') no-repeat center top';
		        window.localStorage.setItem('bg', 'url(image/' + arr[a] + ') no-repeat center top');
  		    };
  			
  	    })(i)

    }
    Preserve.onclick = function() {
	    if(window.localStorage.getItem('bg')){
	    	wraper.style.background=window.localStorage.getItem('bg');
	    }
	    change_screen.style.display="none";
    }
    cancel.onclick=function(){
        if(window.localStorage.getItem('bg')){
       	    window.localStorage.removeItem('bg');
        }
   	   change_screen.style.display="none";
   }
    window.onunload=function(){
    	if(window.localStorage.getItem('bg')){
       	    wraper.style.background=window.localStorage.getItem('bg');
        }
    }
};