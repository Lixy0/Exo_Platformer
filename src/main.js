const gameconfig = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1280,
    heigth: 760,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true,
        },
    },
    scene: new scene(),
};

const game = new Phaser.Game(gameconfig);
