function onButtonClick() {
    const numbersList = [];
    const output = [];

    for(let counter = 0; counter < 10; counter++) {
        const userResponce = prompt('Enter a number');
        numbersList.push(parseInt(userResponce))

        // Find odd or even
        if (numbersList[counter] % 2 == 0){
            output.push("Even");
        }
        else {
            output.push("Odd");
        }
    }

    var outputString = ""

    for (var i = 0; i < output.length; i++){
        toAdd = (i + 1).toString() + "." + output[i] + " - " + numbersList[i].toString() + "  ";

        outputString += toAdd;
    }

    window.alert(outputString);



   
}


