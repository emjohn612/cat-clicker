var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

    this.nickNames = ko.observableArray([
        "Kitty",
        "Pookie",
        "Lazy bud"
    ]);

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function(){
        if(this.clickCount() < 10) {
            level = "Newborn";
            return level;
        } else if (this.clickCount() < 20 ) {
            level = "Infant";
            return level;
        } else if (this.clickCount() < 30) {
            level = "Toddler";
            return level;
        } else if (this.clickCount() < 40) {
            level = "Child";
            return level;
        } else if (this.clickCount() < 50) {
            level = "Teen";
            return level;
        } else {
            level = "Adult";
            return level;
        };
    }, this);
};

ko.applyBindings(new ViewModel());
