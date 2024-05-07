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
let volValue;
volume.addEventListener('input', function (){
   volValue = volume.value;

alert(volValue);
});


}