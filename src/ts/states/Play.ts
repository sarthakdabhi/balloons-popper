import { Modal } from "./../components/Modal";

export class Play extends Phaser.State {

    level:number = 0;
	ansArr:number[] = [];
	balloonsColors = ['b', 'p', 'k', 'g'];
	balloons:Phaser.Image[] = [];
    attempts:number = 0;
    bg:Phaser.TileSprite;

    init(data:any = {level: 0}) {
        this.level = data.level;
        this.attempts = 0;
    }

	preload() {
        this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'bg4');
	}
 
    create() {
        this.buildLevel();
    }

    buildLevel() {

        let delay = 0;

    	for(let i = (this.level * 10) + 10; i >= (this.level * 10) + 1; i--) {
    		this.ansArr.push(i);
    		const balloon = this.game.add.image(this.game.rnd.integerInRange(100, this.game.world.width-100), this.game.rnd.integerInRange(100, 500), this.balloonsColors[Math.floor(Math.random()*this.balloonsColors.length)] + '-balloon');
    		const scale = (Math.floor(Math.random() * 21) + 80)/100;
    		balloon.scale.setTo(scale,scale);
    		const text = this.game.add.text(50, 50, i.toString(), {font: "32px Fredoka One", fill: "#ffffff", align: "center", stroke: "#000000", strokeThickness: 2, fontWeight: "bold"});
    		balloon.data = i;
    		text.anchor.setTo(0.5, 0.5);
    		balloon.addChild(text);
			balloon.inputEnabled = true;
	        balloon.input.useHandCursor = true;
			balloon.events.onInputDown.add(this.popBalloon, this);

            // const speed = this.game.rnd.between(15000, 20000);
            // this.game.add.tween(balloon).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);    

            this.balloons.push(balloon);

            delay += 200;
        }

    }

    popBalloon(balloon:Phaser.Image) {
        if (balloon.data == this.ansArr[this.ansArr.length-1]) {
            const temp = this.ansArr.pop();
            const msg = new SpeechSynthesisUtterance(temp.toString());
            window.speechSynthesis.speak(msg);
            balloon.kill();

            if (this.ansArr.length === 0) {
                new Modal(this.game, "Yeah!", "You have completed this level. Now, let's move to next level!", this.newLevel, this);
            }
        } else {
            this.attempts++;
            if (this.attempts > 3) {
                new Modal(this.game, "Oops!", "Your 3 attempts are over. This level will restart now!", this.restartLevel, this);
            } else {
                new Modal(this.game, "Oops!", "You tried to pop a wrong balloon. You should pop balloon number " + this.ansArr[this.ansArr.length-1] + "!");
            }
        }
    }

    restartLevel() {
        this.game.state.restart(true, false, {level: this.level});
    }

    newLevel() {
        this.game.state.restart(true, false, {level: ++this.level});
    }

    update() {
        this.bg.tilePosition.x += 0.4;
    }

}