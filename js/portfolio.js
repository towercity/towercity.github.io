var languages = {
	'html': {
		'start': '<ul>',
		'language': '<li id="%id%">%lang%</li>-',
		'end': '<li id="view-all">View All</li></ul>'
	},
	'langs': [
    	'HTML', 'jQuery', 'Angular', 'Python'
	],

	// adds all the langs in this.langs to the lang list bar
	'render': function () {
		var HTMLString = this.html.start;

		this.langs.forEach(function (lang) {
			HTMLString += languages.html.language.replace("%id%", lang).replace("%lang%", lang);
		});

		HTMLString += this.html.end;

		$('#lang-list').append(HTMLString);
	},

	'init': function () {
		this.render();
		var scrollPosition = $(document).scrollTop();

		this.langs.forEach(function (lang) {
			var hash = '#' + lang;

			$(hash).click(function () {
				projects.render(lang, 'index');

				// If the user hasn't scrolled all the way to the portfolio, scrolls to
				// it for them
				if (scrollPosition < 490) {
					$('html, body').animate({
						scrollTop: 496
					}, 250);
				}
			});
		});

		// Shows all projects of all languages when clicking on view all
		$('#view-all').click(function () {
			projects.render('', 'index');

			if (scrollPosition < 490) {
				$('html, body').animate({
					scrollTop: 496
				}, 200);
			}
		});
	}
};

var projects = {
	// The basic HTML that populates the page; %'d sections are replaced with the
	// information from the 'samples' section
	'HTML': {
		'index': {
			'start': '<div class="row code-row">',
			'sample': '<div class="code-sample"><a href="%id_link%"><img src="%small_image%"><div class="code-sample-text"><h3>%title%</h3></div></a><p>%desc%</p></div>',
			'end': '</div>'
		},
		'code': {
			'start': '<div class="section"><div class="title-wrap"><h1 class="title">portfolio</h1></div></div>',
			'sample': '<div class="section %even?%" id="%id%"><div class="code-image"><div class="browser"><img src="images/svg/dots.svg"></div><img src="%site_image%" class="code-sample-image"></div><div class="code-sample-text"><h3>%title%</h3><p>%desc%</p><a href="%link%" target="_blank">View More</a></div></div><div class="clear-both"></div>',
			'end': '<div class="section"><div class="contact"><p>Let\'s talk about your project. <a href="mailto:matthewjnerger3@gmail.com">Drop me an email!</a></p></div></div>'
		}
	},
	// The actual samples. Printed to the page in order of array
	'samples': [
		{
			'title': 'Sinking City',
			'smallImage': '',
			'image': 'images/sinkingcity-site.png',
			'description': "The University of Miami's Graduate lit mag.",
			'link': 'http://sinkingcity.github.io',
			'id': 'sinking-city',
			'langs': ['HTML', 'CSS', 'Javascript', 'jQuery']
    },
		{
			'title': 'audio portfolio',
			'image': 'images/audio-site.png',
			'description': 'A web portfolio with a full working audio player.',
			'link': 'http://towercity.github.io/web-portfolio',
			'id': 'portfolio',
			'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 1', 'jQuery']
    },
		{
			'title': 'story organizer',
			'image': 'images/organizer-site.png',
			'description': 'A web app for organizing short stories.',
			'link': 'http://towercity.github.io/story-organizer',
			'id': 'story-org',
			'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 2', 'Typescript']
    },
		{
			'title': 'author blog',
			'image': 'images/author-site.png',
			'description': 'A simple biography/blog page for an author.',
			'link': 'http://towercity.github.io/author-blog',
			'id': 'author-blog',
			'langs': ['HTML', 'CSS', 'Javascript', 'Jekyll']
    },
		{
			'title': 'cat clicker',
			'image': 'images/cat-site.png',
			'description': 'A simple cat clicker game built with knockout.js and styled with material design.',
			'link': 'http://towercity.github.io/cat-clicker',
			'id': 'cat',
			'langs': ['HTML', 'CSS', 'Javascript', 'knockout.js', 'material design']
    },
		{
			'title': 'snake',
			'image': 'images/snake-site.png',
			'description': 'A clone of the classic game snake built on the HTML5 canvas.',
			'link': 'http://towercity.github.io/snake',
			'id': 'snake',
			'langs': ['HTML', 'HTML5 Canvas', 'Javascript']
    },
		{
			'title': 'sonnet generator',
			'image': 'images/shakespeare-site.png',
			'description': 'Generates a new Shakesperian sonnet using Markov chains',
			'link': 'http://github.com/towercity/sonnet-generator',
			'id': 'sonnets',
			'langs': ['Python']
    }
  ],

	// Takes in a sample (from projects.samples) and which page the user is on (index
	// or portfolio), then returns a processed HTML string of the portfolio for the page
	// to use
	'drawProjects': function (sample, page) {
		var HTMLString = projects.HTML[page].sample.replace('%image%', sample.image)
			.replace('%link%', sample.link)
			.replace('%id_link%', ('/code.html#' + sample.id))
			.replace('%id%', sample.id)
			.replace('%title%', sample.title)
			.replace('%desc%', sample.description);

		// Puts in a dummy image, if no small image available. Hopefully I never have
		// to use this, but why not be safe?
		if(sample.smallImage) {
			HTMLString = HTMLString.replace('%small_image%', sample.smallImage);
		} else {
			HTMLString = HTMLString.replace('%small_image%', 'images/dummy-index.png');
		}

		return HTMLString;
	},

	'render': function (language, page) {
		// localizes the HTML object
		var HTMLobject = this.HTML[page];
		var HTMLString = HTMLobject.start;

		// Adds all projects to the HTML string
		if (language === 'all' | language === '') {
			this.samples.forEach(function (sample) {
				HTMLString += projects.drawProjects(sample, page);
			});

		// Prints only codes of the specified language to the HTML string
		} else {
			this.samples.forEach(function (sample) {
				if (sample.langs.indexOf(language) > -1) {
					HTMLString += projects.drawProjects(sample, page);
				}
			});
		}

		HTMLString += HTMLobject.end;

		// Empty the div then rebuild it
		$('#code-projects').empty();
		$('#code-projects').append(HTMLString);
	},

	'init': function (page) {
		// Runs with language='' so this.render() prints all available projects
		this.render('', page);
	}
};
