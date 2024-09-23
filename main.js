function print_HelloWorld() {
    let text = "Hello, World";
    document.getElementById('text').innerHTML = text;
    console.log(text);
}

function simpleArithmetic() {
    let x = 5;
    let y = 3;
    return x * y;
}

// document.getElementById('text').innerHTML = simpleArithmetic();

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

// document.getElementById("text").innerHTML = oddEven(1332);

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let sum = arraySum(numbers);
console.log("Sum:", sum);