var n = document.querySelectorAll(".drum").length;

//Checking for if button is clicked
for(var i = 0; i < n; i++)
{
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
          
      var btnClick = this.innerHTML;
      makesound(btnClick);
      btnAnimation(btnClick);

     });
}

//Checking if keyboard keys are pressed
document.addEventListener("keypress", function (event) {
     makesound(event.key);
     btnAnimation(event.key);
})

function makesound(key)
{
     switch (key) {
          case "w" : var crash = new Audio("sounds/crash.mp3");
                     crash.play();
                     break;
          case "a" : var tom1 = new Audio("sounds/tom-1.mp3");
                     tom1.play();
                     break;
          case "s" : var snare = new Audio("sounds/snare.mp3");
                     snare.play();
                     break;
          case "d" : var tom2 = new Audio("sounds/tom-2.mp3");
                     tom2.play();
                     break;
          case "j" : var kick = new Audio("sounds/kick-bass.mp3");
                     kick.play();
                     break;
          case "k" : var tom3 = new Audio("sounds/tom-3.mp3");
                     tom3.play();
                     break;
          case "l" : var tom4 = new Audio("sounds/tom-4.mp3");
                     tom4.play();
                     break;
          default:  console.log(key);
                    break;
       }
}

function btnAnimation(currentKey)
{
     var activeBtn = document.querySelector("." + currentKey);
     activeBtn.classList.add("pressed");

     setTimeout(() => {
          activeBtn.classList.remove("pressed");
     }, 100);

}
