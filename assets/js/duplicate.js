function onButtonClick(){
    var inputLength = prompt("Enter how many number : ");
    var numbers = [];

    for (var i = 0; i < parseInt(inputLength); i++){
        value = parseInt(prompt("Enter number " + i.toString() + " : "));
        numbers.push(value);
    }
    // FOR TESTING
    console.log(numbers);

    // Find the duplicates number
    var duplicate = [];
    var totalDuplicate = 0;
    var dup = "";

    for (var i = 0; i < numbers.length; i++){
        if (duplicate.includes(numbers[i])){
            totalDuplicate += 1;
            dup += numbers[i].toString() + " ";
        }
        duplicate.push(numbers[i]);
    }
    console.log(duplicate);

    window.alert("Total duplicates numbers are : " + totalDuplicate.toString() + "\n The duplicates are : " + dup);
}