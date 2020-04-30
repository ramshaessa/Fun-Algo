var myButton = document.getElementById("Submit");
myButton.addEventListener("click", readInput);
var selectionSortTime = document.getElementById("selectionSortTime");
var selectionSortedList = document.getElementById("selectionSortedList");

function readInput() {
    var textInput = document.getElementById("NumbersInput");

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
    var selectionSortStartTime = new Date()
    var listSorted = selectionSortImplementation(listNumbers);
    var selectionSortEndTime = new Date()
    var selectionSortElaspedTime = selectionSortEndTime - selectionSortStartTime
    console.log(selectionSortStartTime)
    selectionSortTime.innerHTML = selectionSortElaspedTime + " milliseconds"
    var filtered = listSorted.filter(function (el) {
        return el != null;
      });
      
    selectionSortedList.innerHTML = filtered
    console.log(listSorted)
 }

 let selectionSortImplementation = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
