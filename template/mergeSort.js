var myButton = document.getElementById("Submit");
myButton.addEventListener("click", readInput);
var mergeSortTime = document.getElementById("mergeSortTime");
var mergeSortedList = document.getElementById("mergeSortedList");

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
    var mergeSortStartTime = new Date()
    var listSorted = mergeSortImplementation(listNumbers)
    var mergeSortEndTime = new Date()
    var mergeSortElaspedTime = mergeSortEndTime - mergeSortStartTime //how long it took bubble Sort to execute
    console.log(mergeSortElaspedTime)
    mergeSortTime.innerHTML = mergeSortElaspedTime + " milliseconds"
    var filtered = listSorted.filter(function (el) {
        return el != null;
      });
      
    mergeSortedList.innerHTML = filtered
    console.log(listSorted)
 }

 function mergeSortImplementation (arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeSortImplementation(arr.slice(0, mid));
    var subRight = mergeSortImplementation(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}



