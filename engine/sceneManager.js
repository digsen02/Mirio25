export class SceneManager {
  constructor() {
    this.currentScene = null;
  }

  changeScene(newScene) {
    this.currentScene = newScene;
    if (this.currentScene?.start) {
      this.currentScene.start();
    }
  }

  update(dt) {
    this.currentScene?.update?.(dt);
  }

  draw(ctx) {
    this.currentScene?.draw?.(ctx);
  }
}