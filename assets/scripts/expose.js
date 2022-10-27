// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var horn_opt = document.querySelector("#horn-select");
  var horn_img = document.getElementsByTagName("img").item(0);
  var audio = document.getElementsByTagName("audio").item(0);
  const jsConfetti = new JSConfetti()

  horn_opt.addEventListener("change", (event) => {
    switch(horn_opt.selectedIndex) {
      case 1:
        horn_img.setAttribute("src", "assets/images/air-horn.svg");
        horn_img.setAttribute("alt", "No image selected");
        audio.setAttribute("src","assets/audio/air-horn.mp3");
        break;
      case 2:
        horn_img.setAttribute("src", "assets/images/car-horn.svg");
        horn_img.setAttribute("alt", "car horn");
        audio.setAttribute("src","assets/audio/car-horn.mp3");
        break;
      case 3:
        horn_img.setAttribute("src", "assets/images/party-horn.svg");
        horn_img.setAttribute("alt", "party horn");
        audio.setAttribute("src","assets/audio/party-horn.mp3");
        break;
      default:
        horn_img.setAttribute("src", "assets/images/no-image.png");
        horn_img.setAttribute("alt", "No image selected");
        audio.setAttribute("src","");
        break;
    }
  });

  var vol_ctrl = document.getElementById("volume-controls");
  var vol_sldr = vol_ctrl.getElementsByTagName("input").item(0);
  var vol_img = vol_ctrl.getElementsByTagName("img").item(0);

  audio.volume = vol_sldr.value/100;

  vol_sldr.addEventListener("input", (event) => {
    if (vol_sldr.value == 0) {
      vol_img.setAttribute("src", "assets/icons/volume-level-0.svg");
    } else if (vol_sldr.value < 33) {
      vol_img.setAttribute("src", "assets/icons/volume-level-1.svg");
    } else if (vol_sldr.value < 67) {
      vol_img.setAttribute("src", "assets/icons/volume-level-2.svg");
    } else {
      vol_img.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
    audio.volume = vol_sldr.value/100;
  });


  var play_sound = document.getElementsByTagName("Button").item(0);
  play_sound.addEventListener('click', (event) => {
      audio.play();
      if (horn_opt.selectedIndex == 3) {
        jsConfetti.addConfetti()
      }
    }
  );
}
