function toggleMenu() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('active');

  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('change'); // Adiciona ou remove a classe 'change' ao ícone do menu
}

