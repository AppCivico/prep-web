export default function backToTop() {
  const $button = document.querySelector('.js-back-to-top');

  if ($button) {
    $button.addEventListener('click', (event) => {
      event.preventDefault();
      const $html = document.querySelector('html');
      $html.scrollTo(0, 0);
    });
  }

  function toggleToTopVisibility() {
    if (window.pageYOffset >= 200) {
      $button.style.opacity = 1;
    } else {
      $button.opacity = 0;
    }
  }

  if ($button) {
    window.addEventListener('scroll', toggleToTopVisibility, false);
    window.addEventListener('load', toggleToTopVisibility, false);
  }
}
