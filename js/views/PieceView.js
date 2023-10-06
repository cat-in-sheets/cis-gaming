// Description: 駒の表示に関する処理を行う

// 駒のクリックイベント
piece.setInteractive();
piece.on('pointerdown', () => {
  GameController.selectPiece(piece);
});

// マウスオーバーでの移動可能マス表示
piece.on('pointerover', () => {
  GameController.showPossibleMoves(piece);
});

piece.on('pointerout', () => {
  GameController.clearPossibleMoves();
});