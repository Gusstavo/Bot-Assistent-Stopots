let active = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ active });
});

