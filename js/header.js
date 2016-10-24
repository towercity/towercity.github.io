var headerView = {
  'html': {
    'start': '<header><div class="header-links"><ul>',
    'link': '<li><a href="%url%" alt="%alt%" %blank%>%title%</a></li>',
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
      'title': 'github',
      'url': 'https://github.com/towercity',
      'alt': 'github profile',
      'newTab': true
    },
    {
      'title': 'contact',
      'url': 'mailto:matthewjnerger3@gmail.com',
      'alt': 'contact me'
    }
  ],
  render: function() {
    var printHTML = this.html.start;
    this.links.forEach(function(link) {
      if (link.newTab === true) {
        printHTML += headerView.html.link.replace("%url%", link.url).replace("%alt%", link.alt).replace("%title%", link.title).replace("%blank%", 'target="_blank"');
      } else {
        printHTML += headerView.html.link.replace("%url%", link.url).replace("%alt%", link.alt).replace("%title%", link.title).replace("%blank%", '');
      }
    });
    printHTML += this.html.end;

    $('body').prepend(printHTML);
  }
};

headerView.render();
