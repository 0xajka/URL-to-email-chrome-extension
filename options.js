document.addEventListener('DOMContentLoaded', () => {
  const domainInput = document.getElementById('domainInput');
  const prefaceInput = document.getElementById('prefaceInput');
  const status = document.getElementById('status');
  chrome.storage.sync.get(['setDomain', 'emailPreface'], (result) => {
    if (result.setDomain) domainInput.value = result.setDomain;
    if (result.emailPreface) prefaceInput.value = result.emailPreface;
  });
  document.getElementById('saveBtn').addEventListener('click', () => {
    const setDomain = domainInput.value.trim();
    const emailPreface = prefaceInput.value.trim();
    chrome.storage.sync.set({ setDomain, emailPreface }, () => {
      status.textContent = 'Settings saved!';
      setTimeout(() => status.textContent = '', 1500);
    });
  });
}); 