# Setup Guide - Frontend & Backend Separation

Proyek ini menggunakan arsitektur terpisah:
- **Frontend**: Next.js (port 3000)
- **Backend**: Express (port 5000)

## 🚀 Quick Start

### 1. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env dengan konfigurasi MySQL Anda
npm run dev
```

Backend akan berjalan di `http://localhost:5000`

### 2. Setup Frontend

```bash
# Di root directory
npm install
# Buat .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
npm run dev
```

Frontend akan berjalan di `http://localhost:3000`

## 📁 Project Structure

```
.
├── backend/                 # Express API Server
│   ├── src/
│   │   ├── app.ts          # Express app
│   │   ├── server.ts       # Server entry
│   │   ├── controllers/    # Request handlers
│   │   ├── routes/         # API routes
│   │   ├── models/         # Database models
│   │   └── lib/            # Utilities
│   └── package.json
│
└── src/                    # Next.js Frontend
    ├── app/                # Pages
    ├── components/         # React components
    ├── hooks/              # TanStack Query hooks
    └── lib/                # Utilities & API config
```

## 🔧 Environment Variables

### Backend (.env)
```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=arbitrage_ads
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📡 API Endpoints

### Backend API (Express)
- `GET /api/articles?limit=10` - Get articles
- `POST /api/articles` - Create article
- `POST /api/log` - Log pageview
- `POST /api/log/event` - Log event
- `GET /health` - Health check

## 🛠️ Development

### Run Both Servers

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

## 📝 Notes

- Backend menggunakan Express dengan TypeScript
- Frontend menggunakan Next.js dengan TanStack Query
- Database MySQL digunakan oleh backend
- CORS sudah dikonfigurasi untuk allow frontend origin

