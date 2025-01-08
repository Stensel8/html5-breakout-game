const canvas = document.getElementById('mainGame');
const ctx = canvas.getContext('2d');

// Lives
const LIVES = 3;
let numLives = LIVES;
let gameOver = false; 
let status;
let score = 0;


window.onload = () => {
    addHoldKeyListener('ArrowLeft');
    addHoldKeyListener('ArrowRight');
    addEventListener('mousedown', mouseClickHandle);
    loadImages();
};

const loadingDoneSoStartGame = () => {
	    const FRAMES_PER_SECOND = 50;
      setInterval(mainGame, 1000 / FRAMES_PER_SECOND);
       for(let i = 0; i < balls.length; i++ ){
             setInterval(balls[i].speedIncrement(0.03), 1000)
        }
       
     ;

};


