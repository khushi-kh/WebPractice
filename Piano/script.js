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

document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("key")) return;

  let key = e.target.innerHTML.trim();
  let soundFile = soundMap[key];

  if (soundFile) {
    let audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  }
});
