# Premium Birthday Website for Minnu

## Quick Start
Double-click `index.html` to open in your browser.

## How to Customize

### 1. Change Name / Message
Open `script.js` and edit the `birthdayConfig` object at the top:

```js
const birthdayConfig = {
  name:     "Minnu",     // Name shown in hero & letter
  nickname: "Panduu",    // Name shown in final celebration
  ...
```

### 2. Add Your Photos
Place your images in `assets/images/`:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`

Update captions in `birthdayConfig.gallery` in `script.js`.

### 3. Add Background Music
Place your MP3 file here:
`assets/music/birthday.mp3`

The music player will automatically use it.

### 4. Customize the Letter
Edit `birthdayConfig.letter.body` in `script.js`.

### 5. Edit Timeline Events
Edit `birthdayConfig.timeline` in `script.js`.

### 6. Edit "Reasons You Are Special"
Edit `birthdayConfig.reasons` in `script.js`.

### 7. Edit Surprise Message
Edit `birthdayConfig.surpriseMessage` in `script.js`.

## File Structure
```
birthday-website/
├── index.html         Main HTML
├── style.css          All styles
├── script.js          All JavaScript + configuration
├── README.md          This file
└── assets/
    ├── images/        Put photo1.jpg ... photo6.jpg here
    ├── music/         Put birthday.mp3 here
    └── icons/         Optional custom icons
```

## Notes
- Works in all modern browsers without a server.
- Music requires user interaction first (browser security).
- Gallery shows gradient placeholders if images are missing.
- Fully responsive: mobile, tablet, desktop.
