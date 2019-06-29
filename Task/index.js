const express = require('express');
const app = express();
var bodyparser      =  require("body-parser");
var request         =  require("request");

var val = 'Add Movie';
var id =' ';
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("functions"));


app.get('/',(req,res) => {
    //res.send('Hi there');
    request('http://argetim2k17.com/deltax/movies.php',function(error,response,body)
    {
        if(!error && response.statusCode == 200)
        {
            var result = JSON.parse(body);
            res.render("mainpage.ejs", {data : result});
        }
    });
});

app.get('/addmovie',(req,res) => {
            res.render("addmovie.ejs",{data: val});
            val = 'Add Movie';
});
app.post('/addmovie',(req,res) =>{
var cnt = 1;
var data = '{';
    for(var key in req.body) {
        var value = req.body[key];
        //console.log(value);
        if( cnt == 1)
        data = data + ' \"'+key +'\" '+': '+'\"'+value+'\"';
        else
        data = data + ' , '+' \"'+key +'\" ' +': '+'\"'+value+'\"';
        cnt++;
    }
    data=data + ' }';
    
    console.log(data);
    var json_obj = JSON.parse(data);
    console.log(json_obj);
    request.post({
        headers: {'content-type': 'application/json'},
        url:     'http://argetim2k17.com/deltax/signup.php',
        form: json_obj
      }, function(error, response, body){
        if(!error && response.statusCode == 200)
        {
            result = JSON.parse(body);
            //console.log(result[0]);
            if(result[0]=='true')
            {
                val = 'Duplicate found';
                res.redirect("/addmovie");
            }
            else
            res.redirect("/");
        }
        else
            console.log(error);
      });
});
app.post('/ActorE',(req,res) => {
    console.log(req.body);
    var cnt = 1;
    var data = '{';
    for(var key in req.body) {
        var value = req.body[key];
        //console.log(value);
        if( cnt == 1)
        data = data + ' \"'+key +'\" '+': '+'\"'+value+'\"';
        else
        data = data + ' , '+' \"'+key +'\" ' +': '+'\"'+value+'\"';
        cnt++;
    }
    data=data + ' }';
    
   // console.log(data);
    var json_obj = JSON.parse(data);
    //console.log(json_obj);
    request.post({
        headers: {'content-type': 'application/json'},
        url:     'http://argetim2k17.com/deltax/updateactor.php',
        form: json_obj
      }, function(error, response, body){
        if(!error && response.statusCode == 200)
        {
          
          res.redirect('/');            
         //   result = JSON.parse(body);
           // console.log(result);
           // res.render("movie.ejs",{title: result.title,data: result});
        }
        else
            console.log(error);
      });
      

});


app.post('/Actor',(req,res) => {
    console.log(req.body.act_id);
    var data = '{ "id" : '+req.body.act_id+' }';
    console.log(data);
    var json_obj = JSON.parse(data);
    var result;
    console.log(json_obj);
    request.post({
        headers: {'content-type': 'application/json'},
        url:     'http://argetim2k17.com/deltax/actor.php',
        form: json_obj
      }, function(error, response, body){
        if(!error && response.statusCode == 200)
        {
            result = JSON.parse(body);
            console.log(result);
            res.render("Actor.ejs",{title: result.act_fname,data: result,act_id:req.body.act_id});
        }
        else
            console.log(error);
      });
});

app.post('/movie',(req,res) => {
    var data = '{ "id" : '+req.body.tvid+' }';
    var json_obj = JSON.parse(data);
    var result;
    console.log(json_obj);
    request.post({
        headers: {'content-type': 'application/json'},
        url:     'http://argetim2k17.com/deltax/movie.php',
        form: json_obj
      }, function(error, response, body){
        if(!error && response.statusCode == 200)
        {
            result = JSON.parse(body);
            console.log(result);
            res.render("movie.ejs",{title: result.title,data: result});
        }
        else
            console.log(error);
      });
      
    // request('http://argetim2k17.com/deltax/movies.php',function(error,response,body)
    // {
        
    // });
});


app.listen(8080, () => {
    console.log('Listening on post 8080');
});
