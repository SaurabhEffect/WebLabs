# 🧮 Simple Calculator

A clean, minimalist web calculator built with HTML5, CSS3, and vanilla JavaScript. Perform basic arithmetic operations (addition, subtraction, multiplication, division) with an intuitive user interface and comprehensive error handling.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Responsive-green?style=for-the-badge)

---

## ✨ Key Features

### 🧮 **Basic Arithmetic Operations**

- **Addition** - Add two numbers (+)
- **Subtraction** - Subtract second number from first (-)
- **Multiplication** - Multiply two numbers (\*)
- **Division** - Divide first number by second (/)
- **Dynamic Selection** - Choose operation via dropdown
- **Real-Time Calculation** - Instant result display

### 📊 **User Interface**

- **Simple Dropdown** - Operator selection menu
- **Number Inputs** - Two number input fields
- **Submit Button** - Calculate results
- **Result Display** - Large result presentation
- **Error Messages** - Clear error feedback
- **Responsive Layout** - Works on all devices

### ✅ **Error Handling**

- **Input Validation** - Checks for valid numbers
- **Division by Zero** - Prevents undefined results
- **Empty Field Check** - Requires both numbers
- **Error Messages** - User-friendly error text
- **Error Display** - Red text for visibility
- **Error Clearing** - Clears on successful calculation

### 🎨 **Modern Design**

- **Dark Theme** - Professional dark background (#3a3a3a)
- **Cyan Accent** - Bright blue accents (#61dafb)
- **Clean Interface** - Minimalist layout
- **Shadow Effects** - Subtle depth
- **Rounded Corners** - Modern aesthetics
- **Smooth Animations** - Hover and button effects

### 🎬 **Interactive Elements**

- **Button Hover Effect** - Color change and lift
- **Input Focus** - Clear input areas
- **Dropdown Selection** - Easy operator choice
- **Result Display** - Large, readable numbers
- **Smooth Transitions** - 0.3s animations
- **Visual Feedback** - User-friendly interactions

---

## 📦 Project Structure

```
simple-calculator/
├── index.html      # Main HTML file (0.98 KB)
├── app.js          # JavaScript functionality (1.2 KB)
├── style.css       # CSS styling (1.3 KB)
└── README.md       # This documentation
```

### File Breakdown

| File           | Size    | Purpose          |
| -------------- | ------- | ---------------- |
| **index.html** | 0.98 KB | HTML structure   |
| **app.js**     | 1.2 KB  | Calculator logic |
| **style.css**  | 1.3 KB  | Styling          |

---

## 🚀 Getting Started

### Quick Setup

1. **Download Files**

   ```
   simple-calculator/
   ├── index.html
   ├── app.js
   └── style.css
   ```

2. **Keep Files Together**

   - All files in same directory
   - Maintain exact file names

3. **Open in Browser**

   ```bash
   # Simply open the HTML file
   open index.html      # macOS
   start index.html     # Windows
   xdg-open index.html  # Linux
   ```

4. **Start Calculating**
   - Enter first number
   - Select operation
   - Enter second number
   - Click Submit
   - View result

### Browser Requirements

- **Chrome/Edge**: 60+
- **Firefox**: 55+
- **Safari**: 10.1+
- **Opera**: 47+
- **Mobile Browsers**: All modern versions

---

## 🎮 JavaScript Functionality

### 1. **Submit Button Click Handler**

```javascript
document.getElementById("btn").addEventListener("click", () => {
  // Get input values
  const num1Input = document.querySelector(".num1").value;
  const num2Input = document.querySelector(".num2").value;
  const operator = document.getElementById("selectOp").value;

  // Get display elements
  const resultDisplay = document.querySelector(".result");
  const errorDisplay = document.getElementById("error");

  // Convert to numbers
  const num1 = parseFloat(num1Input);
  const num2 = parseFloat(num2Input);

  // Perform calculation
  // ...
});
```

**Features:**

- Gets all input values from DOM
- Converts strings to numbers
- Accesses display elements
- Ready for calculation

### 2. **Input Validation**

```javascript
if (isNaN(num1) || isNaN(num2)) {
  errorDisplay.innerHTML = "Please enter valid numbers in both fields.";
  resultDisplay.innerHTML = "Result";
  return;
}
```

**Features:**

- Checks if inputs are valid numbers
- Shows error message if invalid
- Resets result display
- Prevents calculation errors

### 3. **Operator Switch Statement**

```javascript
switch (operator) {
  case "plus":
    calculationResult = num1 + num2;
    break;
  case "min":
    calculationResult = num1 - num2;
    break;
  case "dev":
    // Division check
    if (num2 === 0) {
      errorDisplay.innerHTML = "Error: Cannot divide by zero.";
      resultDisplay.innerHTML = "Result";
      return;
    }
    calculationResult = num1 / num2;
    break;
  case "multi":
    calculationResult = num1 * num2;
    break;
}
```

**Features:**

- Handles four operations
- Division by zero check
- Clear operation selection
- Returns appropriate result

### 4. **Result Display & Precision**

```javascript
errorDisplay.innerHTML = "";
resultDisplay.innerHTML = parseFloat(calculationResult.toFixed(5));
```

**Features:**

- Clears error messages on success
- Rounds to 5 decimal places
- Converts back to number for display
- Clean result presentation

---

## 🎨 HTML Structure

### Main Container

```html
<div class="main">
  <h1>Simple Calculator</h1>
  <h2 class="result">Result</h2>
  <p id="error"></p>
  <div class="inputs">
    <!-- Input fields -->
  </div>
  <div class="submitBtn">
    <button id="btn">Submit</button>
  </div>
</div>
```

### Input Section

```html
<select id="selectOp">
  <option value="plus">+</option>
  <option value="min">-</option>
  <option value="dev">/</option>
  <option value="multi">*</option>
</select>
<input class="num1" type="number" placeholder="Number 1" />
<input class="num2" type="number" placeholder="Number 2" />
```

---

## 🎨 CSS Design

### Color Palette

```
Background: #3a3a3a (dark gray)
Panel: #4a4a4a (darker gray)
Accent: #61dafb (cyan blue)
Text: #ffffff (white)
Error: #ff6b6b (red)
Hover: #52b9d8 (darker cyan)
```

### Layout Properties

```css
.main {
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.result {
  font-size: 2.5rem;
  min-height: 40px;
  word-wrap: break-word;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
```

### Button Styling

```css
#btn {
  background: #61dafb;
  color: #282c34;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

#btn:hover {
  background: #52b9d8;
  transform: translateY(-2px); /* Lift effect */
}
```

---

## 📱 Responsive Design

### Desktop

- Centered container
- 400px max-width
- Normal spacing
- Full functionality

### Mobile

- 90% width of screen
- Full-width inputs
- Adjusted spacing
- Touch-friendly buttons
- Readable font sizes

### Responsive CSS

```css
@media (max-width: 600px) {
  .main {
    width: 95%;
    padding: 1.5rem;
  }

  .result {
    font-size: 2rem;
  }

  .inputs input,
  #selectOp {
    padding: 0.8rem;
    font-size: 1rem;
  }

  #btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
```

---

## ⚙️ Operations Reference

### Addition

```
Formula: num1 + num2
Example: 5 + 3 = 8
```

### Subtraction

```
Formula: num1 - num2
Example: 10 - 4 = 6
```

### Multiplication

```
Formula: num1 * num2
Example: 4 * 7 = 28
```

### Division

```
Formula: num1 / num2
Example: 20 / 4 = 5
Special: Cannot divide by 0
```

---

## 🔧 Error Messages

| Error                                       | Condition              | Solution             |
| ------------------------------------------- | ---------------------- | -------------------- |
| "Please enter valid numbers in both fields" | Empty or invalid input | Enter valid numbers  |
| "Error: Cannot divide by zero"              | Division by 0          | Change second number |

---

## 💾 How It Works

### Step-by-Step Process

1. **User Input**

   - Enter first number
   - Select operation from dropdown
   - Enter second number

2. **Button Click**

   - Click Submit button
   - Triggers event listener

3. **Input Validation**

   - Check if both inputs are numbers
   - Show error if invalid
   - Continue if valid

4. **Operation Check (Division)**

   - If division selected, check for zero
   - Show error if dividing by zero
   - Continue if valid

5. **Calculation**

   - Use switch statement
   - Execute selected operation
   - Store result

6. **Result Display**
   - Clear error messages
   - Round to 5 decimal places
   - Display result

---

## 🎯 Usage Examples

### Example 1: Addition

```
Number 1: 15
Operation: +
Number 2: 25
Result: 40
```

### Example 2: Division

```
Number 1: 100
Operation: /
Number 2: 4
Result: 25
```

### Example 3: Error Handling

```
Number 1: 50
Operation: /
Number 2: 0
Error: Cannot divide by zero
Result: Result (unchanged)
```

---

## ✨ Features Explained

### Number Input Type

```html
<input class="num1" type="number" />
```

- Restricts input to numbers
- Shows number keyboard on mobile
- Built-in validation

### Placeholder Text

```html
<input placeholder="Number 1" />
```

- Guides user input
- Disappears when typing
- Improves UX

### Min-Height Displays

```css
.result {
  min-height: 40px;
}

#error {
  min-height: 1.2em;
}
```

- Prevents layout shift
- Consistent spacing
- Professional appearance

---

## 🚨 Troubleshooting

### Button Not Working

- Check JavaScript file loaded
- Verify button ID is "btn"
- Check browser console (F12)
- Ensure app.js linked in HTML

### Styling Not Applied

- Verify style.css path correct
- Check file in same directory
- Clear browser cache
- Inspect elements with DevTools

### Input Not Accepting Numbers

- Ensure input type="number"
- Try different browser
- Check for JavaScript errors
- Verify number format

### Result Not Displaying

- Check result class exists
- Verify calculation logic
- Check for JavaScript errors
- Test with simple numbers

---

## 📊 File Statistics

```
Total Project Size: 3.48 KB
├── HTML: 978 bytes
├── JavaScript: 1.2 KB
└── CSS: 1.3 KB

No external dependencies
No frameworks required
Pure vanilla web technologies
```

---

## 🔮 Enhancement Ideas

### Potential Features

- **History Log** - Show previous calculations
- **Keyboard Support** - Use arrow keys and Enter
- **More Operations** - Power, square root, modulo
- **Memory Functions** - M+, M-, MR, MC
- **Dark/Light Mode** - Theme toggle
- **Decimal Places** - Customizable precision
- **Expression Parsing** - Multiple operations
- **Copy Result** - One-click copy to clipboard

### Technical Improvements

- Store calculation history
- Keyboard event handling
- Local storage for memory
- More mathematical functions
- Advanced error handling
- Themes or customization
- Unit conversion
- Scientific functions

---

## 📝 Browser Support

| Browser           | Version | Support |
| ----------------- | ------- | ------- |
| **Chrome**        | 60+     | ✅ Full |
| **Firefox**       | 55+     | ✅ Full |
| **Safari**        | 10.1+   | ✅ Full |
| **Edge**          | 79+     | ✅ Full |
| **Opera**         | 47+     | ✅ Full |
| **Mobile Safari** | 10.3+   | ✅ Full |
| **Chrome Mobile** | 60+     | ✅ Full |

---

## 🌟 Key Takeaways

✨ **What Makes This Great:**

- Simple, easy to understand
- Lightweight code
- Perfect for beginners
- Professional appearance
- Full error handling
- Responsive design
- No dependencies
- Learning-friendly

🎯 **Perfect For:**

- Learning web development
- Understanding JavaScript events
- Learning form handling
- Understanding DOM manipulation
- Practicing HTML/CSS/JS
- Portfolio projects
- Beginner exercises

⚡ **Technology Highlights:**

- Vanilla JavaScript
- CSS animations
- HTML5 inputs
- Event listeners
- Switch statements
- Form validation
- Error handling

---

## 📞 Support & Resources

### Debugging

- Use browser DevTools (F12)
- Check console for errors
- Inspect elements
- Test on different browsers

### Learning Resources

- MDN Web Docs
- JavaScript documentation
- CSS tutorials
- HTML reference guides

---

## 📄 License

**Educational Project - Free to Use**

- ✅ Personal use
- ✅ Educational purposes
- ✅ Learning JavaScript
- ✅ Portfolio projects
- ✅ Modification allowed

---

**Calculate with Simplicity and Style** 🧮✨

_A perfect starter calculator project for web developers!_
