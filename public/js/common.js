/*
*onTextMenu
*/
 document.oncontextmenu = function(ev){
   var ev=ev||event
    $("#text-menu").css("display","block")
    $("#text-menu").css("top",ev.clientY)
    $("#text-menu").css("left",ev.clientX)
    return false;
  }
  document.onclick=function(){
     $("#text-menu").css("display","none")
  }
/* nav */
$("#nav-list a").mouseover(function(){
  var that=this;
$("#nav-list a").each(function(){
  $(this).removeClass("active");
});
  $(this).addClass("active")
});
$("#nav-list a").mouseout(function(){
$("#nav-list a").each(function(){
  $(this).removeClass("active");
});
});