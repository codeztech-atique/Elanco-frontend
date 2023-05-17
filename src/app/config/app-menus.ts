var company = [{
  'icon': 'fa fa-home',
  'title': 'Dashboard',
  'url': 'dashboard',
  'caret': 'false'
},
{
  'icon': 'fa fa-list-alt',
  'title': 'Product',
  'url': '',
  'label': 'NEW',
  'caret': 'true',
  'submenu': [{
    'url': 'product/applications',
    'title': 'Applications',
    'highlight': 'true'
  },{
    'url': 'product/resources',
    'title': 'Resources'
  }]
}
];


export {
  company
};