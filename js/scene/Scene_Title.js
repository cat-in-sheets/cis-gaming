class Scene_Title extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {

    // 画像読み込み
    this.load.image('background', 'img/VSInvader/background.png');
    this.load.image('battlefield_1P', 'img/VSInvader/battlefield_1P.png');
    this.load.image('bullet', 'img/VSInvader/bullet.png');
    this.load.image('enemy_00', 'img/VSInvader/enemy_00.png');
    this.load.image('item', 'img/VSInvader/item.png');
    this.load.image('player_1P', 'img/VSInvader/player_1P.png');
    this.load.image('portal', 'img/VSInvader/portal.png');
    
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');
  }
}