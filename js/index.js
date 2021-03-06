// Your code goes here

// mouseover --- unique event 
const nav = document.querySelector('.main-navigation');
nav.addEventListener('mouseover', function (event) {
    event.target.style = `background-color: grey`
})

// keydown --- unique event 
let pageTitle = document.querySelector('.logo-heading');
document.addEventListener('keydown', function (event) {
    let keyName = event.key
    pageTitle.textContent = `key pressed: ${keyName}`
})

// wheel --- unique event 
const pageTitle2 = document.querySelector('.logo-heading');
document.addEventListener('wheel', function (event) {
    let deltaY = event.deltaY * 10
    pageTitle2.textContent = `change in vertical scroll: ${deltaY}`
})

// drag / drop --- unique event 
const images = document.getElementsByTagName('img');
document.addEventListener('drag', function (event) {
    let itemPosX = event.clientX
    let itemPosY = event.clientY
    pageTitle.textContent = `item position: X: ${itemPosX}, Y: ${itemPosY}`
     
})

// load --- unique event 
window.addEventListener('load', function (event) {
    alert("Load Complete")
})

// focus --- unique event 
const buttons = document.querySelector('.btn');
document.addEventListener('focus', function (event) {
    event.target.style = `background-color: red`
}, true)

// resize --- unique event 


// scroll --- unique event 


// select --- unique event 


// dblclick --- unique event 
const html = document.querySelector('.html');
document.addEventListener('dblclick', function (event) {
    event.target.style = `background-color: grey`
})

