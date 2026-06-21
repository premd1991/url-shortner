# WarpLink 🌌

WarpLink is a premium, lightning-fast URL shortener and link management dashboard. Crafted with modern glassmorphic aesthetics, neon violet/pink color harmonies, and smooth animations, WarpLink allows users to shorten URLs, monitor redirection histories, and analyze performance metrics in style.

![WarpLink Homepage Screenshot](public/images/hero.png)

## Features 🚀

- **Lightning Fast Redirections**: Globally fast redirection using unique short identifiers.
- **Granular Analytics**: Track exact click counts, timestamps, and visit histories.
- **Dynamic Dashboard**: Searchable and filterable dashboard mapping short links to destination URLs.
- **Embedded QR Code Generator**: Instantly generate QR codes for generated short links for mobile convenience.
- **Stateless Authentication**: Robust security powered by JWTs (JSON Web Tokens) stored securely in HttpOnly cookies.
- **Stunning UI/UX**: Designed with dark mode, glowing accents, blur-glass cards, and custom micro-animations.
- **Resilient Error Pages**: Polished 404 handling for invalid or expired short URLs.

---

## Technology Stack 🛠️

- **Backend**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **View Engine**: EJS (Embedded JavaScript)
- **Styling**: Vanilla CSS (custom variables, keyframe animations, glassmorphism)
- **Security**: JWT & bcryptjs

---

## Installation & Setup 💻

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (running locally on port `27017` or configured via `connect.js`)

### 2. Clone & Install Dependencies
Navigate to the project directory and install required npm packages:
```bash
npm install
```

### 3. Running the Server
To start the server in development mode with hot-reloading (via nodemon):
```bash
npm run dev
```

The application will start running at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## Project Structure 📁

```text
├── connect.js           # Database connection configuration
├── index.js             # Main server logic & global middlewares
├── package.json         # Scripts and project dependencies
├── controllers/         # Request handling logic (URLs, Users)
├── models/              # Mongoose database schemas (URL, User)
├── routes/              # Express routers (URL routes, User routes)
├── middlewares/         # Route protection and role authorization middlewares
├── public/              # Static assets (CSS, client JS, images)
│   ├── css/style.css    # Premium CSS styling
│   └── images/hero.png  # Hero assets
├── views/               # EJS templates
│   ├── partials/        # Global layout elements (header, footer)
│   └── 404.ejs          # Stunning custom error page
└── utils/               # Helper modules
```

---

## License 📄
This project is licensed under the ISC License.
