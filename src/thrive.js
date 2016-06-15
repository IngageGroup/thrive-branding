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
    'News': 'news',
    'Thrive Wiki': 'thrive_wiki',
    'Holidays/PTO': 'holidays_pto',
    'Pictures': 'thrivepictures',
    'Community Engagement': 'engagement',
    'Thrive Afternoons': 'thriveafternoons',
  },
  'employeegrowth': {
    'Grad Plan': 'gradplan',
    'Skill Building': 'skill_building',
    'Learning Portal': 'learningportal',
  },
  'forum': {
    'General Help': 'help',
    'Issues/Bugs': 'bugs',
    'Feedback': 'feedback',
    'Community Wiki': 'community_wiki',
  },

  // TODO: add paths to the following dropdown items
  'hub': {
    'Recruiting': '',
    'Benefits': '',
    'New Hires': '',
    'Quickbooks': '',
    'Paycor': '',
    'Policies & Procedures': '',
    'Performance Reviews': '',
    'Employee Directory': '',
    'Expense Reports': '',
    'Utilization Report': '',
  },
  'projects': {
    'Client Projects': '',
    'Client Project Archives': '',
    'Internal Projects': '',
    'Internal Project Archives': '',
  },
  'sales': {
    'Marketing Collateral': '',
    'Client Presentations': '',
    'Case Studies': '',
    'Business Development': '',
    'Salesforce': '',
  },
  'operations': {
    'I.T.': '',
    'Building/Real Estate': '',
    'Quickbooks': '',
    'Finance Resources': '',
  },
};

const injectDropdowns = ($) => {
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const topNavKeys = keys(navStruct);

  // For each item in the primary nav bar...
  for (let i = 0; i < topNavKeys.length; ++i) {
    console.log(`Nav: ${topNavKeys[i]}`);

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
      console.log('injecting');
    } else {
      console.log('not injecting');
    }
  }
};


module.exports = (($) => {
  $(window).load(() => injectDropdowns($));
  $(window).unload(() => $('.nav-dropdown').remove());
})(jQuery);
