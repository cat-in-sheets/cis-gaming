// interactions.js

/**
 * 要素にマウスオーバー時の色変更効果を追加します。
 * @param {Phaser.GameObjects.Text} element - 色変更効果を適用する要素
 * @param {string} normalColor - 通常時の色 (例: '#000000')
 * @param {string} hoverColor - マウスオーバー時の色 (例: '#ff0000')
 */
export function addMouseOverEffect(element, normalColor, hoverColor) {
    element.setInteractive();
    element.on('pointerover', () => {
        element.setColor(hoverColor);
    });
    element.on('pointerout', () => {
        element.setColor(normalColor);
    });
}