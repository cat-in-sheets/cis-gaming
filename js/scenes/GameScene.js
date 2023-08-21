// GameScene.js
import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // ここでゲームのセットアップやアセットの表示を行います
        // this.add.image(439, 480, 'board'); // 盤面の中心に配置
    }

    update() {
        // ここでゲームのロジックやアニメーションの更新を行います
    }
}

export default GameScene;
