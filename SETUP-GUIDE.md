# Bundela Woods Website - Complete Setup Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Node.js
- Download from: https://nodejs.org/
- Install version 16 or higher
- Verify: `node --version`

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```
Website opens at: http://localhost:5173

---

## ✅ Already Updated (No Action Required)

### Contact Information
- **Phone:** +91 88783 66225
- **Email:** bundelawoodskhajuraho@gmail.com

### All Links Updated
- **Booking.com:** Updated to correct property URL
- **Google Review:** Direct review link configured
- **Google Profile:** Social link added
- **TripAdvisor:** Profile & review links configured
- **Google Maps:** Correct iframe embedded

### SEO Files Created
- ✅ `public/sitemap.xml` - For Google Search Console
- ✅ `public/robots.txt` - For search engine crawlers

---

## ✨ New Premium Features

### 1. **Repeatable Scroll Animations**
- Animations trigger EVERY time you scroll up/down
- No page refresh needed
- Smooth, premium feel throughout

### 2. **Gallery Premium Animations**
- Multiple animation types (fade, slide, zoom)
- Different animations for different items
- Smooth category transitions
- Enhanced lightbox with blur effects

### 3. **Tooltips on Social Icons**
- Hover over any social icon to see tooltip
- "Google Profile", "Facebook Page", etc.
- Smooth fade-in animation
- Works on Footer and Contact page

### 4. **Video Lightbox**
- Click videos to open in full-screen lightbox
- Autoplay enabled
- Professional video player
- Smooth open/close animations

### 5. **Enhanced Button Effects**
- Ripple animation on hover
- Smooth scale and shadow transitions
- Premium cubic-bezier easing
- Consistent across all pages

---

## 📝 What You Need To Do

### 1. Replace Images
**All current images are Unsplash placeholders**

**Option A - Local Images:**
```
1. Put images in public/images/ folder
2. Update URLs: src="/images/your-photo.jpg"
```

**Option B - CDN (Recommended):**
```
1. Upload to Cloudinary/ImageKit
2. Replace Unsplash URLs with CDN URLs
```

### 2. Add YouTube Videos
In `src/pages/Gallery.jsx`, line ~38:
```javascript
const videoItems = [
  {
    id: 'v1',
    url: 'YOUR_VIDEO_ID',  // ← Replace this
    category: 'outdoor',
    type: 'video',
    title: 'Property Tour',
    thumbnail: 'your-thumbnail.jpg'
  }
]
```

**Get Video ID:**
- URL: `youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ`

### 3. Update Domain in SEO Files
After deploying, update these files:

**public/sitemap.xml:**
Replace `bundelawoodscottage.com` with your actual domain

**public/robots.txt:**
Update Sitemap URL with your domain

---

## 🎨 Customization

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-green: #2d4a2b;
  --secondary-brown: #8b6f47;
  --accent-gold: #c9a961;
  --bg-light: #faf8f3;
}
```

### Change Fonts
1. Edit `index.html` Google Fonts link
2. Update `src/index.css` font variables

---

## 📦 Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready for hosting.

---

## 🌐 Deployment

### Netlify (Easiest)
1. Drop `dist/` folder on netlify.com
2. Create `public/_redirects`:
```
/*    /index.html   200
```

### Vercel
1. Import project
2. Auto-deploys

### cPanel/Traditional
1. Upload `dist/` contents to `public_html`
2. Add `.htaccess` for React Router:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔍 Google Search Console Setup

### After Deployment:

1. **Submit Sitemap**
   - Go to Google Search Console
   - Add property: `https://yourdomain.com`
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Verify robots.txt**
   - Check: `https://yourdomain.com/robots.txt`
   - Should be accessible

3. **Request Indexing**
   - Submit homepage for indexing
   - Submit key pages (Rooms, Contact, etc.)

---

## 🎯 Animation Features Explained

### Scroll Animations
- Trigger when element enters viewport
- Remove when element exits viewport
- Re-trigger on scroll back
- Smooth cubic-bezier easing

### Gallery Animations
- Items 1, 4, 7... slide from left
- Items 2, 5, 8... zoom in
- Items 3, 6, 9... slide from right
- All have hover scale effects

### Tooltips
- Appear on hover
- 0.3s fade-in
- Position above icon
- Dark background with blur

---

## 🆘 Common Issues

**npm install fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Images not loading:**
- Check file paths
- Ensure files in correct folder
- Check file extensions

**404 on page refresh:**
- Configure server for SPA routing
- See deployment section above

**Animations not working:**
- Check browser console for errors
- Ensure JavaScript enabled
- Try different browser

---

## ✅ Pre-Launch Checklist

- [x] All booking URLs updated
- [x] Contact info updated  
- [x] Google Maps configured
- [x] Social links with tooltips
- [x] Sitemap.xml created
- [x] Robots.txt created
- [x] Scroll animations working
- [x] Gallery animations added
- [x] Video lightbox functional
- [ ] Replace placeholder images
- [ ] Add real YouTube videos
- [ ] Test all booking links
- [ ] Update domain in sitemap
- [ ] Submit to Google Search Console
- [ ] Test on mobile devices
- [ ] Check all page speeds

---

## 🔧 Advanced

### Add Contact Form Backend

**Option 1 - EmailJS:**
```bash
npm install @emailjs/browser
```
Update Contact.jsx with EmailJS integration

**Option 2 - Your API:**
Create endpoint and update handleSubmit function

**Option 3 - Formspree:**
Free form backend at formspree.io

### Analytics
Add Google Analytics in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## 📞 Support

**File Structure:**
```
bundela-woods/
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

**Key Features:**
- ✅ Repeatable scroll animations
- ✅ Gallery premium animations
- ✅ Social icon tooltips
- ✅ Video lightbox
- ✅ SEO files ready
- ✅ All links updated

---

**Made with React + Vite**
**Bundela Woods Cottage & Restaurant**
**Premium Features | Production Ready | SEO Optimized**
