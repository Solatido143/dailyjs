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

document.getElementById("text").innerHTML = oddEven(1332);
