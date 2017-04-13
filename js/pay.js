/**
 * Created by Administrator on 2017/4/12.
 */
var app=angular.module("app",[]);
app.controller("adds",function($scope){
    $scope.txt=1;
    $scope.zong=988.00;
    $scope.sum=998.00;
    $scope.yun=10.00;
    $scope.nums=998.00;
    $scope.zhi=100.00;
    $scope.del=function(){
        if($scope.txt>1){
            $scope.txt--;
            $scope.zong=$scope.txt*988;
            $scope.sum=$scope.zong+$scope.yun;
            $scope.nums=$scope.sum;
        }
    };
    $scope.add=function(){
        if($scope.txt<8){
            $scope.txt++;
            $scope.zong=$scope.txt*998;
            $scope.sum=$scope.zong+$scope.yun;
            $scope.nums=$scope.sum;
        }
    }
    $scope.flag=false;
   $scope.kai=function()
    {
        if($scope.flag==false){
            $scope.nums=$scope.sum-$scope.zhi;
        }

    }

})
