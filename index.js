//Create an event listener that runs a callback function only after the DOM content has loaded
document.addEventListener("DOMContentLoaded", function() {
    changeText()
  });

function changeText(){
    let grabText = document.querySelector('#text') 
    grabText.textContent = "This is really cool!"
    }