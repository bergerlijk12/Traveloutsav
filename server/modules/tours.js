var Q = require('q');
var Promise = require('bluebird');
var mail = require('../modules/sendMail');


var self = {
    
    
    getAllToursList: function(req, res) {
        var response= {};
        var connection = req.connection;
        var query = connection.query(
            'select t.id, t.title, t.description, t.price, t.is_special, dt.duration_title, ct.currency_name, tt.name, gl.image_path as image from tours t INNER JOIN tour_type tt on tt.id = t.type_id INNER JOIN duration_type dt on dt.id = t.duration_id INNER JOIN currency_type ct on ct.id = t.currency_id LEFT join gallery_image gl on gl.tour_id = t.id group by t.id order by t.id', function(err, result, fields) {
                if (err) throw err;

                response.tours = result;
                res.send(response);
            })
    },
    
    getSpecialToursList: function(req, res) {
        var response= {};
        var connection = req.connection;
        var query = connection.query(
            'select t.id, t.title, t.description, t.price, dt.duration_title, ct.currency_name, tt.name from tours t INNER JOIN tour_type tt on tt.id = t.type_id INNER JOIN duration_type dt on dt.id = t.duration_id INNER JOIN currency_type ct on ct.id = t.currency_id LEFT join gallery_image gl on gl.tour_id = t.id group by t.id order by t.id', function(err, result, fields) {
                if (err) throw err;

                response.tours = result;
                res.send(response);
            })
    },
    
    getTourActivity: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT activity.id as id, activity.activity_title as title FROM `activity` inner join tours_activity on tours_activity.activity_id = activity.id WHERE tour_id = ?', [req.params.id],  function(err, results, fields) {
            if (err) throw err;
            responseObj.activities = results;
        });
        
    },
    
    getTourNote: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT note.id as id, note.note_title as title FROM `note` inner join tours_notes on tours_notes.note_id = note.id WHERE tour_id = ?', [req.params.id],  function(err, results, fields) {
            if (err) throw err;
            responseObj.notes = results;
        });
    },
    
    getTourImage: function(req, responseObj, res) {
        var response= {};
        var connection = req.connection;
        return new Promise(function(resolve, reject){
            var query = connection.query('SELECT * FROM `gallery_image` inner join tours on tours.id = gallery_image.tour_id WHERE id = ?', [req.params.id],  function(err, results, fields) {
                if (err) { reject(err); };
                responseObj.images = results;
                response.tour = responseObj;
                    
                res.send(responseObj);

            });
        });
    },
    
    getTourInclusions: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT inclusion.id as id, inclusion.inclusion_title as title FROM `inclusion` inner join tours_inclusion on tours_inclusion.inclusion_id = inclusion.id WHERE tour_id = ? and tours_inclusion.is_included = 1', [req.params.id],  function(err, results, fields) {
            if (err) throw err;
            responseObj.inclusions = results;
        });
    },
    
    getTourExclusions: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query('SELECT inclusion.id as id, inclusion.inclusion_title as title FROM `inclusion` inner join tours_inclusion on tours_inclusion.inclusion_id = inclusion.id WHERE tour_id = ? and tours_inclusion.is_included = 0', [req.params.id],  function(err, results, fields) {
            if (err) throw err;
            responseObj.exclusions = results;
            
        });
    },
    
    getTourDetail: function(req, responseObj) {
        var connection = req.connection;
        var query = connection.query(
                'select t.id as id, t.title as title, t.description as description, t.overview as overview, t.price as price, dt.duration_title as duration, ct.currency_name as currency, tt.name as type, c.city_name as city from tours t INNER JOIN tour_type tt on tt.id = t.type_id INNER JOIN duration_type dt on dt.id = t.duration_id INNER JOIN currency_type ct on ct.id = t.currency_id INNER JOIN city c on c.id = t.city_id where t.id = ?', [req.params.id], function(err, result, fields) {
                if (err) { reject(err); };
                
                responseObj.details = result[0];
            });
                
        
    },
    
    getTourDetails: function(req, res) {
        var response= {};
        var connection = req.connection;
        var responseObj = {};
        Q.all([self.getTourDetail(req, responseObj),
              self.getTourActivity(req, responseObj),
              self.getTourNote(req, responseObj),
              self.getTourInclusions(req, responseObj),
              self.getTourExclusions(req, responseObj),
              self.getTourImage(req, responseObj, res)]).then(function(results){
                response.tour = responseObj;
                    
                res.send(responseObj);
              }
        );
    },
    
    AddTourQuery: function(req, res) {
        var date = new Date();
        var today = date.getFullYear()+"-"+date.getMonth+"-"+date.getDate();
        var connection = req.connection;
        
connection.query('insert into query (name, tour_id, email, phone, message, adult_count, child_count, created_date, travel_date, status) values ("' + req.body.name + '", "' + 1 + '", "' + req.body.email + '", "' + req.body.phone + '", "' + req.body.message + '", "' + req.body.adult + '", "' + req.body.child + '", "' + req.body.date + '", "' + today + '", "' + 0 + '")', function selectCb(err, results, fields) {
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
    
    MakeSpecialTour: function(req, res) {
        var response = {};
        var connection = req.connection;
         var query = connection.query(
                        'update tours set tours.is_special = 1 where tours.id = ?', [req.params.id], function(err, result, fields) {
                        if (err) { reject(err); };

                        response.status = true;
                            res.send(response);
                    });
    },
    
    DeleteTour: function(req, res) {
        var response = {};
        var connection = req.connection;
         var query = connection.query(
                        'delete from tours where tours.id = ?', [req.params.id], function(err, result, fields) {
                        if (err) { reject(err); };

                        response.status = true;
                            res.send(response);
                    });
    },
    
    SaveTour: function(req, res, tourId){
        var connection = req.connection;
        var date = new Date();
        var today = date.getFullYear()+"-"+date.getMonth+"-"+date.getDate();
        
        var query = connection.query('insert into tours (title, description, city_id, state_id, country_id, type_id, duration_id, currency_id, price, created, updated, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + req.body.city + '", "' + 1 + '", "' + 1 + '", "' + req.body.type + '", "' + req.body.duration + '", "' + req.body.currency + '", "' + req.body.price + '", "' + today + '", "' + today + '", "' + 0 + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else self.SaveInclusions(req, res, results.insertId);
        });
    },
    
    
    SaveInclusions: function(req, res, tourId){

        var inclusions = req.body.inclusions;
        var connection = req.connection;
        for(var i=0; i < inclusions.length; i++){
            var query = connection.query('insert into tours_inclusion (tour_id, inclusion_id, is_included) values ("' + tourId + '", "' + inclusions[i] + '", "' + 1 + '")', function selectCb(err, results, fields) {
                if (err) throw err;
            });
        }
        self.SaveExclusions(req, res, tourId);
    },
        
    SaveExclusions: function(req, res, tourId){
        var exclusions = req.body.exclusions;
        var connection = req.connection;
        for(var i=0; i < exclusions.length; i++){
            var query = connection.query('insert into tours_inclusion (tour_id, inclusion_id, is_included) values ("' + tourId + '", "' + exclusions[i] + '", "' + 0 + '")', function selectCb(err, results, fields) {
                if (err) throw err;
            });
        }
        self.SaveImage(req, res, tourId);
    },
    
    SaveImage: function(req, res, tourId){
        
        var connection = req.connection;
        var query = connection.query('insert into gallery_image (tour_id, image_path) values ("' + tourId + '", "' + req.body.image + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            
        });
    },   
    
    AddTour: function(req, res){ 
        self.SaveTour(req, res)
        /*Q.all([self.SaveTour(req, tourId),
              self.SaveInclusions(req, tourId),
              self.SaveExclusions(req, tourId),
              self.SaveImage(req, res, tourId)]).then(function(results){
                
              }
        );*/
        var response = {};
        response.status = "success";
        res.send(response);
    }
    
};
module.exports = self;