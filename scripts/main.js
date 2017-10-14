chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/main.js");

			initCardMerge();

			// ----------------------------------------------------------

		}
	}, 10);
});


function initCardMerge()
{
	console.log('initCardMerge');
	$('.list-card').attrchange({
		//trackValues: true, 
		callback: function (e) {
			if (e.attributeName !== 'class') {
				return;
			}
			if (e.target.classList.contains('ui-sortable-helper')) {
				console.log('start', e);
				$(this).data('dragging', true);
			} else if ($(this).data('dragging')) {
				console.log('stop', e);
				$(this).data('dragging', false)
			}

		}
	});
	// use a.placeholder to show merge intent
}