# Kilburn Cycles — Static Site

A fast, responsive static website template for Kilburn Cycles.

## Local development

Serve the site locally with any static file server. Examples:

```bash
# Python 3
python3 -m http.server 5173 --directory .

# Node (if you have it)
npx serve -l 5173 .
```

Then open `http://localhost:5173/kilburn-cycles/` (or your chosen port/path).

## Structure

```
kilburn-cycles/
├── index.html      # Main page with sections: hero, bikes, services, about, contact
├── styles.css      # Styles, responsive layout, brand colors, a11y focus
├── script.js       # Mobile nav, simple contact form handler
├── assets/
│   ├── logo.svg
│   └── favicon.svg
└── README.md
```

## Customize

- Update text, pricing, and details in `index.html`.
- Swap brand colors in `styles.css` under `:root`.
- Replace `assets/logo.svg` and `assets/favicon.svg` with your branding.
- Replace the contact form handler in `script.js` with your backend endpoint or a service like Formspree.
- Add a real map embed in the contact section.

## Deploy

This is a static site; deploy to any static host:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Point your domain to the deployed site and set the canonical URL in `index.html` accordingly.

