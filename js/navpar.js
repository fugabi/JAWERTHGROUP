(function() {

	let hamburger = {
		nav: document.querySelector('#nav'),
		navToggle: document.querySelector('.nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click',
        () => { this.toggle(); });
		},

		toggle() {
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.05}% ${50 - (_mouseY - _h) * 0.05}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.07}% ${50 - (_mouseY - _h) * 0.07}%`;
        
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();