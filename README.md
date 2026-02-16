# 🌸 PetalLink

A private, link-based digital bouquet creator. Digitally illustrated bouquets with hidden personalized notes that can be shared via private links.

Here is my link if you'd like to create your own bouquet using PetalLink: https://petallink-jrkz0fgrw-krishkneekas-projects.vercel.app/


## ✨ Features

- **Drag-and-drop bouquet builder** — 13 hand-drawn SVG flowers
- **5 pastel backgrounds** — Blush Pink, Lavender, Soft Sky, Cream, Sage
- **Hidden letter reveal** — Recipients tap an envelope to read your note
- **Private shareable links** — No accounts, no browsing, just send
- **Mobile-first** — 9:16 vertical canvas, works beautifully on phones

---

## 🚀 Setup (5 minutes)

### 1. Install dependencies

```bash
cd petallink
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free project
2. Once your project is ready, go to **SQL Editor** → **New Query**
3. Paste the contents of `supabase/migration.sql` and click **Run**
4. Go to **Settings** → **API** and copy your:
   - **Project URL** (e.g., `https://abc123.supabase.co`)
   - **anon public key**

### 3. Configure environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase values:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🌷

---

## 🌐 Deploy to Vercel

### Option A: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

When prompted, add your environment variables.

### Option B: Via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select your repo
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**

---

## 📁 Project Structure

```
petallink/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout + metadata
│   │   ├── globals.css         # Tailwind + custom styles
│   │   ├── page.js             # Landing page (/)
│   │   ├── create/
│   │   │   └── page.js         # Builder page (/create)
│   │   ├── b/
│   │   │   └── [id]/
│   │   │       ├── page.js     # Recipient page (server)
│   │   │       └── BouquetView.jsx  # Recipient view (client)
│   │   └── api/
│   │       └── bouquets/
│   │           ├── route.js    # POST /api/bouquets
│   │           └── [id]/
│   │               └── route.js # GET /api/bouquets/:id
│   ├── components/
│   │   ├── BouquetCanvas.jsx   # Shared canvas component
│   │   ├── DraggableFlower.jsx # Drag-and-drop flower
│   │   ├── EnvelopeIcon.jsx    # Clickable envelope
│   │   ├── LetterModal.jsx     # Paper-style letter popup
│   │   ├── Ribbon.jsx          # Decorative bow ribbon
│   │   └── flowers/
│   │       ├── index.js        # Flower component registry
│   │       ├── FlowerRose.jsx
│   │       ├── FlowerDaisy.jsx
│   │       ├── FlowerPinkDaisy.jsx
│   │       ├── FlowerSunflower.jsx
│   │       ├── FlowerTulip.jsx
│   │       ├── FlowerLavender.jsx
│   │       ├── FlowerPeony.jsx
│   │       ├── FlowerBabyBreath.jsx
│   │       ├── FlowerButtercup.jsx
│   │       ├── FlowerBluebell.jsx
│   │       ├── FlowerHeartTulip.jsx
│   │       ├── FlowerCherryBlossom.jsx
│   │       └── FlowerCherryBlossom2.jsx
│   └── lib/
│       ├── supabase.js         # Supabase client
│       ├── slug.js             # Slug generator
│       └── constants.js        # Backgrounds + flower metadata
├── supabase/
│   └── migration.sql           # Database setup script
├── .env.local.example          # Env template
├── vercel.json                 # Vercel config
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json
```

---

## 🎨 Flower Types

| ID | Name |
|---|---|
| rose | Pink Rose |
| daisy | White Daisy |
| pink_daisy | Pink Daisy |
| sunflower | Sunflower |
| tulip | Red Tulip |
| lavender | Lavender |
| peony | Peony |
| baby_breath | Baby's Breath |
| buttercup | Buttercup |
| bluebell | Bluebell |
| heart_tulip | Heart Tulip |
| cherry_blossom | Cherry Blossom |
| cherry_blossom_2 | Cherry Blossom 2 |

---

Made with 🌷 PetalLink
