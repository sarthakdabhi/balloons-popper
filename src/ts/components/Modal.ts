export class Modal {

    game:Phaser.Game;
    modalGroup:Phaser.Group;
    title:string;
    message:string;
    callBack:() => void;
    that:Phaser.State;

    constructor(game:Phaser.Game, title:string, message:string, callBack?:() => void, that?:Phaser.State) {
        this.game = game;
        this.title = title;
        this.message = message;
        this.callBack = callBack;
        this.that = that;
        
        this.openModal();
    }

    openModal() {
        this.modalGroup = this.game.add.group();

        const modalBg = this.game.add.graphics(0, 0);
        modalBg.beginFill(0x000000, 0.5);
        modalBg.drawRect(this.game.world.centerX - 400, this.game.world.centerY - 300, 800, 600);
        modalBg.endFill();

        const modal = this.game.add.graphics(0, 0);
        modal.lineStyle(10, 0xFF700B, 1);
        modal.beginFill(0x000000, 1);
        modal.drawRoundedRect(this.game.world.centerX - 200, this.game.world.centerY - 150, 400, 300, 10);
        modal.endFill();

        // const closeSign = this.game.add.text(modal.getBounds().x + modal.getBounds().width - 45, modal.getBounds().y + 10, "x", closeSignStyle);
        // closeSign.inputEnabled = true;
        // closeSign.input.useHandCursor = true;
        // closeSign.events.onInputDown.add(this.closeModal, this);
        // modal.addChild(closeSign);

        const titleStyle = {font: "32px Fredoka One", fill: "#FF3300", align: "center", stroke: "#000000", strokeThickness: 2, fontWeight: "bold"};
        const title = this.game.add.text(modal.getBounds().x + 20, modal.getBounds().y + 15, this.title, titleStyle);
        modal.addChild(title);

        const messageStyle = {font: "32px Fredoka One", fill: "#FFFFFF", align: "center", fontWeight: "bold", wordWrapWidth: 380, wordWrap: true, boundsAlignH: "center"};
        const message = this.game.add.text(modal.getBounds().x + 20, modal.getBounds().y + 65, this.message, messageStyle);
        message.setTextBounds(0, 0, 390, 0);
        modal.addChild(message);

        const okBtnStyle = {font: "32px Fredoka One", fill: "#00FF00", align: "center", fontWeight: "bold", wordWrapWidth: 390, wordWrap: true, boundsAlignH: "center"};
        const okBtn = this.game.add.text(modal.getBounds().x, modal.getBounds().y, "OK!", okBtnStyle);
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

    closeModal() {
        this.modalGroup.kill();
    }

}