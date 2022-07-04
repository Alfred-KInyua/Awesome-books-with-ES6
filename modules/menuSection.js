const MenuItems = () => {
  const listSection = document.querySelector('.list-section');
  const addsection = document.querySelector('.add-section');
  const contactSection = document.querySelector('.contact-section');
  const firstMenu = document.querySelector('#top-list');
  const secondMenu = document.querySelector('#top-Add');
  const thirdMenu = document.querySelector('#top-contact');
  document.querySelectorAll('.menu-items').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      firstMenu.addEventListener('click', () => {
        listSection.style.display = 'flex';
        listSection.style.flexDirection = 'column';
        listSection.style.justifyContent = 'centA 1qer';
        addsection.style.display = 'none';
        contactSection.style.display = 'none';
      });
      secondMenu.addEventListener('click', () => {
        listSection.style.display = 'none';
        addsection.style.display = 'block';
        contactSection.style.display = 'none';
      });
      thirdMenu.addEventListener('click', () => {
        listSection.style.display = 'none';
        addsection.style.display = 'none';
        contactSection.style.display = 'flex';
        contactSection.style.flexDirection = 'column';
        contactSection.style.alignItems = 'center';
      });
    });
  });
};
export default { MenuItems };