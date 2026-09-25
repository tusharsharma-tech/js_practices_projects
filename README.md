# Call Reminder App

A lightweight call reminder and profile card app built with HTML, CSS, and vanilla JavaScript. Create reminder cards for people, organize them by category, and move through the card stack with simple controls.

## Features

- Add a reminder with:
  - Profile image URL
  - Full name
  - Home town
  - Call purpose
  - Category
- Store reminders in the browser using `localStorage`.
- Display the newest reminder at the front of the card stack.
- Move through reminders with the up and down controls.
- Responsive layout for desktop and mobile screens.
- Remix Icon support for interface icons.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`
- Remix Icon CDN

## Getting Started

### Option 1: Open directly

Open `index.html` in a modern web browser.

### Option 2: Use VS Code Live Server

1. Open this folder in VS Code.
2. Start `index.html` with the Live Server extension.
3. Open the local URL shown by Live Server.

No package installation or build command is required.

## How to Use

1. Select the plus button to open the new call form.
2. Enter the required details and choose a category.
3. Select **Create Note** to add the reminder.
4. Use the arrow buttons to move through saved reminders.

Reminder data is saved only in the current browser's local storage. Clearing browser site data will remove the saved reminders.

## Project Structure

```text
CALLREMINDEAPP/
├── index.html    # Application markup and form
├── script.js     # Form handling, storage, and card rendering
├── styles.css    # Layout, card, modal, and responsive styles
└── README.md     # Project documentation
```

## Notes

- The app loads Remix Icons from jsDelivr, so an internet connection is needed for those icons to appear.
- The image URL is rendered as the card avatar, so use a publicly accessible image URL.
- The Call and Message buttons are currently visual card actions and do not initiate calls or messages.

## License

This project is available for personal learning and practice.
