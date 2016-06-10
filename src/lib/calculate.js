
export default function($) {
  let headerWidth = $('#header-inner').width();
  let logoWidth = $('#logo').width();
  let navWidth = $('#primarynav > ul').width();

  const topNavLinks = $('.top-nav > a');
  let linksWidth = 0;
  for (let i = 0; i < topNavLinks.length; ++i) {
    linksWidth += $(topNavLinks[i]).outerWidth();
  }

  let marginWidth = parseInt($(topNavLinks[0]).css('margin-left'));

  const allowedNavWidth = headerWidth - logoWidth - 1;

  console.log('Allowed Width: ', allowedNavWidth);
  console.log('Actual Width: ', linksWidth + 7 * marginWidth);

  let diff = allowedNavWidth - navWidth;
  if (diff < 0) {
    let correction = marginWidth + (diff % 7 - 1);
    correction = correction >= 0 ? correction : 0;

    $(topNavLinks).css('margin-left', `${correction}px`);
  }
}
