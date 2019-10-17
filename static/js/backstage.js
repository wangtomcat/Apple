(function(){

    $('.w_topRight span').eq(0).text(getCookie('adminuser'));
    if(getCookie('w_pre')){
        $('.w_left li a').eq(getCookie('w_pre')).addClass('w_active');
        $('iframe').attr('src',$('.w_left li a').eq(getCookie('w_pre')).attr('href'));
        // console.log($('iframe').attr('src'));
        
    }else{
        setCookie('w_pre','0');
        $('.w_left li a').eq(getCookie('w_pre')).addClass('w_active');
        $('iframe').attr('src',$('.w_left li a').eq(getCookie('w_pre')).attr('href'));
        // console.log($('iframe').attr('src'));                
        
    }  
    for(let i = 0;i<$('.w_left li a').length;i++){
        $('.w_left li a').eq(i).click(function(){
            // console.log(i);
            $('.w_left li a').eq(getCookie('w_pre')).removeClass('w_active');
            // console.log(getCookie('w_pre'));
            $('.w_left li a').eq(i).addClass('w_active');
            setCookie('w_pre',i);
        });
    }

    $('.w_exit').click(function(){
        removeCookie('adminuser');
        window.open('./adminlogin.html','_self');
        removeCookie('w_pre');
    });


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