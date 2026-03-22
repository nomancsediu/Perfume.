const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("left-[0]")
        hamburger.classList.remove("ri-close-large-line")
        navLink.forEach(l => l.classList.remove("active"))
        link.classList.add("active")
    })
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "shadow-titleColor/20")
    } else {
        navbar.classList.remove("shadow-lg", "shadow-titleColor/20")
    }
})
