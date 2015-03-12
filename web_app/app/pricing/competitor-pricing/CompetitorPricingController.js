'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodo2App
 */
angular.module('mytodo2App')
  .controller('compPricingCtrl', function ($scope,$http,$filter) {
   var init;
   $scope.firstCardFlag='true';
	$scope.secondCardFlag='false';
	$scope.thirtCardFlag='false';
           $http.get("resources/data/retailPriceList.json")
	            .success(function(responce) {				
	            	return $scope.stores = responce.data,
	            	$scope.searchKeywords = "", 
					$scope.filteredStores = [], 
					$scope.row = "", 
	            	$scope.select = function(page) {
	                    var end, start;
	                    return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
	                },$scope.ChangeCard = function(cardId) {
	                    if(cardId==1){
	                    	$scope.firstCardFlag='true';
	                    	$scope.secondCardFlag='false';
	                    	$scope.thirtCardFlag='false';
	                    }
	                    else if(cardId==2){
	                    	$scope.firstCardFlag='false';
	                    	$scope.secondCardFlag='true';
	                    	$scope.thirtCardFlag='false';
	                    }
	                    else if(cardId==3){
	                    	$scope.firstCardFlag='false';
	                    	$scope.secondCardFlag='false';
	                    	$scope.thirtCardFlag='true';
	                    }
	                },$scope.previewValue = function(txtBoxId,index) {
	                	var divID=txtBoxId.$$watchers[index].last;
	                	var divValue=document.getElementById(divID).value;
	                	var previewDivID=divID+'_preview';
	                	document.getElementById(previewDivID).innerHTML=divValue;
	                },
	                $scope.onFilterChange = function() {
	                    return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
	                }, $scope.onNumPerPageChange = function() {
	                    return $scope.select(1), $scope.currentPage = 1
	                }, $scope.onOrderChange = function() {
	                    return $scope.select(1), $scope.currentPage = 1
	                }, $scope.search = function() {
	                    return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
	                }, $scope.order = function(rowName) {
	                    return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
	                }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
	                    return $scope.search(), $scope.select($scope.currentPage)
	                })()
					
					// Calender code
					
					$scope.showWeeks = !0, $scope.toggleWeeks = function() {
						return $scope.showWeeks = !$scope.showWeeks
					}, $scope.clear = function() {
						return $scope.dt = null
					}, $scope.disabled = function(date, mode) {
						return "day" === mode && (0 === date.getDay() || 6 === date.getDay())
					}, $scope.toggleMin = function() {
						var _ref;
						return $scope.minDate = null != (_ref = $scope.minDate) ? _ref : {
							"null": new Date
						}
					},  $scope.toggleMin(), $scope.open = function($event,index) {
						return $event.preventDefault(), 
					   $event.stopPropagation(), 
					   $scope.opened = !0
					},$scope.open1 = function($event,index) {
						return $event.preventDefault(), 
							   $event.stopPropagation(), 
							   $scope.opened1 = !0
					}, $scope.open2 = function($event,index) {
						return $event.preventDefault(), 
					   $event.stopPropagation(), 
					   $scope.opened2 = !0
					}, $scope.dateOptions = {
						"year-format": "'yy'",
						"starting-day": 1
					}, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0]
	            
				});
  });
