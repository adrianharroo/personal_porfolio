const navLinks = document.querySelectorAll('.NavLink');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLink.classList.add('active');
    });
});