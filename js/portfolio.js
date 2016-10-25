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
    'sample': `<div class="code-sample">
      <img src="%image%">
      <a href="%link%" target="_blank">
        <div class="code-sample-text">
          <h3>%title%</h3>
          <p>%description%</p>
        </div>
      </a>
      </div>`,
    'end': '</div>'
  },
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
      'image': 'images/book.jpg',
      'description': 'A web app for organizing short stories',
      'link': 'http://towercity.github.io/story-organizer',
      'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 2', 'Typescript']
    }
  ],

  'render': function(language) {
    var HTMLString = this.HTML.start;

    if (language === 'all' | language === '') {
      this.samples.forEach(function(sample) {
        HTMLString += projects.HTML.sample.replace('%image%', sample.image).replace('%link%', sample.link).replace('%title%', sample.title).replace('%description%', sample.description);
      });
    } else {
      this.samples.forEach(function(sample) {
        if (sample.langs.indexOf(language) > -1) {
          HTMLString += projects.HTML.sample.replace('%image%', sample.image).replace('%link%', sample.link).replace('%title%', sample.title).replace('%description%', sample.description);
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
