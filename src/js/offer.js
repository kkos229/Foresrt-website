window.addEventListener('DOMContentLoaded', ()=>{
    const burgerBtn= document.querySelector('.nav__burger-btn')
    const options=document.querySelector('.nav__options')
    const navLinks=document.querySelectorAll('.nav__link')
    const nav=document.querySelector('.nav')
    const footerYear=document.querySelector('.footer__year')

    const handleBurgerClick = () => {
        burgerBtn.classList.toggle('rollout')
        options.classList.toggle('show')
    }

    const handleYear = () => {
        const year=(new Date).getFullYear()
        footerYear.textContent=year;
    }
    
    handleYear()

    navLinks.forEach(link=> link.addEventListener('click', ()=>{
        options.classList.remove('show')
    }))
    
    burgerBtn.addEventListener('click', handleBurgerClick)
})