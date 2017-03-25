System.register(["gsap"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var gsap_1, Main;
    return {
        setters: [
            function (gsap_1_1) {
                gsap_1 = gsap_1_1;
            }
        ],
        execute: function () {
            window.onload = function () {
                new Main();
            };
            Main = (function () {
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
        }
    };
});
//# sourceMappingURL=Main.js.map