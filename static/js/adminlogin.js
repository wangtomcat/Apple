(function(){

    $('.adminbtn').click(function(){
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/adminlogin",
            data: {
                username: $('.adminlogin input').eq(0).val(),
                password: $('.adminlogin input').eq(1).val()
            },
            success: function (data) {
                var results = data.results;                
                if(results[0]){
                    setCookie('adminuser',results[0].username)
                    window.open('./backstage.html','_self');

                }else{
                    alert('你输入的用户或密码有误！！！');
                }
            }
        });
        
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

    
})();