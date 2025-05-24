import { startGameLoop } from './engine/startGameLoop.js';
import { SceneManager } from './engine/sceneManager.js';
import { StartScene } from './scenes/startScene.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

export const sceneManager = new SceneManager();
sceneManager.changeScene(new StartScene());

function updateAndDraw(deltaTime) {
  sceneManager.update(deltaTime);
  sceneManager.draw(ctx);
  console.log("update");
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

startGameLoop(updateAndDraw);