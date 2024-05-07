// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Todo
  const synth = window.speechSynthesis;
const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("#voice-select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];
  populateVoiceList();

}

function populateVoiceList() {
  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}