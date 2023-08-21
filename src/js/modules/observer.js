let config = { attributes: true, childList: true, characterData: true };
let observerM = new MutationObserver(function (mutations) {
		for (let mutation of mutations) {
			for (let addedNod of mutation.addedNodes) {
				console.log(addedNod);
			}
		}
	});
	
observerM.observe(dqs, config);