var myButton = document.getElementById("Submit");
myButton.addEventListener("click", readInput);
var quickSortTime = document.getElementById("quickSortTime");
var quickSortedList = document.getElementById("quickSortedList");

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
    var quickSortStartTime = new Date()
    var listSorted = quickSortImplementation(listNumbers);
    var quickSortEndTime = new Date()
    var quickSortElaspedTime = quickSortEndTime - quickSortStartTime
    console.log(quickSortStartTime)
    quickSortTime.innerHTML = quickSortElaspedTime + " milliseconds"
    var filtered = listSorted.filter(function (el) {
        return el != null;
      });
      
    quickSortedList.innerHTML = filtered
    console.log(listSorted)
 }

 function quickSortImplementation(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index
  
    if(len > 1) {
  
      index = partition(arr, left, right)
  
      if(left < index - 1) {
        quickSortImplementation(arr, left, index - 1)
      } 
  
      if(index < right) {
        quickSortImplementation(arr, index, right)
      }
  
    }
  
    return arr
  
  }
  
  function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,                 // Start pointer at the first item in the array
        j = right                 // Start pointer at the last item in the array
  
    while(i <= j) {
  
      // Move left pointer to the right until the value at the
      // left is greater than the pivot value
      while(arr[i] < pivot) {
        i++
      }
  
      // Move right pointer to the left until the value at the
      // right is less than the pivot value
      while(arr[j] > pivot) {
        j--
      }
  
      // If the left pointer is less than or equal to the 
      // right pointer, then swap values
      if(i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]  // ES6 destructuring swap
        i++
        j--
      }
    }
  
    return i
  
  }



