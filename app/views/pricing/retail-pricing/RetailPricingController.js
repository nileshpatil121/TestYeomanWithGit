(function() {
    "use strict";
    angular.module("app", ["app.tables","app.controllers","ui.bootstrap"])
}).call(this), function() {
        "use strict";
        angular.module("app.tables", [])
        .controller("retailPricingCtrl", ["$scope", "$filter","$http", function($scope, $filter,$http) 
		{
            var init;
            $http({
        		method : 'POST',
        		url : '../retail/getRetailPricingList'
        	}).success(function(responce) {
	            	return $scope.stores = responce.data.data,
	            	$scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", 
	            	$scope.select = function(page) {
	                    var end, start;
	                    return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
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
	            })
           
        }]).controller("DatepickerDemoCtrl", ["$scope", function($scope) {
            return $scope.today = function() {
                return $scope.dt1 = new Date, $scope.dt2 = new Date
            }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function() {
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
        }])
    }.call(this), function() {
        "use strict";
        angular.module("app.controllers", []).controller("AppCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
            var $window;
            return $window = $(window), $scope.main = {
                brand: "TESORO CONNECT",
                name: "Lisa Doe"
            }, $scope.pageTransitionOpts = [{
                name: "Scale up",
                "class": "ainmate-scale-up"
            }, {
                name: "Fade up",
                "class": "animate-fade-up"
            }, {
                name: "Slide in from right",
                "class": "ainmate-slide-in-right"
            }, {
                name: "Flip Y",
                "class": "animate-flip-y"
            }], $scope.admin = {
                layout: "wide",
                menu: "vertical",
                fixedHeader: !0,
                fixedSidebar: !1,
                pageTransition: $scope.pageTransitionOpts[0]
            }, $scope.$watch("admin", function(newVal, oldVal) {
                return "horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void(oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void(newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
            }, !0), $scope.color = {
                primary: "#248AAF",
                success: "#3CBC8D",
                info: "#29B7D3",
                infoAlt: "#666699",
                warning: "#FAC552",
                danger: "#E9422E"
            }
        }]).controller("HeaderCtrl", ["$scope", function($scope) {}])
        .controller("NavContainerCtrl", ["$scope", function() {}])
        .controller("NavCtrl", ["$scope", "taskStorage", "filterFilter", function($scope, taskStorage, filterFilter) {}])
        .controller("DashboardCtrl", ["$scope", function() {}])
    }.call(this);