# OUBA Engineers and Consultants LLC — Website

## File Structure

```
ouba-website/
├── index.html              ← Homepage
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── team.html
│   └── contact.html
├── css/
│   ├── style.css           ← Global styles
│   └── pages.css           ← Inner page styles
├── js/
│   └── main.js
└── README.md
```

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, services overview, team preview, CTA |
| About | `pages/about.html` | Mission, certifications, NAICS codes |
| Services | `pages/services.html` | All 6 service areas with detail |
| Team | `pages/team.html` | Full profiles for all 4 team members |
| Contact | `pages/contact.html` | Contact form + info |

---

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g., `ouba-website`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Set Source to **"Deploy from a branch"**, branch: `main`, folder: `/ (root)`
5. Your site will be live at `https://yourusername.github.io/ouba-website/`

---

## Connecting to Squarespace (Custom Domain)

Since you have a domain on Squarespace:

### Option A — Point your Squarespace domain to GitHub Pages
1. In Squarespace → Domains → click your domain → DNS Settings
2. Add a CNAME record:
   - Host: `www`
   - Value: `yourusername.github.io`
3. Add 4 A records pointing to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. In your GitHub repo → Settings → Pages → Custom domain → enter your domain
5. Check "Enforce HTTPS"

### Option B — Use Squarespace to host, inject custom code
- Export these HTML files
- In Squarespace, use Code Injection to add custom pages (available on Business plan+)

---

## Contact Form Setup

The contact form currently points to Formspree (free tier).
To activate:
1. Go to https://formspree.io
2. Create a free account
3. Create a new form → copy your Form ID
4. In `pages/contact.html`, replace `YOUR_FORM_ID` in the action URL:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

Alternatively, replace with your Google Workspace email form handler or any backend service.

---

## Customization Notes

- **Email**: Replace all instances of `info@oubaec.com` with your actual Google Workspace email
- **Domain**: Replace references to `oubaec.com` with your actual domain
- **Team photos**: Replace the avatar initials (OZ, MU, AH, AB) with actual photos by adding `<img>` tags inside `.team-avatar` divs
- **Colors**: All colors are in CSS variables at the top of `css/style.css`
- **Fonts**: Using Google Fonts (Cormorant Garamond + DM Sans) — loaded via CDN

---

## Colors & Branding

| Variable | Value | Use |
|----------|-------|-----|
| `--navy` | `#0D1B2A` | Primary dark background |
| `--gold` | `#C49A3C` | Accent / brand color |
| `--off-white` | `#F8F6F2` | Section backgrounds |
| `--white` | `#FFFFFF` | Cards, forms |

---

© 2025 OUBA Engineers and Consultants LLC
