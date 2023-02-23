//takes the input from the form and adds it to a list
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let product = document.querySelector('#product')
    let quantity = document.querySelector('#qty')
    let newLi = document.createElement('li')
    newLi.textContent = `${quantity.value} ${product.value}`
    const list = document.querySelector('#list')
    list.appendChild(newLi)
    product.value = ''
    quantity.value = ''
})
