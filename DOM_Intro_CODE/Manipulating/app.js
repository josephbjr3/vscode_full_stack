//getElementById example
let tableOfContents = document.getElementById('toc')
console.dir(tableOfContents)

//getElementsByTagName example
let allImages = document.getElementsByTagName('img')
for (let img of allImages) {
    console.log(img.src)
}

//get allSquareImages example
let allSquareImages = document.getElementsByClassName('square')
for (let img of allSquareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}

//pratice with query selector
const links = document.querySelectorAll('p a') //all anchor tags inside a paragraph
for (let link of links) {
    console.log(link.href)
}
