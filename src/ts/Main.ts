import { Boot } from "./states/Boot";
import { Preloader } from "./states/Preloader";
import { Splash } from "./states/Splash";
import { HowToPlay } from "./states/HowToPlay";
import { Play } from "./states/Play";

class Game extends Phaser.Game {

    constructor() {
 
        super(800, 600, Phaser.AUTO, 'game');
 
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Splash', Splash, false);
        this.state.add('HowToPlay', HowToPlay, false);
        this.state.add('Play', Play, false);
 
        this.state.start('Boot');
    }
 
}
 
new Game();