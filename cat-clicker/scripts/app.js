var initialCats = [
    {
        name: 'Ponchatoula',
        score: 0,
        img: 'img/the-ponch-1500.jpg',
        pronoun: 'him',
        imgAttribution: 'Sara Wasserman'
    },
    {
        name: 'Ellers',
        score: 0,
        img: 'img/ellers.jpg',
        pronoun: 'her',
        imgAttribution: 'Sara Wasserman'
    },
    {
        name: 'Thackery Binx',
        score: 0,
        img: 'img/thackery-binx.jpg',
        pronoun: 'him',
        imgAttribution: 'Hocus Pocus, probably'
    },
    {
        name: 'Garfield, the Patriot',
        score: 0,
        img: 'img/garfield-the-patriot.jpg',
        pronoun: 'the good Lord God himself',
        imgAttribution: 'Jim "Cool as a Hospital Room" Davis'
    },
    {
        name: 'Mr. Bigglesworth',
        score: 0,
        img: 'img/mr-bigglesworth.jpg',
        pronoun: 'him',
        imgAttribution: 'Dr. Evil'
    }
];

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);
    initialCats.forEach(function(cat) {
        self.catList.push(new Cat(cat));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().score(self.currentCat().score() + 1);
    }

    this.switchCat = function(data) {
        self.currentCat(data);
    }
};

var Cat = function(data) {
    this.name = ko.observable(data.name);
    this.score = ko.observable(data.score);
    this.pronoun = ko.observable(data.pronoun);
    this.img = ko.observable(data.img);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.level = ko.computed(function() {
        if (this.score() < 25) {
            return "Newborn";
        } else if (this.score() < 50) {
            return "Kitten";
        } else if (this.score() < 75) {
            return "Awkward Teenager, Not Quite Cat But Not Kitten";
        } else if (this.score() < 100) {
            return "Cat";
        } else if (this.score() < 125) {
            return "Senior";
        } else if (this.score() < 1000000) {
            return "Elder Sage";
        } else {
            return "Rest In Peace Poor " + this.name();
        }
    }, this);
}

ko.applyBindings(new ViewModel());
