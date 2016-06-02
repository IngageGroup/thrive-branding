import { keys } from 'ramda';

let navStruct = {
  'news': [
    'News',
    'Events',
    'Thrive Afternoons',
    'B Corp'
  ],
  'employeegrowth': [
    'Coaching',
    'Grad Plan',
    'Consultative Competencies',
    'Buddy Program',
    'Learning Portal'
  ],
  'hub': [
    'Recruiting',
    'Benefits',
    'New Hires',
    'Quickbooks',
    'Paycor',
    'Policies & Procedures',
    'Performance Reviews',
    'Employee Directory'
  ],
  'projects': [
    'Client Projects',
    'Client Project Archives',
    'Internal Projects',
    'Internal Project Archives'
  ],
  'sales': [
    'Public Website',
    'Marketing Collateral',
    'Client Presentations',
    'Case Studies',
    'Ripple Report & Culture Book',
    'Business Development',
    'Salesforce'
  ],
  'operations': [
    'I.T.',
    'Building/Real Estate',
    'Quickbooks',
    'Expense Reports',
    'Utilization Report',
    'Finance Resources'
  ],
  'forum': [

  ],
};

module.exports = ($ => {
  const topNav = keys(navStruct);

  // For each item in the primary nav bar
  for (let i = 0; i < topNav.length; ++i) {
    const navItem = topNav[i];
    const navSel = `#nav-${navItem}`;

    let dropdown = '<ul class="nav-dropdown">\n';

    // For each subitem for a primary nav item
    for (let j = 0; j < navStruct[navItem].length; ++j) {
      dropdown += `<li class="nav-dropdown-item"><a href="#">${navStruct[navItem][j]}</a></li>\n`;
    }

    dropdown += '</ul>';

    if (navStruct[navItem].length > 0) {
      $(navSel).append(dropdown);
    }


  }
})(jQuery);
