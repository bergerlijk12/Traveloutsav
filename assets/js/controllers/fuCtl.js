travelApp.controller('fuCtl', ['$scope', function ($scope) {
                $scope.progress = function (percentDone) {
                    log("progress: " + percentDone + "%");
                };

                $scope.done = function (files, data) {
                    log("upload complete");
                    log("data: " + JSON.stringify(data));
                    writeFiles(files);
                };

                $scope.getData = function (files) {
                    return {msg: "from the client", date: new Date()};
                };

                $scope.error = function (files, type, msg) {
                    log("Upload error: " + msg);
                    log("Error type:" + type);
                    writeFiles(files);
                }

                function writeFiles(files) {
                    var msg = "Files<ul>";
                    for (var i = 0; i < files.length; i++) {
                        msg += "<li>" + files[i].name + "</li>";
                    }
                    msg += "</ul>";

                    log(msg);
                }

                var elem = document.getElementById("console");
                var console = angular.element(elem);

                function log(msg) {
                    var html = console.html();
                    if (html.length) {
                        html += "<br />";
                    }

                    html += msg;
                    console.html(html);

                    elem.scrollTop = elem.scrollHeight;
                }
            }]);