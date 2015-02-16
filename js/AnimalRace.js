var raceDistance = 50;
var animal = function(name,speed,will){
	this.name = name;
	this.speed = speed;
	this.will = will;
	this.position = 0;
	this.run = function(){
		var distraction = Math.random()*will;
		if(distraction<4.5){
			this.position += 0;
		}
		else{
			this.position += speed;
		}
	};
	this.isStillRunning = function(){
      if(this.position < raceDistance){
        return true;
      }else{
        return false;
      }
    };
};
var turtle = new animal("Donatello",3,9);
var rabbit = new animal("Roger",7,6);
var kangaroo = new animal("Joey",6,6);

var racers = [turtle,rabbit,kangaroo];

var startRace = function(){
  var stillRunning;
  do{
    for(var racer in racers){
      if(racers[racer].isStillRunning()===true){
        racers[racer].run();
        stillRunning = racers[racer].isStillRunning();
        if(stillRunning === false){
        console.log("Congratulations to "+racers[racer].name+"! He crossed the line first!");
        break;
        }
      }
    }
  }
  while(stillRunning===true);
};
startRace();