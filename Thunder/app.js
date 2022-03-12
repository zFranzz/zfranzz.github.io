const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

function copy__clipboard() {
    var copyText = document.getElementById("dev__1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied: " + copyText.value);
  } 