let totalKeys = document.querySelectorAll(".key").length;

const soundMap = {
  'c': 'c.mp3',
  'c#': 'csharp.mp3',
  'd': 'd.mp3',
  'd#': 'dsharp.mp3',
  'e': 'e.mp3',
  'f': 'f.mp3',
  'f#': 'fsharp.mp3',
  'g': 'g.mp3',
  'g#': 'gsharp.mp3',
  'a': 'a.mp3',
  'a#': 'asharp.mp3',
  'b': 'b.mp3'
};

const keySoundMap = {
  'a': 'c.mp3',
  'w': 'csharp.mp3',
  's': 'd.mp3',
  'e': 'dsharp.mp3',
  'd': 'e.mp3',
  'f': 'f.mp3',
  't': 'fsharp.mp3',
  'g': 'g.mp3',
  'y': 'gsharp.mp3',
  'h': 'a.mp3',
  'u': 'asharp.mp3',
  'j': 'b.mp3'
};

function playSound(soundFile){
    let audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}

document.addEventListener("click", event=> {
  if (!event.target.classList.contains("key")) return;

  let key = event.target.textContent.trim();
  let soundFile = soundMap[key];

  playSound(soundFile);
});

document.addEventListener("keydown", event =>{
    let key = event.key.toLowerCase();
    let soundFile = keySoundMap[key];

    playSound(soundFile);
})
