//Detects mouse clicks
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {


    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);



  });
}


//Detects keyboard presses
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Takes in either a keyclick or the key property of a keyboard press and plays the corresponding sound
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "s":
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;


    default:
      console.log(this);


  }

}

//Adds the class "pressed" to a drum on click of buttons, then removes it after 0.1 seconds
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");

  }, 100);
}
