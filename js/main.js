const navbarCollapse = document.querySelector('.navbar-collapse');

document.addEventListener('click', () =>
{
    if(navbarCollapse.classList.contains('show'))
    {
        navbarCollapse.classList.remove('show')
    }
})