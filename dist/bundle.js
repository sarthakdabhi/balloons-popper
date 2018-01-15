(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Boot_1 = require("./states/Boot");
var Preloader_1 = require("./states/Preloader");
var Splash_1 = require("./states/Splash");
var HowToPlay_1 = require("./states/HowToPlay");
var Play_1 = require("./states/Play");

var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 800, 600, Phaser.AUTO, 'game'));

        _this.state.add('Boot', Boot_1.Boot, false);
        _this.state.add('Preloader', Preloader_1.Preloader, false);
        _this.state.add('Splash', Splash_1.Splash, false);
        _this.state.add('HowToPlay', HowToPlay_1.HowToPlay, false);
        _this.state.add('Play', Play_1.Play, false);
        _this.state.start('Boot');
        return _this;
    }

    return Game;
}(Phaser.Game);

new Game();

},{"./states/Boot":3,"./states/HowToPlay":4,"./states/Play":5,"./states/Preloader":6,"./states/Splash":7}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Modal = function () {
    function Modal(game, title, message, callBack, that) {
        _classCallCheck(this, Modal);

        this.game = game;
        this.title = title;
        this.message = message;
        this.callBack = callBack;
        this.that = that;
        this.openModal();
    }

    _createClass(Modal, [{
        key: "openModal",
        value: function openModal() {
            this.modalGroup = this.game.add.group();
            var modalBg = this.game.add.graphics(0, 0);
            modalBg.beginFill(0x000000, 0.5);
            modalBg.drawRect(this.game.world.centerX - 400, this.game.world.centerY - 300, 800, 600);
            modalBg.endFill();
            var modal = this.game.add.graphics(0, 0);
            modal.lineStyle(10, 0xFF700B, 1);
            modal.beginFill(0x000000, 1);
            modal.drawRoundedRect(this.game.world.centerX - 200, this.game.world.centerY - 150, 400, 300, 10);
            modal.endFill();
            // const closeSign = this.game.add.text(modal.getBounds().x + modal.getBounds().width - 45, modal.getBounds().y + 10, "x", closeSignStyle);
            // closeSign.inputEnabled = true;
            // closeSign.input.useHandCursor = true;
            // closeSign.events.onInputDown.add(this.closeModal, this);
            // modal.addChild(closeSign);
            var titleStyle = { font: "32px Fredoka One", fill: "#FF3300", align: "center", stroke: "#000000", strokeThickness: 2, fontWeight: "bold" };
            var title = this.game.add.text(modal.getBounds().x + 20, modal.getBounds().y + 15, this.title, titleStyle);
            modal.addChild(title);
            var messageStyle = { font: "32px Fredoka One", fill: "#FFFFFF", align: "center", fontWeight: "bold", wordWrapWidth: 380, wordWrap: true, boundsAlignH: "center" };
            var message = this.game.add.text(modal.getBounds().x + 20, modal.getBounds().y + 65, this.message, messageStyle);
            message.setTextBounds(0, 0, 390, 0);
            modal.addChild(message);
            var okBtnStyle = { font: "32px Fredoka One", fill: "#00FF00", align: "center", fontWeight: "bold", wordWrapWidth: 390, wordWrap: true, boundsAlignH: "center" };
            var okBtn = this.game.add.text(modal.getBounds().x, modal.getBounds().y, "OK!", okBtnStyle);
            okBtn.setTextBounds(0, modal.getBounds().height - okBtn.getBounds().height - 10, 400, 0);
            okBtn.inputEnabled = true;
            okBtn.input.useHandCursor = true;
            if (this.callBack === undefined) {
                okBtn.events.onInputDown.add(this.closeModal, this);
            } else {
                okBtn.events.onInputDown.add(this.callBack, this.that);
            }
            modal.addChild(okBtn);
            modalBg.addChild(modal);
            this.modalGroup.add(modalBg);
        }
    }, {
        key: "closeModal",
        value: function closeModal() {
            this.modalGroup.kill();
        }
    }]);

    return Modal;
}();

exports.Modal = Modal;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var Boot = function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
    }

    _createClass(Boot, [{
        key: "preload",
        value: function preload() {
            this.game.load.image('loading', 'images/loading-bar.png');
        }
    }, {
        key: "create",
        value: function create() {
            this.game.input.maxPointers = 1;
            this.game.input.addPointer();
            this.game.state.start('Preloader');
        }
    }, {
        key: "update",
        value: function update() {}
    }]);

    return Boot;
}(Phaser.State);

exports.Boot = Boot;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var HowToPlay = function (_Phaser$State) {
    _inherits(HowToPlay, _Phaser$State);

    function HowToPlay() {
        _classCallCheck(this, HowToPlay);

        var _this = _possibleConstructorReturn(this, (HowToPlay.__proto__ || Object.getPrototypeOf(HowToPlay)).apply(this, arguments));

        _this.instructions = "Pop the balloons in increasing order by tapping on it.";
        return _this;
    }

    _createClass(HowToPlay, [{
        key: "create",
        value: function create() {
            var bg = this.game.add.image(0, 0, 'bg5');
            bg.inputEnabled = true;
            bg.events.onInputDown.addOnce(this.play, this);
            var text1 = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY - 75, 'textfont', 'How to play!', 24);
            text1.anchor.setTo(0.5, 0.5);
            var text2 = this.game.add.bitmapText(100, this.game.world.centerY, 'textfont', this.instructions, 24);
            text2.maxWidth = 600;
            text2.updateText();
            var text3 = this.game.add.bitmapText(this.game.world.centerX + 200, this.game.world.centerY + 240, 'textfont', 'Tap to Play!', 24);
        }
    }, {
        key: "play",
        value: function play() {
            this.game.state.start('Play');
        }
    }]);

    return HowToPlay;
}(Phaser.State);

exports.HowToPlay = HowToPlay;

},{}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = require("./../components/Modal");

var Play = function (_Phaser$State) {
    _inherits(Play, _Phaser$State);

    function Play() {
        _classCallCheck(this, Play);

        var _this = _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));

        _this.level = 0;
        _this.ansArr = [];
        _this.balloonsColors = ['b', 'p', 'k', 'g'];
        _this.balloons = [];
        _this.attempts = 0;
        return _this;
    }

    _createClass(Play, [{
        key: "init",
        value: function init() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { level: 0 };

            this.level = data.level;
            this.attempts = 0;
        }
    }, {
        key: "preload",
        value: function preload() {
            this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'bg4');
        }
    }, {
        key: "create",
        value: function create() {
            this.buildLevel();
        }
    }, {
        key: "buildLevel",
        value: function buildLevel() {
            var delay = 0;
            for (var i = this.level * 10 + 10; i >= this.level * 10 + 1; i--) {
                this.ansArr.push(i);
                var balloon = this.game.add.image(this.game.rnd.integerInRange(100, this.game.world.width - 100), this.game.rnd.integerInRange(100, 500), this.balloonsColors[Math.floor(Math.random() * this.balloonsColors.length)] + '-balloon');
                var scale = (Math.floor(Math.random() * 21) + 80) / 100;
                balloon.scale.setTo(scale, scale);
                var text = this.game.add.text(50, 50, i.toString(), { font: "32px Fredoka One", fill: "#ffffff", align: "center", stroke: "#000000", strokeThickness: 2, fontWeight: "bold" });
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
    }, {
        key: "popBalloon",
        value: function popBalloon(balloon) {
            if (balloon.data == this.ansArr[this.ansArr.length - 1]) {
                var temp = this.ansArr.pop();
                var msg = new SpeechSynthesisUtterance(temp.toString());
                window.speechSynthesis.speak(msg);
                balloon.kill();
                if (this.ansArr.length === 0) {
                    new Modal_1.Modal(this.game, "Yeah!", "You have completed this level. Now, let's move to next level!", this.newLevel, this);
                }
            } else {
                this.attempts++;
                if (this.attempts > 3) {
                    new Modal_1.Modal(this.game, "Oops!", "Your 3 attempts are over. This level will restart now!", this.restartLevel, this);
                } else {
                    new Modal_1.Modal(this.game, "Oops!", "You tried to pop a wrong balloon. You should pop balloon number " + this.ansArr[this.ansArr.length - 1] + "!");
                }
            }
        }
    }, {
        key: "restartLevel",
        value: function restartLevel() {
            this.game.state.restart(true, false, { level: this.level });
        }
    }, {
        key: "newLevel",
        value: function newLevel() {
            this.game.state.restart(true, false, { level: ++this.level });
        }
    }, {
        key: "update",
        value: function update() {
            this.bg.tilePosition.x += 0.4;
        }
    }]);

    return Play;
}(Phaser.State);

exports.Play = Play;

},{"./../components/Modal":2}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var Preloader = function (_Phaser$State) {
    _inherits(Preloader, _Phaser$State);

    function Preloader() {
        _classCallCheck(this, Preloader);

        return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
    }

    _createClass(Preloader, [{
        key: "preload",
        value: function preload() {
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
    }, {
        key: "create",
        value: function create() {
            this.loading.cropEnabled = false;
            this.game.state.start('Splash');
        }
    }]);

    return Preloader;
}(Phaser.State);

exports.Preloader = Preloader;

},{}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });

var Splash = function (_Phaser$State) {
    _inherits(Splash, _Phaser$State);

    function Splash() {
        _classCallCheck(this, Splash);

        return _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).apply(this, arguments));
    }

    _createClass(Splash, [{
        key: "create",
        value: function create() {
            var bg = this.game.add.image(0, 0, 'bg5');
            bg.inputEnabled = true;
            bg.events.onInputDown.addOnce(this.howToPlay, this);
            var title = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY, 'titlefont', 'Balloons Popper', 80);
            title.anchor.setTo(0.5, 0.5);
            var text = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY + 200, 'textfont', 'Tap to Start!', 24);
            text.anchor.setTo(0.5, 0.5);
        }
    }, {
        key: "howToPlay",
        value: function howToPlay() {
            this.game.state.start('HowToPlay');
        }
    }]);

    return Splash;
}(Phaser.State);

exports.Splash = Splash;

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
