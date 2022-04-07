let imgHeader = document.querySelector('#imgHeader')
let h1Header = document.querySelector('#h1Header')
let pHeader = document.querySelector('#pHeader')
let btnHeader = document.querySelector('.button')
let h2Section1 = document.querySelector('#h2Section1')
let pSection1 = document.querySelector('#pSection1')
let animationClass = 'animate'

window.onload = function () {
    setTimeout(function () {
        imgHeader.classList.add(animationClass)
    }, 200);
    setTimeout(function () {
        h1Header.classList.add(animationClass)
    }, 300);
    setTimeout(function () {
        pHeader.classList.add(animationClass)
    }, 400)
    setTimeout(function () {
        btnHeader.classList.add(animationClass)
        h2Section1.classList.add(animationClass)
    }, 500)
    setTimeout(function () {
        pSection1.classList.add(animationClass)
    }, 600)

}

let dataAnime = document.querySelectorAll('[data-anime]')
let dataAnimeImg = document.querySelectorAll('[data-anime-img]')
let dataAnimeImgSec3 = document.querySelectorAll('[data-anime-img-sec3]')
let dataAnime1 = document.querySelectorAll('[data-anime-1]')
let dataAnime2 = document.querySelectorAll('[data-anime-2]')
let dataAnime3 = document.querySelectorAll('[data-anime-3]')
let dataAnime4 = document.querySelectorAll('[data-anime-4]')
let dataAnime5 = document.querySelectorAll('[data-anime-5]')
let dataAnimeText1 = document.querySelectorAll('[data-text1]')


function animeScroll () {
    let windowTop = window.pageYOffset + ((window.innerHeight * 3.5)/4)
    dataAnime.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnimeImg.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnimeImgSec3.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnime1.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnime2.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnime3.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnime4.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnime5.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })

    dataAnimeText1.forEach(function (element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        }
    })
}

window.addEventListener('scroll', function () {
    animeScroll()
})