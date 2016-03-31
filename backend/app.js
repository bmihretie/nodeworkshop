var express = require('express');
var database = require('./database.js');
var app = express();
var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.post('/addTrain', function(req,res){
  console.log('posted to /addTrain');
  return res.send("success");
});
app.get('/', function(req,res){
  console.log('app root/ requested');
  return res.status(200).send("hello worlds");
});
app.get('/hi', function(req,res){
  console.log('app hi/ requested');
  return res.status(200).send("hi there programmer");
});
app.get('/helloworld', function(req,res){
  console.log('app helloworld/ requested');
  return res.render("helloworld.html");
});

app.get('/trainRequest', function(req,res){
  console.log('app trainRequest/ requested');
  return res.render("trainRequest.html");
});
app.get('/getTTX_Empl_Trng_Reqst', function(req,res){
  console.log('app getTTX_Empl_Trng_Reqst/ requested');
  database.executeQuery("SELECT trng_reqst_nbr,trng_cors_nm,trng_cors_strt_dt,trng_cors_end_dt,trng_cors_cost,trng_reqst_immed_supv_apvl_flg,trng_reqst_dept_hd_apvl_flg,trng_reqst_vp_apvl_flg,trng_cors_compl_flg FROM TTX_Empl_Trng_Reqst where cntct_email_addr = 'ALAN_TANG@TTX.COM'", function(results) {
      res.send(results);
         });
});
app.get('/getTrains', function(req,res){
  console.log('app getTrains/ requested');
   database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
         });
  });
app.get('/trainList', function(req,res){
  console.log('app trains/ requested');
  return res.render("trainList.html");
  });
app.listen(port, function(){
  console.log("Application is running:")
  console.log("Listening on " + port);
});
