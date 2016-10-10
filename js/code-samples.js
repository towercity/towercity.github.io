var codeTemplate = {
  'html': {
    'start': '<div class="row code-row">',
    'sample': `<div class="code-sample">
      <img src="%image%">
      <div class="code-sample-text">
        <h3>%title%</h3>
        <p>%description%</p>
      </div>
      </div>`,
    'end': '</div>'
  },
  'samples': [
    {
      'title': 'sonnet generator',
      'image': 'https://placekitten.com/232/232',
      'description': 'Generates a new Shakesperian sonnet using Markov chains',
      'langs': ['python', 'flask', 'html']
    }
  ],

  render: function(language) {
    var htmlString = this.html.start;

    if (language === 'all') {
      this.samples.forEach(function(sample) {
        htmlString += codeTemplate.html.sample.replace('%image%', sample.image).replace('%title%', sample.title).replace('%description%', sample.description);
      });
    } else {
      console.log('welp');
    }

    htmlString += this.html.end;

    $('#code-projects').append(htmlString);
  }
};

codeTemplate.render('all');
