// selecting and centering the h1 and button element
const h1 = document.querySelector('h1')
h1.style.textAlign = 'center'
const button = document.querySelector('button')
button.style.position = "absolute";
button.style.left = "50%"
button.style.transform = "translateX(-50%)"

// generating a new background color when the button is clicked
button.addEventListener('click', () => {
    let newColor = randColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
    if (isDarkColor(newColor)) {
        h1.style.color = 'white'
    } 
    else {
        h1.style.color = 'black'
    }
})

// utilizing the "luminance" formula to change the h1 color base on brightness of the background color
function isDarkColor(color) {
    let rgb = color.match(/\d+/g);
    let brightness = (299 * rgb[0] + 587 * rgb[1] + 114 * rgb[2]) / 1000
    return brightness < 128
}

// generates a random color
function randColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

