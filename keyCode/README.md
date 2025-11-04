# ⌨️ KeyCode Inspector - Real-Time Keyboard Event Viewer

A modern, interactive web application that displays keyboard event information in real-time. Press any key to instantly see the key name, keyCode, and event.code values with one-click copy functionality.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-228AE6?style=for-the-badge&logo=fontawesome&logoColor=white)

**Perfect for developers, testers, and anyone learning keyboard event handling!**

---

## ✨ Key Features

### ⌨️ **Real-Time Keyboard Detection**

- **Live Event Capture** - Instantly detects any key press
- **Comprehensive Display** - Shows three key event properties simultaneously
- **Dynamic Updates** - Display updates with every keypress
- **Keyboard Support** - Works with all keyboard keys including special keys
- **Space Key Handling** - Displays "Space" instead of blank character
- **Welcome Message** - Initial prompt to start using

### 📊 **Displayed Information**

Three key properties shown for each keypress:

| Property          | Value          | Purpose                                       |
| ----------------- | -------------- | --------------------------------------------- |
| **event.key**     | Character/name | The actual character or name of the key       |
| **event.keyCode** | Numeric code   | Deprecated but still used code number (0-255) |
| **event.code**    | Code string    | Modern standardized code identifier           |

### 📋 **Copy-to-Clipboard Feature**

- **One-Click Copy** - Copy each value individually
- **Copy Buttons** - Icon buttons on each card
- **Clipboard API** - Modern browser clipboard integration
- **Tooltip Feedback** - Shows "Copied!" confirmation
- **Error Handling** - Shows failure message if copy fails
- **Auto-Hide Tooltip** - Tooltip disappears after 2 seconds

### 🎨 **Modern Design**

- **Professional UI** - Clean, minimalist interface
- **Dark Theme** - Blue-gray background (#2c3e50)
- **Color-Coded Cards** - Main key highlighted in blue (#3498db)
- **Responsive Layout** - Works on all screen sizes
- **Smooth Animations** - Scale effect on key display
- **Shadow Effects** - Depth and elevation

### 🎬 **Interactive Animations**

- **Scale Animation** - Cards scale up on keypress (1.05x)
- **Active State** - Visual feedback for pressed keys
- **Smooth Transitions** - 0.3s ease transitions
- **Auto-Reset** - Active state removed after 200ms
- **Button Hover** - Copy button visual feedback
- **Press Effect** - Button scales down when clicked

---

## 📦 Project Structure

```
keycode-inspector/
├── index.html      # Main HTML file (0.7 KB)
├── app.js          # JavaScript functionality (2.2 KB)
├── style.css       # CSS styling (3.2 KB)
└── README.md       # This documentation
```

### File Breakdown

| File           | Size   | Purpose                 |
| -------------- | ------ | ----------------------- |
| **index.html** | 0.7 KB | HTML structure          |
| **app.js**     | 2.2 KB | Keyboard event handling |
| **style.css**  | 3.2 KB | Styling & animations    |

---

## 🚀 Getting Started

### Quick Setup

1. **Download Files**

   ```
   keycode-inspector/
   ├── index.html
   ├── app.js
   └── style.css
   ```

2. **Keep Files Together**

   - All files must be in the same directory
   - Maintain exact file names

3. **Open in Browser**

   ```bash
   # Simply open the HTML file
   open index.html      # macOS
   start index.html     # Windows
   xdg-open index.html  # Linux
   ```

4. **Start Using**
   - Page loads with welcome message
   - Press any keyboard key
   - See three event properties displayed
   - Click copy buttons to copy values

### Browser Requirements

- **Chrome/Edge**: 60+
- **Firefox**: 55+
- **Safari**: 13.1+
- **Opera**: 47+
- **Mobile Browsers**: Most modern versions (limited key support)

---

## 🎮 JavaScript Features

### 1. **Keydown Event Listener**

```javascript
window.addEventListener("keydown", (event) => {
  const key = event.key === " " ? "Space" : event.key;
  const keyCode = event.keyCode;
  const code = event.code;

  // Update display with three properties
  insert.innerHTML = `...`;

  // Add copy listeners
  addCopyListeners();
});
```

**Features:**

- Listens for keydown events globally
- Captures three event properties
- Handles space key specially
- Dynamically updates HTML
- Attaches copy listeners

### 2. **Three Event Properties**

```javascript
const key = event.key; // "A", "Enter", "Space"
const keyCode = event.keyCode; // 65, 13, 32
const code = event.code; // "KeyA", "Enter", "Space"
```

**Differences:**

- **key**: Character/name of the key (modern standard)
- **keyCode**: Numeric code (deprecated, but still supported)
- **code**: Physical key location (modern standard)

### 3. **Copy Button Functionality**

```javascript
function addCopyListeners() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const textToCopy = e.currentTarget.getAttribute("data-clipboard");

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Show success tooltip
          tooltip.classList.add("show");
          setTimeout(() => {
            tooltip.classList.remove("show");
          }, 2000);
        })
        .catch((err) => {
          // Show error tooltip
          tooltip.textContent = "Failed!";
          tooltip.style.backgroundColor = "#f44336";
        });
    });
  });
}
```

**Features:**

- Clipboard API integration
- Error handling with fallback message
- Tooltip feedback system
- Auto-hide after 2 seconds
- Event stopping to prevent propagation

### 4. **Active State Animation**

```javascript
document.querySelectorAll(".key.active").forEach((keyEl) => {
  setTimeout(() => keyEl.classList.remove("active"), 200);
});
```

**Features:**

- Removes active class after 200ms
- Creates brief visual feedback
- Smooth scale animation

### 5. **Event Object Properties**

```javascript
event.key; // String: "A", "Enter", "Backspace"
event.keyCode; // Number: 65, 13, 8
event.code; // String: "KeyA", "Enter", "Backspace"
event.shiftKey; // Boolean: true/false
event.ctrlKey; // Boolean: true/false
event.altKey; // Boolean: true/false
event.metaKey; // Boolean: true/false
```

---

## 🎨 Design System

### Color Palette

```
Background: #2c3e50 (dark blue-gray)
Card Background: #ffffff (white)
Card Text: #333333 (dark gray)
Body Text: #ffffff (white)
Main Key Background: #3498db (bright blue)
Main Key Text: #ffffff (white)
Label Color: #777777 (gray)
Shadow: rgba(0, 0, 0, 0.15) (soft shadow)
Success Tooltip: #4caf50 (green)
Error Tooltip: #f44336 (red)
```

### Typography

```
Font Family: Roboto (400, 700 weights)
Heading: 2.5rem, font-weight 700
Card Text: 1.5rem, font-weight bold
Main Key: 3.5rem, font-weight bold
Label: 0.9rem, uppercase, letter-spacing 1px
Tooltip: 0.8rem
```

### Animations

```
Key Scale (active): scale(1.05)
Duration: 0.3s ease
Transition Properties: all
Transform Style: preserve-3d (perspective)

Tooltip Fade:
Opacity: 0 → 1
Duration: 0.3s
```

---

## 🎯 Card Layout

### Three Cards Display

**Card 1 - Main Key (Highlighted)**

```
- Larger size: 250px x 150px
- Font size: 3.5rem
- Blue background (#3498db)
- Shows: event.key value
- Label: "event.key"
- Copy button included
```

**Card 2 - KeyCode**

```
- Standard size: 180px x 120px
- Font size: 1.5rem
- White background
- Shows: event.keyCode value
- Label: "event.keyCode"
- Copy button included
```

**Card 3 - Code**

```
- Standard size: 180px x 120px
- Font size: 1.5rem
- White background
- Shows: event.code value
- Label: "event.code"
- Copy button included
```

---

## 📱 Responsive Design

### Desktop (> 600px)

- Three cards in horizontal layout
- 20px gap between cards
- Full perspective 3D effect
- Normal font sizes

### Mobile (≤ 600px)

- Single column layout
- Cards stack vertically
- 90% width with margins
- Responsive font sizes
- Optimized spacing

### Responsive Styles

```css
@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  #insert {
    flex-direction: column;
    align-items: center;
  }

  .key {
    min-width: 90%;
    margin: 10px 0;
  }

  .key.main-key {
    min-width: 90%;
    font-size: 3rem;
  }
}
```

---

## ⌨️ Keyboard Key Examples

### Printable Keys

```
event.key: "a", "A", "1", "!"
event.keyCode: 65, 97, 49, 33
event.code: "KeyA", "Digit1"
```

### Special Keys

```
event.key: "Enter", "Escape", "Backspace", "Tab"
event.keyCode: 13, 27, 8, 9
event.code: "Enter", "Escape", "Backspace", "Tab"
```

### Modifier Keys

```
event.key: "Shift", "Control", "Alt", "Meta"
event.keyCode: 16, 17, 18, 91
event.code: "ShiftLeft", "ControlLeft", "AltLeft", "MetaLeft"
```

### Navigation Keys

```
event.key: "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
event.keyCode: 38, 40, 37, 39
event.code: "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
```

### Function Keys

```
event.key: "F1", "F2", ... "F12"
event.keyCode: 112, 113, ... 123
event.code: "F1", "F2", ... "F12"
```

---

## 🎨 Interactive Features

### Copy Button Interaction

```css
.copy-btn {
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.copy-btn:hover {
  opacity: 1;
  transform: scale(1.1); /* Enlarge */
  color: #000;
}

.copy-btn:active {
  transform: scale(0.9); /* Shrink on click */
}
```

### Tooltip Display

```css
.tooltip {
  background-color: #4caf50; /* Green for success */
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip.show {
  visibility: visible;
  opacity: 1; /* Fade in */
}
```

---

## 💾 Clipboard API Integration

### Modern Approach

```javascript
navigator.clipboard
  .writeText(textToCopy)
  .then(() => {
    // Success - show confirmation
  })
  .catch((err) => {
    // Error - show failure message
  });
```

### Error Handling

```javascript
// Failed copy attempt:
tooltip.textContent = "Failed!";
tooltip.style.backgroundColor = "#f44336"; // Red
tooltip.classList.add("show");

// Reset after 2 seconds
setTimeout(() => {
  tooltip.classList.remove("show");
  tooltip.textContent = "Copied!";
  tooltip.style.backgroundColor = "#4caf50"; // Green back
}, 2000);
```

---

## 🔧 How It Works

### Step-by-Step Process

1. **Page Load**

   - Displays welcome message
   - Shows initial prompt: "Press any key to start"

2. **Key Press**

   - keydown event listener triggers
   - Extracts key, keyCode, code properties
   - Generates three card HTML

3. **Display Update**

   - Replaces insert div content
   - Adds "active" class for animation
   - Triggers scale animation (200ms)

4. **Copy Functionality**

   - addCopyListeners() attaches click handlers
   - Each button copies its value
   - Shows tooltip confirmation

5. **Auto-Reset**
   - Active class removed after 200ms
   - Cards return to normal state
   - Ready for next keypress

---

## 🚨 Troubleshooting

### JavaScript Not Working

- Check browser console (F12)
- Verify app.js is loaded
- Check for syntax errors
- Ensure HTML IDs match JavaScript

### Copy Not Working

- Check browser supports Clipboard API (most modern browsers do)
- Verify button click listeners attached
- Check browser console for errors
- Try different browser if issue persists

### Styling Issues

- Verify style.css loaded
- Check CSS file path correct
- Clear browser cache (Ctrl+Shift+Del)
- Check for CSS syntax errors

### Special Keys Not Showing

- Some browsers may not support certain key events
- Mobile browsers have limited key support
- Try on desktop for full functionality
- Check browser console for key events

---

## 📊 Browser Support

| Browser           | Version | Support    | Notes                   |
| ----------------- | ------- | ---------- | ----------------------- |
| **Chrome**        | 60+     | ✅ Full    | All features            |
| **Firefox**       | 55+     | ✅ Full    | All features            |
| **Safari**        | 13.1+   | ✅ Full    | All features            |
| **Edge**          | 79+     | ✅ Full    | All features            |
| **Opera**         | 47+     | ✅ Full    | All features            |
| **Mobile Safari** | 13.3+   | ⚠️ Limited | Keyboard support varies |
| **Chrome Mobile** | 60+     | ⚠️ Limited | Mobile keyboard only    |

---

## 🎓 Use Cases

### Developer Tools

- Testing keyboard events
- Debugging key handling code
- Learning keyboard event properties
- Finding keyCodes for shortcuts

### Web Development

- Understanding event.key vs event.keyCode
- Implementing keyboard shortcuts
- Form input validation
- Game development

### Education

- Teaching JavaScript events
- Understanding keyboard input
- Learning DOM manipulation
- Event listener concepts

### Testing

- QA testing keyboard functionality
- Testing accessibility features
- Verifying keyboard events
- Browser compatibility testing

---

## 🔮 Enhancement Ideas

### Potential Features

- **Key Combination Detection** - Show pressed modifier keys
- **Event History** - Log recently pressed keys
- **Search Functionality** - Find keys by name/code
- **Dark/Light Mode** - Theme toggle
- **Keyboard Layout Display** - Visual keyboard layout
- **Sound Effects** - Beep on keypress
- **Statistics** - Count keypresses
- **Export Data** - Save key data as JSON/CSV

### Technical Improvements

- Add localStorage for history
- Implement keyboard statistics
- Add theme switcher
- Create visual keyboard
- Export functionality
- Event filtering options
- Performance metrics

---

## 📄 License

**Educational & Personal Project**

- ✅ Personal use
- ✅ Educational purposes
- ✅ Learning JavaScript
- ✅ Portfolio projects
- ✅ Modification allowed

---

## 🌟 Key Takeaways

✨ **What Makes This Useful:**

- Learn keyboard event properties
- Quick reference for keyCodes
- Understanding event.key vs event.keyCode
- Copy values for use in code
- Test keyboard functionality

🎯 **Perfect For:**

- Web developers
- JavaScript learners
- Game developers
- Accessibility testing
- Quick key lookup

⚡ **Technical Highlights:**

- Real-time event capture
- Clipboard API integration
- Responsive design
- Modern browser APIs
- Clean code structure

---

**Press Keys, See Events, Copy Values** ⌨️✨

_A simple yet powerful tool for understanding keyboard events in JavaScript!_
