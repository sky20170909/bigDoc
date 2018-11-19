/**
 * Created by sky on 2018/11/19.
 */
$(function () {
    mui.init();
    var times=10;
    function roof(){
        if(times == 0){

            $('.getCode').removeClass('disabled');
            $('.getCode').text('发送验证码');
            times = 10;
            return
        }
        $('.getCode').text(times+'s');
        times--;
        console.log(times)
        setTimeout(roof,1000);
    }
    mui("form").on("tap",".getCode", function () {
        var mobile = $("#phone").val();//手机号
        if($(this).hasClass("disabled")){
            mui.toast('正在发送中，请勿重复发送');
            return false;
        }
        if(!(/^[1][0-9]{10}$/.test(mobile)))
        {
            $('#phone').focus();
            mui.toast('请输入正确的手机号');
            return;
        }
        $(this).addClass('disabled');
        roof();
        //发送验证码
        $.ajax({
            url:"/register/sendMobileCode/"+mobile,
            type:"post",
            success:function(result){

            }
        })
    })
    mui(".mui-content-padded").on("tap","#reg", function () {
       var userName=$("#userName").val();//姓名
       var phone=$("#phone").val();
       var code=$("#code").val();
        var Invite=$("#Invite").val();
        if(Invite&&code&&phone&&userName){
            if(!(/^[1][0-9]{10}$/.test(phone))){
                $('#phone').focus();
                mui.toast('请输入正确的手机号');
                return;
            }
            if(!(/^[1][0-9]{10}$/.test(Invite))){
                $('#phone').focus();
                mui.toast('请输入正确的手机号邀请人手机号');
                return;
            }
            console.log("发送请求")
        }else{
            mui.toast("请输入完整的信息")
        }
    })
})