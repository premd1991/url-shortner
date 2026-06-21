# WarpLink

## Motivation
Based on the requests that I got to demonstrate a production-grade full-stack URL shortener and link management system built on Node.js, Express, and EJS.

I decided to create WarpLink—a Node.js (Express, EJS, MongoDB, Mongoose) based link publishing web application. The goal is to help full-stack developers learn clean architecture, cookie-based stateless authentication (using JWT), custom routing, premium glassmorphic visual layouts, and strict security protocols.

---

## Introduction
It's a good practice to keep a simple and organized architecture. There are various techniques, design patterns, and folder structures that are used by developers for their projects, and it's perfectly fine to have your own unique architecture.

The end goal of the usage of any design or architectural pattern is usually the same:
* **Adding a new requirement should be easy.** (Modular API routers and controllers make extension seamless).
* **Completing any new task/requirement should not break any existing features.** (Auth guards, verification middlewares, and decoupled controllers keep systems independent).
* **It should enable individual development & deployment of features.** (Separating backend route controllers from views layout templates ensures parallel development).
* **Components/Modules should be testable without dependencies.** (Database models and helper utilities can be isolated for mock validations).

---

## Screenshots
### Web Client Interface (Glassmorphic Theme)

| Dashboard View | Create Link View |
| :---: | :---: |
| ![WarpLink Dashboard](public/images/hero.png) | ![WarpLink Create Link](public/images/hero.png) |

---

## Languages / Frameworks Used
* **Node.js & Express 5** (API Backend Server)
* **EJS (Embedded JavaScript)** (Template Render Engine)
* **Mongoose & MongoDB** (Database Schema & Queries)
* **JWT (JSON Web Tokens)** (HttpOnly Secure Session Cookies)
* **Bcrypt.js** (Secure Password Hashing)
* **Vanilla CSS** (Futuristic Glassmorphic Theme & Keyframe Animations)

---

## How to run the project ?
1. **Clone the project:**
   ```bash
   git clone https://github.com/premd1991/url-shortner.git
   cd url-shortner
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Database:**
   Ensure MongoDB is running locally on port `27017` (configured in `connect.js`).
4. **Start the Server:**
   ```bash
   npm run dev
   ```
   The application will start running at:
   👉 **[http://localhost:3000](http://localhost:3000)**

---

## Having trouble ?
If you are having trouble with this project or if you find any bugs, do open a new issue and describe the problem.
Alternatively, you can drop me a mail @ praveen.dangwal1991@gmail.com.

---

## Spread the word!
Liked the project? Just give it a star ⭐️ and spread the word!

## Credits
© Praveen Dangwal | 2026
