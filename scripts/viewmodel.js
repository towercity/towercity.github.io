var locationArray = [
    {
        name: 'Tampa',
        desc: 'null',
        lat: null,
        long: null
    },
    {
        name: 'Tampa',
        desc: 'null',
        lat: null,
        long: null
    },
    {
        name: 'Tampa',
        desc: 'null',
        lat: null,
        long: null
    },
    {
        name: 'Tampa',
        desc: 'null',
        lat: null,
        long: null
    },
    {
        name: 'Tampa',
        desc: 'null',
        lat: null,
        long: null
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
