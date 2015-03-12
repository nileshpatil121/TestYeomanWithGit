"use strict";angular.module("mytodo2App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"app/dashboard/dashboard.html",controller:""}).when("/retail",{templateUrl:"app/pricing/retail-pricing/RetailPricingView.html",controller:"retailPricingCtrl"}).when("/competitor",{templateUrl:"app/pricing/competitor-pricing/CompetitorPricingView.html",controller:"compPricingCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mytodo2App").controller("retailPricingCtrl",["$scope","$http","$filter","retailService",function(a,b,c,d){function e(){d.getData().then(function(a){f(a)})}function f(b){a.stores=b.data,a.searchKeywords="",a.filteredStores=[],a.row="",a.searchKeywords="",a.filteredStores=[],a.row="",a.select=function(b){var c,d;return d=(b-1)*a.numPerPage,c=d+a.numPerPage,a.currentPageStores=a.filteredStores.slice(d,c)},a.onFilterChange=function(){return a.select(1),a.currentPage=1,a.row=""},a.onNumPerPageChange=function(){return a.select(1),a.currentPage=1},a.onOrderChange=function(){return a.select(1),a.currentPage=1},a.search=function(){return a.filteredStores=c("filter")(a.stores,a.searchKeywords),a.onFilterChange()},a.order=function(b){return a.row!==b?(a.row=b,a.filteredStores=c("orderBy")(a.stores,b),a.onOrderChange()):void 0},a.numPerPageOpt=[3,5,10,20],a.numPerPage=a.numPerPageOpt[2],a.currentPage=1,a.currentPageStores=[],(g=function(){return a.search(),a.select(a.currentPage)})()}var g;a.stores=[],e(),a.showWeeks=!0,a.toggleWeeks=function(){return a.showWeeks=!a.showWeeks},a.clear=function(){return a.dt=null},a.disabled=function(a,b){return"day"===b&&(0===a.getDay()||6===a.getDay())},a.toggleMin=function(){var b;return a.minDate=null!=(b=a.minDate)?b:{"null":new Date}},a.toggleMin(),a.open=function(b){return b.preventDefault(),b.stopPropagation(),a.opened=!0},a.open1=function(b){return b.preventDefault(),b.stopPropagation(),a.opened1=!0},a.open2=function(b){return b.preventDefault(),b.stopPropagation(),a.opened2=!0},a.dateOptions={"year-format":"'yy'","starting-day":1},a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","shortDate"],a.format=a.formats[0]}]),angular.module("mytodo2App").service("retailService",["$http","$q",function(a,b){function c(){var b=a({method:"get",url:"resources/data/retailPriceList.json"});return b.then(e,d)}function d(a){return b.reject(angular.isObject(a.data)&&a.data.message?a.data.message:"An unknown error occurred.")}function e(a){return a.data}return{getData:c}}]),angular.module("mytodo2App").controller("compPricingCtrl",["$scope","$http","$filter",function(a,b,c){var d;a.firstCardFlag="true",a.secondCardFlag="false",a.thirtCardFlag="false",b.get("resources/data/retailPriceList.json").success(function(b){return a.stores=b.data,a.searchKeywords="",a.filteredStores=[],a.row="",a.select=function(b){var c,d;return d=(b-1)*a.numPerPage,c=d+a.numPerPage,a.currentPageStores=a.filteredStores.slice(d,c)},a.ChangeCard=function(b){1==b?(a.firstCardFlag="true",a.secondCardFlag="false",a.thirtCardFlag="false"):2==b?(a.firstCardFlag="false",a.secondCardFlag="true",a.thirtCardFlag="false"):3==b&&(a.firstCardFlag="false",a.secondCardFlag="false",a.thirtCardFlag="true")},a.previewValue=function(a,b){var c=a.$$watchers[b].last,d=document.getElementById(c).value,e=c+"_preview";document.getElementById(e).innerHTML=d},a.onFilterChange=function(){return a.select(1),a.currentPage=1,a.row=""},a.onNumPerPageChange=function(){return a.select(1),a.currentPage=1},a.onOrderChange=function(){return a.select(1),a.currentPage=1},a.search=function(){return a.filteredStores=c("filter")(a.stores,a.searchKeywords),a.onFilterChange()},a.order=function(b){return a.row!==b?(a.row=b,a.filteredStores=c("orderBy")(a.stores,b),a.onOrderChange()):void 0},a.numPerPageOpt=[3,5,10,20],a.numPerPage=a.numPerPageOpt[2],a.currentPage=1,a.currentPageStores=[],(d=function(){return a.search(),a.select(a.currentPage)})()})}]);