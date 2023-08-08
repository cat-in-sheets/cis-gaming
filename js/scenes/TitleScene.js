// TitleScene.js
import Phaser from "phaser";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  create() {
    // ここでゲームのセットアップやアセットの表示を行います

    // 画面の幅と高さを取得
    const gameWidth = this.game.config.width;
    const gameHeight = this.game.config.height;

    // 画像の基準座標を左上にして、(0, 0)に表示
    const image = this.add.image(0, 0, "board");
    image.setOrigin(0, 0); // 画像の基準座標を左上に設定

    // white_king.pngを左上に表示
    const whiteKing = this.add.image(0, 0, "white_king");
    whiteKing.setOrigin(0, 0); // 画像の基準座標を左上に設定

    // black_king.pngを左下に表示
    const blackKing = this.add.image(0, gameHeight, "black_king");
    blackKing.setOrigin(0, 1); // 画像の基準座標を左下に設定
  }
}

export default TitleScene;
