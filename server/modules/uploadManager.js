// config the uploader
var options = {
    tmpDir: '/var/travel/tmp',
    publicDir: '/var/travel/uploaded',
    uploadDir: '/var/travel/uploaded/files',
    uploadUrl: '/var/travel/uploaded/files/',
    maxPostSize: 11000000000, // 11 GB
    minFileSize: 1,
    maxFileSize: 10000000000, // 10 GB
    acceptFileTypes: /.+/i,
    // Files not matched by this regular expression force a download dialog,
    // to prevent executing any scripts in the context of the service domain:
    inlineFileTypes: /\.(gif|jpe?g|png)$/i,
    imageTypes: /\.(gif|jpe?g|png)$/i,
    imageVersions: {
        maxWidth: 80,
        maxHeight: 80
    },
    accessControl: {
        allowOrigin: '*',
        allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
        allowHeaders: 'Content-Type, Content-Range, Content-Disposition'
    },
    storage : {
        type : 'local'
    },
    nodeStatic: {
        cache: 3600 // seconds to cache served files
    }
};

var uploader = require('blueimp-file-upload-expressjs')(options);

var self = {
    
    
    uploadTourImage: function(req, res){
        console.log("here------------------------------------" + JSON.stringify(req.files));
        uploader.post(req, res, function(err, obj) {
            res.send(JSON.stringify(obj));
        });
    },   
    
    uploadGalleryImage: function(req, res){ 
        uploader.post(req, res, function(err, obj) {
            res.send(JSON.stringify(obj));
        });
    }
    
};
module.exports = self;