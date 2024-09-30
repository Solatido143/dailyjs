function print_HelloWorld() {
	let text = "Hello, World";
	document.getElementById("text").innerHTML = text;
	console.log(text);
}

function simpleArithmetic() {
	let x = 5;
	let y = 3;
	return x * y;
}

function oddEven(x) {
	if (isNaN(x)) {
		return "Not a proper integer";
	}

	if (x % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

function arraySum() {
	let numbers = [1, 2, 3, 4, 5];

	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log("Sum:", sum);
}

function FizzBuzz() {
    for (let FB = 1; FB <= 100; FB++) {
        if (FB % 3 === 0 && FB % 5 === 0) {
            console.log('FizzBuzz')
        } else if(FB % 3 === 0) {
            console.log('Fizz');
        } else if (FB % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(FB);
        }
    }
}

function Factorial(num) {
	let facto = 1;
	for (let i = 1; i <= num; i++) {
		facto *= i
	}
	console.log(facto);
	return facto;
}

function arrayLargest() {
	const numbers = [34, 67, 23, 21, 12, 77, 43];
	let werLargest = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if(numbers[i] > werLargest) {
			werLargest = numbers[i];
		}
	}
	console.log(werLargest);
}

function reverseAString(str) {
	let reversed = '';

	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
		
	}
	return reversed;
}

function Palindrome(string) {
	let toLower = string.toLowerCase().replace(/[^a-z0-9]/g, "");
	const pal = toLower.split("").reverse().join("");
	if (pal === toLower) {
		return true;
	} else {
		return false;
	}
}

function sumOfDigits(num) {
	let numbers = num.toString().split("");
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += parseInt(numbers[i]);
	}
	return sum;
}

function countVowels(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	let counter = 0;
	let string = str.toLowerCase();

	for (let letter = 0; letter < string.length; letter++) {
		if (vowels.includes(string[letter])) {
			counter++;
		}
	}

	return counter;
}