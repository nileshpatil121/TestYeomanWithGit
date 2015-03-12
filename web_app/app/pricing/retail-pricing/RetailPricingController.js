	'use strict';

/**
 * @ngdoc function
 * @name mytodo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodo2App
 */
angular.module('mytodo2App')
  .controller('retailPricingCtrl', function ($scope,$http,$filter,retailService) {
   var init;
   $scope.stores = [];
   loadRemoteData();
   
   // I load the remote data from the server.
	function loadRemoteData() {
		retailService.getData().then(
				function( records ) {
					applyRemoteData( records );
				}
		);
	}
   
    // I apply the remote data to the local scope.
    function applyRemoteData( records ) {
		$scope.stores = records.data,
		$scope.searchKeywords = "nilesh", $scope.filteredStores = [], $scope.row = "",$scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", 
		$scope.select = function(page) {
			var end, start;
			return start = (page - 1) * $scope.numPerPage, 
					end = start + $scope.numPerPage, 
					$scope.currentPageStores = $scope.filteredStores.slice(start, end)
		},
		$scope.onFilterChange = function() {
			return $scope.select(1), 
					$scope.currentPage = 1, 
					$scope.row = ""
		}, $scope.onNumPerPageChange = function() {
			return $scope.select(1), 
					$scope.currentPage = 1
		}, $scope.onOrderChange = function() {
			return $scope.select(1), 
					$scope.currentPage = 1
		}, $scope.search = function() {
			return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), 
					$scope.onFilterChange()
		}, $scope.order = function(rowName) {
			return $scope.row !== rowName ? ($scope.row = rowName, 
					$scope.filteredStores = $filter("orderBy")($scope.stores, rowName), 
					$scope.onOrderChange()) : void 0
		}, $scope.numPerPageOpt = [3, 5, 10, 20], 
			$scope.numPerPage = $scope.numPerPageOpt[2], 
			$scope.currentPage = 1, 
			$scope.currentPageStores = [], 
		(init = function() {
			return $scope.search(), $scope.select($scope.currentPage)
		})()

                }
				
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
