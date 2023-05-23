(function() {
    "use strict"

    const navToggle = document.querySelector('#nav-toggle')
    navToggle.addEventListener('click', (e) => {
        document.querySelector('body').classList.toggle('nav-active')
        navToggle.classList.toggle('btn-primary')
        navToggle.querySelector('i').classList.toggle('bi-list')
        navToggle.querySelector('i').classList.toggle('bi-x')
    })
})()