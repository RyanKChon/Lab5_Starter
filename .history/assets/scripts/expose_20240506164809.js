// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  const jsConfetti = new JSConfetti();
  let select = document.querySelector('#horn-select');
  let status; 
  let image =  document.querySelector('img[alt="No image selected"]');
  select.addEventListener('input', function (){
    status = this.value;
    if(status == 'air-horn') {
      image.src = "assets/images/air-horn.svg";
    }
    else if (status == 'car-horn') {
      image.src = "assets/images/car-horn.svg";
    }
    else if (status == 'party-horn') {
      image.src = "assets/images/party-horn.svg";
    }
    else{
    }
  } 
);
let volume = document.getElementById('volume');
let value = volume.value;
let volImg = document.querySelector('img[alt="Volume level 2"]');
volume.addEventListener('input', function () {
  value = volume.value;
  if(value == 0 ) {
    volImg.src = "assets/icons/volume-level-0.svg";
  }
  else if(value < 33) {
    volImg.src = "assets/icons/volume-level-1.svg";
  }
  else if(value < 67) {
    volImg.src = "assets/icons/volume-level-2.svg";
  }
  else {
    volImg.src = "assets/icons/volume-level-3.svg";
  }

});
let button = document.querySelector('button');
let sound = document.querySelector('.hidden');
button.addEventListener('click', function() {
  if(status == 'air-horn') {
    sound.src = "assets/audio/air-horn.mp3";
  }
  else if (status == 'car-horn') {
    sound.src = "assets/audio/car-horn.mp3";
  }
  else if (status == 'party-horn') {
    sound.src = "assets/audio/party-horn.mp3";
    jsConfetti.addConfetti();
  }
  else{
  }
  sound.volume = value/100; 
  sound.play();
})



}