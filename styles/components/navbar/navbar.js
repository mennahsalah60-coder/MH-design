document.addEventListener('DOMContentLoaded', () => {

    const toggles = document.querySelectorAll('.navbar-toggle')
    toggles.forEach(toggle => {
        const navbar = toggle.closest('.mh-navbar')
        const links = navbar.querySelector('.navbar-links')

        toggle.addEventListener('click', () => {
            links.classList.toggle('active')
        })
    })

})
