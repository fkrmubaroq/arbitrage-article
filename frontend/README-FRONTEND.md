# Frontend (Next.js)

Frontend Next.js application untuk Arbitrage Ads.

## 🚀 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   Create `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

   Frontend akan berjalan di `http://localhost:3000`

## 📦 Features

- Next.js 14 (App Router)
- TanStack Query untuk data fetching
- Tailwind CSS v4
- shadcn/ui components
- Dark mode support

## 🔗 API Configuration

Frontend mengonsumsi API dari Express backend. Pastikan backend berjalan di `http://localhost:5000` atau update `NEXT_PUBLIC_API_URL` di `.env.local`.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js pages
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   └── shared/             # Shared components
├── hooks/                  # React hooks (TanStack Query)
├── lib/                    # Utilities
├── types/                  # TypeScript types
└── ...
```

