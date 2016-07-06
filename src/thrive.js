import { isEmpty, keys } from 'ramda';

// navStruct legend
// navStruct: {
//   'topLevelNavSection': {
//     'DropdownItemString': 'DropdownItemLocation',
//     ...
//   },
//   ...
// };

const navStruct = {
  'news': {
    'News': 'news_page',
    'Thrive Feed': 'thrive_feed',
    'Events': 'events',
    'Holidays/PTO': 'holidayspto',
    'Pictures': 'thrivepictures',
    'Community Engagement': 'engagement',
    'Community Wiki': 'community_wiki',
    'Thrive Afternoons': 'thriveafternoons',
  },
  'employeegrowth': {
    'Grad Plan': 'gradplan',
    'Learning Portal': 'learning_portal',
    'Learning Wiki': 'learning_wiki',
  },
  'hr': {
    'Onboarding': 'onboarding',
    'Founders': 'founders',
    'Admins': 'admins',
    'Management': 'management',
    'Huddle Leads': 'huddle_leads',
    'Analysts': 'analysts',
    'All Members': 'all_members',
  },
  'forum': {
    'General Topics': 'general',
    'Growth & Development': 'help',
    'Report Issue/Bug': 'bug',
    'Feedback': 'feedback',
  },

  // TODO: add paths to the following dropdown items
  'projects': {
    'Client Projects': '',
    'Client Project Archives': '',
    'Internal Projects': '',
    'Internal Project Archives': '',
  },
};

const injectDropdowns = ($) => {
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const topNavKeys = keys(navStruct);

  // For each item in the primary nav bar...
  for (let i = 0; i < topNavKeys.length; ++i) {
    const navItem = topNavKeys[i];
    const navSel = `#nav-${navItem}`;

    $(navSel).addClass('top-nav');

    const childNavKeys = keys(navStruct[topNavKeys[i]]);

    let dropdown = '<ul class="nav-dropdown">\n';

    // For each subitem for a primary nav item
    for (let j = 0; j < childNavKeys.length; ++j) {
      let dropdownHref = `${baseUrl}/${topNavKeys[i]}/${navStruct[topNavKeys[i]][childNavKeys[j]]}`;
      dropdown += `<li class="nav-dropdown-item"><a href="${dropdownHref}">${childNavKeys[j]}</a></li>\n`;
    }

    dropdown += '</ul>';

    if (!isEmpty(navStruct[navItem])) {
      $(navSel).append(dropdown);
    }
  }
};

const newTabLinks = ($) => {
  $('.new-tab a').each(function(index) {
    this.target = '_blank';
    console.log(`${index}: `, this);
  });
};

module.exports = (($) => {
  $(window).unload(() => $('.nav-dropdown').remove());
  $(window).load(() => {
    injectDropdowns($);
    newTabLinks($);
  });
})(jQuery);
