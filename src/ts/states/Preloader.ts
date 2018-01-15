export class Preloader extends Phaser.State {
 
    loading:any;

    preload() {
        this.loading = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading');
        this.loading.anchor.setTo(0.5, 0.5);
        this.game.load.setPreloadSprite(this.loading);

        this.game.load.bitmapFont('titlefont', 'fonts/title.png', 'fonts/title.fnt');
    	this.game.load.bitmapFont('textfont', 'fonts/text.png', 'fonts/text.fnt');
    	this.game.load.image('bg4', 'images/bg-4.png');
        this.game.load.image('bg5', 'images/bg-5.png');
        this.game.load.image('b-balloon', 'images/b-balloon.png');
        this.game.load.image('k-balloon', 'images/k-balloon.png');
        this.game.load.image('g-balloon', 'images/g-balloon.png');
    	this.game.load.image('p-balloon', 'images/p-balloon.png');

        this.game.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
 
    create() {
        this.loading.cropEnabled = false;
        this.game.state.start('Splash');
    }
     
}