//----------------------------- ALWAYS CHECK IF THE REST_APP_URL ENVIRONMENT VARIABLE IS SET ON SERVER OR NOT
var express = require("express");
var multer          =       require('multer');
//var fileUpload = require('express-fileupload');
var app = express(),
fs = require("fs");

var mysql = require("mysql");
var Promise = require("promise");
var Promise  = require('bluebird');

var tours = require('./modules/tours');
var testimonials = require('./modules/testimonials');
var gallery = require('./modules/gallery');
var admin = require('./modules/admin');
var mail = require('./modules/sendMail');
var uploads = require('./modules/uploadmanager');
var upload      =   multer({ dest: '/Applications/XAMPP/htdocs/website/assets/tour_img/'});
var done=false;

//app.use(fileUpload());


http = require("http").createServer(app);

//This line is from the Node.js HTTPS documentation.
/*var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};*/

//var https = require("https").createServer(options, app);
//var io = require('socket.io').listen(https);

//var requestObj = require('request');  
var serverDown = '{"error":"503"}';
var internalError = '{"error":"500"}';

/**
 * Node server is listening on a port defined here.
 **/
http.listen(9090);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel',
    port: 3306
});



connection.connect(function (err) {
    // connected! (unless `err` is set)
    if (err) {
        console.log('mysql db unable to connect: ' + err);
        connectionState = false;
    } else {
        console.log('mysql connect!');
        connectionState = true;
    }
});

/**
  *  Note :- Update the variable named 'resturls' added below to point to appropriate REST server.
  * for Windows use 
  * set REST_APP_URL=http://ipaddress:portnumber/appname/module/
  * e.g. set REST_APP_URL=http://10.1.15.131:8080/rest-medrubik/conversation/
  *
  * to print environment variable use 
  * set REST_APP_URL
  *
  * for Linux use 
  * export REST_APP_URL=http://ipaddress:portnumber/appname/module/
  * e.g. export REST_APP_URL=http://10.1.15.131:8080/rest-medrubik/conversation/
  *
  * to print environment variable use 
  * echo $REST_APP_URL
  *
  *
  * for MAC use 
  * export REST_APP_URL=http://ipaddress:portnumber/appname/module/
  * e.g. export REST_APP_URL=http://127.0.0.1/carouselgit/carousel/carousel/index.php/api/conversation/
  *
  * to print environment variable use 
  * echo $REST_APP_URL
  *
  *
 **/
var resturls = process.env.REST_APP_URL;
//var resturls = "http://127.0.0.1/carouselgit/carousel/carousel/index.php/api/";
if(undefined == process.env.REST_APP_URL)
	console.log("Please configure/set the environment variable 'REST_APP_URL' to appropriate server and then start node application.");
else
	console.log("REST Server URL:- "+process.env.REST_APP_URL);
/**
  *
  *  For cross context application communication following configuration is required if a call is made from jquery ajax.
  *
  *  TODO :- I] Handling of exception and return it to client request with proper JSON structure is completed on Node level. Handling it on respective client as Mobile end and Web end is remaining. 
  *
 **/

//app.use(require('connect').bodyParser());
bodyParser = require("body-parser");
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(function(req, res, next) {
	var oneof = false;
	res.type('application/json');
	res.header('Charset', 'utf-8');

	if(req.headers.origin) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
		oneof = true;
	}
	if(req.headers['access-control-request-method']) {
		res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
		oneof = true;
	}
	if(req.headers['access-control-request-headers']) {
		res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
		oneof = true;
	}
	if(oneof) {
		res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
	}

	// intercept OPTIONS method
	if (oneof && req.method == 'OPTIONS') {
		res.sendStatus(200);
	}else {
		next();
	}
});

app.use(multer({ dest: '/Applications/XAMPP/htdocs/website/assets/tour_img/',
    rename: function (fieldname, filename) {
        console.log("came herrerererre-----");
        return filename+Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
    }
}));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.connection = connection;
    next();
});

var todayDate = function(){
    var date = new Date();
    //return date.getFullYear()+"-"+date.getMonth+"-"+date.getDate+" "+date.getHours"+:"+date.getMinutes+":"+date.getSeconds;
};

/**
 * Node application configuration for all REST urls. This code will set the REST urls to node global variable.
 **/
app.post('/config', function(req, res){
	res.send(req.body.urls);
});

function checkInputParam(paramArray, inputArray){
	var validate = true;
	var keys = inputArray;
	for (var key =0 ;key<keys.length;key++) {
		if(paramArray.indexOf(keys[key])==-1){
			validate = false;
			break;
		}
	}
	return validate;
}


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/login', function(req, res){
    admin.loginUser(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/tours/special', function(req, res){
    tours.getSpecialToursList(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/tours', function(req, res){
    tours.getAllToursList(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/tour/:id', function(req, res){
    tours.getTourDetails(req, res);
    
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.delete('/tour/:id', function(req, res){
    tours.getTourDetails(req, res);
    
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/admin/tours/type', function(req, res){
    admin.getInputDetails(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/admin/tour', function(req, res){
    tours.AddTour(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/admin/activity', function(req, res){
    admin.AddActivity(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/admin/note', function(req, res){
    admin.AddNote(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/admin/inclusion', function(req, res){
    admin.AddInclusion(req, res);
});

/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.put('/tour/:id', function(req, res){
    tours.MakeSpecialTour(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/testimonials', function(req, res){
    testimonials.getAllTestimonials(req, res);
});

/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/testimonials', function(req, res){
    testimonials.AddTestimonial(req, res);
});

/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.delete('/testimonials/:id', function(req, res){
    testimonials.DeleteTestimonial(req, res);
});

/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/query', function(req, res){
    tours.AddTourQuery(req, res);
});

app.post('/mails', function(req, res){
    //mail.sendMail();
});


app.post('/api/photos', function(req, res) {

    var serverPath = '/images/' + req.files.userPhoto.name;

    require('fs').rename(
	req.files.userPhoto.path,
	'/var/attachments/' + serverPath,
	function(error) {
            if(error) {
		res.send({
                    error: 'Ah crap! Something bad happened'
		});
                return;
            }

            res.send({
		path: serverPath
            });
	}
    );
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.post('/forgot', function(req, res){
    
    admin.forgotPassword(req, res);
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/gallery', function(req, res){
    
    gallery.getAllGalleries(req, res);
});


app.post('/tour/upload', function(req, res){
    upload(req, res, function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});


app.post('/gallery/upload', function(req, res){
    upload(req, res, function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
    
});


/**
* Get the unread communication message count added by Dhiman for mobile communication.
**/
app.get('/contact', function(req, res){
    
    admin.AddContact(req, res);
});

