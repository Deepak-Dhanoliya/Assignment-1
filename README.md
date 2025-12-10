# Assignment 1 – Text Mapping & Scroll Sync (React)

This project highlights and scrolls to the matching sentence/word in the Input Box when clicked in the Output Box.

---

## 🎯 Objective

- Display one long paragraph in the left box  
- Split it into sentences/words and show them in the right box  
- Clicking any sentence in the right box scrolls to that same sentence in the left box  

---

## 🧠 Short Approach

1. Accept a single long text input from the user.  
2. Split the paragraph into sentences using regex.  
3. Assign unique IDs to every sentence displayed in the Input Box.  
4. Generate the same list of sentences in the Output Box as clickable elements.  
5. On clicking a sentence in the Output Box:
   - Find the element with matching ID in the Input Box  
   - Use `scrollIntoView({ behavior: "smooth" })`  
   - Briefly highlight that sentence for better visibility  

---

## ✔️ Features

- Smooth scroll to matched sentences  
- Auto-highlighting  
- Clean and responsive UI  
- Works for any long paragraph or text  

---

## ▶️ How It Works

- The left side shows the complete input text with IDs  
- The right side shows clickable sentences  
- Clicking a sentence scrolls the left box to the corresponding sentence  

---

## 🧪 Usage

1. Enter a paragraph in the text area  
2. All sentences appear in both boxes  
3. Click any sentence on the right to navigate to its position on the left  

---

## 🛠 Tech Used

- React.js  
- Basic CSS  
- `scrollIntoView()` API for smooth scrolling  

---

## 🎥 Sample Video


https://github.com/user-attachments/assets/218e20a6-f2c4-4e76-8534-8da3b65a4f10



## 📌 Summary

This assignment demonstrates how to map text units between panels and synchronize scrolling using unique identifiers and DOM APIs in React.

