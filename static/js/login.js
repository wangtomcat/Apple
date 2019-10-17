// 登录
if(getCookie('user')){
    $('.login').css('display','none');
    $('.regin').css('display','none');
    var html = '<span >你好！'+getCookie("user")+'</span><span class="exit" >退出账号</span>';
    $('.navRight').html(html);
}else{
    var html = '<span class="login" >登录/</span> <span class="regin" >注册</span>';
    $('.navRight').html(html);
}
$(".login").on('click', function () {
    $("body").append("<div id='mask'></div>");
    $("#mask").addClass("mask").fadeIn("slow");
    $("#LoginBox").fadeIn("slow");
  });
  
  $("#loginbtn").on('click', function () {
    var txtName = $("#txtName").val();
    var txtPwd = $("#txtPwd").val();
console.log(txtName,txtPwd);

        $.ajax({
            type: "GET",
            url: "http://localhost:3000/login",
            data: {
                username: txtName,
                password: txtPwd
            },
            success: function (data) {
                var results = data.results;
                if(results[0]){
                    setCookie('user',results[0].username);
                    alert('登录成功');
                    location.reload();
                }else{
                    alert('你输入的用户或密码有误！！！');
                }
            }
        });
   
  });
  
  $(".close_btn").on('click', function () {
    $("#LoginBox").fadeOut("fast");
    $("#mask").css({ display: 'none' });
  });
  
  // 注册
  var flag = false;
  $(".regin").on('click', function () {
    $("body").append("<div id='mask'></div>");
    $("#mask").addClass("mask").fadeIn("slow");
    $("#reginBox").fadeIn("slow");
    $('.txtName').blur(function(){
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/reginse",
            data: {
                username: $(this).val()
            },
            success: function (data) {
                var results = data.results;
                if(results[0]){
                    alert('你注册的用户已存在！！');
                    flag = false;
                }else{
                    flag = true;
                }
            }
        });
    });
  });

 
  
  $("#reginbtn").on('click', function () {
    var txtName = $(".txtName").val();
    var txtPwd = $(".txtPwd").val();
    var txtTel = $(".txtTel").val();
    
    if(txtName !='' && txtPwd != '' && txtTel !='' && flag){
        
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/regin",
            data: {
                username: txtName,
                password: txtPwd,
                phone:txtTel
            },
            success: function (data) {
                alert('注册成功');
                location.reload();
            }
        });
    }else{
        alert('请正确输入');
    }
  });
  
  $(".close_btn").on('click', function () {
    $("#reginBox").fadeOut("fast");
    $("#mask").css({ display: 'none' });
  });
  $('.exit').on('click',function(){
    removeCookie('user');
    location.reload();
  });


       //设置cookie
       function setCookie(key,value,day){
        if (day) {
            var d = new Date();
            d.setDate(d.getDate()+day);
            document.cookie = key + '=' + escape(value) + '; expires='+d;
        } else {
            document.cookie = key + '=' + escape(value);
        }
    }

    //获取cookie
function getCookie(key){
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');//["user1","xiaowang"]
        if (arr2[0] === key) {
            return unescape(arr2[1]);
        }
    }
    return null;
}

 // 删除cookie
 function removeCookie(key){
    setCookie(key,'123',-10);
}