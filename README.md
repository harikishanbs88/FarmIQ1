# FarmIQ — Crop Procurement Management Platform

**FarmIQ** is a modern, responsive web application designed to help farmers plan procurement visits, find nearby collection centres, reserve arrival slots, and track queue tokens in real time.

---

## Features

- **Centre Discovery**: Search and locate nearby government crop collection centres with real-time operational status, distance, and current queue wait times.
- **Slot Reservation**: Book guaranteed collection windows to reduce waiting time at market yards and collection centres.
- **Live Queue Tracking**: Real-time token number display, queue progress indicators, and estimated wait times.
- **Farmer Dashboard**: Overview of scheduled visits, recent collection history, and market notifications.
- **Mobile-Responsive**: Tailored UI designed for optimal viewing on smartphones and desktop browsers.

---

## Tech Stack

- **Frontend**: React 19, JavaScript (ESNext)
- **Tooling & Build**: Vite
- **Styling**: Vanilla CSS (Custom Design System, Typography & Responsive Layouts)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [npm](https://www.npmjs.com/)

### Installation & Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/harikishanbs88/FarmIQ1.git
   cd FarmIQ1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
├── docs/                # Project presentation, documentation, and report files
├── public/              # Static assets (favicon, robots.txt)
├── src/
│   ├── App.jsx          # Main application component & routes
│   ├── index.css        # Core styling and design system
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

---

## Author & Contributor

- **Harikishan B S** — [harikishanbs88](https://github.com/harikishanbs88) • [harikishanbs88@gmail.com](mailto:harikishanbs88@gmail.com)
