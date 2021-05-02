// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.getComponent(cc.Animation).play();
        // this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
        //     console.log("test");
        //     if (this.getComponent(cc.Animation).isPaused()) {
        //         console.log("test1");
        //         this.getComponent(cc.Animation).getAnimationState("walk").play();
        //     } else {
        //         console.log("test2");
        //         this.getComponent(cc.Animation).getAnimationState("walk").pause();
        //     }
        // }, this);

        this.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            console.log("down");
            this.getComponent(cc.Animation).getAnimationState("walk").pause();
        }, this);

        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function () {
            console.log("leave");
            this.getComponent(cc.Animation).getAnimationState("walk").play();
        }, this);
    }


    // start() {
    //     // this.getComponent(cc.Animation).play();
    // }



    // update (dt) {}
}
