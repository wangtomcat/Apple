$('.buy').click(function(){
    $('.task').css('display','block');
    $('.buyPrice').val($(this).parent().children().eq(1).text());
    $('.buyG').val($(this).parent().children().eq(0).text());
    
});
$('.buygoods').click(function(){
    if($('.buyName').val() !='' && $('.buySex').val() !='' && $('.buyPhone').val() !='' && $('.buyAdd').val() !=''){
        $.ajax({
        type: "GET",
        url: "http://localhost:3000/buy",
        data: {
            username: $('.buyName').val(),
            sex:$('.buySex').val(),
            phone:$('.buyPhone').val(),
            goods:$('.buyG').val(),
            address: $('.buyAdd').val(),
            price:$('.buyPrice').val()

        },
        success: function (data) {
            alert('下单成功');
            location.reload();
        }
    });
    }else{
        alert('请正确输入相关信息');
    }
});
$('.quxiao').on('click',function(){
    $('.task').css('display','none');
});