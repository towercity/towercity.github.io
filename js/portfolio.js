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
				projects.render(lang);

				if (scrollPosition < 490) {
					$('html, body').animate({
						scrollTop: 496
					}, 250);
				}
			});
		});

		$('#view-all').click(function () {
			projects.render('');

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
		'start': '<div class="row code-row">',
		'sample': '<div class="code-sample %color%"><a href="%link%" target="_blank"><img src="%image%"><div class="code-sample-text"><h3>%title%</h3></div></a></div>',
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

	'drawProjects': function (sample, i) {
		var color = this.returnColor(i);

		var HTMLString = projects.HTML.sample.replace('%image%', sample.image).replace('%link%', sample.link).replace('%title%', sample.title).replace("%color%", color);

		return HTMLString;
	},

	'drawDummyProject': function (i) {
		var color = this.returnColor(i);

		var HTMLString = projects.HTML.sample.replace("%color%", color).replace('<img src="%image%">', '').replace('<div class="code-sample-text"><h3>%title%</h3></div>', '');

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

	'render': function (language) {
		var HTMLString = this.HTML.start;

		var idx = 0;

		if (language === 'all' | language === '') {
			this.samples.forEach(function (sample) {
				HTMLString += projects.drawProjects(sample, idx);
				idx++;
			});

			if (idx % 3 != 0) {
				HTMLString += projects.drawDummyProject(idx);

				if (idx % 2 === 0 || idx === 1) {
					HTMLString += projects.drawDummyProject(idx + 1);
				}
			}

		} else {
			var idx = 0;
			this.samples.forEach(function (sample) {
				if (sample.langs.indexOf(language) > -1) {
					HTMLString += projects.drawProjects(sample, idx);
					idx++;
				}
			});

			if (idx % 3 != 0) {
				HTMLString += projects.drawDummyProject(idx);

				if (idx % 2 === 0 || idx === 1) {
					HTMLString += projects.drawDummyProject(idx + 1);
				}
			}
		}

		HTMLString += this.HTML.end;

		$('#code-projects').empty();
		$('#code-projects').append(HTMLString);
	},

	'init': function () {
		this.render('');
	}
};

languages.init();
projects.init();
