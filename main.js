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
            console.log('FizzBuzz');
            continue;
        }
        if (FB % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (FB % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        console.log(FB);
    }
}
FizzBuzz()