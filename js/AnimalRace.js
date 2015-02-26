$(document).ready(function(){
  $("#addRabbit").click(function(){
    $(this).prop("disabled",true);
    addRacer(rabbit); //adds rabbit to the racer array
    $(this).text("Contestant Added");
  });
  $("#addTurtle").click(function(){
    $(this).prop("disabled",true);
    addRacer(turtle); //adds turtle to the racer array
    $(this).text("Contestant Added");
  });
  $("#addDeer").click(function(){
    $(this).prop("disabled",true);
    addRacer(deer); //adds deer to the racer array
    $(this).text("Contestant Added");
  });
  $("#addKangaroo").click(function(){
    $(this).prop("disabled",true);
    addRacer(kangaroo); //adds kangaroo to the racer array
    $(this).text("Contestant Added");
  });
  $("#beginRace").on('click', function(){
    //checks if there are more than two racers to actually start the race
    //if not, it will return a message and will not start the race
    if(racers.length < 2){
    $("#raceMessage").replaceWith("<h3 id='raceMessage'>Need 2 or more racers to begin race</h3>");
  }
  else{
    startRace();
  }
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

};
var addRacer = function(animal){
  racers.push(animal);
}
