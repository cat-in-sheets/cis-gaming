let config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}
// ゲームを作成
let game = new Phaser.Game(config);