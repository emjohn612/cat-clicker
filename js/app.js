var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);


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

    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames: ["Kitty", "Pookie", "Lazy bud"]
    }) );

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());
