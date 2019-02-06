export default function backToTop() {
  const $button = document.querySelector('.js-back-to-top');

  $button.addEventListener('click', (event) => {
    event.preventDefault();
    const $html = document.querySelector('html');
    $html.scrollTo(0, 0);
  });

  function toggleToTopVisibility() {
    if (window.pageYOffset >= 200) {
      $button.style.opacity = 1;
    } else {
      $button.opacity = 0;
    }
  }

  window.addEventListener('scroll', toggleToTopVisibility, false);
  window.addEventListener('load', toggleToTopVisibility, false);
}
