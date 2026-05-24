(function() {
	setInterval(function() {
		var targetNode = document.querySelector('.html5-main-video');
		var targetNodeParent = document.querySelector('.html5-video-player');

		if(targetNodeParent.classList.contains('ad-showing') && !targetNodeParent.classList.contains('ad-interrupted')/* && document.querySelector('.ytp-skip-ad-button') == null*/) {
			targetNode.muted = true;

			targetNode.currentTime += 25;

			document.querySelectorAll('.title').forEach(div => {
				div.style.backgroundColor = 'rgba(25,0,255,0.1)';
			});

			targetNode.classList.add('ad_noob');
		} else {
			if(document.querySelector('.ytp-skip-ad-button') == null) {
				if(targetNodeParent.classList.contains('ad_noob')) {
					targetNode.currentTime = 0;
					targetNodeParent.classList.remove('ad_noob');
				}

				targetNode.muted = false;
				document.querySelectorAll('.title').forEach(div => {
					div.style.backgroundColor = 'rgba(25,255,0,0.1)';
				});
			} else {
				if(targetNode.classList.contains('ad_noob')) {
					targetNode.currentTime = 0;
				} else {
					setTimeout(function() {
						document.querySelector('.ytp-skip-ad-button').click();
					}, 650);
				}
			}
		}

	}, 250);


}());
