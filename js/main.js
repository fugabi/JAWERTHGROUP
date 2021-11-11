

(function(html) {

    'use strict';


   /* Revealing Effect
    * ---------------------------------------------------- */ 
    const ssRevealingEffect = function() {

        const intro = document.querySelector('.s-intro');
        const details = document.querySelector('.s-details');

        if (!(intro && details)) return;

        const checkpoint = intro.offsetHeight;
        let opacity;

        details.style.bottom = (window.innerHeight - details.offsetHeight) + 'px';

        window.addEventListener('resize', function() {
            details.style.bottom = (window.innerHeight - details.offsetHeight) + 'px';
        });

        window.addEventListener('scroll', function() {

            const currentScroll = window.pageYOffset;

            if (currentScroll <= checkpoint) {
                opacity = 1 - currentScroll / checkpoint;
            } else {
                opacity = 0;
            }

            details.style.setProperty('--overlay-opacity', opacity);
        });

    };


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssRevealingEffect();

    })();

})(document.documentElement);