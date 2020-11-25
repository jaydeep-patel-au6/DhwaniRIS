$(document).ready(function(){
    $(".red").click(function(){
        $(".red").css("z-index", "3");
    });
    $(".yellow").click(function(){
        $(".yellow").css("z-index", "3");
    });
    $(".pink").click(function(){
        $(".pink").css("z-index", "3");
    });
    $(".green").click(function(){
        $(".green").css("z-index", "3");
    });
    $(".blue").click(function(){
        $(".red").css("z-index", "1");
        $(".pink").css("z-index", "1");
        $(".yellow").css("z-index", "1");
        $(".green").css("z-index", "1");
    });
  });