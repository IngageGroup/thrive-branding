
export default function($) {
  // 961px is the first responsive screen size break point
  if ($(window).width() >= 961) {

    // If the logo width is greater than 250px
    if ($('#logo').width() > 250) {
      $('#logo').width($('#header-inner').width() - $('#primarynav > ul').width() - 1);

    // 250px should be the min-width of #logo so start making #primarynav smaller
    } else if ($('#logo').width() <= 250) {

      // Decrement the left margin of <li> elements until the #logo and #primarynav fit side by side
      for (let i = 1; $('#header-inner').width() < $('#logo').width() + $('#primarynav > ul').width(); ++i) {
        let currentMargin = parseInt($('#primarynav > ul > li > a').css('margin-left'));
        $('#primarynav > ul > li > a').css('margin-left', currentMargin - i);
      }
    }
  }
}
