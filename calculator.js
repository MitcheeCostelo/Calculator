const activescreen = document.querySelector(".active_screen")
const inactivescreen = document.querySelector(".inactive_screen")
const buttons = document.querySelectorAll(".button")
const digits = []

function update() {
  activescreen.innerText = digits.join('') || 0
  inactivescreen.innerText = eval(digits.join('')) || 0
}

function toNormal() {
  activescreen.classList.add('active_screen')
  activescreen.classList.remove('inactive_screen')
  inactivescreen.classList.remove('active_screen')
  inactivescreen.classList.add('inactive_screen')
}

function showresult() {
  activescreen.classList.remove('active_screen')
  activescreen.classList.add('inactive_screen')
  inactivescreen.classList.add('active_screen')
  inactivescreen.classList.remove('inactive_screen')
  digits[0] = eval(digits.join('')) || ''
  digits.length = 1
}

function clearresult() {
  digits.length = 0
  activescreen.innerText = 0
  inactivescreen.innerText = 0
}

function removeDigits() {
  digits.pop()
  update()
}
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (activescreen.classList.contains("inactive_screen")) toNormal()
    if (e.target.innerText == "=") return showresult()
    if (e.target.innerText == "del") return removeDigits()
    if (e.target.innerText == "C") return clearresult()
    digits.push(e.target.innerText)
    update()
  })
})