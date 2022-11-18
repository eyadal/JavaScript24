const input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function (e) {
    // Storing current input string and its last character in variables - used later
    const currentString = input.innerHTML
    const lastChar = currentString[currentString.length - 1]

    // if result is not displayed, just keep adding
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML
    }
    if (
      (resultDisplayed === true && lastChar === '+') ||
      lastChar === '-' ||
      lastChar === 'x' ||
      lastChar === '÷'
    ) {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false
      input.innerHTML += e.target.innerHTML
    }
  })
}
