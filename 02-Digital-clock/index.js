const myClock = document.querySelector('#myClockDisplay')

function showTime() {
  const now = new Date()
  let hour = now.getHours() // 0 - 23
  let minutes = now.getMinutes() // 0 - 59
  let seconds = now.getSeconds() // 0 - 59
  let am_pm = ' AM'

  if (hour >= 12) {
    hour -= 12
    am_pm = 'PM'
  }

  if (hour <= 11) {
    hour += 12
    am_pm = 'AM'
  }
  const body = `
 <div>${hour}:</div>
 <div>${minutes}:</div>
 <div>${seconds}:</div>
 <div class="am_pm">${am_pm}</div>
 `
  myClock.innerHTML = body
}
setInterval(showTime, 1000)
