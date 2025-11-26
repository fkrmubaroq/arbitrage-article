# Backend API (Express)

Backend Express server untuk Arbitrage Ads application.

## 🚀 Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` dan isi dengan konfigurasi MySQL Anda:
   ```env
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=your_password
   MYSQL_DATABASE=arbitrage_ads
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   NODE_ENV=development
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

   Server akan berjalan di `http://localhost:5000`

## 📡 API Endpoints

### Articles
- `GET /api/articles?limit=10` - Get articles
- `POST /api/articles` - Create article

### Logging
- `POST /api/log` - Log pageview
- `POST /api/log/event` - Log event

### Health Check
- `GET /health` - Check server status

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── app.ts              # Express app configuration
│   ├── server.ts           # Server entry point
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   ├── models/             # Database models
│   ├── types/              # TypeScript types
│   └── lib/                # Utilities (db connection)
├── package.json
└── tsconfig.json
```

## 🔧 Development

- `npm run dev` - Run with hot reload (tsx watch)
- `npm run build` - Build for production
- `npm start` - Run production build

