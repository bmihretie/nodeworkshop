var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var database = require('./database.js');
var port = process.env.PORT || 1337;
//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));
//Serve static content for the app from the "public" directory in the application directory.

    // GET /style.css etc added file
    app.use(express.static(__dirname + '/public'));

// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".

    // GET /static/style.css etc. added file
    app.use('/static', express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

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

//get static html  page for landingpage,emp2 and contact us.html
app.get('/landingPage', function(req,res){
  console.log('app landingPage/ requested');
  return res.render("landingPage.html");
});

app.get('/cus', function(req,res){
  console.log('app cus/ requested');
  return res.render("cus.html");
});

app.get('/emp2', function(req,res){
  console.log('app emp2/ requested');
  return res.render("emp2.html");
});

app.get('/searchPage', function(req,res){
  console.log('app searchPage/ requested');
  return res.render("searchPage.html");
});


//post and get for employee request from

app.post('/addTraining', function(req,res){
  console.log('posted to /addTraining');
  console.log(JSON.stringify(req.body));
   var sql = `
   INSERT INTO TTX_Empl_Trng_Reqst(
      trng_cors_typ,
      trng_cors_nm,
      trng_reqst_nbr,
      trng_cors_strt_dt,
      trng_cors_end_dt,
      trng_cors_totl_nbr_hrs,
      trng_cors_locn,
      trng_cors_cost,
      trng_cors_rltd_exp_amt,
      trng_reqst_cors_bnft_txt,
      trng_cors_budg_pln_flg,
      vndr_nm,
      vndr_mail_addr,
      vndr_mail_city,
      vndr_mail_st,
      vndr_mail_zip_cd,
      trng_reqst_fwd_actg_paym_flg)
	  VALUES (
		'${req.body.trng_cors_typ}',
		'${req.body.trng_cors_nm}',
		'${req.body.trng_reqst_nbr}',
		'${req.body.trng_cors_strt_dt}',
		'${req.body.trng_cors_end_dt}',
		'${req.body.trng_cors_totl_nbr_hrs}',
		'${req.body.trng_cors_locn}',
		'${req.body.trng_cors_cost}',
		'${req.body.trng_cors_rltd_exp_amt}',
		'${req.body.trng_reqst_cors_bnft_txt}',
		'${req.body.trng_cors_budg_pln_flg}',
		'${req.body.vndr_nm}',
		'${req.body.vndr_mail_addr}',
		'${req.body.vndr_mail_city}',
		'${req.body.vndr_mail_st}',
		'${req.body.vndr_mail_zip_cd}',
		'${req.body.trng_reqst_fwd_actg_paym_flg}');
		 
  `;
   database.executeQuery(sql);
   //console.log(sql);
   
  return res.send("success");
});

app.get('/employee', function(req,res){
  console.log('app employee/ requested');
  return res.render("employee.html");
});




// post for add trains and database query

app.post('/#addTrain', function(req,res){
  console.log('posted to /addTrain');
  console.log(JSON.stringify(req.body));
  var sql = `
   INSERT INTO trains (name,inService,numberOfAvailable) 
   VALUES ('${req.body.nameOfTrain}', '${req.body.inService}', '${req.body.availableTrains}');
  `;
   database.executeQuery(sql);
  return res.send("success");
  
});
 
   // Retrieving data from JSON and Database for employee history
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

//rejected  pages 
app.get('/rejectedRequest', function(req,res){
  console.log('app / rejectedRequest requested');
  return res.render('rejectedRequest.html');
});

app.get('/getRejected', function(req,res){
  console.log('app getRejected/ requested');
  database.executeQuery("SELECT trng_reqst_nbr,trng_cors_nm,trng_cors_strt_dt,trng_cors_end_dt,trng_cors_cost,trng_reqst_immed_supv_apvl_flg,trng_reqst_dept_hd_apvl_flg,trng_reqst_vp_apvl_flg,trng_cors_compl_flg FROM TTX_Empl_Trng_Reqst where trng_reqst_dept_vp_apvl_flg = 'P'", function(results) {
      res.send(results);
         });
});


// train list retriving data from json and database
app.get('/getTrains', function(req,res){
  console.log('app getTrains/ requested');
   database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
         });
  });




//past requests
app.get('/pastRequest', function(req,res){
  console.log('app / pastRequest requested');
  return res.render('pastRequest.html');
});

app.get('/getPast', function(req,res){
  console.log('app getPast/ requested');
  database.executeQuery("SELECT trng_reqst_nbr,trng_cors_nm,trng_cors_strt_dt,trng_cors_end_dt,trng_cors_cost,trng_reqst_immed_supv_apvl_flg,trng_reqst_dept_hd_apvl_flg,trng_reqst_vp_apvl_flg,trng_cors_compl_flg FROM TTX_Empl_Trng_Reqst", function(results) {
      res.send(results);
             });
});

// train list retriving data from json and database
app.get('/getTrains', function(req,res){
  console.log('app getTrains/ requested');
   database.executeQuery("SELECT * FROM trains", function(results) {
      res.send(results);
         });
  });



//outstanding pages for Scottt
app.get('/outstandingRequest', function(req,res){
  console.log('app / outstandingRequest requested');
  return res.render('outstandingRequest.html');
});

app.get('/getOutstanding', function(req,res){
  console.log('app getOutstanding/ requested');
  database.executeQuery("SELECT trng_reqst_nbr,trng_cors_nm,trng_cors_strt_dt,trng_cors_end_dt,trng_cors_cost,trng_reqst_immed_supv_apvl_flg,trng_reqst_dept_hd_apvl_flg,trng_reqst_vp_apvl_flg,trng_cors_compl_flg FROM TTX_Empl_Trng_Reqst where trng_reqst_dept_hd_apvl_flg = 'P'", function(results) {
      res.send(results);
         });
});


// train list retriving data from json and database
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
  console.log("Application is running:");
  console.log("Listening on " + port);
});
