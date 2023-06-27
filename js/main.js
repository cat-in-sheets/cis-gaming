var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: 0x000000,
  scene: [Scene_Title, Scene_CharacterSelect],
  pixelArt: true
}

window.onload = function () {
  // ゲームを作成
  var game = new Phaser.Game(config);

}