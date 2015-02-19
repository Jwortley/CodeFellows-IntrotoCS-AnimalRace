$(document).ready(function(){
  $("#addRabbit").click(function(){
    $(this).prop("disabled",true);
    $(this).text("Contestant Added");
  });
  $("#addTurtle").click(function(){
    $(this).prop("disabled",true);
    $(this).text("Contestant Added");
  });
  $("#addDeer").click(function(){
    $(this).prop("disabled",true);
    $(this).text("Contestant Added");
  });
  $("#addKangaroo").click(function(){
    $(this).prop("disabled",true);
    $(this).text("Contestant Added");
  });
});

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
var deer = new animal("Sven",5,7);
var racers = [];

var startRace = function(){
  var stillRunning;
  if(racers.length < 2){
    $("#raceMessage").replaceWith("<h2 id='raceMessage'>Need 2 or more racers to begin race</h2>");
  }
  else{
    do{
      $("#raceMessage").replaceWith("<h2 id='raceMessage'></h2>");
      for(var racer in racers){
        if(racers[racer].isStillRunning()===true){
            racers[racer].run();
            stillRunning = racers[racer].isStillRunning();
          }
          if(stillRunning === false){
          $("#beginRace").replaceWith("<h2>Congratulations to "+racers[racer].name+"! He crossed the line first!</h2>");
          break;
        }
      }
    }
  while(stillRunning===true);
  }

};
var addRacer = function(animal){
  racers.push(animal);
}
