const { exec } = require('child_process');

exports.main = function(req,res,next){
   
    res.render('index');
}

exports.search = function(req,res,next){
    
    var cmd = req.body.search;
    var input = cmd.replace(/['";]/g, '');
    console.log(cmd+"\n"+input);
    exec('cat ./rockyou.txt | grep -i '+input,(err,stdout, stderr) => {
        var res_array='';
        if (err){
            console.error(`exec error: ${err}`);
            res.render('index', {res_array: []});
        }
        console.log(` ${stdout}`);
        var res_array='';
        res_array = stdout.split("\n");
        // res.render('index');
        res_array='';
        res_array = stdout.split("\n");
        console.log(res_array);
        res.render('index', {res_array: res_array});
    })
    // res.render('index');
}