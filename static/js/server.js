var express = require('express');
var app = express();
app.use(express.static('static'));

var mysql = require('mysql');


// 登录
app.get('/login', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var username = req.query.username; 
    var password = req.query.password; 
    connection.query("select * from user where username='"+ username +"' and password='"+ password +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

// 注册
app.get('/regin', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var username = req.query.username; 
    var password = req.query.password; 
    var phone = req.query.phone; 
    connection.query("INSERT INTO user ( username,password,phone )VALUES( '"+username+"','"+password+"','"+phone+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//查重名
app.get('/reginse', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var username = req.query.username; 
    connection.query("select * from user where username='"+ username +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//商品下单
app.get('/buy', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var username = req.query.username; 
    var sex = req.query.sex; 
    var phone = req.query.phone; 
    var goods = req.query.goods; 
    var address = req.query.address; 
    var price = req.query.price; 
    connection.query("INSERT INTO buy ( username,sex,phone,goods,address,price)VALUES( '"+username+"','"+sex+"','"+phone+"','"+goods+"','"+address+"','"+price+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//登录后台
app.get('/adminlogin', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    var password = req.query.password;
    connection.query("select * from admuser where username='"+name+"' and password= '"+password+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

// 用户信息
app.get('/orduser', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from user', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//查询用户名是否重名
app.get('/reorduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var username = req.query.username;
    connection.query("select * from user where username='"+username+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//删除用户
app.get('/orduserDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var username = req.query.username;  
    connection.query("delete from user where username='"+ username +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//添加用户
app.get('/addorduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    var phone = req.query.phone;  
    connection.query("INSERT INTO user ( username,password,phone )VALUES( '"+name+"','"+password+"','"+phone+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//修改用户
app.get('/editorduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    var phone = req.query.phone;
    connection.query("update user set password='"+password+"',phone='"+phone+"' where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});


//管理员用户信息
app.get('/admuser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from admuser', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//删除管理员用户
app.get('/admuserDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    connection.query("delete from admuser where username='"+ name +"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//添加管理员用户时查询是否重名
app.get('/readmuser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;
    connection.query("select * from admuser where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});
//添加用户
app.get('/addadmuser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;  
    connection.query("INSERT INTO admuser ( username,password)VALUES( '"+name+"','"+password+"')", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//修改用户
app.get('/editamduser', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.username;  
    var password = req.query.password;
    connection.query("update admuser set password='"+password+"'where username='"+name+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//订单信息
app.get('/buygoods', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('select * from buy', function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            results
        });
    });

    connection.end(); // 关闭数据库

});

//改变订单状态
app.get('/buygoodsEdit', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var id = req.query.id;
    var stus = req.query.stus;
    // console.log(name,stuta);
    connection.query("update buy set stus='"+stus+"' where id='"+id+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});


//删除订单
app.get('/buygoodsDelete', function (req, res) {
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*");
    var connection = cont();
    connection.connect(); // 执行连接
    // 执行sql语句
    var id = req.query.id;  
    connection.query("delete from buy where id='"+id+"'", function (error, results, fields) {
        if (error) throw error;
        // console.log('The solution is: ', results);
        res.send({
            status: "success"
        });
    });

    connection.end(); // 关闭数据库

});

//获取app文件夹下的所有静态资源
app.use('/', express.static('../../'));
//监听端口
app.listen(3000);

//连接数据库
function cont(){ 
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'iphone' // 数据库名字
    });
    return connection;
}
