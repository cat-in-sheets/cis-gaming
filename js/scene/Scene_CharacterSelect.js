class Scene_CharacterSelect extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {

    // 背景表示
    this.background = this.add.image(config.width / 2, config.height / 2, 'background');
    // 背景リサイズ
    this.background.setDisplaySize(config.width, config.height);

    // フィールド表示
    this.battlefield_1P = this.add.image(config.width / 2, config.height / 2, 'battlefield_1P');
    this.battlefield_1P.setScale(0.5 ,0.5);


    this.add.text(20, 20, 'Playing game', {
      font: '25px Arial',
      fill: 'yellow'
    });
  }
}