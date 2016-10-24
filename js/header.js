var headerView = {
  'html': {
    'start': '<header><div class="header-img"></div>',
    'linkStart': '<nav class="header-links"><ul>',
    'link': '<li><a href="%url%" alt="%alt%" %blank% class="%class%">%title%</a></li>',
    'logo': '</ul><div class="logo"><a href="index.html"><img src="%img%" alt="%alt%"></a></div><ul>',
    'end': '</ul></nav><div class="header-color"></div></header>'
  },
  'logo': {
    'img': 'images/logo.jpg',
    'alt': 'logo'
  },
  'links': {
    'left': [
      {
        'title': 'bio',
        'url': 'bio.html',
        'alt': 'biography page'
      },
      {
        'title': 'code',
        'url': 'code.html',
        'alt': 'code samples'
      }
    ],
    'right': [
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
    ]
  },

  render: function() {
    var printHTML = this.html.start;

    printHTML += this.html.linkStart;

    this.links.left.forEach(function(link) {
      printHTML += headerView.htmlFromLinks(link, 'float-left');
    });

    printHTML += this.html.logo.replace("%img%", this.logo.img).replace("%alt%", this.logo.alt);

    this.links.right.forEach(function(link) {
      printHTML += headerView.htmlFromLinks(link, 'float-right');
    });

    printHTML += this.html.end;

    $('body').prepend(printHTML);
  },

  htmlFromLinks: function(link, addClass) {
    var linkHTML = headerView.html.link.replace("%url%", link.url).replace("%alt%", link.alt);

    //Checks for current page
    var href = document.location.href;
    if (href.substr(href.lastIndexOf('/') + 1) === link.url) {
      linkHTML = linkHTML.replace("%title%", link.title);
    } else {
      linkHTML = linkHTML.replace("%title%", link.title);
    }

    //Check for target_blank
    if (link.newTab) {
      linkHTML = linkHTML.replace("%blank%", 'target="_blank"');
    } else {
      linkHTML = linkHTML.replace("%blank%", '');
    }

    //add float class
    linkHTML = linkHTML.replace("%class%", addClass);

    return linkHTML;
  }
};

headerView.render();
