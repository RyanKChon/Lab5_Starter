// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
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
let volume = getElementById('volume');

// let volValue;
// volume.addEventListener('change', function (){
//    volValue = volume.value;
// });
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
  }
  else{
  }
  alert(volume.value);
  //sound.play();
})



}