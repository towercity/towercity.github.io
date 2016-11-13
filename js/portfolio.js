var languages = {
	'html': {
		'start': '<ul>',
		'language': '<li id="%id%">%lang%</li>-',
		'end': '<li id="view-all">View All</li></ul>'
	},
	'langs': [
    	'HTML', 'CSS', 'Javascript', 'Python'
	],


	'render': function () {
		//add html to page
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

				if (scrollPosition < 490) {
					$('html, body').animate({
						scrollTop: 496
					}, 250);
				}
			});
		});

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
	'HTML': {
		'index': {
			'start': '<div class="row code-row">',
			'sample': '<div class="code-sample %color%"><a href="%id_link%"><img src="%image%"><div class="code-sample-text"><h3>%title%</h3></div></a></div>',
			'end': '</div>'
		},
		'code': {
			'start': '<div class="section"><div class="title-wrap"><h1 class="title">portfolio</h1></div></div>',
			'sample': '<div class="section %even?%" id="%id%"><div class="code-image"><div class="browser"><img src="images/svg/dots.svg"></div><img src="%site_image%" class="code-sample-image"></div><div class="code-sample-text"><h3>%title%</h3><p>%desc%</p><a href="%link%" target="_blank">View More</a></div></div><div class="clear-both"></div>',
			'end': '<div class="section"><div class="contact"><p>Let\'s talk about your project. <a href="mailto:matthewjnerger3@gmail.com">Drop me an email!</a></p></div></div>'
		}
	},
	'colors': ['c1', 'c2', 'c3', 'c4', 'c5'],
	'samples': [
		{
			'title': 'Sinking City',
			'image': 'images/sinkingcity.png',
			'siteImage': 'images/sinkingcity-site.png',
			'description': "The University of Miami's Graduate lit mag",
			'link': 'http://sinkingcity.github.io',
			'id': 'sinking-city',
			'langs': ['HTML', 'CSS', 'Javascript', 'jQuery']
    },
		{
			'title': 'audio portfolio',
			'image': 'images/audio.png',
			'siteImage': 'images/audio-site.png',
			'description': 'A web portfolio with a full working audio player',
			'link': 'http://towercity.github.io/web-portfolio',
			'id': 'portfolio',
			'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 1', 'jQuery']
    },
		{
			'title': 'story organizer',
			'image': 'images/book.png',
			'siteImage': 'images/organizer-site.png',
			'description': 'A web app for organizing short stories',
			'link': 'http://towercity.github.io/story-organizer',
			'id': 'story-org',
			'langs': ['HTML', 'CSS', 'Javascript', 'Angular', 'Angular 2', 'Typescript']
    },
		{
			'title': 'snake',
			'image': 'images/snake.png',
			'siteImage': 'images/snake-site.png',
			'description': 'A clone of the classic game snake built on the HTML5 canvas',
			'link': 'http://towercity.github.io/snake',
			'id': 'snake',
			'langs': ['HTML', 'HTML5 Canvas', 'Javascript']
    },
		{
			'title': 'sonnet generator',
			'image': 'images/shakespeare.png',
			'siteImage': 'images/shakespeare-site.png',
			'description': 'Generates a new Shakesperian sonnet using Markov chains',
			'link': 'http://github.com/towercity/sonnet-generator',
			'id': 'sonnets',
			'langs': ['Python']
    }
  ],

	'drawProjects': function (sample, i, page) {
		var color = this.returnColor(i);

		var HTMLString = projects.HTML[page].sample.replace('%image%', sample.image)
			.replace('%link%', sample.link)
			.replace('%id_link%', ('/code.html#' + sample.id))
			.replace('%id%', sample.id)
			.replace('%title%', sample.title)
			.replace('%desc%', sample.description)
			.replace("%color%", color)
			.replace('%site_image%', sample.siteImage);

		if (i % 2 === 0) {
			HTMLString = HTMLString.replace('%even?%', 'even-section');
		} else {
			HTMLString = HTMLString.replace('%even?%', 'odd-section');
		}

		return HTMLString;
	},

	'drawDummyProject': function (i, page) {
		var color = this.returnColor(i);

		var HTMLString = projects.HTML[page].sample.replace("%color%", color)
			.replace('<img src="%image%">', '')
			.replace('<div class="code-sample-text"><h3>%title%</h3></div>', '');

		return HTMLString;
	},

	'returnColor': function (i) {
		var color = projects.colors[i];
		while (color === undefined) {
			i -= projects.colors.length;
			color = projects.colors[i];
		}

		return color;
	},

	'render': function (language, page) {
		var HTMLobject = this.HTML[page];

		var HTMLString = HTMLobject.start;

		var idx = 0;

		if (language === 'all' | language === '') {
			this.samples.forEach(function (sample) {
				HTMLString += projects.drawProjects(sample, idx, page);
				idx++;
			});

			if (page === 'index' && idx % 3 != 0) {
				HTMLString += projects.drawDummyProject(idx, page);

				if (idx % 2 === 0 || idx === 1) {
					HTMLString += projects.drawDummyProject(idx + 1, page);
				}
			}

		} else {
			var idx = 0;
			this.samples.forEach(function (sample) {
				if (sample.langs.indexOf(language) > -1) {
					HTMLString += projects.drawProjects(sample, idx, page);
					idx++;
				}
			});

			if (idx % 3 != 0) {
				HTMLString += projects.drawDummyProject(idx, page);

				if (idx % 2 === 0 || idx === 1) {
					HTMLString += projects.drawDummyProject(idx + 1, page);
				}
			}
		}

		HTMLString += HTMLobject.end;

		$('#code-projects').empty();
		$('#code-projects').append(HTMLString);
	},

	'init': function (page) {
		this.render('', page);
	}
};
