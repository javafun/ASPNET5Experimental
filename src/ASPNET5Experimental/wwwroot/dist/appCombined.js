(function () {
    angular.module('virtualTrainingApp', ['ngRoute', 'virtualTrainingTemplates'])
        .config(['$routeProvider', function ($routeProvider) {
            //TODO: Configure routes
            $routeProvider.when('/courseList', {
                templateUrl: 'App/Templates/courseList.html',
                controller: 'courseListCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks2', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/courseList' });
        }]);
}());;(function () {
    angular.module('virtualTrainingApp', ['ngRoute', 'virtualTrainingTemplates'])
        .config(['$routeProvider', function ($routeProvider) {
            //TODO: Configure routes
            $routeProvider.when('/courseList', {
                templateUrl: 'App/Templates/courseList.html',
                controller: 'courseListCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks2', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/courseList' });
        }]);
}());;(function () {
    angular.module('virtualTrainingApp', ['ngRoute', 'virtualTrainingTemplates'])
        .config(['$routeProvider', function ($routeProvider) {
            //TODO: Configure routes
            $routeProvider.when('/courseList', {
                templateUrl: 'App/Templates/courseList.html',
                controller: 'courseListCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks2', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/courseList' });
        }]);
}());;(function () {
    angular.module('virtualTrainingApp', ['ngRoute', 'virtualTrainingTemplates'])
        .config(['$routeProvider', function ($routeProvider) {
            //TODO: Configure routes
            $routeProvider.when('/courseList', {
                templateUrl: 'App/Templates/courseList.html',
                controller: 'courseListCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks2', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/courseList' });
        }]);
}());;(function () {
    angular.module('virtualTrainingApp', ['ngRoute', 'virtualTrainingTemplates'])
        .config(['$routeProvider', function ($routeProvider) {
            //TODO: Configure routes
            $routeProvider.when('/courseList', {
                templateUrl: 'App/Templates/courseList.html',
                controller: 'courseListCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .when('/courseTracks2', {
                templateUrl: 'App/Templates/courseTracks.html',
                controller: 'courseTrackCtrl',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/courseList' });
        }]);
}());;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;angular.module('virtualTrainingTemplates', []);

;(function (module) {
    module.controller('courseListCtrl', ['userInfoSvc', 'coursesDataSvc', function (userInfoSvc, coursesDataSvc) {
        var vm = this;

        function init() {
            coursesDataSvc.getAllCourses().then(function (result) {
                vm.courses = result;
            }, function (error) {
                console.log(error);
            });
        }

        vm.isAuthenticated = userInfoSvc.isAuthenticated();

        if (vm.isAuthenticated) {
            vm.addTrack = function (courseId) {
                coursesDataSvc.addCourseToTrack({
                    courseId: courseId
                }).then(function (result) {
                    init();
                }, function (error) {
                    console.log(error);
                });
            };
        }

        init();
    }]);
}(angular.module('virtualTrainingApp')));;(function(module){
	module.controller('courseTrackCtrl', ['userInfoSvc', 'coursesDataSvc', function(userInfoSvc, coursesDataSvc) {
			var vm = this;

			function init(){
				coursesDataSvc.getCourseTracks().then(function(result){
					vm.courses = result.data? result.data : result;
				});
			}

			vm.completeCourse = function(courseTrackerId){
				coursesDataSvc.modifyCourseTrack({courseTrackerId: courseTrackerId})
					.then(function(result){
						init();
					}, function(error){
						console.log(error);
					});
			};

			init();
		}]);
}(angular.module('virtualTrainingApp')));;(function (module) {
    module.factory('coursesDataSvc', ['$http', function ($http) {
        function getAllCourses() {
            return $http.get('/api/courses').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function getCourseTracks() {
            return $http.get('/api/courseTrackers').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function addCourseToTrack(newCourse) {
            return $http.post('/api/courseTrackers', {
                courseId: newCourse.courseId
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        function modifyCourseTrack(courseTrackDetails) {
            return $http.put('/api/courseTrackers/' + courseTrackDetails.courseTrackerId, {
                courseTrackerId: courseTrackDetails.courseTrackerId,
                isCompleted: true
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        return {
            getAllCourses: getAllCourses,
            getCourseTracks: getCourseTracks,
            addCourseToTrack: addCourseToTrack,
            modifyCourseTrack: modifyCourseTrack
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('navigationCtrl', ['userInfoSvc', function (userInfoSvc) {
        var nav = this;
        nav.navigationList = [{ url: '#/courseList', text: 'Course List' }, { url: '#/courseTracks', text: 'Course Track' }];
        nav.isAuthenticated = userInfoSvc.isAuthenticated();
    }]);
}(angular.module('virtualTrainingApp')));;angular.module('virtualTrainingTemplates', ['../App/Templates/courseList.html', '../App/Templates/courseTracks.html']);

angular.module("../App/Templates/courseList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseList.html",
    "<div class=\"col-md-3 rowmargin\" style=\"height: 150px; margin-top: 5px; margin-bottom: 15px;\" ng-repeat=\"course in vm.courses\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <div class=\"caption\"><strong>{{course.title}}</strong></div>\n" +
    "        <div style=\"text-align:center;\">by {{course.author}}</div>\n" +
    "        <br />\n" +
    "        <span class=\"right\" style=\"margin-right: 9px;\">{{course.duration}} hr</span>\n" +
    "        <div class=\"left\" ng-show=\"vm.isAuthenticated\">\n" +
    "            <button class=\"left btn\" style=\"padding: 3px;\" ng-click=\"vm.addTrack(course.courseId)\" ng-show=\"!course.tracked\">Watch Course</button>\n" +
    "\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && !course.tracked.isCompleted\">Watching...</span>\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && course.tracked.isCompleted\">Watched</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../App/Templates/courseTracks.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseTracks.html",
    "<div>\n" +
    "    <h3>Status of Courses Tracked</h3>\n" +
    "    <table class=\"table\">\n" +
    "        <tr>\n" +
    "            <th>Course Title</th>\n" +
    "            <th>Author</th>\n" +
    "            <th>Completed?</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"track in vm.courses\">\n" +
    "            <td>{{track.courseTitle}}</td>\n" +
    "            <td>{{track.author}}</td>\n" +
    "            <td>\n" +
    "                <span ng-show=\"track.isCompleted\">Completed</span>\n" +
    "                <button class=\"btn btn-link\" style=\"padding: 0;\" ng-show=\"!track.isCompleted\" ng-click=\"vm.completeCourse(track.courseTrackerId)\">Mark Completed</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);
;(function (module) {
    module.service('userInfoSvc', ['$window', function ($window) {
        var isUserAuthenticated = false, userName;

        if ($window.userName) {
            isUserAuthenticated = true;
            userName = $window.userName;
        }

        this.getUserName = function () {
            return userName;
        };

        this.isAuthenticated = function () {
            return isUserAuthenticated;
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('courseListCtrl', ['userInfoSvc', 'coursesDataSvc', function (userInfoSvc, coursesDataSvc) {
        var vm = this;

        function init() {
            coursesDataSvc.getAllCourses().then(function (result) {
                vm.courses = result;
            }, function (error) {
                console.log(error);
            });
        }

        vm.isAuthenticated = userInfoSvc.isAuthenticated();

        if (vm.isAuthenticated) {
            vm.addTrack = function (courseId) {
                coursesDataSvc.addCourseToTrack({
                    courseId: courseId
                }).then(function (result) {
                    init();
                }, function (error) {
                    console.log(error);
                });
            };
        }

        init();
    }]);
}(angular.module('virtualTrainingApp')));;(function(module){
	module.controller('courseTrackCtrl', ['userInfoSvc', 'coursesDataSvc', function(userInfoSvc, coursesDataSvc) {
			var vm = this;

			function init(){
				coursesDataSvc.getCourseTracks().then(function(result){
					vm.courses = result.data? result.data : result;
				});
			}

			vm.completeCourse = function(courseTrackerId){
				coursesDataSvc.modifyCourseTrack({courseTrackerId: courseTrackerId})
					.then(function(result){
						init();
					}, function(error){
						console.log(error);
					});
			};

			init();
		}]);
}(angular.module('virtualTrainingApp')));;(function (module) {
    module.factory('coursesDataSvc', ['$http', function ($http) {
        function getAllCourses() {
            return $http.get('/api/courses').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function getCourseTracks() {
            return $http.get('/api/courseTrackers').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function addCourseToTrack(newCourse) {
            return $http.post('/api/courseTrackers', {
                courseId: newCourse.courseId
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        function modifyCourseTrack(courseTrackDetails) {
            return $http.put('/api/courseTrackers/' + courseTrackDetails.courseTrackerId, {
                courseTrackerId: courseTrackDetails.courseTrackerId,
                isCompleted: true
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        return {
            getAllCourses: getAllCourses,
            getCourseTracks: getCourseTracks,
            addCourseToTrack: addCourseToTrack,
            modifyCourseTrack: modifyCourseTrack
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('navigationCtrl', ['userInfoSvc', function (userInfoSvc) {
        var nav = this;
        nav.navigationList = [{ url: '#/courseList', text: 'Course List' }, { url: '#/courseTracks', text: 'Course Track' }];
        nav.isAuthenticated = userInfoSvc.isAuthenticated();
    }]);
}(angular.module('virtualTrainingApp')));;angular.module('virtualTrainingTemplates', ['../App/Templates/courseList.html', '../App/Templates/courseTracks.html']);

angular.module("../App/Templates/courseList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseList.html",
    "<div class=\"col-md-3 rowmargin\" style=\"height: 150px; margin-top: 5px; margin-bottom: 15px;\" ng-repeat=\"course in vm.courses\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <div class=\"caption\"><strong>{{course.title}}</strong></div>\n" +
    "        <div style=\"text-align:center;\">by {{course.author}}</div>\n" +
    "        <br />\n" +
    "        <span class=\"right\" style=\"margin-right: 9px;\">{{course.duration}} hr</span>\n" +
    "        <div class=\"left\" ng-show=\"vm.isAuthenticated\">\n" +
    "            <button class=\"left btn\" style=\"padding: 3px;\" ng-click=\"vm.addTrack(course.courseId)\" ng-show=\"!course.tracked\">Watch Course</button>\n" +
    "\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && !course.tracked.isCompleted\">Watching...</span>\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && course.tracked.isCompleted\">Watched</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../App/Templates/courseTracks.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseTracks.html",
    "<div>\n" +
    "    <h3>Status of Courses Tracked</h3>\n" +
    "    <table class=\"table\">\n" +
    "        <tr>\n" +
    "            <th>Course Title</th>\n" +
    "            <th>Author</th>\n" +
    "            <th>Completed?</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"track in vm.courses\">\n" +
    "            <td>{{track.courseTitle}}</td>\n" +
    "            <td>{{track.author}}</td>\n" +
    "            <td>\n" +
    "                <span ng-show=\"track.isCompleted\">Completed</span>\n" +
    "                <button class=\"btn btn-link\" style=\"padding: 0;\" ng-show=\"!track.isCompleted\" ng-click=\"vm.completeCourse(track.courseTrackerId)\">Mark Completed</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);
;(function (module) {
    module.service('userInfoSvc', ['$window', function ($window) {
        var isUserAuthenticated = false, userName;

        if ($window.userName) {
            isUserAuthenticated = true;
            userName = $window.userName;
        }

        this.getUserName = function () {
            return userName;
        };

        this.isAuthenticated = function () {
            return isUserAuthenticated;
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('courseListCtrl', ['userInfoSvc', 'coursesDataSvc', function (userInfoSvc, coursesDataSvc) {
        var vm = this;

        function init() {
            coursesDataSvc.getAllCourses().then(function (result) {
                vm.courses = result;
            }, function (error) {
                console.log(error);
            });
        }

        vm.isAuthenticated = userInfoSvc.isAuthenticated();

        if (vm.isAuthenticated) {
            vm.addTrack = function (courseId) {
                coursesDataSvc.addCourseToTrack({
                    courseId: courseId
                }).then(function (result) {
                    init();
                }, function (error) {
                    console.log(error);
                });
            };
        }

        init();
    }]);
}(angular.module('virtualTrainingApp')));;(function(module){
	module.controller('courseTrackCtrl', ['userInfoSvc', 'coursesDataSvc', function(userInfoSvc, coursesDataSvc) {
			var vm = this;

			function init(){
				coursesDataSvc.getCourseTracks().then(function(result){
					vm.courses = result.data? result.data : result;
				});
			}

			vm.completeCourse = function(courseTrackerId){
				coursesDataSvc.modifyCourseTrack({courseTrackerId: courseTrackerId})
					.then(function(result){
						init();
					}, function(error){
						console.log(error);
					});
			};

			init();
		}]);
}(angular.module('virtualTrainingApp')));;(function (module) {
    module.factory('coursesDataSvc', ['$http', function ($http) {
        function getAllCourses() {
            return $http.get('/api/courses').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function getCourseTracks() {
            return $http.get('/api/courseTrackers').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function addCourseToTrack(newCourse) {
            return $http.post('/api/courseTrackers', {
                courseId: newCourse.courseId
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        function modifyCourseTrack(courseTrackDetails) {
            return $http.put('/api/courseTrackers/' + courseTrackDetails.courseTrackerId, {
                courseTrackerId: courseTrackDetails.courseTrackerId,
                isCompleted: true
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        return {
            getAllCourses: getAllCourses,
            getCourseTracks: getCourseTracks,
            addCourseToTrack: addCourseToTrack,
            modifyCourseTrack: modifyCourseTrack
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('navigationCtrl', ['userInfoSvc', function (userInfoSvc) {
        var nav = this;
        nav.navigationList = [{ url: '#/courseList', text: 'Course List' }, { url: '#/courseTracks', text: 'Course Track' }];
        nav.isAuthenticated = userInfoSvc.isAuthenticated();
    }]);
}(angular.module('virtualTrainingApp')));;angular.module('virtualTrainingTemplates', ['../App/Templates/courseList.html', '../App/Templates/courseTracks.html']);

angular.module("../App/Templates/courseList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseList.html",
    "<div class=\"col-md-3 rowmargin\" style=\"height: 150px; margin-top: 5px; margin-bottom: 15px;\" ng-repeat=\"course in vm.courses\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <div class=\"caption\"><strong>{{course.title}}</strong></div>\n" +
    "        <div style=\"text-align:center;\">by {{course.author}}</div>\n" +
    "        <br />\n" +
    "        <span class=\"right\" style=\"margin-right: 9px;\">{{course.duration}} hr</span>\n" +
    "        <div class=\"left\" ng-show=\"vm.isAuthenticated\">\n" +
    "            <button class=\"left btn\" style=\"padding: 3px;\" ng-click=\"vm.addTrack(course.courseId)\" ng-show=\"!course.tracked\">Watch Course</button>\n" +
    "\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && !course.tracked.isCompleted\">Watching...</span>\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && course.tracked.isCompleted\">Watched</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../App/Templates/courseTracks.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseTracks.html",
    "<div>\n" +
    "    <h3>Status of Courses Tracked</h3>\n" +
    "    <table class=\"table\">\n" +
    "        <tr>\n" +
    "            <th>Course Title</th>\n" +
    "            <th>Author</th>\n" +
    "            <th>Completed?</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"track in vm.courses\">\n" +
    "            <td>{{track.courseTitle}}</td>\n" +
    "            <td>{{track.author}}</td>\n" +
    "            <td>\n" +
    "                <span ng-show=\"track.isCompleted\">Completed</span>\n" +
    "                <button class=\"btn btn-link\" style=\"padding: 0;\" ng-show=\"!track.isCompleted\" ng-click=\"vm.completeCourse(track.courseTrackerId)\">Mark Completed</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);
;(function (module) {
    module.service('userInfoSvc', ['$window', function ($window) {
        var isUserAuthenticated = false, userName;

        if ($window.userName) {
            isUserAuthenticated = true;
            userName = $window.userName;
        }

        this.getUserName = function () {
            return userName;
        };

        this.isAuthenticated = function () {
            return isUserAuthenticated;
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('courseListCtrl', ['userInfoSvc', 'coursesDataSvc', function (userInfoSvc, coursesDataSvc) {
        var vm = this;

        function init() {
            coursesDataSvc.getAllCourses().then(function (result) {
                vm.courses = result;
            }, function (error) {
                console.log(error);
            });
        }

        vm.isAuthenticated = userInfoSvc.isAuthenticated();

        if (vm.isAuthenticated) {
            vm.addTrack = function (courseId) {
                coursesDataSvc.addCourseToTrack({
                    courseId: courseId
                }).then(function (result) {
                    init();
                }, function (error) {
                    console.log(error);
                });
            };
        }

        init();
    }]);
}(angular.module('virtualTrainingApp')));;(function(module){
	module.controller('courseTrackCtrl', ['userInfoSvc', 'coursesDataSvc', function(userInfoSvc, coursesDataSvc) {
			var vm = this;

			function init(){
				coursesDataSvc.getCourseTracks().then(function(result){
					vm.courses = result.data? result.data : result;
				});
			}

			vm.completeCourse = function(courseTrackerId){
				coursesDataSvc.modifyCourseTrack({courseTrackerId: courseTrackerId})
					.then(function(result){
						init();
					}, function(error){
						console.log(error);
					});
			};

			init();
		}]);
}(angular.module('virtualTrainingApp')));;(function (module) {
    module.factory('coursesDataSvc', ['$http', function ($http) {
        function getAllCourses() {
            return $http.get('/api/courses').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function getCourseTracks() {
            return $http.get('/api/courseTrackers').then(function (result) {
                return result.data;
            }, function (error) {
                return error;
            });
        }

        function addCourseToTrack(newCourse) {
            return $http.post('/api/courseTrackers', {
                courseId: newCourse.courseId
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        function modifyCourseTrack(courseTrackDetails) {
            return $http.put('/api/courseTrackers/' + courseTrackDetails.courseTrackerId, {
                courseTrackerId: courseTrackDetails.courseTrackerId,
                isCompleted: true
            }).then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
        };

        return {
            getAllCourses: getAllCourses,
            getCourseTracks: getCourseTracks,
            addCourseToTrack: addCourseToTrack,
            modifyCourseTrack: modifyCourseTrack
        };
    }]);
}(angular.module('virtualTrainingApp')));
;(function (module) {
    module.controller('navigationCtrl', ['userInfoSvc', function (userInfoSvc) {
        var nav = this;
        nav.navigationList = [{ url: '#/courseList', text: 'Course List' }, { url: '#/courseTracks', text: 'Course Track' }];
        nav.isAuthenticated = userInfoSvc.isAuthenticated();
    }]);
}(angular.module('virtualTrainingApp')));;angular.module('virtualTrainingTemplates', ['../App/Templates/courseList.html', '../App/Templates/courseTracks.html']);

angular.module("../App/Templates/courseList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseList.html",
    "<div class=\"col-md-3 rowmargin\" style=\"height: 150px; margin-top: 5px; margin-bottom: 15px;\" ng-repeat=\"course in vm.courses\">\n" +
    "    <div class=\"thumbnail\">\n" +
    "        <div class=\"caption\"><strong>{{course.title}}</strong></div>\n" +
    "        <div style=\"text-align:center;\">by {{course.author}}</div>\n" +
    "        <br />\n" +
    "        <span class=\"right\" style=\"margin-right: 9px;\">{{course.duration}} hr</span>\n" +
    "        <div class=\"left\" ng-show=\"vm.isAuthenticated\">\n" +
    "            <button class=\"left btn\" style=\"padding: 3px;\" ng-click=\"vm.addTrack(course.courseId)\" ng-show=\"!course.tracked\">Watch Course</button>\n" +
    "\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && !course.tracked.isCompleted\">Watching...</span>\n" +
    "            <span class=\"left\" ng-show=\"course.tracked && course.tracked.isCompleted\">Watched</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../App/Templates/courseTracks.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../App/Templates/courseTracks.html",
    "<div>\n" +
    "    <h3>Status of Courses Tracked</h3>\n" +
    "    <table class=\"table\">\n" +
    "        <tr>\n" +
    "            <th>Course Title</th>\n" +
    "            <th>Author</th>\n" +
    "            <th>Completed?</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"track in vm.courses\">\n" +
    "            <td>{{track.courseTitle}}</td>\n" +
    "            <td>{{track.author}}</td>\n" +
    "            <td>\n" +
    "                <span ng-show=\"track.isCompleted\">Completed</span>\n" +
    "                <button class=\"btn btn-link\" style=\"padding: 0;\" ng-show=\"!track.isCompleted\" ng-click=\"vm.completeCourse(track.courseTrackerId)\">Mark Completed</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);
;(function (module) {
    module.service('userInfoSvc', ['$window', function ($window) {
        var isUserAuthenticated = false, userName;

        if ($window.userName) {
            isUserAuthenticated = true;
            userName = $window.userName;
        }

        this.getUserName = function () {
            return userName;
        };

        this.isAuthenticated = function () {
            return isUserAuthenticated;
        };
    }]);
}(angular.module('virtualTrainingApp')));
