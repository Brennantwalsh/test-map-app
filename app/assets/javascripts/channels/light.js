var spot = document.getElementById('radialGradient');
   var verticalMoveSpeed = .26
   var horizontalMoveSpeed = .26
   document.addEventListener('keydown', (event) => {
     var keyName = event.key;
     var spotCY = spot.cy.animVal.value;
     var spotCX = spot.cx.animVal.value;
     if (keyName === 'ArrowUp'){ 
       if (spotCY > .3){
         spotCY -= verticalMoveSpeed;
         spot.setAttribute("cy", spotCY); 
       }
     }
     if (keyName === 'ArrowDown'){ 
       if (spotCY < .7) {
         spotCY += verticalMoveSpeed;
         spot.setAttribute("cy", spotCY); 
       }
     }
     if (keyName === 'ArrowLeft'){ 
       if (spotCX > .3) {
         spotCX -= horizontalMoveSpeed;
         spot.setAttribute("cx", spotCX); 
       }
     }
     if (keyName === 'ArrowRight'){ 
       if (spotCX < .7) {
         spotCX += horizontalMoveSpeed;
         spot.setAttribute("cx", spotCX); 
       }
     }
   });