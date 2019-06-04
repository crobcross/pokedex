// Write your code here
var Pokemon = angular.module("Pokemon",[])
/* 01000100 01100001 01101110 01101001 01100101 01101100 00100000 01000011 01110010 01110101 01111010 */

Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Pokebola = [];
	for(var m=1; m<=500;m++){


	$http({
		meth: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+m
	}).then(function success(x){
		$scope.Pokebola.push(x);
	})
 }
})