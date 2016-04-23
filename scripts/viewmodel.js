'use strict';

var locationArray = [
    {
        address: '439 Sevilla Ave, Coral Gables, Florida 33134',
        desc: '',
        price: 1500,
        bedrooms: 1,
        bathrooms: 1,
        sqft: 850,
        laundry: 'On site',
        available: 'June 1st',
        contactName: 'Perkins Property',
        contactPhone: '305-665-3636',
        link: 'http://www.trulia.com/rental/3211021780-439-Sevilla-Ave-4-Coral-Gables-FL-33134#photo-2'
    },
    {
        address: '701 Valencia Ave #1F, Coral Gables, Florida 33134',
        desc: '',
        price: 1350,
        bedrooms: 2,
        bathrooms: 1,
        sqft: 803,
        laundry: 'ASK',
        available: '',
        contactName: 'Licia Lopez/Tony Portillo',
        contactPhone: '305-303-1939',
        link: 'http://www.trulia.com/rental/3231466430-701-Valencia-Ave-1F-Coral-Gables-FL-33134#photo-2'
    },
    {
        address: '11 Menores Ave, Coral Gables, Florida 33134',
        desc: '',
        price: 1300,
        bedrooms: 1,
        bathrooms: 1,
        sqft: 0,
        laundry: 'ASK',
        available: '',
        contactName: 'Licia Lopez/Tony Portillo',
        contactPhone: '305-303-1939',
        link: 'http://www.trulia.com/rental/3220846514-11-Menores-Ave-Coral-Gables-FL-33134#photo-13'
    },
    {
        address: '344 Mendoza Ave #2, Coral Gables, Florida 33134',
        desc: '',
        price: 1375,
        bedrooms: 1,
        bathrooms: 1,
        sqft: 780,
        laundry: 'ASK',
        available: '',
        contactName: 'George Faehnle',
        contactPhone: '305-405-0615',
        link: 'http://www.trulia.com/rental/3220654549-344-Mendoza-Ave-2-Coral-Gables-FL-33134#photo-2'
    },
    {
        address: '340 Madeira Avenue, Coral Gables, Florida 33134',
        desc: '',
        price: 1150,
        bedrooms: 1,
        bathrooms: 1,
        sqft: 0,
        laundry: 'ASK',
        available: '',
        contactName: 'MJ',
        contactPhone: '786-234-1469',
        link: 'http://miami.craigslist.org/mdc/apa/5550813663.html'
    }
];

var ViewModel = function() {
    var self = this;

    //variables

    this.locations = ko.observableArray([]);
    locationArray.forEach(function(place) {
        self.locations.push(new Location(place));
    })
    this.selectedLocation = ko.observable(this.locations()[0]);

    //methods

    this.switchLocation = function(data) {
        self.selectedLocation(data);
    }

    this.centerToMarker = function(data) {
        map.methods.centerToMarker(data);
    };

    //container function to prevent mapmarker clicks from opening the menu
    this.closeMenu = function() {
        if ($('#slide-menu').hasClass('open')) {
            self.toggleMenu();
        }
    }

    this.toggleMenu = function() {
        $('#slide-menu').slideToggle('fast');
        $('#slide-menu').toggleClass('open');
    };

    this.toggleInfoWindow = function() {
        var $windowWidth = $(window).width();
        var $popup = $('#popup');

        if ($windowWidth <= 440) {
            if ($popup.hasClass('active')) {
                $popup.animate({
                    bottom: '-100vh'
                }, 300);
            } else {
                $popup.animate({
                    bottom: 0
                }, 300);
            }
        } else if ($windowWidth > 440) {
            if ($popup.hasClass('active')) {
                $popup.animate({
                    right: -440
                }, 300);
            } else {
                $popup.animate({
                    right: 0
                }, 300);
            }
        }

        $popup.toggleClass('active');
    };

    //container function for all methods run when a location is clicked
    this.clickLocation = function(data) {
        self.switchLocation(data);
        self.closeMenu();
        self.centerToMarker(data);
        //checks if info window is open before toggling it
        if (!$('#popup').hasClass('active')) {
            self.toggleInfoWindow();
        }
    };

    this.callYelp = function() {
        var yelpURL = 'https://api.yelp.com/v2/search';

        var oauth = OAuth({
            consumer: {
                public: 'P02OrHl8q9_kzj1Ip5IBGA',
                secret: '0E5bJbvBXaF7cWalr6htZlDsAZo'
            },
            signature_method: 'HMAC-SHA1'
        });

        var request_data = {
            url: yelpURL,
            method: 'GET',
            data: {
                term: 'food',
                location: self.selectedLocation().address,
                limit: 5,
                sort: 1
            }
        }

        var token = {
            public: 'kwSKXNTl-EqlPDHCi9zWgBDzv-vymPn0',
            secret: 'KfCO_MN4TfauZt24LtKnED-6Suc'
        }

        $.ajax({
            url: request_data.url,
            type: request_data.method,
            data: oauth.authorize(request_data, token),
            dataType: "jsonp",
            done: function(data) {
                console.log(data);
            }
        });
    }
};

var Location = function(data) {
    this.address = data.address;
    this.desc = data.desc;
    this.price = data.price;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.sqft = data.sqft;
    this.laundry = data.laundry;
    this.available = data.available;
    this.contactName = data.contactName;
    this.contactPhone = data.contactPhone;
    this.link = data.link;

    //get photo from streetview
    this.streetviewPhoto = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + this.address + ' ';
}

//Declare veiwmodel outside of applyBindings so map functions can access it
var my = {vm: null};
//vm bindings applied in map.js, so they can be accessed by map
