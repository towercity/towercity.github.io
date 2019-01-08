var languages = {
	'html': {
		'start': '<ul>',
		'language': '<li id="%id%">%lang%</li>-',
		'end': '<li id="view-all">View All</li></ul>'
	},
	'langs': [
    	'HTML', 'jQuery', 'Angular', 'Wordpress'
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
				// Add the hash to the url
				window.location.hash = hash;
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
			// Empty out the url hash
			window.location.hash = '';
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
	// 'smallImage' goes on the index page, 'image' on the code page,
	// id is the div id, title and description are self-explanatory.
	// Langs must be in languages.langs to be seen/accessible on the page, but it's
	// worthwhile to keep them all listed, for future uses
	'samples': [
		{
			'title': 'Sinking City',
			'smallImage': '',
			'image': 'images/sinkingcity-site.png',
			'description': "The University of Miami's Graduate lit mag.",
			'link': 'http://sinkingcitylitmag.com/',
			'id': 'sinking-city-wordpress',
			'langs': ['HTML', 'CSS', 'Wordpress']
    },
		{
			'title': 'author blog',
			'smallImage': '',
			'image': 'images/author-site.png',
			'description': 'A simple biography/blog page for an author.',
			'link': 'http://www.jakobkonger.com/',
			'id': 'author-blog',
			'langs': ['HTML', 'CSS', 'Javascript', 'Jekyll']
    },
		{
			'title': 'Dexter Learn',
			'smallImage': '',
			'image': '',
			'description': 'A (fake) machine learning app',
			'link': 'http://www.matthewjnerger.com/machine-learning/',
			'id': 'dexter-learn',
			'langs' : ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'jQuery']
		},
		{
			'title': 'audio portfolio',
			'smallImage': '',
			'image': 'images/audio-site.png',
			'description': 'A web portfolio with a full working audio player.',
			'link': 'http://towercity.github.io/web-portfolio',
			'id': 'portfolio',
			'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 1', 'jQuery']
    },
		{
			'title': 'the miami hurricane',
			'smallImage': '',
			'image': '',
			'description': 'The University of Miami\'s student newspaper.',
			'link': 'https://www.themiamihurricane.com/',
			'id': 'miami-hurricane',
			'langs': ['HTML', 'CSS', 'Wordpress']
    },
		{
			'title': 'Sinking City original website',
			'smallImage': '',
			'image': 'images/sinkingcity.png',
			'description': "The origianl sinking city website, before Wordpress migration. Built from the ground up, with poetry and fiction templates for easy extendability.",
			'link': 'http://sinkingcity.github.io',
			'id': 'sinking-city-vanilla',
			'langs': ['HTML', 'CSS', 'Javascript', 'jQuery']
    },
		{
			'title': 'snake',
			'smallImage': '',
			'image': 'images/snake-site.png',
			'description': 'A clone of the classic game snake built on the HTML5 canvas.',
			'link': 'http://towercity.github.io/snake',
			'id': 'snake',
			'langs': ['HTML', 'HTML5 Canvas', 'Javascript']
    },
		{
			'title': 'if on a winter\'s night',
			'smallImage': '',
			'image': '',
			'description': 'A text analysis tool based off of a program in Italo Calvin\'s "If on a Winter\'s Night..."',
			'link': 'https://github.com/towercity/If-on-a-winters-night',
			'id': 'winters-night',
			'langs': ['HTML', 'CSS', 'NodeJs']
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

		// checks if HTMLString is blank (string is what a blank project array
		// produces), then removes hash and reloads page to show all
		// TODO: make it less janky
		if(HTMLString === '<div class="row code-row"></div>') {
			console.log('check');
			window.location.hash = '';
			location.reload();
		}

		// Empty the div then rebuild it
		$('#code-projects').empty();
		$('#code-projects').append(HTMLString);
	},

	// Pulls the hash from the url, and uses it to filter by lang
	// TODO: make non-case-sensitive
	'init': function (page) {
		var lang = window.location.hash;
		lang = lang.slice(1, lang.length);

		this.render(lang, page);
	}
};
