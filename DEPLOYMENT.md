# Deployment Guide - Mohit Bhalothia Portfolio

This guide outlines how to deploy your 3D DevOps Portfolio from GitHub to Vercel and connect your Hostinger domain (`mohitdevops.shop`).

---

## 📌 Step 1: Code Pushed to GitHub
- Repository URL: `https://github.com/Mohit-bhalothia/Portfolio`
- Branch: `main`

---

## ⚡ Step 2: Deploy on Vercel

### Method 1: Import via Vercel Web Dashboard (Recommended)
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Log in with your Vercel username: **mohit-bhalothia**
3. Select your GitHub repository **`Mohit-bhalothia/Portfolio`** and click **Import**.
4. Keep framework preset as **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**. Vercel will build and deploy your site in ~30 seconds!

---

## 🌐 Step 3: Connect Hostinger Custom Domain (`mohitdevops.shop`)

### 1. Add Domain in Vercel
1. Go to your project on Vercel -> **Settings** -> **Domains**.
2. Type **`mohitdevops.shop`** and click **Add**.
3. Also add **`www.mohitdevops.shop`** when prompted.

### 2. Configure DNS Records in Hostinger
1. Log in to your [Hostinger Control Panel](https://hpanel.hostinger.com).
2. Go to **Domains** -> Select **`mohitdevops.shop`** -> **DNS / Nameservers**.
3. Add/Update the following 2 DNS Records:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | **`76.76.21.21`** | Auto (or 3600) |
| **CNAME** | `www` | **`cname.vercel-dns.com`** | Auto (or 3600) |

4. Save DNS changes. Vercel will automatically issue a **free SSL Certificate (HTTPS)** once DNS propagates (usually within 2 to 15 minutes).

---

## 🎉 Result
Your 3D DevOps Portfolio will be live at:
**`https://mohitdevops.shop`**
