(function(){
load();
function load(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/buygoods",
        data: {},
        success: function (data) {
            var results = data.results
            // console.log(data);
            var i = 0;
            var length = results.length;
            var html = "";
            for (; i < length; i++) {
                html += `
                        <tr>
                        <td data-id="${results[i].id}">${i+1}</td>
                        <td>${results[i].username}</td>
                        <td>${results[i].sex}</td>
                        <td>${results[i].phone}</td>
                        <td>${results[i].goods}</td>
                        <td>${results[i].price}</td>
                        <td>${results[i].address}</td>
                        <td>${results[i].stus}</td>
                        <td class="text-center">
                            <button id="buygoods_edit" class="btn btn-primary btn-xs">
                            <span class="glyphicon glyphicon-ok"></span> 处理</button>
                            <button id="buygoods_delete" class="btn btn-danger btn-xs">
                            <span class="glyphicon glyphicon-remove"></span> 删除</button>
                        </td>
                    </tr>
                `
            }
            $("#buygoods_list").html(html)
        }
    });
}

$('#buygoods_list').on('click','#buygoods_edit',function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/buygoodsEdit",
        data: {
            id: $(this).parent().parent().children().eq(0).attr('data-id'),
            stus: "已处理",
        },
        success: function (data) {
            // console.log(data);
            alert('该订单已处理！');
            load();
        }
    });
});

$('#buygoods_list').on('click','#buygoods_delete',function(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/buygoodsDelete",
        data: {
            id: $(this).parent().parent().children().eq(0).attr('data-id')
        },
        success: function (data) {
            // console.log(data);
            alert('该订单已删除！');
            load();
        }
    });
    
});

})();