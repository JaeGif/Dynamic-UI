function dropDown() {
  const menu = document.querySelector('ul');
  menu.className = 'visible';
  console.log(menu.className);
}
function pullUp() {
  const menu = document.querySelector('ul');
  menu.className = '';
  console.log(menu.className);
}
const listen = (() => {
  const button = document.querySelector('button');
  const menu = document.querySelector('ul');

  button.addEventListener('click', () => {
    if (menu.className === 'visible') {
      pullUp();
    } else {
      dropDown();
    }
  });
})();
