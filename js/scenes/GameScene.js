// GameScene.js
import Phaser from "phaser";
import BoardView from "../views/BoardView.js";
import { addMouseOverEffect } from '../utils/interactions';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // ステージデータのJSONファイルを読み込み
        this.load.json('stage1', '../assets/stages/stage1.json');
    }

    create() {
        // ここでゲームのセットアップやアセットの表示を行います
        console.log('GameScene');

        // BoardViewの初期化
        const stageData = this.cache.json.get('stage1'); // JSONデータを取得
        this.boardView = new BoardView(this, stageData.pieces); // pieces部分を渡す
        this.boardView.create();

        // タイトルへ戻るボタン
        const backButton = this.add.text(this.game.config.width - 10, 10, 'Back to Title', { fontSize: '16px', color: '#000000' }).setOrigin(1, 0);
        addMouseOverEffect(backButton, '#000000', '#ff0000'); // 通常色とマウスオーバー時の色を指定
        backButton.on('pointerup', () => {
            this.scene.start('TitleScene'); // TitleSceneへの遷移
        });

        // 駒の配置やゲームの初期化など、ここで追加のセットアップを行う
    }

    update() {
        // ここでゲームのロジックやアニメーションの更新を行います
    }
}

export default GameScene;
