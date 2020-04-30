var myButton = document.getElementById("Submit");
myButton.addEventListener("click", readInput);
var bubbleSortTime = document.getElementById("bubbleSortTime");
var bubbleSortedList = document.getElementById("bubbleSortedList");

function readInput() {
    var textInput = document.getElementById("NumbersInput")

    var inputFromUser = textInput.value;

    console.log(inputFromUser);

    var userInputList = inputFromUser.split(" ");

    var listNumbers = [];

    for (var i = 0; i < userInputList.length; i++) { 
        var currentNumberString = userInputList[i];

        var currentNumberInteger = parseInt(currentNumberString);
        listNumbers.push(currentNumberInteger); 
    }

    console.log(listNumbers);
    var bubbleSortStartTime = new Date()
    var listSorted = bubbleSortImplementation(listNumbers)
    var bubbleSortEndTime = new Date()
    var bubbleSortElaspedTime = bubbleSortEndTime - bubbleSortStartTime //how long it took bubble Sort to execute
    console.log(bubbleSortElaspedTime)
    bubbleSortTime.innerHTML = bubbleSortElaspedTime + " milliseconds"
    var filtered = listSorted.filter(function (el) {
        return el != null;
      });
      
    bubbleSortedList.innerHTML = filtered
    console.log(listSorted)
 }

 function bubbleSortImplementation(listtoSort) {
    var swapp;
    var n = listtoSort.length-1;
    var x=listtoSort;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    console.log(x)
    return x; 
}