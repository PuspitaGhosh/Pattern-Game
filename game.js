
var level=0,userlevel=0;
var started=false;
 var gamePattern=[];
var userClickedPattern=[];
var buttomColors=["green","red","yellow","blue"];
function nextSequence()
{  userClickedPattern=[];
  ++level;
  $("h1").html("LEVEL "+level);
  var randomNumber=Math.round(Math.random()*3);
  var randomChoosenColor=buttomColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("#"+randomChoosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
}

$("button").click(function()
{
  var clr=this.id;
userClickedPattern.push(clr);
console.log(userClickedPattern);
playSound(clr);
checkAnswer(userClickedPattern.length-1);

});
function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
$(document).on("keydown",function(event){
if (!started) {
  nextSequence();
  started=true;
}});
function checkAnswer(currentLevel)
{

console.log(currentLevel);
console.log("user "+userClickedPattern);
console.log("game "+gamePattern);

  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
    if(userClickedPattern.length===gamePattern.length)
    {
      setTimeout(function(){
        nextSequence();},1000);
    }
  }
else{
  console.log("faill!!!!!!!!");
$("body").addClass("game-over");
  $("h1").html("Game Over! Press any key to restart..");
  playSound("wrong");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  startOver();

}
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
