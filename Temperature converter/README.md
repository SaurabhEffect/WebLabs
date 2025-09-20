# Temperature Converter

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white)

A beautiful, modern temperature converter with glassmorphism design that converts between Celsius, Fahrenheit, and Kelvin with real-time calculations and dark/light theme support.

## 🎯 Features

### Core Functionality

- **Real-time conversion** between Celsius (°C), Fahrenheit (°F), and Kelvin (K)
- **Bi-directional input** - type in any field to automatically convert to others
- **Input validation** with minimum temperature limits
- **Precision rounding** to 2 decimal places
- **Clear all function** to reset all inputs

### Design & UX

- **Glassmorphism UI** with backdrop blur and transparency effects
- **Dark/Light theme toggle** with system preference detection
- **Responsive design** for mobile and desktop
- **Interactive tooltips** showing conversion formulas
- **Smooth animations** and hover effects
- **Modern gradient backgrounds**

### Accessibility

- **Keyboard navigation** support
- **Screen reader friendly** labels
- **High contrast** color schemes
- **Responsive font sizing**

---

## 🎨 Design System

### Color Palette

- **Light Theme**: Indigo to pink gradient with white/transparent elements
- **Dark Theme**: Deep indigo to pink with dark transparent overlays
- **Accent Colors**: Indigo-500/600 for focus states and toggle

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600
- **Responsive sizing** with Tailwind utilities

### Visual Effects

- **Glassmorphism**: `backdrop-blur-xl` with `bg-white/30` transparency
- **Shadows**: `shadow-2xl` for depth
- **Borders**: Subtle white/20 opacity borders
- **Animations**: Smooth transitions and hover transforms

---

## 🛠️ Technology Stack

![Frontend](https://img.shields.io/badge/Frontend-HTML5-E34F26?style=for-the-badge&logo=html5)
![Styling](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Interactions](https://img.shields.io/badge/Logic-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Fonts](https://img.shields.io/badge/Typography-Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts)

| Component        | Technology                                                                                                       | Purpose                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Structure**    | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)                 | Semantic markup and accessibility             |
| **Styling**      | ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first CSS framework                   |
| **Interactions** | ![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)  | Temperature calculations and theme management |
| **Typography**   | ![Google Fonts](https://img.shields.io/badge/Poppins-4285F4?style=flat-square&logo=google-fonts&logoColor=white) | Modern font family                            |
| **Theme**        | ![CSS3](https://img.shields.io/badge/CSS_Variables-1572B6?style=flat-square&logo=css3&logoColor=white)           | Dark/light mode support                       |

---

## 🚀 Getting Started

### Quick Start

1. **Download** the `index.html` file
2. **Open** in any modern web browser
3. **Start converting** temperatures immediately!

### No Build Process Required

This is a **single-file application** with no dependencies to install:

- Tailwind CSS loaded via CDN
- Google Fonts loaded via CDN
- Pure vanilla JavaScript
- No npm, webpack, or build tools needed

---

## 📐 Conversion Formulas

The application uses these standard temperature conversion formulas:

### From Celsius (°C)

```javascript
Fahrenheit = (Celsius × 9/5) + 32
Kelvin = Celsius + 273.15
```

### From Fahrenheit (°F)

```javascript
Celsius = (Fahrenheit - 32) × 5/9
Kelvin = (Fahrenheit - 32) × 5/9 + 273.15
```

### From Kelvin (K)

```javascript
Celsius = Kelvin - 273.15
Fahrenheit = (Kelvin - 273.15) × 9/5 + 32
```

---

## 🎛️ Usage Guide

### Basic Conversion

1. **Enter temperature** in any input field (Celsius, Fahrenheit, or Kelvin)
2. **Automatic conversion** happens instantly in the other two fields
3. **Clear all** with the red "Clear All" button

### Theme Toggle

- **Light/Dark toggle** in the top-right corner
- **Automatic detection** of system preference on first visit
- **Persistent storage** remembers your choice

### Interactive Tooltips

- **Hover over** the "?" icons next to each temperature scale
- **View formulas** for converting from that scale to others
- **Educational reference** for understanding the math

### Input Validation

- **Minimum limits** enforced:
  - Celsius: -273.15°C (absolute zero)
  - Fahrenheit: -459.67°F (absolute zero)
  - Kelvin: 0K (absolute zero)
- **Decimal precision** rounded to 2 places
- **Invalid input** clears all fields

---

## 🎨 Customization Options

### Color Schemes

Modify the gradient backgrounds in the HTML:

```html
<!-- Light theme gradient -->
from-indigo-200 via-purple-200 to-pink-200

<!-- Dark theme gradient -->
dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900
```

### Font Customization

Change the Google Fonts import:

```html
<link
  href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
```

### Glass Effect Intensity

Adjust the glassmorphism effect:

```html
<!-- Current: Semi-transparent -->
bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl

<!-- More transparent -->
bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg

<!-- Less transparent -->
bg-white/40 dark:bg-gray-800/40 backdrop-blur-2xl
```

---

## 🔧 Technical Implementation

### JavaScript Architecture

```javascript
// Conversion pattern
const convertFromCelsius = () => {
  if (isUpdating) return; // Prevent infinite loops
  isUpdating = true;
  // Perform calculations
  isUpdating = false;
};
```

### Theme Management

```javascript
// System preference detection
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Local storage persistence
localStorage.setItem("theme", "dark");
```

### Responsive Design Breakpoints

- **Mobile**: Base styles
- **Small screens**: `sm:` prefix (640px+)
- **Medium screens**: `md:` prefix (768px+)
- **Large screens**: `lg:` prefix (1024px+)

---

## 🌐 Browser Compatibility

### Fully Supported

- **Chrome** 90+ ✅
- **Firefox** 88+ ✅
- **Safari** 14+ ✅
- **Edge** 90+ ✅

### Features Used

- **CSS Backdrop Filter** (glassmorphism effect)
- **CSS Custom Properties** (theme variables)
- **ES6 JavaScript** (arrow functions, const/let)
- **Local Storage API** (theme persistence)
- **CSS Grid/Flexbox** (layout)

### Fallbacks

- Graceful degradation for older browsers
- Basic styling without backdrop-filter support
- Light theme default for localStorage issues

---

## 📱 Mobile Optimization

### Touch-Friendly

- **Large input fields** (p-4 padding)
- **Accessible tap targets** (44px minimum)
- **Smooth scrolling** and transitions

### Responsive Layout

- **Full-width** on mobile devices
- **Proper spacing** with Tailwind responsive utilities
- **Readable fonts** at all screen sizes

### Performance

- **Single file** - fast loading
- **CDN resources** - globally cached
- **Minimal JavaScript** - smooth interactions

---

## 🔄 Version History

- **v1.0**: Initial release with glassmorphism design
- Complete temperature converter functionality
- Dark/light theme support
- Interactive tooltips and validation
- Mobile-responsive design

---

## 🤝 Contributing

![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=flat-square)

### Potential Enhancements

- Additional temperature scales (Rankine, Réaumur)
- Unit conversion history
- Scientific notation support
- Keyboard shortcuts
- Export/share functionality

### Development Setup

```bash
# No build process needed!
# Just edit the HTML file and refresh browser
```

---

## 📊 Project Stats

![Single File](https://img.shields.io/badge/Files-1-green?style=flat-square)
![No Dependencies](https://img.shields.io/badge/Dependencies-0-blue?style=flat-square)
![CDN Only](https://img.shields.io/badge/CDN_Resources-2-orange?style=flat-square)
![Mobile Ready](https://img.shields.io/badge/Mobile-Ready-purple?style=flat-square)

### File Size

- **HTML**: ~10.3KB
- **Total**: Single file application
- **External**: Tailwind CSS + Google Fonts (CDN)

---

## 📞 Support & Usage

### Quick Troubleshooting

1. **No styling?** Check internet connection (Tailwind CDN)
2. **Theme not working?** Clear browser cache and localStorage
3. **Calculations wrong?** Verify input is numeric
4. **Mobile issues?** Ensure viewport meta tag is present

### Educational Use

Perfect for:

- **Physics/Chemistry classes**
- **Cooking and baking** (recipe conversions)
- **Weather apps** integration
- **Scientific calculations**
- **Learning web development**

---

**Enjoy converting temperatures with style! 🌡️✨**

---

_Built with 💜 By Saurabh, using Tailwind CSS and vanilla JavaScript_
