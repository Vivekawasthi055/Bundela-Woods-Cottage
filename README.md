# Bundela Woods Cottage & Restaurant Website

A premium boutique hotel website built with React + Vite, featuring a luxury wooden cottage stay experience in Khajuraho.

## Features

- **Premium Design**: Luxury wooden cottage aesthetic with nature-inspired theme
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Scroll-based reveals, parallax effects, and smooth transitions
- **Complete Pages**:
  - Home (with hero, about, rooms, amenities, attractions, gallery preview, map)
  - About (story, vision, services, amenities)
  - Rooms (listing with details)
  - Room Detail (image slider, features, booking)
  - Gallery (filterable with lightbox, video support)
  - Reviews (ratings, guest reviews, trust indicators)
  - Contact (form, info, map, quick actions)

## Tech Stack

- React 18
- React Router 6
- Vite
- Pure CSS (no frameworks)
- Google Fonts (Cormorant Garamond + Poppins)

## Installation

1. **Extract the files** to your desired location

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```

## Project Structure

```
bundela-woods/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Rooms.jsx
│   │   ├── Rooms.css
│   │   ├── RoomDetail.jsx
│   │   ├── RoomDetail.css
│   │   ├── Gallery.jsx
│   │   ├── Gallery.css
│   │   ├── Reviews.jsx
│   │   ├── Reviews.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Booking URL
Replace the booking URL in all files:
```javascript
const bookingUrl = "https://www.booking.com/hotel/in/bundela-woods-cottage-amp-restaurant.html"
```

### Update Contact Information
Edit contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Update Images
Replace Unsplash placeholder images with your actual hotel photos in:
- All page components (Home, About, Rooms, etc.)
- Update image URLs with your CDN or local images

### Update Map Location
Replace the Google Maps embed URL in:
- `src/pages/Home.jsx` (map section)
- `src/pages/Contact.jsx` (map section)

### Colors & Theme
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-green: #2d4a2b;
  --secondary-brown: #8b6f47;
  --accent-gold: #c9a961;
  --bg-light: #faf8f3;
  /* ... */
}
```

## SEO Optimization

The website includes:
- Meta descriptions and keywords in `index.html`
- Semantic HTML structure
- Proper heading hierarchy (H1-H3)
- Alt text for images
- Clean URL structure with React Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading ready
- Optimized animations
- Minimal dependencies
- Fast page transitions

## License

All rights reserved - Bundela Woods Cottage & Restaurant

## Support

For any issues or customization requests, contact the development team.
