export class HowToPlay extends Phaser.State {
 
	instructions:string = "Pop the balloons in increasing order by tapping on it.";

    create() {
        const bg = this.game.add.image(0, 0, 'bg5');
        bg.inputEnabled = true;
        bg.events.onInputDown.addOnce(this.play, this);

        const text1 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY - 75, 'textfont', 'How to play!', 24);
        text1.anchor.setTo(0.5, 0.5);

        const text2 = this.game.add.bitmapText(100, this.game.world.centerY, 'textfont', this.instructions, 24);
        text2.maxWidth = 600;
        text2.updateText();

        const text3 = this.game.add.bitmapText(this.game.world.centerX + 200, this.game.world.centerY + 240, 'textfont', 'Tap to Play!', 24);
    }

    play() {
    	this.game.state.start('Play');
    }

}