const input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false // flag to keep an eye on what output is displayed

  // adding click handlers to number buttons
  for (let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(e){

    // Storing current input string and its last character in variables - used later
    const currentString = input.innerHTML;
    const lastChar = currentString[currentString.length - 1];
})
  }