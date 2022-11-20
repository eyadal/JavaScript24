const myClock = document.querySelector('#myClockDisplay')

function showTime() {
  const now = new Date()
  let hour = now.getHours() // 0 - 23
  let minutes = now.getMinutes() // 0 - 59
  let seconds = now.getSeconds() // 0 - 59

  let addZero = function (digits) {
    return digits < 10 ? '0'+ digits : digits
  }
  const body = `
    <div>${addZero(hour)}:</div>
    <div>${addZero(minutes)}:</div>
    <div>${addZero(seconds)}</div>
 `
  myClock.innerHTML = body
}
setInterval(showTime, 1000)
