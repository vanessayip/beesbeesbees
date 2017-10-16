var HoneyMakerBee = function() {
  //call Bee superclass
  Bee.call(this);
  //set age property to 10
  this.age = 10;
  //set job to be make honey
  this.job = 'make honey';
  //set honeyPot to 0
  this.honeyPot = 0;
};

//set prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//set constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//make honey adds 1 to the honeybee's honeyPot
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot += 1;
}

//giveHoney subtracts 1 from the honeyBee's honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
}

//color property inherited from bee that's set to yellow
//food property is inhertited from grub
//eat method is inherited from grub


