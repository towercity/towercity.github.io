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
				console.log("clicked " + lang);

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
			'sample': '<div class="code-sample"><a href="%id_link%" target="_none"><img src="%small_image%"><div class="code-sample-text"><h3>%title%</h3></div></a><p>%desc%</p><ul class="code-tags">%langs%</ul></div>',
			'end': '</div>'
		},
		'code': {
			'start': '<div class="section"><h1 class="title">portfolio</h1></div>',
			'sample': '<div class="section %even?%" id="%id%"><h2>%title%</h2><div class="code-image"><img src="%site_image%"></div><p>%desc%</p><a href="%link%" target="_blank">View More</a></div><div class="clear-both"></div>',
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
			'smallImage': 'images/sinking-wp-small.jpg',
			'image': 'images/sinking-wp-large.jpg',
			'description': "The University of Miami's Graduate literary magazine.<br><br>I migrated the site from a static page to a Wordpress blog, and since then have maintained the site and updated the content for each twice-yearly issue.",
			'link': 'http://sinkingcitylitmag.com/',
			'id': 'sinking-city-wordpress',
			'langs': ['HTML', 'CSS', 'Wordpress']
    },
		{
			'title': 'author blog',
			'smallImage': 'images/konger.jpg',
			'image': 'images/author-site.png',
			'description': 'A simple biography page for a literary author which includes a fully operation blog with rss capabilities. Built with Jekyll through GitHub pages.',
			'link': 'http://www.jakobkonger.com/',
			'id': 'author-blog',
			'langs': ['HTML', 'CSS', 'Javascript', 'Jekyll']
    },
		{
			'title': 'Dexter Learn',
			'smallImage': 'images/dexter-learn.jpg',
			'image': '',
			'description': 'A fake machine learning app which has no functionality and works as a something halfway between a do-nothing machine and a bad joke. Also, more seriously, I built it as a way to practice designing with Bootstrap, as well a few javascript libraries.',
			'link': 'http://www.matthewjnerger.com/machine-learning/',
			'id': 'dexter-learn',
			'langs' : ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'jQuery']
		},
		{
			'title': 'audio portfolio',
			'smallImage': 'images/audio-site.jpg',
			'image': 'images/audio-site.png',
			'description': 'An audio web portfolio built with Angular 1 and featuring both responsive design and a fully function audio player built from the ground up (minus jQuery, of course) exclusively for the site.',
			'link': 'http://towercity.github.io/web-portfolio',
			'id': 'portfolio',
			'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular', 'jQuery']
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
		var HTMLString = projects.HTML[page].sample.replace('%site_image%', sample.image)
			.replace('%link%', sample.link)
			// .replace('%id_link%', ('/code.html#' + sample.id))
			.replace('%id_link%', sample.link)
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

		// Checks the langs array, adds a li for each to the string
		var langList = "";
		sample.langs.forEach(function(lang) {
			langList += "<li id='" + lang + "'>" + lang + "</li>";

				var hash = '#' + lang;
				console.log(hash);

				$(hash).click(function () {
					console.log("clicked " + lang);

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
		HTMLString = HTMLString.replace('%langs%', langList);

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
