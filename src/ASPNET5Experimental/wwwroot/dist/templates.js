angular.module('virtualTrainingTemplates', ['../App/Templates/courseList.html', '../App/Templates/courseTracks.html']);

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
