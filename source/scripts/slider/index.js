import { tns } from 'tiny-slider/src/tiny-slider';

export default function startSlider() {
  const hasSlider = document.querySelector('.main-slider');


  function handleBannerChange(info) {
    document.querySelector('body').className = `body-style-${info.displayIndex}`;
  }

  if (hasSlider) {
    let slider;
    if (window.matchMedia('(min-width: 1024px)').matches) {
      slider = tns({
        container: '.main-slider',
        controls: false,
        axis: 'vertical',
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        autoplay: true,
      });
    } else {
      slider = tns({
        container: '.main-slider',
        controls: false,
        // center: true,
        // axis: 'vertical',
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        // autoplay: true,
        autoplay: false,
      });
    }

    slider.events.on('transitionStart', handleBannerChange);
  }
}
