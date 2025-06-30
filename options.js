document.addEventListener('DOMContentLoaded', () => {
  const domainInput = document.getElementById('domainInput');
  const status = document.getElementById('status');
  chrome.storage.sync.get(['setDomain'], (result) => {
    if (result.setDomain) domainInput.value = result.setDomain;
  });
  document.getElementById('saveBtn').addEventListener('click', () => {
    const setDomain = domainInput.value.trim();
    chrome.storage.sync.set({ setDomain }, () => {
      status.textContent = 'Domain saved!';
      setTimeout(() => status.textContent = '', 1500);
    });
  });
}); 