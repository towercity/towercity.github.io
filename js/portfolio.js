var languages = {
  'html': {
    'start': '<ul>',
    'language': '<li id="%id%">%lang%</li>-',
    'end':'<li id="view-all">View All</li></ul>'
  },
  'langs': [
    'HTML', 'CSS', 'Javascript', 'Python'
  ],

  'render': function() {
    //add html to page
    var HTMLString = this.html.start;

    this.langs.forEach(function(lang) {
      HTMLString += languages.html.language.replace("%id%", lang).replace("%lang%", lang);
    });

    HTMLString += this.html.end;

    $('#lang-list').append(HTMLString);
  },

  'init': function() {
    this.render();

    this.langs.forEach(function(lang) {
      var hash = '#' + lang;

      $(hash).click(function(){
        projects.render(lang);
      });
    });

    $('#view-all').click(function() {
      projects.render('');
    });
  }
};

var projects = {
  'HTML': {
    'start': '<div class="row code-row">',
    'sample': `<div class="code-sample %color%">
      <img src="%image%">
      <a href="%link%" target="_blank">
        <div class="code-sample-text">
          <h3>%title%</h3>
        </div>
      </a>
      </div>`,
    'end': '</div>'
  },
  'colors': ['c1', 'c2', 'c3', 'c4', 'c5'],
  'samples': [
    {
      'title': 'Sinking City',
      'image': 'images/sinkingcity.png',
      'description': "The University of Miami's Graduate lit mag",
      'link': 'http://sinkingcity.github.io',
      'langs': ['HTML', 'CSS', 'Javascript', 'jQuery']
    },
    {
      'title': 'sonnet generator',
      'image': 'images/shakespeare.png',
      'description': 'Generates a new Shakesperian sonnet using Markov chains',
      'link': 'https://github.com/towercity/sonnet-generator',
      'langs': ['Python', 'Flask', 'HTML']
    },
    {
      'title': 'audio portfolio',
      'image': 'images/audio.png',
      'description': 'A web portfolio with a full working audio player',
      'link': 'http://towercity.github.io/web-portfolio',
      'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 1', 'jQuery']
    },
    {
      'title': 'story organizer',
      'image': 'images/book.png',
      'description': 'A web app for organizing short stories',
      'link': 'http://towercity.github.io/story-organizer',
      'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 2', 'Typescript']
    }
  ],

  'drawProjects': function(HTMLString, sample, i) {
    var color = projects.colors[i];
    var j = i;
    while (color === undefined) {
      j -= projects.colors.length;
      color = projects.colors[j];
    }

    HTMLString += projects.HTML.sample.replace('%image%', sample.image).replace('%link%', sample.link).replace('%title%', sample.title).replace("%color%", color);

    return HTMLString;
  },

  'render': function(language) {
    var HTMLString = this.HTML.start;

    if (language === 'all' | language === '') {
      this.samples.forEach(function(sample, i) {
        HTMLString = projects.drawProjects(HTMLString, sample, i);
      });
    } else {
      var idx = 0;
      this.samples.forEach(function(sample) {
        if (sample.langs.indexOf(language) > -1) {
          HTMLString = projects.drawProjects(HTMLString, sample, idx);
          idx++;
        }
      });
    }

    HTMLString += this.HTML.end;

    $('#code-projects').empty();
    $('#code-projects').append(HTMLString);
  },

  'init': function() {
    this.render('');
  }
};

languages.init();
projects.init();
