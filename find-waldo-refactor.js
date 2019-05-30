// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(i);
    }
  });
}

function actionWhenFound(wheresWaldo) {
  console.log("Found Waldo at index " + wheresWaldo + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);