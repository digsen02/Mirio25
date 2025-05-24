export function startGameLoop(updateDrawCallback) {
    let lastTime = 0;
  
    function loop(currentTime) {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
  
      updateDrawCallback(deltaTime);
  
      requestAnimationFrame(loop);
    }
  
    requestAnimationFrame(loop);
  }