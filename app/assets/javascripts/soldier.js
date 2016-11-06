var xAxis = 50;
var yAxis = 45;
var src = "soldier.png";
var spriteImage = new Image();


(function() {
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
  // MIT license
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function hello() {
      
  var soldierSprite,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    soldierSprite.update();
    soldierSprite.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    
    that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

        tickCount = 0;
        
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {  
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(0, 0, 1000, 1000);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * (that.width / numberOfFrames),
        0,
        that.width / numberOfFrames,
        that.height,
        xAxis,
        yAxis,
        that.width / numberOfFrames,
        that.height);

    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("hobbit");
  canvas.width = 1000;
  canvas.height = 1000;
  
    
  // Create sprite
  soldierSprite = sprite({
    context: canvas.getContext("2d"),
    width: 578.2,
    height: 100,
    image: spriteImage,
    numberOfFrames: 9,
    ticksPerFrame: 3
  });
  
  // Load sprite sheet
  spriteImage.addEventListener("load", gameLoop);
  spriteImage.src = "/images/" + src;


}

function movementRight() {
  xAxis += 50;
  src = "soldier.png";
  hello();
}
function movementDown() {
  yAxis += 50;
  src = "soldier_down.png";
  hello();
}
function movementLeft() {
  xAxis -= 50;
  src = "soldier_left.png";
  hello();
}
function movementUp() {
  yAxis -= 50;
  src = "soldier_up.png";
  hello();
}


var spot = document.getElementById('hobbit');
var verticalMoveSpeed = 100
var horizontalMoveSpeed = 100
document.addEventListener('keydown', (event) => {
  var keyName = event.key;
  if (keyName === 'ArrowUp'){ 
    movementUp();
  }
  if (keyName === 'ArrowDown'){ 
    movementDown();
  }
  if (keyName === 'ArrowLeft'){ 
    movementLeft();
  }
  if (keyName === 'ArrowRight'){ 
    movementRight();
  }
});