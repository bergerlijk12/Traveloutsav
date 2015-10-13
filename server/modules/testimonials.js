var Q = require('q');
var Promise = require('bluebird');
var async = require('async');

var self = {
    
    
    getAllTestimonials: function(req, res) {
        var response= {};
        var connection = req.connection;
        var query = connection.query(
            'select * from testimonials where is_deleted = 0', function(err, result, fields) {
                if (err) throw err;

                response.testimonials = result;
                res.send(response);
            })
    },
    
    AddTestimonial: function(req, res) {
        console.log(req.body);
        var date = new Date();
        var today = date.getFullYear()+"-"+date.getMonth+"-"+date.getDate();
        var connection = req.connection;
connection.query('insert into testimonials (full_name, testimonial, image_path, created_date, is_deleted) values ("' + req.body.fullName + '", "' + req.body.testimonial + '", "' + req.body.image_path + '", "' + today + '", "' + 0 + '")', function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send({status: 'success'});
        });
    },
    
    DeleteTestimonial: function(req, res) {
        var connection = req.connection;
connection.query('update testimonials set is_deleted = 1 WHERE id = ?', [req.params.id],  function selectCb(err, results, fields) {
            if (err) throw err;
            else res.send('success');
        });
    }
    
};
module.exports = self;