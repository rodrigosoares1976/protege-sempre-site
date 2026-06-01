const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

function sendQuote(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const servico = document.getElementById('servico').value;
  const cidade = document.getElementById('cidade').value.trim();
  const phone = '553599936636';

  const msg = `Olá! Meu nome é ${nome}. Quero um orçamento para ${servico}${cidade ? ' em ' + cidade : ''}.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}
