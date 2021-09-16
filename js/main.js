// start window alert
window.onload = () => {
    Swal.fire({
  title: 'Welcome To Our Website',
  width: 600,
  padding: '3em',
  backdrop: `#fff url("/images/Forty Pizzas!.gif") left top no-repeat`
});
};
// end window alert
// start side nav
let click = document.getElementById('nav');
let navBar = document.querySelector('.list-unstyled');

click.onclick = function() {
    navBar.style.visibility = 'visible';
    click.addEventListener('click', function() {
        navBar.style.visibility = 'hidden';
    })
}
// end side nav
// start swiper
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});
// end swiper