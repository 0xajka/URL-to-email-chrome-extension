window.addEventListener('DOMContentLoaded', async () => {
  const message = document.getElementById('message');
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let url = new URL(tab.url);
  let hostname = url.hostname.replace(/^www\./, '');
  // Extract only the domain name (without TLD)
  let domainParts = hostname.split('.');
  let currentDomain = domainParts.length > 1 ? domainParts[domainParts.length - 2] : domainParts[0];
  chrome.storage.sync.get(['setDomain', 'emailPreface'], (result) => {
    const setDomain = result.setDomain || 'example.com';
    const preface = result.emailPreface ? result.emailPreface.trim() : '';
    const email = preface ? `${preface}+${currentDomain}@${setDomain}` : `${currentDomain}@${setDomain}`;
    navigator.clipboard.writeText(email).then(() => {
      message.textContent = `Copied: ${email}`;
      setTimeout(() => window.close(), 1500);
    }, () => {
      message.textContent = 'Failed to copy!';
      setTimeout(() => window.close(), 1500);
    });
  });
}); 