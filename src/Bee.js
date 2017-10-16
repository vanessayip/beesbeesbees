var Bee = function() {
  //call the grub superclass
  Grub.call(this);
  //set age property to 5
  this.age = 5;
  //color property to yellow
  this.color = 'yellow';
  //job property set to 'keep on growing'
  this.job = 'keep on growing';
};

//set the prototype
Bee.prototype = Object.create(Grub.prototype);

//set the constructor
Bee.prototype.constructor = Bee;

  //food property inherited from grub
  //eat method inherited from grub

