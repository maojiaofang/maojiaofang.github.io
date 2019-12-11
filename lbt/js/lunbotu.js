$(document).ready(function(){
//    缩图容器点击事件
    $(".bot-img ul li").click(function(){
        console.log($(this).index());
       var _this =$(this);
       _this.addClass("active").siblings("li").removeClass("active");
       var int =_this.index();
       $(".activeimg").animate({left:int*-500},"slow");//图片向左浮动动画
    }) 

    var list =$(".bot-img ul li").length;
    $(".activeimg").css({width:list*500});    //计算每一张缩图容器的图片为500px放在大容器上显示每一张图片的大小

    $(".right").click(function(){
        next(list)   //函数调用
    })
    $(".left").click(function(){
      prev(list)  // //函数调用
    })

    //自动播放 2秒播放一次 无限循环
    var timer ="";
    var num=0;
    timer =setInterval(function(){
        num++
        if(num>parseFloat(list)-1){    //parseFloat() 函数可解析一个字符串,并返回一个浮点数。
            num =0;
            $(".activeimg").animate({left:num*-500},"slow");
            $(".bot-img ul li").eq(num).addClass("active").siblings("li").removeClass("active");
        }else{
            $(".activeimg").animate({left:num*-500},"slow");
            $(".bot-img ul li").eq(num).addClass("active").siblings("li").removeClass("active");
        }
    },1000)
})

var index =0;
//下一张
function next(list){
    if(index<list-1){
        index++;
        $(".activeimg").animate({left:index*-500},"slow");
        $(".bot-img ul li").eq(index).addClass("active").siblings("li").removeClass("active");
    }else{
        index=0;
        $(".activeimg").animate({left:index*-500},"slow");
        $(".bot-img ul li").eq(index).addClass("active").siblings("li").removeClass("active");
    }
}

//上一张
function prev(list){
    index--;
    if(index<0){
        index=list-1;
        $(".activeimg").animate({left:index*-500},"slow");
        $(".bot-img ul li").eq(index).addClass("active").siblings("li").removeClass("active");
    }else{
        
        $(".activeimg").animate({left:index*-500},"slow");
        $(".bot-img ul li").eq(index).addClass("active").siblings("li").removeClass("active");
    }
}
