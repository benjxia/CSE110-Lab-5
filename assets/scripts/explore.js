// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;

var voices = [];

function init() {
  // TODO
  const vc_sel = document.querySelector("#voice-select")
  synth.onvoiceschanged = populateVoices;

  const txt = document.getElementById("text-to-speak");
  txt.addEventListener("change", (event) => {
    console.log(txt.value);
  });

  const img = document.getElementsByTagName("img").item(0);

  var play_sound = document.getElementsByTagName("button").item(0);
  play_sound.addEventListener('click', (event) => {
      const utterThis = new SpeechSynthesisUtterance(txt.value);
      const selectedOption = vc_sel.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name == selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      img.setAttribute("src", "assets/images/smiling-open.png");
      synth.speak(utterThis);
      utterThis.addEventListener('end', (event) => {
        img.setAttribute("src","assets/images/smiling.png");
      });
    }
  );
  // brilliant code below
  
  // setInterval(function () {
  //   if (synth.speaking) {
  //     img.setAttribute("src", "assets/images/smiling-open.png");
  //   } else {
  //     img.setAttribute("src","assets/images/smiling.png");
  //   }
  // }, 100);
  
}


function populateVoices() {
  const vc_sel = document.getElementById("voice-select");
  voices = synth.getVoices();
  voices.map(x => {
    let tmp = document.createElement("option");
    tmp.textContent = `${x.name} (${x.lang})`;
    tmp.value = x.name;
    if (x.default) {
      x.textContent += ' — DEFAULT';
    }
    tmp.setAttribute('data-lang', x.lang);
    tmp.setAttribute('data-name', x.name);
    vc_sel.appendChild(tmp);
  });


}