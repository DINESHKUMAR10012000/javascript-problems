function start(){
    var inputLength = prompt("Enter how many number : ");
    var numbers = [];

    for (var i = 0; i < parseInt(inputLength); i++){
        value = parseInt(prompt("Enter number " + i.toString() + " : "));
        numbers.push(value);
    }
    // FOR TESTING
    console.log(numbers);

    // Find the maximum number..
    var maximum = numbers[0];

    for (var i = 1; i < numbers.length; i++){
        if (maximum < numbers[i]){
            maximum = numbers[i];
        }
    }

    window.alert("The maximum number is " + maximum.toString());
}