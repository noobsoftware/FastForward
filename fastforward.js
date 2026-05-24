(function() {
	console.log('load noobjs');

	window.MutationObserver = function() {
	    this.observe = function() {};
	    this.disconnect = function() {};
	    this.takeRecords = function() { return []; };
	};

	setInterval(function() {
		var targetNode = document.querySelector('.html5-main-video');
		var targetNodeParent = document.querySelector('.html5-video-player');
		console.log(targetNode);

		if(targetNodeParent.classList.contains('ad-showing')) {
			targetNode.muted = true;

			targetNode.currentTime += 25;

			/*document.querySelectorAll('div').forEach(div => {
				div.style.backgroundColor = 'rgba(25,0,255,0.1)';
			});*/


		} else {
			targetNode.muted = false;
			/*document.querySelectorAll('div').forEach(div => {
				div.style.backgroundColor = 'rgba(25,255,0,0.1)';
			});*/
		}

	}, 250);
	console.log('insert noobjs');


}());