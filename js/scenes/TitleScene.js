// TitleScene.js
import Phaser from "phaser";
import { addMouseOverEffect } from '../utils/interactions';

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  create() {
    // ここでゲームのセットアップやアセットの表示を行います
    console.log("TitleScene");

    // 画面の幅と高さを取得
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;

    // タイトルテキストの表示
    this.add.text(gameWidth / 2, gameHeight / 4, 'New SYOGI', { fontSize: '48px', color: '#000000' }).setOrigin(0.5);

    // スタートボタンの表示
    const startButton = this.add.text(gameWidth / 2, gameHeight / 2, 'Start', { fontSize: '32px', color: '#000000' }).setOrigin(0.5);
    addMouseOverEffect(startButton, '#000000', '#ff0000'); // 通常色とマウスオーバー時の色を指定
    startButton.on('pointerup', () => {
      this.scene.start('GameScene'); // GameSceneへの遷移
    });

    // // 画像の基準座標を左上にして、(0, 0)に表示
    // const image = this.add.image(0, 0, "board");
    // image.setOrigin(0, 0); // 画像の基準座標を左上に設定

    // // white_king.pngを左上に表示
    // const whiteKing = this.add.image(0, 0, "white_king");
    // whiteKing.setOrigin(0, 0); // 画像の基準座標を左上に設定

    // // black_king.pngを左下に表示
    // const blackKing = this.add.image(0, gameHeight, "black_king");
    // blackKing.setOrigin(0, 1); // 画像の基準座標を左下に設定
  }
}

export default TitleScene;
