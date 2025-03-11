// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

let copyButton1 = document.getElementById("copy");
copyButton1.addEventListener("click", function () {
  let input = document.getElementById("userInput1");
  let output = document.getElementsByClassName("output")[0];
  output.textContent = input.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

let inputArea = document.getElementById("userInput2");
inputArea.addEventListener("input", function () {
  let text = document.getElementById("userInput2").value;
  let output = document.getElementsByClassName("output")[1];
  output.textContent = text;
});
