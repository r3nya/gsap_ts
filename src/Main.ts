import {TweenLite,TweenMax,TimelineMax} from "gsap";

window.onload = () => {
    new Main();
};

class Main
{
    constructor ()
    {
        TweenMax.delayedCall(1, this.init.bind(this));
    }

    private init():void
    {
        console.log('init');
        var x = 2;
        var tween = TweenLite.to(x, 2, {x:10});
        var timelineTween = new TimelineMax({onComplete : this.onCompleteTween.bind(this)});
        timelineTween.add(tween, 0);
    }

    private onCompleteTween():void
    {
        console.log('onCompleteTween');
    }
}




