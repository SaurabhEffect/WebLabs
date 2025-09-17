# Double Slider Sign-in/Sign-up Form

This is a responsive, modern sign-in and sign-up form with a smooth sliding animation. It's built with HTML, CSS, and vanilla JavaScript, and it includes client-side validation and a "show/hide password" feature. The user interface uses a clean, glassmorphism design.

---

## Features

- **Dual Forms**: A single container holds both the sign-in and sign-up forms.
- **Sliding Animation**: A visually appealing overlay slides to reveal the appropriate form when switching between "Sign In" and "Sign Up".
- **Client-Side Validation**: JavaScript is used to validate inputs in real time, checking for valid email formats and minimum password lengths.
- **Show/Hide Password**: An eye icon allows users to toggle the visibility of their password.
- **Responsive Design**: The layout adapts seamlessly from desktop to mobile devices. On smaller screens, the sliding animation is replaced with a simple fade for a better user experience.
- **Modern UI**: The design is clean and modern, using a glassmorphism effect for the main container.

---

## Getting Started

Because this project is built entirely with frontend technologies and has no dependencies, you can run it without any installation or build steps.

### Prerequisites

You only need a modern web browser (like Google Chrome, Firefox, or Microsoft Edge).

### Installation

1.  Clone the repository or download the source code.
2.  Navigate to the project directory.
3.  Open the `index.html` file directly in your web browser.

That's it! The form is now running locally.

---

## File Structure

The project is organized into three main files:

- `index.html`: This file contains the HTML structure for both the sign-in and sign-up forms, as well as the sliding overlay.
- `styles.css`: This file handles all the styling, including the layout, colors, fonts, animations, and responsive design.
- `script.js`: This file contains the JavaScript logic for toggling between the sign-in/sign-up panels, handling form validation, and managing the password visibility toggle.

---

## How It Works

The core functionality is controlled by a single CSS class, `right-panel-active`, which is added to or removed from the main container element via JavaScript.

- When the "Sign Up" button is clicked, the `right-panel-active` class is added. This triggers CSS transitions and animations that slide the sign-in panel out of view and the sign-up panel into view.
- When the "Sign In" button is clicked, the `right-panel-active` class is removed, reversing the animation.
