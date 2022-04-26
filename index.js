// Text area for input
var inputNames = document.getElementById("input-names");
var outputElement = document.getElementById("output-names");
// Listens to key presses in text area
inputNames.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        convertNames(e);
    }
});

// Convert name function
function convertNames(e) {
    var text = e.target.value;
    var firstConversion = text.replace(/, /g, ';');
    var convertedNames = firstConversion.replace(/\s/g, '.');
    var convertedSpace = convertedNames.replace(/;/g, '; ');
    outputElement.value = convertedSpace;

}

var clearButton = document.getElementById("clear-button")

clearButton.addEventListener("click", () => {
    inputNames.value = '';
    outputElement.value = '';
});