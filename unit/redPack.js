$(function () {
    //生成从minNum到maxNum的随机数
    function randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                break;
            default:
                return 0;
                break;
        }
    }
    var top=0,left=0,width=0,len=0,html="";
    //top[0,80],left[0,90];
   setInterval(function () {
        left=randomNum(5,80);
        top=randomNum(30,85);
        width=randomNum(10,20)
        len=$(".box img").length;
        if(len>=6){
            $(".box img:first-child").remove();
        }
        html=`<img src="img/redPack.gif" style="width:${width}%;top:${top}%;left: ${left}%"/>`;
        $(".box").append(html);
    },5000);
    mui("body").on("tap",".redPack",function(){
        alert("发送请求中");
        mui.ajax('http://server-name/login.php',{
            data:{
                username:'username',
                password:'password'
            },
            dataType:'json',//服务器返回json格式数据
            type:'post',//HTTP请求类型
            timeout:10000,//超时时间设置为10秒；
            headers:{'Content-Type':'application/json'},
            success:function(data){
                //服务器返回响应，根据响应结果，分析是否登录成功；
            },
            error:function(xhr,type,errorThrown){
                //异常处理；
                console.log(type);
            }
        });
    })
})