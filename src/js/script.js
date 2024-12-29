window.addEventListener('DOMContentLoaded', ()=>{
    const burgerBtn= document.querySelector('.nav__burger-btn')
    const options=document.querySelector('.nav__options')
    const navLinks=document.querySelectorAll('.nav__link')
    const nav=document.querySelector('.nav')
    const footerYear=document.querySelector('.footer__year')
    
    const header=document.querySelector('.header').getBoundingClientRect()
    const aboutUs=document.querySelector('.about-us').getBoundingClientRect()
    const adventure=document.querySelector('.adventure').getBoundingClientRect()
    const offer=document.querySelector('.offer').getBoundingClientRect()
    
    const handleBurgerClick = () => {
        burgerBtn.classList.toggle('rollout')
        options.classList.toggle('show')
    }
    
    const scrollSpy = () => {
        if(window.scrollY>=header.top &&window.scrollY<header.bottom -nav.offsetHeight){
            navLinks.forEach(link => link.classList.remove('highlight'))
            navLinks[0].classList.add('highlight')
        }
        else if(window.scrollY >=header.bottom -nav.offsetHeight &&window.scrollY<adventure.bottom-nav.offsetHeight){
            navLinks.forEach(link => link.classList.remove('highlight'))
    navLinks[1].classList.add('highlight')
        }
        else if(window.scrollY >=offer.top-nav.offsetHeight){
            navLinks.forEach(link => link.classList.remove('highlight'))
    navLinks[2].classList.add('highlight')
        }
    else{
        navLinks.forEach(link => link.classList.remove('highlight'))
        navLinks[0].classList.add('highlight')
    }
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
    
    window.addEventListener('scroll', scrollSpy)
})





