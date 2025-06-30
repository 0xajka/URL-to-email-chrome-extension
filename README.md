# URL-to-Email Chrome Extension

A simple Chrome extension that lets you instantly copy the current website's domain as an email address, using your own custom domain. Designed to work seamlessly with [inbound.new](https://inbound.new) by Ryan Vogel, or any catch-all email provider.

---

## How It Works

1. **Set up a catch-all domain**  
   Configure your domain (e.g., on inbound.new) to forward all emails to your main inbox.

2. **Install the extension**  
   - Download or clone this repository.
   - Go to `chrome://extensions` in your browser.
   - Enable "Developer mode" (top right).
   - Click "Load unpacked" and select this extension's folder.

3. **Configure your custom domain**  
   - Right-click the extension icon and select "Options".
   - Enter your custom domain (e.g., `inbound.new` or `mydomain.com`) and save.

4. **Copy an email address from any site**  
   - Click the extension icon while browsing any website.
   - The extension will copy an email address in the format:  
     **`<current-domain>@<your-custom-domain>`**  
     For example, on `youtube.com` with custom domain `inbound.new`, it copies:  
     `youtube@inbound.new`  
   - The email address is automatically copied to your clipboard.

---

## Features

- **One-click copy:** Instantly copies the current website's domain as an email address.
- **Custom domain:** Easily set your own domain in the extension options.
- **Works everywhere:** Supports any website you visit.
- **No backend required:** All data is stored locally in your browser.
- **Privacy-friendly:** No data leaves your device.

---

## Example

Suppose your custom domain is `inbound.new`:

| Website         | Copied Email           |
|-----------------|-----------------------|
| `github.com`    | `github@inbound.new`  |
| `youtube.com`   | `youtube@inbound.new` |
| `wikipedia.org` | `wikipedia@inbound.new` |

---

## Why use this?

- **Fast signups:** Instantly generate unique email addresses for each site.
- **Spam control:** Use a different email for every service.
- **Easy management:** All emails are forwarded to your main inbox via your catch-all.

---

## Requirements

- Chrome browser (or any Chromium-based browser)
- A catch-all email domain (e.g., via [inbound.new](https://inbound.new))

---

## Support

For questions or issues, open an issue on this repository.

---

**Enjoy safer, faster signups with unique emails for every site!**
