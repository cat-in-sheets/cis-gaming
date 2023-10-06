// BootScene.js
import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    // ここでゲームのアセットを読み込みます
    this.load.image("board", "../assets/images/TEST/light_878x960.png");
    // 他のアセットも同様に読み込むことができます

    // 駒の種類
    const pieces = [
      "bishop",
      "dragon",
      "gold",
      "horse",
      "king",
      "knight",
      "lance",
      "pawn",
      "prom_knight",
      "prom_lance",
      "prom_pawn",
      "prom_silver",
      "rook",
      "silver",
    ];

    // プレイヤーの種類
    const players = ["black", "white"];

    // 駒画像の読み込み
    for (const player of players) {
      for (const piece of pieces) {
        const key = `${player}_${piece}`;
        this.load.image(key, `../assets/images/TEST/${key}.png`);
      }
    }
  }

  create() {
    // アセットの読み込みが完了したら、次のシーン（例: TitleScene）に移動します
    console.log("BootScene");
    
    this.scene.start("TitleScene");
  }
}

export default BootScene;
