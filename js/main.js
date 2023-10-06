// main.js
import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import TitleScene from "./scenes/TitleScene";
import GameScene from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 878,
  height: 960,
  backgroundColor: '#ffffff', // ここで背景色を設定
  scene: [BootScene, TitleScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
