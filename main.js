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
			console.log("FizzBuzz");
		} else if (FB % 3 === 0) {
			console.log("Fizz");
		} else if (FB % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(FB);
		}
	}
}

function Factorial(num) {
	let facto = 1;
	for (let i = 1; i <= num; i++) {
		facto *= i;
	}
	console.log(facto);
	return facto;
}

function arrayLargest() {
	const numbers = [34, 67, 23, 21, 12, 77, 43];
	let werLargest = numbers[0];
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > werLargest) {
			werLargest = numbers[i];
		}
	}
	console.log(werLargest);
}

function reverseAString(str) {
	let reversed = "";

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

function stringCapitalization(str) {
	const strArray = str.split(" ");
	let strCaps = "";
	for (let word = 0; word < strArray.length; word++) {
		const words = strArray[word];

		strCaps += words.charAt(0).toUpperCase() + words.slice(1) + " ";
	}
	return strCaps;
}

function duplicateArray(params) {
	const set = new Set(params);
	return Array.from(set);
}

function secondLargest(arr) {
	// if (arr.length < 2) {
	// 	return "There is no second largest number";
	// }

	const sortedArr = duplicateArray(arr).sort((a, b) => a - b);
	let max = -Infinity;
	let secondLargest = -Infinity;

	for (let i = 0; i < sortedArr.length; i++) {
		if (sortedArr[i] > max) {
			secondLargest = max;
			max = sortedArr[i];
			console.log("secondLargest: " + secondLargest);
			console.log("max: " + max);
		}
	}

	return secondLargest === -Infinity ? "There is no second largest number" : secondLargest;
}

function objectMerge() {
	let object1 = {
		id: 1,
		name: "John",
		number: "01234567890",
	};
	let object2 = {
		number: "09987654321",
		surname: "Hernandez",
	};
	for (let key in object2) {
		object1[key] = object2[key];
	}
	return object1;
}

function groupAnagrams() {
	let arrayAnagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
	let anagramsKeyMap = {};
	for (let index = 0; index < arrayAnagrams.length; index++) {
		let sortedKey = arrayAnagrams[index].split("").sort().join("");
		if (anagramsKeyMap[sortedKey]) {
			anagramsKeyMap[sortedKey].push(arrayAnagrams[index]);
		} else {
			anagramsKeyMap[sortedKey] = [arrayAnagrams[index]];
		}
	}
	return Object.values(anagramsKeyMap);
}

function longestWordsInSentence(sentence) {
	let words = sentence.split(" ");
	let longestWord = "";
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}

function sumOfRange(num1, num2) {
	let range = 0;
	for (let i = num1; i <= num2; i++) {
		range += i;
	}
	return range;
}

function isPrime(number) {

	let isPrimeNumber = "";

	if (number <= 1) {
		return number + " " + "is not a Prime number";
	} else if (number === 2) {
		return number + " " + "a Prime number";
	} else {
		for (let i = 2; i <= number / 2; i++) {
			if (number % i == 0) {
				isPrimeNumber = number + " " + "is not a Prime number";
				return isPrimeNumber;
			}
		}
		isPrimeNumber = number + " is a Prime number";
	}
	return isPrimeNumber;
}