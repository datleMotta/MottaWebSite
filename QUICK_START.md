# 🚀 Quick Start Guide - Motta Financial Website

## Deploy to Vercel in 5 Minutes

### Prerequisites
✅ GitHub account  
✅ Vercel account (free) - [Sign up here](https://vercel.com/signup)

### Step 1: Prepare Your Repository
Your code is already on GitHub at:
```
https://github.com/datleMotta/MottaWebSite
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Find and select `MottaWebSite` from your repositories
   - Click "Import"

3. **Configure (Use These Exact Settings)**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes ⏱️
   - Your site will be live at `https://your-project.vercel.app`

### Step 3: Add Custom Domain (Optional)

1. In your Vercel project dashboard, click "Settings"
2. Click "Domains" in the sidebar
3. Enter your domain: `mottafinancial.com`
4. Click "Add"
5. Follow the DNS configuration instructions Vercel provides
6. Wait for DNS propagation (can take 24-48 hours)

### Step 4: Update Content

The site is now live with placeholder content. To customize:

1. **Local Development Setup:**
```bash
git clone https://github.com/datleMotta/MottaWebSite.git
cd MottaWebSite
npm install
npm run dev
```

2. **Edit Content:**
   - Update contact info in `components/Footer.js`
   - Update contact info in `components/Contact.js`
   - Customize colors in `app/globals.css`
   - Update metadata in `app/layout.js`

3. **Push Changes:**
```bash
git add .
git commit -m "Update company information"
git push origin main
```

Vercel will automatically rebuild and deploy your changes!

## Important Files to Update

### 1. Contact Information
📧 **Email:** `components/Footer.js` and `components/Contact.js`  
📞 **Phone:** `components/Footer.js` and `components/Contact.js`  
📍 **Address:** `components/Contact.js`

### 2. Branding
🎨 **Colors:** `app/globals.css` (CSS variables at top)  
🖼️ **Logo:** Add to `public/logo.png` and update `components/Header.js`  
🌐 **Favicon:** Replace `public/favicon.ico`

### 3. SEO
📝 **Page Title:** `app/layout.js` (metadata.title)  
📄 **Description:** `app/layout.js` (metadata.description)  
🗺️ **Sitemap:** `public/sitemap.xml`

## Troubleshooting

### "Module not found" error
```bash
npm install
```

### Changes not showing on live site
- Check that you pushed to GitHub: `git push origin main`
- Check Vercel deployment logs in dashboard
- Clear browser cache

### Build failed on Vercel
- Check the "Deployments" tab in Vercel
- View the error logs
- Common fixes:
  - Ensure all files are committed to Git
  - Verify `package.json` has all dependencies
  - Check for syntax errors in your code

## Need Help?

📖 **Documentation:**
- Full README: See `README.md`
- Deployment Checklist: See `DEPLOYMENT_CHECKLIST.md`

💬 **Support:**
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Your website is ready to deploy!** 🎉

Just follow the 3 steps above and you'll be live in minutes.

