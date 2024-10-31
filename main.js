let alphabet = "abcdefghijklmnopqrstuvwxyz";
let sentence = "The quick brown fox jumped over the lazy dog.";

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

//gpt implementation
function caesarCipher(str, shift) {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		// Check if the character is a lowercase letter
		if (char >= "a" && char <= "z") {
			let newCharCode = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
			result += String.fromCharCode(newCharCode);
		}
		// Check if the character is an uppercase letter
		else if (char >= "A" && char <= "Z") {
			let newCharCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
			result += String.fromCharCode(newCharCode);
		} else {
			// If it's not a letter, just add it unchanged
			result += char;
		}
	}

	return result;
}

function factorialRecursive(int) {
	if (int === 0 || int === 1) {
		return 1;
	}
	return int * factorialRecursive(int - 1);
}

function fibonacci(n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function flatten(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result.push(...flatten(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}
// console.log(flatten([1, [2, 3], [4, [5]]]));

function power(x, n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return x;
	}
	return x * power(x, n - 1);
}
// console.log(power(5, 3));

function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return '"' + target + '" do not exist';
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3.5));

function rotateArr(arr, k) {
	k = k % arr.length;
	if (k === 0) {
		return arr;
	}

	// endSlice = arr.slice(0, k + 1);
	// startSlice = arr.slice(arr.length - k);

	let startSlice = arr.slice(arr.length - k);
	let endSlice = arr.slice(0, arr.length - k);

	return [...startSlice, ...endSlice];
}
// console.log(rotateArr([1, 2, 3, 4, 5], 2));

function removeDuplicates(nums) {
	if (nums.length === 0) return 0;

	let i = 0;

	for (let j = 1; j < nums.length; j++) {
		if (nums[j] !== nums[i]) {
			i++; // Move pointer i to the next unique position
			nums[i] = nums[j]; // Move the next unique element to this position
		}
	}

	return i + 1;
}

// let nums = [1, 1, 2, 2, 3, 3, 4];
// let newLength = removeDuplicates(nums);
// console.log(newLength); // Output: 4
// console.log(nums); // Output: [1, 2, 3, 4]


function intersection(arr1, arr2) {
    const setA = new Set(arr1);
    const intersectionSet = new Set();
    for (let i = 0; i < arr2.length; i++) {
        if (setA.has(arr2[i])) {
            intersectionSet.add(arr2[i]);
        }
    }
    return Array.from(intersectionSet);
}

// console.log(intersection([1, 2, 2, 3], [2, 3, 4]));

const validateEmail = (email) => {
	return Boolean(
		email.match(
			/^(?:(?:(?:"(?:\\[^\r\n]|[^\\"])*")|(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*))@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\.)+[a-zA-Z]{2,}|(?:\[(?:(?:[0-9]{1,3}\.){3}[0-9]{1,3}|IPv6:[0-9a-fA-F:.]+)\])))$/
		)
	);
};

const email = "example@example.com";
// if (validateEmail(email)) {
// 	console.log(email + " is valid.");
// } else {
// 	console.log(email + " is not valid");
// }

const countWords = (sentence) => {
	let words = sentence.trim().split(/\s+/);
	return words.length;
};
// console.log(countWords("  Move the next unique element to this position  "));

function isPalindrome(phrase) {
	let cleanedPhrase = phrase.replace(/[^a-z0-9]/gi, "").toLowerCase();

	let reversePhrase = cleanedPhrase.split("").reverse().join("");

	if (cleanedPhrase === reversePhrase) {
		return true;
	} else {
		return false;
	}
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

function removeVowels(inputString) {
	// const vowels = ["a","e","i","o","u","a","e","i","o","u"];
	// let result = "";

	// for (let char of inputString) {
	// 	if (!vowels.includes(char)) {
	// 		result += char;
	// 	}
	// }

	// return result;

	return inputString.replace(/[aeiou]/gi, "");
}


console.log(removeVowels("Hello, world"));

function name(params) {
	
}