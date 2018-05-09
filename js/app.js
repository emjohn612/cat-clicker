var initialCats = [
{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ["Kitty", "Pookie", "Lazy bud"]
},
{
    clickCount : 0,
    name : 'Tiger',
    imgSrc : '4154543904_6e2428c421_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
    nickNames: ["Tigger"]
},
{
    clickCount : 0,
    name : 'Scaredy',
    imgSrc : '22252709_010df3379e_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
    nickNames: ["Casper"]
},
{
    clickCount : 0,
    name : 'Shadow',
    imgSrc : '1413379559_412a540d29_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
    nickNames: ["Shooby"]
},
{
    clickCount : 0,
    name : 'Sleepy',
    imgSrc : '9648464288_2516b35537_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
    nickNames: ["Zzzzz"]
}
];

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
  },this);
}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem) );
    })

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
