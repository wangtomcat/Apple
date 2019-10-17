(function(){
    load();
    function load(){
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admuser",
            data: {},
            success: function (data) {
                var results = data.results
                // console.log(results);
                var i = 0;
                var length = results.length;
                var html = "";
                for (; i < length; i++) {
                    if(results[i].username != 'admin'){
                        html += `
                            <tr>
                                <td>${i}</td>
                                <td>${results[i].username}</td>
                                <td>${results[i].password}</td>
                                <td class="text-center">
                                    <button id="admuser_edit" class="btn btn-success btn-xs" data-toggle="modal" data-target="#myModal4">
                                    <span class="glyphicon glyphicon-pencil"></span> 编辑</button>
                                    <button id="admuser_delete" class="btn btn-danger btn-xs">
                                    <span class="glyphicon glyphicon-remove"></span> 删除</button>
                                </td>
                            </tr>
                        `
                    }
                }
                $("#admuser_list").html(html)
            }
        });
    }
 

    //搜索
    $('#admuser_search').click(function(){
        // console.log($('.admuser_seaInp').val());
        var w_flag = false;
        for(var i = 0;i<$('#admuser_list tr').length;i++){
            $('#admuser_list tr').eq(i).removeClass('danger');
            if($('.admuser_seaInp').val() == $('#admuser_list tr').eq(i).children().eq(1).text()){
                w_flag = true;
                $('#admuser_list tr').eq(i).addClass('danger');
            }
        }
        if(!w_flag){
            alert('未查询到，请输入正确的姓名！！！');
        }
        
    });

//删除用户
$('#admuser_list').on('click','#admuser_delete',function(){
    if(getCookie('adminuser') === 'admin'){
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/admuserDelete",
            data: {
                username: $(this).parent().parent().children().eq(1).text()
            },
            success: function (data) {
                // console.log(data);
                alert('该用户已删除！');
                load();
            }
        });
    }else{
        alert('不好意思，你没有权限！！！');
    }
    
});

//添加用户
var w_arr = [];
var w_reg1 = /^[\w\u4e00-\u9fa5]{1,18}$/g;
var w_reg2 = /^[\w]{1,16}$/g;
var w_regArr = [w_reg1,w_reg2];
var w_flag2 = 0;

for (var i = 0; i < $('.admaddBody input').length; i++){
    verify(i,w_regArr[i]);
}

function verify(x,reg){
    if(x == 0){
        $('.admaddBody input').eq(x).blur(function(){
            reg.lastIndex = 0;
            var w_val = $(this).val().replace(/\s+/g,'');
            if (reg.test(w_val)) {
                w_arr[x] = 1;
                $('.admaddBody span').eq(x).css('display','none');
                $.ajax({
                        type: "GET",
                        url: "http://localhost:3000/readmuser",
                        data: {
                            username: $(this).val()
                        },
                        success: function (data) {
                            var results = data.results;
                            // console.log(results);
                            if(results[0]){
                                w_flag2 = 0;
                                alert('你输入的用户名已存在！！！');
                            }else{
                                w_flag2 = 1;
                            }
                        }
                    });
                        
            } else {
                w_arr[x] = 0;
                $('.admaddBody span').eq(x).css('display','inline-block');
                            
            }
        
        });
    }else{
        $('.admaddBody input').eq(x).blur(function(){
            reg.lastIndex = 0;
            var w_val = $(this).val().replace(/\s+/g,'');
            if (reg.test(w_val)) {
                w_arr[x] = 1;
                $('.admaddBody span').eq(x).css('display','none');
                        
            } else {
                w_arr[x] = 0;
                $('.admaddBody span').eq(x).css('display','inline-block');
                            
            }
        
        });
    }
}

$('.addadmuser').click(function(){
    if(getCookie('adminuser') === 'admin'){
        for(var i = 0;i<$('.admaddBody input').length;i++){
            if ($('.admaddBody input').eq(i).val() == '') {
                alert('输入不能为空');
                return false;
            }
        }
        
        for (var i = 0; i < w_arr.length; i++){
            if (w_arr[i] == 0) {
                alert('请正确输入');
                return false;
            }
        }
    
        if(w_flag2 == 1){
                $.ajax({
                    type: "GET",
                    url: "http://localhost:3000/addadmuser",
                    data: {
                        username: $('.admaddBody input').eq(0).val(),
                        password: $('.admaddBody input').eq(1).val()
                    },
                    success: function (data) {
                        // console.log(data);
                        alert('添加成功！');
                        $('#myModal3').modal('hide');
                        load();
                    }
                });
        }else{
            alert('请输入正确的用户名！！！');
        }
    }else{
        $('#myModal3').modal('hide');
        alert('不好意思，你没有权限！！！');
    }
});


//编辑用户
$('#admuser_list').on('click','#admuser_edit',function(){
    var warr = [];
    var editval = $(this).parent().parent().children().eq(1).text();
    $('.admeditBody input').eq(0).attr('placeholder',editval);
    
    $('.admeditBody input').eq(1).blur(function(){
        var w_val = $(this).val().replace(/\s+/g,'');
        if(w_reg2.test(w_val)){
            warr[0] = 1;
            $('.admeditBody span').eq(0).css('display','none');
            
        } else {
            warr[0] = 0;
            $('.admeditBody span').eq(0).css('display','inline-block');
            
        }
    });
    $('.editadmuser').click(function(){
        if(getCookie('adminuser') === 'admin'){
            for(var i = 1;i<$('.admeditBody input').length;i++){
                if ($('.admeditBody input').eq(i).val() == '') {
                    alert('输入不能为空');
                    return false;
                }
            }
            
            for (var i = 0; i < warr.length; i++){
                if (warr[i] == 0) {
                    alert('请正确输入');
                    return false;
                }
            }
    
            $.ajax({
                    type: "GET",
                    url: "http://localhost:3000/editamduser",
                    data: {
                        username: editval,
                        password: $('.admeditBody input').eq(1).val()
                    },
                    success: function (data) {
                        // console.log(data);
                        alert('修改成功！');
                        $('#myModal4').modal('hide');
                        load();
                    }
        
            });
    
        }else{
            $('#myModal4').modal('hide');
            alert('不好意思，你没有权限！！！');
        }
    });

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




    
})();