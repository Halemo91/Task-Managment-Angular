/* Services to get requests from the api */

var app = angular.module('taskServices', []);

/*assging the url to constant value*/
app.constant("baseURL", "http://localhost:4000/")

/*factory to get the tasks data */
app.factory("tasks", ['$resource','baseURL',function($resource,baseURL) {
    return $resource(baseURL+"tasks/");
}]);

/*services to get the subtasks data */
app.service('getSubTasks',['$resource','baseURL',function($resource,baseURL){
      this.getFeedback=function(id){
        return $resource(baseURL+"tasks/"+id+"/subtasks",null,{
          'update':{
            method:'GET'
          }
        });
      };
}])

/*services to get the subtasks data */
app.service('updateTask',['$resource','baseURL',function($resource,baseURL){
      this.patchFeedback=function(id){
        return $resource(baseURL+"tasks/"+id,null,{
          'update':{
            method:'PATCH'
          }
        });
      };
}])
