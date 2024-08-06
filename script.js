// Adicione event listeners aos botões
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});