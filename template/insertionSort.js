var myButton = document.getElementById("Submit");
myButton.addEventListener("click", readInput);

var insertionSortTime = document.getElementById("insertionSortTime");
var insertionSortedList = document.getElementById("insertionSortedList");

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
    var insertionSortStartTime = new Date()
    var listSorted = insertionSortImplementation(listNumbers)
    var insertionSortEndTime = new Date()
    var insertionSortElaspedTime = insertionSortEndTime - insertionSortStartTime //how long it took bubble Sort to execute
    console.log(insertionSortElaspedTime)
    insertionSortTime.innerHTML = insertionSortElaspedTime + " milliseconds"
    var filtered = listSorted.filter(function (el) {
        return el != null;
      });
      
    insertionSortedList.innerHTML = filtered
    console.log(listSorted)
 }

 let insertionSortImplementation = (listSorted) => {
    let length = listSorted.length;
    for (let i = 1; i < length; i++) {
        let key = listSorted[i];
        let j = i - 1;
        while (j >= 0 && listSorted[j] > key) {
            listSorted[j + 1] = listSorted[j];
            j = j - 1;
        }
        listSorted[j + 1] = key;
    }
    return listSorted;
};


