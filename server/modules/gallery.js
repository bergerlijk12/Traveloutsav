var Q = require('q');
var Promise = require('bluebird');
var async = require('async');

var self = {
    
    
    getAllGalleries: function(req, res) {
        var response= {};
        var connection = req.connection;
        var query = connection.query(
            'select g.id as id, g.gallery_title as title, gi.image_path as image, gi.caption_text as caption from gallery g INNER JOIN gallery_image gi on gi.gallery_id = g.id group by g.id order by g.id', function(err, result, fields) {
                if (err) throw err;

                response.galleries = result;
                res.send(response);
            })
    },
    
    EditGallery: function(req, res) {
        var connection = req.connection;
connection.query('insert into tours (title, description, city_id, state_id, country_id, zipcode, type_id, duration_id, currency_id, price, created, update, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + req.body.city + '", "' + req.body.state + '", "' + req.body.country + '", "' + req.body.zipcode + '", "' + req.body.type + '", "' + req.body.duration + '", "' + req.body.currency + '", "' + req.body.price + '", "' + today + '", "' + today + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send('success');
        });
    },
    
    DeleteGallery: function(req, res) {
        var connection = req.connection;
connection.query('insert into tours (title, description, city_id, state_id, country_id, zipcode, type_id, duration_id, currency_id, price, created, update, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + req.body.city + '", "' + req.body.state + '", "' + req.body.country + '", "' + req.body.zipcode + '", "' + req.body.type + '", "' + req.body.duration + '", "' + req.body.currency + '", "' + req.body.price + '", "' + today + '", "' + today + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send('success');
        });
    },
    
    SaveGalery: function(req, res, tourId){
        var connection = req.connection;
        var date = new Date();
        var today = date.getFullYear()+"-"+date.getMonth+"-"+date.getDate();
        
        var query = connection.query('insert into gallery (gallery_title, description, created, is_deleted) values ("' + req.body.title + '", "' + req.body.description + '", "' + today + '", "' + 0 + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else self.SaveImage(req, res, results.insertId);
        });
    },
    
    
    SaveImage: function(req, res, galleryId){
        
        var connection = req.connection;
        var images = req.body.images;
        for(var i=0; i<images.length; i++){
            var query = connection.query('insert into gallery_image (gallery_id, image_path) values ("' + galleryId + '", "' + images[i] + '")', function selectCb(err, results, fields) {
                if (err) throw err;

            });
        }
    },   
    
    AddGallery: function(req, res){ 
        self.SaveGallery(req, res)
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