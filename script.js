const button = document.querySelector(".button")
const bg = document.querySelector(".main")
const value = document.querySelector(".value")
const hexCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

button.addEventListener("click", () => {
    let number = "#"
    for (let i = 0; i < 6; i++) {
        number += hexCodes[randomHex()]
    }
    bg.style.background = number
    value.textContent = number
    value.style.color = number
})

function randomHex() {
    return Math.floor(Math.random() * hexCodes.length)
}