/**
 * Created by sky on 2018/11/19.
 */
$(function () {
    mui.init();
    var app={
        obj1:{},
        obj2:{},
        obj3:{},
        obj4:{},
    }
    mui("nav").on("tap","li", function () {
        $("nav li.active").removeClass("active");
        $(this).addClass("active");
        var index=$(this).data("index");
        $(".box.active").removeClass("active");
        $(".box"+index).addClass("active");
    })

})