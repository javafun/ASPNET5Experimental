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
            .otherwise({ redirectTo: '/courseList' });
        }]);
}());
(function (module) {
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
}(angular.module('virtualTrainingApp')));
(function(module){
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
}(angular.module('virtualTrainingApp')));
(function (module) {
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

(function (module) {
    module.controller('navigationCtrl', ['userInfoSvc', function (userInfoSvc) {
        var nav = this;
        nav.navigationList = [{ url: '#/courseList', text: 'Course List' }, { url: '#/courseTracks', text: 'Course Track' }];
        nav.isAuthenticated = userInfoSvc.isAuthenticated();
    }]);
}(angular.module('virtualTrainingApp')));
angular.module('virtualTrainingTemplates', ['App/Templates/courseList.html', 'App/Templates/courseTracks.html']);

angular.module("App/Templates/courseList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("App/Templates/courseList.html",
    "<div class=\"col-md-3 rowmargin\" style=\"height: 150px; margin-top: 5px; margin-bottom: 15px\" ng-repeat=\"course in vm.courses\"><div class=\"thumbnail\"><div class=\"caption\"><strong>{{course.title}}</strong></div><div style=\"text-align:center\">by {{course.author}}</div><br><span class=\"right\" style=\"margin-right: 9px\">{{course.duration}} hr</span><div class=\"left\" ng-show=\"vm.isAuthenticated\"><button class=\"left btn\" style=\"padding: 3px\" ng-click=\"vm.addTrack(course.courseId)\" ng-show=\"!course.tracked\">Watch Course</button> <span class=\"left\" ng-show=\"course.tracked && !course.tracked.isCompleted\">Watching...</span> <span class=\"left\" ng-show=\"course.tracked && course.tracked.isCompleted\">Watched</span></div></div></div>");
}]);

angular.module("App/Templates/courseTracks.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("App/Templates/courseTracks.html",
    "<div><h3>Status of Courses Tracked</h3><table class=\"table\"><tr><th>Course Title</th><th>Author</th><th>Completed?</th></tr><tr ng-repeat=\"track in vm.courses\"><td>{{track.courseTitle}}</td><td>{{track.author}}</td><td><span ng-show=\"track.isCompleted\">Completed</span> <button class=\"btn btn-link\" style=\"padding: 0\" ng-show=\"!track.isCompleted\" ng-click=\"vm.completeCourse(track.courseTrackerId)\">Mark Completed</button></td></tr></table></div>");
}]);

(function (module) {
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
