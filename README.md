# Oxford Matriculation Higher Secondary School — Website Demo

A premium, fully responsive frontend demo built with **React + Vite + Tailwind CSS + Framer Motion**, designed for presentation to clients/management. This is a frontend-only prototype — no backend, authentication, or database integration.

## ✨ Features

- 7 fully designed pages: Home, About, Academics, Facilities, Gallery, Admissions, Contact
- Sticky glassmorphism navbar with mobile menu
- Animated hero banner with floating stat cards
- Quick stats, "Why Choose Us", featured facilities, testimonials slider, events preview
- Photo gallery with category filters + lightbox
- FAQ accordion, demo contact/admissions forms (UI only)
- Floating WhatsApp button + Back-to-top button
- Royal Blue / White / Gold premium color theme
- Smooth Framer Motion animations throughout
- Fully responsive (mobile, tablet, desktop)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your browser.

To build for production:
```bash
npm run build
npm run preview
```

## 📁 Folder Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PageHero.jsx
│   ├── SectionTitle.jsx
│   ├── FAQAccordion.jsx
│   ├── TestimonialsSlider.jsx
│   ├── BackToTop.jsx
│   └── WhatsAppButton.jsx
├── pages/              # Route-level pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Facilities.jsx
│   ├── Gallery.jsx
│   ├── Admissions.jsx
│   └── Contact.jsx
├── data/
│   └── mockData.js     # All demo/mock content in one place
├── App.jsx              # Routes
├── main.jsx              # Entry point
└── index.css              # Tailwind + custom utility classes
```

## 🎨 Customization

- All text/demo content lives in `src/data/mockData.js` — edit here to rebrand
- Colors are defined in `tailwind.config.js` under `theme.extend.colors` (`royal`, `gold`)
- Images are placeholder Unsplash/Pravatar URLs — swap with real photos for production

## ⚠️ Notes

This is a **static frontend demo**. Forms do not submit anywhere, and there is no real authentication, search, or data persistence. It is intended purely for visual/UX presentation purposes.
