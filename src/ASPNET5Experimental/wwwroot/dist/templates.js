angular.module('virtualTrainingTemplates', ['App/Templates/courseList.html', 'App/Templates/courseTracks.html']);

angular.module("App/Templates/courseList.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("App/Templates/courseList.html",
    "<div class=\"col-md-3 rowmargin\" style=\"height: 150px; margin-top: 5px; margin-bottom: 15px\" ng-repeat=\"course in vm.courses\"><div class=\"thumbnail\"><div class=\"caption\"><strong>{{course.title}}</strong></div><div style=\"text-align:center\">by {{course.author}}</div><br><span class=\"right\" style=\"margin-right: 9px\">{{course.duration}} hr</span><div class=\"left\" ng-show=\"vm.isAuthenticated\"><button class=\"left btn\" style=\"padding: 3px\" ng-click=\"vm.addTrack(course.courseId)\" ng-show=\"!course.tracked\">Watch Course</button> <span class=\"left\" ng-show=\"course.tracked && !course.tracked.isCompleted\">Watching...</span> <span class=\"left\" ng-show=\"course.tracked && course.tracked.isCompleted\">Watched</span></div></div></div>");
}]);

angular.module("App/Templates/courseTracks.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("App/Templates/courseTracks.html",
    "<div><h3>Status of Courses Tracked</h3><table class=\"table\"><tr><th>Course Title</th><th>Author</th><th>Completed?</th></tr><tr ng-repeat=\"track in vm.courses\"><td>{{track.courseTitle}}</td><td>{{track.author}}</td><td><span ng-show=\"track.isCompleted\">Completed</span> <button class=\"btn btn-link\" style=\"padding: 0\" ng-show=\"!track.isCompleted\" ng-click=\"vm.completeCourse(track.courseTrackerId)\">Mark Completed</button></td></tr></table></div>");
}]);
