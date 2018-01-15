export class Boot extends Phaser.State {
 
    preload() {
    	this.game.load.image('loading', 'images/loading-bar.png');
    }
 
    create() {
		this.game.input.maxPointers = 1;
		this.game.input.addPointer();
		
        this.game.state.start('Preloader');		
    }
 
    update() {
 
    }
 
}