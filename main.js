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

btnClose.addEventListener('click', function () {
    popUp.classList.remove('modal-wrap--active')
    mainContainer.classList.remove('container--blur')
})


//Mobile Menu 

const navBar = document.querySelector('.nav')
const btnHamb = document.querySelector('.ham')

btnHamb.addEventListener('click', toggleHamburger)

function toggleHamburger() {
    navBar.classList.toggle('showNav')
    btnHamb.classList.toggle('showClose')
}


// Dark Mode

const checkbox = document.getElementById('checkbox-dark')
const navLinks = document.querySelectorAll('.nav__link')
const btnForm= document.querySelector('.btn-form ')


checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')

    // for (let i = 0; i < navLinks.lenght; i++) {
    //     // navLinks[i].classList.toggle('darkLetters')
    //     navLinks[i].style.fontSize="40px";
    // }!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ZAPYTAĆ SIE DLACZEGO FOR tutaj nie zadziałało

    navLinks.forEach(function (li) {
        li.classList.toggle('darkLetters')
    })

    btnForm.classList.toggle('btn-form--dark')

})



// Pytania do my Sensei

// 1. Dlaczego nie zadziałała pętla for w powyższej funkcji ? dla navLinks ?
// 2. Dlaczego pojawia mi sie w tle guzik o klasie "ham"? na dole w lewym oknie przegladarki przy zmianie menu ? 
// 3. Jak uniknąc scrolowania w prawo i lewo ? czy to przez ten guzik ? 