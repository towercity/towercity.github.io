var headerView = {
  'html': {
    'start': '<header><div class="header-links"><ul>',
    'link': '<li><a href="%url%" alt="%alt%">%title%</a></li>',
    'end': '</ul></div></header>'
  },
  'links': [
    {
      'title': 'home',
      'url': 'index.html',
      'alt': 'return home'
    },
    {
      'title': 'bio',
      'url': 'bio.html',
      'alt': 'biography page'
    },
    {
      'title': 'code',
      'url': 'code.html',
      'alt': 'code samples'
    },
    {
      'title': 'prose',
      'url': 'prose.html',
      'alt': 'writing samples'
    },
    {
      'title': 'contact',
      'url': 'contact.html',
      'alt': 'contact me'
    }
  ],
  render: function() {
    var printHTML = this.html.start;
    this.links.forEach(function(link) {
      printHTML += headerView.html.link.replace("%url%", link.url).replace("%alt%", link.alt).replace("%title%", link.title);
    });
    printHTML += this.html.end;

    $('body').prepend(printHTML);
  }
};

headerView.render();
