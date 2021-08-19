 console.log('start application')
console.log('')
/*
function MyFunc() {
	console.log('Hello World')	
}
MyFunc()
MyFunc()
MyFunc()
*/
/*
function sayhelloto(name, pts = 0) {
	console.log('Hello, '+ name, 'You have '+ pts +' points')
	//ES6
	console.log(`Hello, ${name}. You have ${pts } points`)
}
sayhelloto('Askar', 20)
*/
/*
function mySum(num1, num2) {
	return num1 + num2
}
const ans = mySum(1, 2)
console.log(ans)
*/
/*
function isEven(num) {
	if (num % 2 == 0)
		return true;
	else
		return false;
}
*/
/*
function isEven(num, num2) {
	return !((num + num2) % 2)
}
console.log(isEven(4, 5))
console.log(isEven(5, 5))
console.log(isEven(6, 5))
*/
/*
function hello() {
 	const name = document.getElementById('myInput').value
 	if (name.length > 0) {
 		console.log(`Hello ${name}`)
 	}
 	document.getElementById('myInput').value =''
 }
 */
let input = document.getElementById('input')
let number
let operation


function oper(op) {
	if (op == '=') {
		if (operation == '+')
			input.value = number + (input.value * 1)
		if (operation == '-')
			input.value = number - (input.value * 1)
		if (operation == '*')
			input.value = number * (input.value * 1)
		if (operation == '/')
			input.value = number / (input.value * 1)
		if (operation == '%')
   			input.value = (100 * number) / (input.value * 1);
	} else {
		operation = op
		number = input.value * 1
		input.value = ''
	}
}
function add(symbol) {
	input.value += symbol
}
// несколько точек в одном числе
// не можем считать проценты