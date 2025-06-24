# 🍕 Pizza Order Web App

A fully functional pizza ordering website built using **React.js** and **Tailwind CSS**, backed by a **JSON server** for product data and cart operations.

---

## 🚀 Features

- 🖼️ Home page with background image and CTA
- 🍕 Products page fetching data from a fake API (`json-server`)
- 🛒 Cart with live quantity update, remove item, and total calculation
- 🧾 Order summary and form with payment method options
- 💾 Cart persistence using localStorage
- 🔥 Tailwind CSS for responsive UI
- ✅ Smooth navigation using React Router

---

## 📁 Project Structure
```
pizza-app/
├── public/
│ └── images/ # Images for pizzas
├── src/
│ ├── components/ # ProductCard, etc.
│ ├── context/ # CartContext for global cart state
│ ├── pages/ # Home, Products, Cart, Order
│ ├── App.jsx # Routes and layout
│ ├── index.js
│ └── index.css # Tailwind included here
├── db.json # JSON Server mock API
├── tailwind.config.js
└── README.md
```

---

## ⚙️ Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/pizza-order-app.git
   cd pizza-order-app

2. **Install dependencies:**
    ```bash
    npm install

3. **Start JSON server:**
    ```bash
    npx json-server --watch db.json --port 5000

4. **Start the React app:**
    ```bash
    npm run dev   # or npm start

🌐  Available Pages
    / → Home Page

    /products → Browse Pizza Items

    /cart → View Cart

    /order → Place Final Order

📦 Tech Stack
    Frontend: React.js, Tailwind CSS

    Routing: React Router DOM

    State Management: React Context API

    Backend: JSON Server (mock REST API)

    Persistence: localStorage

📝 Todo / Enhancements
    ✅ Size/Quantity selection

    ✅ Order form reset on submit

    ✅ Cart total live update

    🚧 Coupon code feature

    🚧 Real payment gateway (Stripe/Razorpay)

    🚧 Firebase / MongoDB backend integration

👨‍💻 Author
Made with ❤️ by Bhuvan


