define("Main", ["require", "exports", "gsap"], function (require, exports, gsap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.onload = function () {
        new Main();
    };
    var Main = (function () {
        function Main() {
            gsap_1.TweenMax.delayedCall(1, this.init.bind(this));
        }
        Main.prototype.init = function () {
            console.log('init');
            var x = 2;
            var tween = gsap_1.TweenLite.to(x, 2, { x: 10 });
            var timelineTween = new gsap_1.TimelineMax({ onComplete: this.onCompleteTween.bind(this) });
            timelineTween.add(tween, 0);
        };
        Main.prototype.onCompleteTween = function () {
            console.log('onCompleteTween');
        };
        return Main;
    }());
});
//# sourceMappingURL=main.js.map