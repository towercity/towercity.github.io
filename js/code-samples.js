var codeTemplate = {
  'html': {
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
      'image': 'images/sinkingcity.jpg',
      'description': "The University of Miami's Graduate lit mag",
      'link': 'http://sinkingcity.github.io',
      'langs': ['html', 'css', 'javascript', 'jQuery']
    },
    {
      'title': 'sonnet generator',
      'image': 'images/shakespeare.jpg',
      'description': 'Generates a new Shakesperian sonnet using Markov chains',
      'link': 'https://github.com/towercity/sonnet-generator',
      'langs': ['python', 'flask', 'html']
    },
    {
      'title': 'audio portfolio',
      'image': 'images/audio.jpg',
      'description': 'A web portfolio with a full working audio player',
      'link': 'http://towercity.github.io/web-portfolio',
      'langs': ['html', 'css', 'javascript', 'angular', 'angular 1', 'jQuery']
    },
    {
      'title': 'story organizer',
      'image': 'images/book.jpg',
      'description': 'A web app for organizing short stories',
      'link': 'http://towercity.github.io/story-organizer',
      'langs': ['html', 'css', 'javascript', 'angular', 'angular 2', 'typescript']
    }
  ],

  render: function(language) {
    var htmlString = this.html.start;

    if (language === 'all' | language === '') {
      this.samples.forEach(function(sample) {
        htmlString += codeTemplate.html.sample.replace('%image%', sample.image).replace('%link%', sample.link).replace('%title%', sample.title).replace('%description%', sample.description);
      });
    } else {
      this.samples.forEach(function(sample) {
        if (sample.langs.indexOf(language) > -1) {
          htmlString += codeTemplate.html.sample.replace('%image%', sample.image).replace('%link%', sample.link).replace('%title%', sample.title).replace('%description%', sample.description);
        }
      });
    }

    htmlString += this.html.end;

    $('#code-projects').empty();
    $('#code-projects').append(htmlString);
  }
};

$('#js').click(function() {
  codeTemplate.render('javascript');
});

$('#jq').click(function() {
  codeTemplate.render('jQuery');
});

$('#ts').click(function() {
  codeTemplate.render('typescript');
});

$('#python').click(function() {
  codeTemplate.render('python');
});

$('#ang').click(function() {
  codeTemplate.render('angular');
});

$('#all').click(function() {
  codeTemplate.render('');
});

codeTemplate.render('');
