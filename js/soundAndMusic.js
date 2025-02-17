let audioFormat;

const setFormat = () => {
  let audio = new Audio();
  if (audio.canPlayType("audio/mp3")) {
      audioFormat = ".mp3";
  } else {
      audioFormat = ".ogg";
  }
}

const backgroundMusicClass = () => {

  let musicSound = null;
    
  this.loopSong = function(filenameWithPath) {
    setFormat();
    
    if(musicSound != null) {
      musicSound.pause();
      musicSound = null;
    }
    musicSound = new Audio(filenameWithPath+audioFormat);
    musicSound.loop = true;
    musicSound.play();
  }
  
  this.startOrStopMusic = function() {
    if(musicSound.paused) {
      musicSound.play();
    } else {
      musicSound.pause();
    }
  }
}

//sound overlap class
function soundOverlapsClass(filenameWithPath) {
  
  setFormat();
  
  // All variables here are "private", hidden to outside. Use "var " - not "this."
  let mainSound = new Audio(filenameWithPath+audioFormat);
  let altSound = new Audio(filenameWithPath+audioFormat);

  let altSoundTurn = false;
  
  this.play = function() {
    if(altSoundTurn) {
      altSound.currentTime = 0;
      altSound.play();
    } else {
      mainSound.currentTime = 0;
      mainSound.play();
    }
    altSoundTurn = !altSoundTurn;
  }

}
