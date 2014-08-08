/**
 * Created by raj on 8/8/14.
 */
angular.module('storyLine',[]).directive('storyLine',function($http){
    return{
        restrict:'E',
        templateUrl:'storyLine.html',
        controller:function controller($scope){
        },
        link:function(scope,element,attrs){
            $http({
                method: 'GET',
                url:attrs.url
            }).success(function(data) {
                scope.logo=data.logo;
                scope.chapters=data.chapters;
            });
            scope.currentChapter = 0;
            scope.currentPage=0;
            scope.showChapter= -1;
            scope.selectChapter = function (chapterIndex) {
                if(scope.showChapter==chapterIndex ){
                    scope.showChapter= -1;
                    return
                }
                scope.currentChapter=chapterIndex || 0;
                scope.showChapter= scope.currentChapter;
                scope.showPage(0);
            };
            scope.showPage = function(PageIndex){
                scope.currentPage = PageIndex || 0;
            };
            scope.showPage(0);
        }
    }

});