// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let select = document.querySelector('#horn-select');
  let status; 
  select.addEventListener('input', function (){
    status = this.value;
    alert(status);
  } 

)

}