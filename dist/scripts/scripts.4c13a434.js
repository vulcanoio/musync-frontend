(function(){"use strict";angular.module("MuSyncApp",["ngRoute","ngTouch","firebase"]).constant("URL",""+window.location.protocol+"//"+window.location.host+"/playlist").config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("MuSyncApp").controller("MainCtrl",["$scope","$firebase","URL",function(a,b,c){var d;return d=b(new Firebase(c)).$asObject(),d.$bindTo(a,"playlist"),a.newSong={},a.playlist={songs:[]},a.playSong=function(b){return a.playlist.current=b,a.playlist.playStart=Date.now()},a.stop=function(){return a.playlist.current=null,a.playlist.playStart=null},a.isPlaying=function(){return null!=a.playlist.current},a.play=function(){return a.playSong(0)},a.hasNextSong=function(){return null==a.playlist.songs?!1:a.isPlaying()?a.playlist.current<a.playlist.songs.length-1:!1},a.hasPreviousSong=function(){return null==a.playlist.songs?!1:a.isPlaying()?a.playlist.current>0:!1},a.addSong=function(){var b;if(!_.isEmpty(a.newSong.artist)&&!_.isEmpty(a.newSong.title))return null==(b=a.playlist).songs&&(b.songs=[]),a.playlist.songs.push(a.newSong),a.newSong={}},a.remove=function(b){return a.playlist.songs.splice(b,1),a.isPlaying()?a.playSong(a.playlist.current):void 0},a.previous=function(){return a.hasPreviousSong()?a.playSong(a.playlist.current-1):void 0},a.next=function(){return a.hasNextSong()?a.playSong(a.playlist.current+1):void 0}}])}.call(this);