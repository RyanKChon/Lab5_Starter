// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let select = document.querySelector('#horn-select');
  let status; 
  let image =  document.querySelector('img[alt="No image selected"]');
  select.addEventListener('input', function (){
    status = this.value;
    alert(status== 'air-horn');
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

)

}