
function mover() {
var spot = document.getElementById('radialGradient');
var verticalMoveSpeed = .05
var horizontalMoveSpeed = .05
document.addEventListener('keydown', (event) => {
  var keyName = event.key;
  var spotCY = spot.cy.animVal.value;
  var spotCX = spot.cx.animVal.value;
  if (keyName === 'ArrowUp'){ 
    if (spotCY > .1){
      spotCY -= verticalMoveSpeed;
      spot.setAttribute("cy", spotCY); 
    }
  }
  if (keyName === 'ArrowDown'){ 
    if (spotCY < .95) {
      spotCY += verticalMoveSpeed;
      spot.setAttribute("cy", spotCY); 
    }
  }
  if (keyName === 'ArrowLeft'){ 
    if (spotCX > .1) {
      spotCX -= horizontalMoveSpeed;
      spot.setAttribute("cx", spotCX); 
    }
  }
  if (keyName === 'ArrowRight'){ 
    if (spotCX < .95) {
      spotCX += horizontalMoveSpeed;
      spot.setAttribute("cx", spotCX); 
    }
  }
});
};