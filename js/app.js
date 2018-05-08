var Cat = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

  this.nickNames = ko.observableArray([
      "Kitty",
      "Pookie",
      "Lazy bud"
  ]);


  this.level = ko.computed(function(){
      if(this.clickCount() < 10) {
          level = "Newborn";
          return level;
      } else if (this.clickCount() < 50 ) {
          level = "Infant";
          return level;
      } else if (this.clickCount() < 100) {
          level = "Toddler";
          return level;
      } else if (this.clickCount() < 250) {
          level = "Child";
          return level;
      } else if (this.clickCount() < 500) {
          level = "Teen";
          return level;
      } else {
          level = "Adult";
          return level;
      };
  }, this);
}

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function(){
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());
