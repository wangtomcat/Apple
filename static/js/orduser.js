(function(){
load();
function load(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/orduser",
        data: {},
        success: function (data) {
            var results = data.results
            // console.log(results);
            var i = 0;
            var length = results.length;
            var html = "";
            for (; i < length; i++) {
                html += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${results[i].username}</td>
                        <td>${results[i].password}</td>
                        <td>${results[i].phone}</td>
                        <td class="text-center">
                            <button id="orduser_edit" class="btn btn-success btn-xs" data-toggle="modal" data-target="#myModal2">
                            <span class="glyphicon glyphicon-pencil"></span> 编辑</button>
                            <button id="orduser_delete" class="btn btn-danger btn-xs">
                            <span class="glyphicon glyphicon-remove"></span> 删除</button>
                        </td>
                    </tr>
                `
            }
            $("#orduser_list").html(html)
        }
    });
}

//删除用户
$('#orduser_list').on('click','#orduser_delete',function(){
    if(getCookie('adminuser') === 'admin'){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/orduserDelete",
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

//搜索
$('#orduser_search').click(function(){
    // console.log($('.orduser_seaInp').val());
    var w_flag = false;
    for(var i = 0;i<$('#orduser_list tr').length;i++){
        $('#orduser_list tr').eq(i).removeClass('danger');
        if($('.orduser_seaInp').val() == $('#orduser_list tr').eq(i).children().eq(1).text()){
            w_flag = true;
            $('#orduser_list tr').eq(i).addClass('danger');
        }
    }
    if(!w_flag){
        alert('未查询到，请输入正确的用户名！！！');
    }
    
});

//添加用户
var w_arr = [];
var w_reg1 = /^[\w\u4e00-\u9fa5]{1,18}$/g;
var w_reg2 = /^[0-9a-zA-Z]{8,16}$/g;
var w_reg3 = /^1[3-9]\d{9}$/g;
var w_regArr = [w_reg1,w_reg2,w_reg3];
var w_flag2 = 0;

for (var i = 0; i < $('.addBody input').length; i++){
    verify(i,w_regArr[i]);
}

function verify(x,reg){
    if(x == 0){
        $('.addBody input').eq(x).blur(function(){
            reg.lastIndex = 0;
            var w_val = $(this).val().replace(/\s+/g,'');
            if (reg.test(w_val)) {
                w_arr[x] = 1;
                $('.addBody span').eq(x).css('display','none');
                $.ajax({
                        type: "GET",
                        url: "http://localhost:3000/reorduser",
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
                $('.addBody span').eq(x).css('display','inline-block');
                            
            }
        
        });
    }else{
        $('.addBody input').eq(x).blur(function(){
            reg.lastIndex = 0;
            var w_val = $(this).val().replace(/\s+/g,'');
            if (reg.test(w_val)) {
                w_arr[x] = 1;
                $('.addBody span').eq(x).css('display','none');
                        
            } else {
                w_arr[x] = 0;
                $('.addBody span').eq(x).css('display','inline-block');
                            
            }
        
        });
    }
}


$('.addorduser').click(function(){
    if(getCookie('adminuser') === 'admin'){
    for(var i = 0;i<$('.addBody input').length;i++){
        if ($('.addBody input').eq(i).val() == '') {
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
                url: "http://localhost:3000/addorduser",
                data: {
                    username: $('.addBody input').eq(0).val(),
                    password: $('.addBody input').eq(1).val(),
                    phone: $('.addBody input').eq(2).val(),
                },
                success: function (data) {
                    // console.log(data);
                    alert('添加成功！');
                    $('#myModal1').modal('hide');
                    load();
                }
            });
    }else{
        alert('请输入正确的用户名！！！');
    }
}else{
    $('#myModal1').modal('hide');
        alert('不好意思，你没有权限！！！');
}
});

//编辑用户
$('#orduser_list').on('click','#orduser_edit',function(){
    var warr = [];
    var editval = $(this).parent().parent().children().eq(1).text();
    $('.editBody input').eq(0).attr('placeholder',editval);

    $('.editBody input').eq(1).blur(function(){
        var w_val = $(this).val().replace(/\s+/g,'');
        if(w_reg2.test(w_val)){
            warr[0] = 1;
            $('.editBody span').eq(0).css('display','none');

        } else {
            warr[0] = 0;
            $('.editBody span').eq(0).css('display','inline-block');
                        
        }
    });

    $('.editBody input').eq(2).blur(function(){
        var w_val = $(this).val().replace(/\s+/g,'');
        if(w_reg3.test(w_val)){
            warr[1] = 1;
            $('.editBody span').eq(1).css('display','none');

        } else {
            warr[1] = 0;
            $('.editBody span').eq(1).css('display','inline-block');
                        
        }
    });

    $('.editorduser').click(function(){
        if(getCookie('adminuser') === 'admin'){
        for(var i = 1;i<$('.editBody input').length;i++){
            if ($('.editBody input').eq(i).val() == '') {
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
                url: "http://localhost:3000/editorduser",
                data: {
                    username: editval,
                    password: $('.editBody input').eq(1).val(),
                    phone: $('.editBody input').eq(2).val(),
                },
                success: function (data) {
                    // console.log(data);
                    alert('修改成功！');
                    $('#myModal2').modal('hide');
                    load();
                }
    
        });
    }else{
        $('#myModal2').modal('hide');
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