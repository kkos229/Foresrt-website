window.addEventListener('DOMContentLoaded', ()=>{

    const footerYear=document.querySelector('.footer__year')

    const handleYear = () => {
        const year=(new Date).getFullYear()
        footerYear.textContent=year;
    }
    
    handleYear()
})