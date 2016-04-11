'use strict';

var locationArray = [
    {
        name: 'Books-a-Million',
        desc: 'null',
        mapLabel: 'S',
        lat: 27.93233,
        lng: -82.32699
    },
    {
        name: 'The Center of the Universe',
        desc: 'null',
        mapLabel: 'S',
        lat: 27.84804,
        lng: -82.27686
    },
    {
        name: "Haslam's",
        desc: 'null',
        mapLabel: 'R',
        lat: 27.77132,
        lng: -82.66082
    },
    {
        name: 'The Old House',
        desc: 'null',
        mapLabel: 'R',
        lat: 27.7624,
        lng: -82.73724
    },
    {
        name: 'Park Square',
        desc: 'null',
        mapLabel: '0',
        lat: 27.854269,
        lng: -82.210625
    },
    {
        name: 'Paul Sanders Park',
        desc: 'null',
        mapLabel: 'S',
        lat: 27.89425,
        lng: -82.29326
    },
    {
        name: 'Railroad Tracks',
        desc: 'null',
        mapLabel: 'S',
        lat: 27.94627,
        lng: -82.29975
    },
    {
        name: 'Tampa Convention Center',
        desc: 'null',
        mapLabel: 'S',
        lat: 27.9419,
        lng: -82.45652
    },
    {
        name: 'Winthrop Village',
        desc: 'null',
        mapLabel: 'S',
        lat: 27.893256,
        lng: -82.316763
    }
];

var ViewModel = function() {
    var self = this;

    this.locations = locationArray;

    this.showMenu = function() {
        $('#side-menu').slideToggle('fast');
    }
};

window.onload = function() {
    ko.applyBindings(new ViewModel());
};
