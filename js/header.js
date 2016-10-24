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
      var linkHTML = headerView.html.link.replace("%url%", link.url).replace("%alt%", link.alt);

      //Checks for current page
      var href = document.location.href;
      if (href.substr(href.lastIndexOf('/') + 1) === link.url) {
        linkHTML = linkHTML.replace("%title%", ("> " + link.title));
      } else {
        linkHTML = linkHTML.replace("%title%", link.title);
      }

      //Check for target_blank
      if (link.newTab) {
        linkHTML = linkHTML.replace("%blank%", 'target="_blank"');
      } else {
        linkHTML = linkHTML.replace("%blank%", '');
      }

      console.log(linkHTML);
      printHTML += linkHTML;
    });
    printHTML += this.html.end;

    $('body').prepend(printHTML);
  }
};

headerView.render();
