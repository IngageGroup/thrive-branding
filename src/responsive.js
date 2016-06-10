import decreaseHeader from './lib/decreaseHeader.js';
import increaseHeader from './lib/increaseHeader.js';
import calculate from './lib/calculate.js';

module.exports = (($) => {

  calculate($);

  // let lastWidth = $(window).width();
  //
  // decreaseHeader($);
  //
  $(window).resize(() => {

    calculate($);

    // let currentWidth = $(window).width();
    // // Resizes logo and navbar to fit in header when screen is resized
    // if (lastWidth > currentWidth) {
    //   decreaseHeader($);
    // } else {
    //   increaseHeader($);
    // }
    //
    // lastWidth = currentWidth;
  });

})(jQuery);
