window.onload = function () {
  let sec = 00
  let tens = 00
  let appendSecs = document.getElementById('sec')
  let appendTens = document.getElementById('tens')
  let btnStart = document.getElementById('btn-start')
  let btnStop = document.getElementById('btn-stop')
  let btnReset = document.getElementById('btn-reset')
  let interval

  btnStart.onclick = function () {
    btnStart.setAttribute('class', 'green')
    btnStop.setAttribute('class', 'black')
    clearInterval(interval)
    console.log(interval)
    interval = setInterval(startTimer, 10)
  }

  btnStop.onclick = function () {
    btnStop.setAttribute('class', 'red')
    btnStart.setAttribute('class', 'black')
    clearInterval(interval)
  }
  btnReset.onclick = function () {
    btnStart.setAttribute('class', 'black')
    btnStop.setAttribute('class', 'black')
    clearInterval(interval)
    sec = '00'
    tens = '00'
    appendSecs.innerHTML = sec
    appendTens.innerHTML = tens
  }

  function startTimer() {
    tens++

    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens
    }
    if (tens > 9) {
      appendTens.innerHTML = tens
    }

    if (tens > 99) {
      console.log('seconds')
      sec++
      tens = 0
      appendSecs.innerHTML = '0' + sec
      appendTens.innerHTML = '0' + 0
    }
    if (sec > 9) {
      appendSecs.innerHTML = sec
    }

    if (sec < 10) {
      appendSecs.setAttribute('class', 'black')
    }
    if (sec > 10) {
      appendSecs.setAttribute('class', 'green')
    }
    if (sec > 15) {
      appendSecs.setAttribute('class', 'yellow')
    }
    if (sec > 20) {
      appendSecs.setAttribute('class', 'red')
    }
  }
}
