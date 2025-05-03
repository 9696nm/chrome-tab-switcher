chrome.commands.onCommand.addListener((command) => {
	if (command === "next-tab") {
		chrome.tabs.query({currentWindow: true}, (tabs) => {
			chrome.tabs.query({active: true, currentWindow: true}, (activeTabs) => {
				const current = tabs.findIndex(t => t.id === activeTabs[0].id);
				const next = (current + 1) % tabs.length;
				chrome.tabs.update(tabs[next].id, {active: true});
			});
		});
	} else if (command === "prev-tab") {
		chrome.tabs.query({currentWindow: true}, (tabs) => {
			chrome.tabs.query({active: true, currentWindow: true}, (activeTabs) => {
				const current = tabs.findIndex(t => t.id === activeTabs[0].id);
				const prev = (current - 1 + tabs.length) % tabs.length;
				chrome.tabs.update(tabs[prev].id, {active: true});
			});
		});
	}
});
