"use strict"

document.addEventListener('DOMContentLoaded', function(){
	const calculatorBody = document.querySelector(".calculator-body");
	const resultBox = document.querySelector('.result');
	const operations = document.querySelector('.operations');
	let listOfOperations = [];
	let clear = 0;
	calculatorBody.addEventListener("click", function (event){
		console.log()
		const action = event.target;


		function calculate(operation){
			clear = 0;
			listOfOperations = [];
			listOfOperations.push(Number(resultBox.innerHTML));
			listOfOperations.push(operation);
			operations.innerHTML = Number(resultBox.innerHTML) +`${operation}`;
		}

		function addNumber(){
			if (clear === 1){
				clear = 0;
				clearAll();
				resultBox.innerHTML = Number(action.id)
				return;
			}
			if (resultBox.innerHTML != 0){
				resultBox.innerHTML += Number(action.id);
				return;
			}
			resultBox.innerHTML = Number(action.id);
		}

		function equals(){
			clear = 1;
			listOfOperations.push(resultBox.innerHTML);
			let operation = '';
			listOfOperations.forEach(element => {
				operation += String(element);
			});
			operations.innerHTML = `${operation}=`;
			resultBox.innerHTML = eval(operation);
		}

		function sumNumbers(){
			calculate("+");
			resultBox.innerHTML = 0;
		}
		
		function minusNumbers(){
			calculate("-");
			resultBox.innerHTML = 0;
		}

		function multiplyNumbers(){
			calculate("*");
			resultBox.innerHTML = 0;
		}
		function divideNumbers(){
			calculate("/");
			resultBox.innerHTML = 0;
		}
		function clearLastSymbol(){
			if (resultBox.innerHTML.length > 1){
				resultBox.innerHTML = resultBox.innerHTML.substring(0, resultBox.innerHTML.length - 1);	
				return
			}
			resultBox.innerHTML = 0;
		}
		function clearAll(){
			resultBox.innerHTML = 0;
			operations.innerHTML = "";

		}
		function clearNewNumber(){
			resultBox.innerHTML = 0;
		}

		function changeDeterminant(){
			if (resultBox.innerHTML != 0){
				resultBox.innerHTML = - resultBox.innerHTML;
				return;
			}
		}

		function addComma(){
			if(String(resultBox.innerHTML)[resultBox.innerHTML.length-1] === '.'){
				return;
			}
			if (resultBox.innerHTML % 1 != 0){
				return;
			}
			resultBox.innerHTML = resultBox.innerHTML + '.';
		}

		function doOperation(){
			if (action.id === "equals"){
				equals();
			}
			if (action.id === "plus"){
				sumNumbers();
			}
			if (action.id === "minus"){
				minusNumbers();
			}
			if (action.id === "multiply"){
				multiplyNumbers();
			}
			if (action.id === "divide"){
				divideNumbers();
			}
			if (action.id === "clear-last-symbol"){
				clearLastSymbol();
			}
			if (action.id === "clear-all"){
				clearAll();
			}
			if (action.id === "clear-new-number"){
				clearNewNumber();
			}
			if (action.id === "comma"){
				addComma();
			}
			if (action.id === "determinant"){
				changeDeterminant();
			}
			
		}
		

		if (action.classList.contains('item-number')){
			addNumber();
		}
		if (action.classList.contains('item-action')){
			doOperation();
		}
	});
});