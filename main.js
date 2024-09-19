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