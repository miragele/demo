window.onload = function () {
    var lis = document.getElementById("imgBox1");
    var as = document.getElementsByClassName("imgNum")[0].getElementsByTagName("a");
    for (var i = 0; i < as.length; i++) {
        as[i].id = i;
        as[i].onmouseover = function () {
            for (var j = 0; j < as.length; j++) {
                as[j].className = "";
            }
            as[this.id].className = "active";
            lis.style.left = -this.id * 810 + "px"
        }
    }
    var dls = document.getElementById("shopClass1").getElementsByTagName("dl");
    var Lists=document.getElementsByClassName("shopClass_list")[0];
    for(var i=0;i<dls.length;i++){
        dls[i].index=i;
        dls[i].onmouseover=function(){
            this.className="shopClass_active";
            var h=(this.index)*66+35;
            Lists.style.top=h+"px";
            Lists.style.display="block"
        };
        dls[i].onmouseout=function(){
            this.className="shopClass_item";
            Lists.style.top="0px";
            Lists.style.display="none"
        }
    }

}


