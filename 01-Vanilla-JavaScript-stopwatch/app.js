window.onload = function () {
  let secs = 00
  let tens = 00
  let mins = 00
  let appendSecs = document.getElementById('secs')
  let appendTens = document.getElementById('tens')
  let appendMins = document.getElementById('mins')
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
    mins = '00'
    secs = '00'
    tens = '00'
    appendMins.innerHTML = mins
    appendSecs.innerHTML = secs
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
      secs++
      tens = 0
      appendSecs.innerHTML = '0' + secs
      appendTens.innerHTML = '0' + 0
    }
    if (secs > 9) {
      appendSecs.innerHTML = secs
    }
    if (secs > 60) {
      mins++
      secs = 0
      tens = 0
      appendMins.innerHTML = '0' + mins
      appendSecs.innerHTML = '0' + 0
      appendTens.innerHTML = '0' + 0
    }
  }
}
