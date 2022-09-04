function onButtonClick(){
    var number = parseInt(prompt("Enter a number : "));
    var fact = 1;

    for (var i = 2; i < number + 1; i++){
        fact *= i;
    }

    console.log(fact);

    window.alert("The factorial of " + number.toString() + " is " + fact.toString());

    // Fibonacci series
    var fibo = [1, 1];

    for (var i = 1; i < number; i++){
        currentValue = fibo[i] + fibo[i - 1];
        fibo.push(currentValue);
    }

    console.log(currentValue);

}