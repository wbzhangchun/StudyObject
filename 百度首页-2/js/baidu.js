function createTags() {  
    var tags = ['header', 'aside', 'footer', 'nav', 'section', 'article', 'aside'];  
    if (!window.applicationCache) {
        for (var i = 0; i < tags.length; i++) {  
            document.createElement(tags[i]);
        } 
        return tags;      
    }; 
};
createTags();
window.onload=function(){
    var Pro_list=document.getElementById("pro_list");
    var $list=document.getElementById("list");
    var $uploading=document.getElementById("uploading");
//pro_list部分函数
    Pro_list.onmouseover=function(){
        show($list);
    };
    $list.onmouseover=function(){
        show($list);
    };
    $list.onmouseout=function(){
        hide($list);
    }
//uploading部分函数
    $uploading.onclick=function(){
        var Pic_content=document.querySelector(".pic_content");
        var Btn=document.querySelector(".btn");
        var $photo=document.querySelector(".photo");
        var oInput=document.querySelector(".btn input");
        var Soutuclose=document.querySelector(".soutu-close");
        hide(this);
        hide(Btn);
        show($photo);
        show(Pic_content);

        $photo.onclick=function(){
            var $pic_content_t=document.querySelector(".pic_content_t");
            var oSpan=document.querySelector(".soutu-url-wrap");
            var oText=$pic_content_t.innerHTML;
            if(oText==oText){
                oSpan.style.display="block";
            };
        };
        Soutuclose.onclick=function(){
            hide(Pic_content);
            show($uploading);
            show(Btn);
        };
    };

        function show(obj){
            obj.style.display="block";
        };
        function hide(obj){
            obj.style.display="none";
        };
};
