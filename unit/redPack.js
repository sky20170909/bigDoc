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
    },5000)
})