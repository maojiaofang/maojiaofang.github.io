// var imgbox =document.getElementsByClassName("swiper-container");
// var box =document.getElementsByClassName("swiper-wrapper");
// var imgs =document.getElementsByClassName("swiper-slide");
// var lis =document.getElementsByClassName("swiper-pagination-switch"); //小点点

			
$(document).ready(function(){
    //小点点点击事件
    $(".swiper-pagination .swiper-pagination-switch").click(function(){
        var _this =$(this);
        _this.addClass("active").siblings(".swiper-pagination-switch").removeClass("active");
        var int =_this.index();
        $(".swiper-wrapper .swiper-slide").eq(int).addClass("active").siblings(".swiper-slide").removeClass("active");
    })
    var list =$(".swiper-pagination .swiper-pagination-switch").length;
   
     //自动播放 2秒播放一次 无限循环
     var timer ="";
     var num =0;
     timer =setInterval(function(){
         num++
         if(num>parseFloat(list)-1){  // //parseFloat() 函数可解析一个字符串,并返回一个浮点数。
           num =0;
           $(".swiper-pagination .swiper-pagination-switch").eq(num).addClass("active").siblings(".swiper-pagination-switch").removeClass("active");;
           $(".swiper-wrapper .swiper-slide").eq(num).addClass("active").siblings(".swiper-slide").removeClass("active");

         }else{
            $(".swiper-pagination .swiper-pagination-switch").eq(num).addClass("active").siblings(".swiper-pagination-switch").removeClass("active");;
           $(".swiper-wrapper .swiper-slide").eq(num).addClass("active").siblings(".swiper-slide").removeClass("active");
         }
     },1000)
})
