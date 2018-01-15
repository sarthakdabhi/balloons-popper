export class Splash extends Phaser.State {
 
    create() {
        const bg = this.game.add.image(0, 0, 'bg5');
        bg.inputEnabled = true;
        bg.events.onInputDown.addOnce(this.howToPlay, this);        

        const title = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY, 'titlefont', 'Balloons Popper', 80);
        title.anchor.setTo(0.5, 0.5);

        const text = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 200, 'textfont', 'Tap to Start!', 24);
        text.anchor.setTo(0.5, 0.5);
    }

    howToPlay() {
        this.game.state.start('HowToPlay');
    }

}