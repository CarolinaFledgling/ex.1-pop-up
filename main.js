const btnModal = document.querySelector('.btn-form')
const popUp = document.querySelector('.modal-wrap')
const mainContainer = document.querySelector('.container')

// Open Popup

btnModal.addEventListener('click', function () {
    popUp.classList.add('modal-wrap--active')
    mainContainer.classList.add('container--blur')
})


// Close PopUp

const btnClose = document.querySelector('.btn-close')

btnClose.addEventListener('click', function(){
    popUp.classList.remove('modal-wrap--active')
    mainContainer.classList.remove('container--blur')
})


//Mobile Menu 

const navBar = document.querySelector('.nav')
const btnHamb =document.querySelector('.ham')

btnHamb.addEventListener('click', toggleHamburger)

function toggleHamburger(){
    navBar.classList.toggle('showNav')
    btnHamb.classList.toggle('showClose')
}