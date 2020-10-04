const btnModal = document.querySelector('.btn-form')
const popUp = document.querySelector('.modal-wrap')
const mainContainer = document.querySelector('.container')


btnModal.addEventListener('click', function () {
    popUp.classList.add('modal-wrap--active')
    mainContainer.classList.add('container--blur')
})