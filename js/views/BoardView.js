// BoardView.js
class BoardView {
    constructor(scene, stageData) {
        this.scene = scene;
        this.numRows = stageData.length; // 行数をstageDataから取得
        this.numCols = stageData[0].length; // 列数をstageDataから取得
        this.tileSize = 64; // マスのサイズ
        this.borderColor = 0x000000; // 枠線の色（黒）
        this.borderThickness = 2; // 枠線の太さ
        this.stageData = stageData; // ステージデータ
    }

    create() {
        console.log('BoardView');

        // 画面の幅と高さを取得
        this.gameWidth = this.scene.game.config.width;
        this.gameHeight = this.scene.game.config.height;

        // 画面中央にテキストを表示
        this.scene.add.text(this.gameWidth / 2, this.gameHeight / 2, 'Board View', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);

        // タイルの生成
        this.tiles = this.createTiles();

        // グループの作成
        this.tileGroup = this.scene.add.group();

        // タイルをグループに追加
        this.tiles.forEach(tile => this.tileGroup.add(tile));

        // グループ全体を画面中央に移動
        // this.tileGroup.setXY(this.gameWidth / 2 - this.numCols * this.tileSize / 2, this.gameHeight / 2 - this.numRows * this.tileSize / 2);
    }

    createTiles() {
        const tiles = [];
    
        // ボード全体のオフセットを計算
        const offsetX = (this.gameWidth - this.tileSize * this.numCols) / 2;
        const offsetY = (this.gameHeight - this.tileSize * this.numRows) / 2;
    
        for (let y = 0; y < this.numRows; y++) {
            for (let x = 0; x < this.numCols; x++) {
                const tileX = x * this.tileSize + this.tileSize / 2 + offsetX;
                const tileY = y * this.tileSize + this.tileSize / 2 + offsetY;
                const tile = this.scene.add.rectangle(tileX, tileY, this.tileSize, this.tileSize, 0xffffff);
                tile.setInteractive();
                tile.setStrokeStyle(this.borderThickness, this.borderColor); // 枠線の設定
                tile.on('pointerover', () => this.highlightTile(tile));
                tile.on('pointerout', () => this.removeHighlight(tile));
                tiles.push(tile);
                // 駒の文字を表示
                const piece = this.stageData[y][x];
                if (piece !== '.') {
                    this.scene.add.text(tileX, tileY, piece, { fontSize: '32px', color: '#000000' }).setOrigin(0.5);
                }
            }
        }
    
        return tiles;
    }

    highlightTile(tile) {
        tile.setFillStyle(0xff0000); // 赤色で強調
    }

    removeHighlight(tile) {
        tile.setFillStyle(0xffffff); // 元の色に戻す
    }
}

export default BoardView;
