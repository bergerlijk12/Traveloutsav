var Q = require('q');
var Promise = require('bluebird');
var async = require('async');
var mail = require('../modules/sendMail');

var self = {
    
    loginUser: function(req, res) {
        
        var response = {};
        var connection = req.connection;
        var query = connection.query('select * from user_auth INNER JOIN user on user.id = user_auth.user_id where user.email = ? and user_auth.password = ?', [req.body.email, req.body.password],  function(err, results, fields) {
            if (err) throw err;
            response.user = results;
            res.send(response);
        });
        
    },
    
    forgotPassword: function(req, res) {
        
        var response = {};
        res.send(response);
        /*var connection = req.connection;
        var query = connection.query('select * from user_auth INNER JOIN user on user.id = user_auth.user_id where user.email = ? and user_auth.password = ?', [req.body.email, req.body.password],  function(err, results, fields) {
            if (err) throw err;
            response.user = results;
            res.send(response);
        });*/
        
    },
    
    getAllActivityList: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT * FROM `activity`',  function(err, results, fields) {
            if (err) throw err;
            responseObj.activities = results;
        });
        
    },
    
    getAllCityList: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT * FROM `city`',  function(err, results, fields) {
            if (err) throw err;
            responseObj.cities = results;
        });
    },
    
    getAllInclusionsList: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT * FROM `inclusion',  function(err, results, fields) {
            if (err) throw err;
            responseObj.inclusions = results;
        });
    },
    
    getAllTypesList: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT * FROM `tour_type`',  function(err, results, fields) {
            if (err) throw err;
            responseObj.type = results;
        });
    },
    
    getAllDurationsList: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT * FROM `duration_type`',  function(err, results, fields) {
            if (err) throw err;
            responseObj.duration = results;
        });
    },
    
    getAllCurrencyTypesList: function(req, res, responseObj) {
        var response= {};
        var connection = req.connection;
        var query = connection.query('SELECT * FROM `currency_type`',  function(err, results, fields) {
            if (err) throw err;
            responseObj.currency = results;
            response.list = responseObj;
            res.send(response);
        });
    },
    
    getInputDetails: function(req, res) {
        //var response= {};
        var connection = req.connection;
        var responseObj = {};
        Q.all([self.getAllActivityList(req, responseObj),
              self.getAllCityList(req, responseObj),
              self.getAllTypesList(req, responseObj),
              self.getAllDurationsList(req, responseObj),
              self.getAllInclusionsList(req, responseObj),
              self.getAllCurrencyTypesList(req, res, responseObj)]).then(function(results){
                //response.list = responseObj;
                //res.send(response);
              }
        );
    },
    
    AddTour: function(req, res) {
        var connection = req.connection;
connection.query('insert into tours (title, description, city_id, state_id, country_id, zipcode, type_id, duration_id, currency_id, price, created, update, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + req.body.city + '", "' + req.body.state + '", "' + req.body.country + '", "' + req.body.zipcode + '", "' + req.body.type + '", "' + req.body.duration + '", "' + req.body.currency + '", "' + req.body.price + '", "' + today + '", "' + today + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send('success');
        });
    },
    
    EditTour: function(req, res) {
        var connection = req.connection;
connection.query('insert into tours (title, description, city_id, state_id, country_id, zipcode, type_id, duration_id, currency_id, price, created, update, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + req.body.city + '", "' + req.body.state + '", "' + req.body.country + '", "' + req.body.zipcode + '", "' + req.body.type + '", "' + req.body.duration + '", "' + req.body.currency + '", "' + req.body.price + '", "' + today + '", "' + today + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send('success');
        });
    },
    
    DeleteTour: function(req, res) {
        var query = connection.query('update tours set is_deleted = 1 where id =`', [req.params.id],  function(err, results, fields) {
            if (err) throw err;
            responseObj.currency = results;
            response.list = responseObj;
            res.send(response);
        });
    },
    
    MarkSpecialTour: function(req, res) {
        var connection = req.connection;
connection.query('insert into tours (title, description, city_id, state_id, country_id, zipcode, type_id, duration_id, currency_id, price, created, update, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + req.body.city + '", "' + req.body.state + '", "' + req.body.country + '", "' + req.body.zipcode + '", "' + req.body.type + '", "' + req.body.duration + '", "' + req.body.currency + '", "' + req.body.price + '", "' + today + '", "' + today + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send('success');
        });
    },
    
    AddContact: function(req, res) {
        var connection = req.connection;
connection.query('insert into enquiry (full_name, email, phone, subject, message, sent_date, is_deleted) values ("' + req.body.full_name + '", "' + req.body.email + '", "' + req.body.phone + '", "' + req.body.subject + '", "' + req.body.message + '", "' + today + '", "' + 0 + '")', function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            else {
                var subject = "Enquiry for a tour";
                var htmlText = "<b>"+req.body.name+"</b> has enquired for a tour. Click <a href='http://127.0.0.1/website/#/tour/1";
                var sendMail = mail.SendMail(subject, htmlText);
                if(sendMail == true){
                    res.send({status: 'success'});
                }
            }
        });
    },
    
    AddActivity: function(req, res) {
        console.log(JSON.stringify(req.body));
        var connection = req.connection;
connection.query('insert into activity (activity_title) values ("' + req.body.activity_title + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send({status: 'success'});
        });
    },
    
    AddNote: function(req, res) {
        var connection = req.connection;
connection.query('insert into note (note_title) values ("' + req.body.note_title + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send({status: 'success'});
        });
    },
    
    AddInclusion: function(req, res) {
        var connection = req.connection;
connection.query('insert into inclusion (inclusion_title) values ("' + req.body.inclusion_title + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send({status: 'success'});
        });
    }
    
};
module.exports = self;