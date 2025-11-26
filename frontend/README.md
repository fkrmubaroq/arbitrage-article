# Arbitrage Ads Web Application

A full-stack Next.js application for managing and displaying articles with integrated ad slots and comprehensive tracking analytics.

## 🚀 Tech Stack

- **Next.js 14** (App Router + TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** - Modern UI components
- **BiomeJS** - Fast linter and formatter
- **mysql2/promise** - Native MySQL driver (no ORM)
- **next-themes** - Dark mode support

## 📁 Project Structure

All files and folders use **kebab-case** naming convention:

```
/app
  /articles/[slug]     - Dynamic article pages
  /admin/new           - Article creation admin page
  /privacy-policy      - Privacy policy page
  /terms               - Terms of service page
  /api
    /log               - Tracking API endpoint
    /articles          - Article CRUD API

/components
  ad-slot.tsx          - Lazy-loaded ad component
  article-card.tsx     - Article card component
  /ui                 - shadcn/ui components

/lib
  db.ts               - MySQL connection pool
  tracking-utils.ts   - Session and tracking utilities
  utm-utils.ts        - UTM parameter handling
  utils.ts            - Utility functions
```

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MySQL database:**
   - Create a MySQL database
   - Run the SQL schema:
     ```bash
     mysql -u your_user -p your_database < schema.sql
     ```
   - Or manually execute the SQL in `schema.sql`

4. **Configure environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=your_password
   MYSQL_DATABASE=arbitrage_ads
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Configuration

### MySQL Setup

1. **Install MySQL** (if not already installed)
   - Windows: Download from [MySQL Downloads](https://dev.mysql.com/downloads/mysql/)
   - macOS: `brew install mysql`
   - Linux: `sudo apt-get install mysql-server`

2. **Create database and user:**
   ```sql
   CREATE DATABASE arbitrage_ads;
   CREATE USER 'arbitrage_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON arbitrage_ads.* TO 'arbitrage_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. **Run schema:**
   ```bash
   mysql -u arbitrage_user -p arbitrage_ads < schema.sql
   ```

### Database Tables

- **articles**: Stores article content, metadata, and slugs
- **pageviews**: Tracks page views with UTM parameters, device info, and referrers
- **events**: Logs custom events (e.g., ad slot views, clicks)

## 📝 Creating Articles

### Manual Creation

1. Navigate to `/admin/new`
2. Fill in the article form:
   - **Title**: Article headline
   - **Slug**: URL-friendly identifier (auto-generated from title)
   - **Thumbnail URL**: Image URL for the article
   - **Category**: Select from dropdown
   - **Content**: HTML content of the article
3. Click "Save Article"

### AI Generation (via Cursor AI)

1. In the admin page, enter a title
2. Click "AI Generate Content"
3. Use Cursor AI to generate article content based on the title
4. Review and edit the generated content
5. Save the article

## 📦 Ad Integration

### Adding Ad Scripts

Edit `components/ad-slot.tsx` and add your ad scripts in the visible section:

```tsx
{isVisible ? (
  <div>
    {/* Paste your AdSense script here */}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXXXXXXXX"
      data-ad-slot="XXXXXXXXXX"
      data-ad-format="auto"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>
) : (
  // Loading state
)}
```

### Ad Positions

The `AdSlot` component supports four positions:
- **top**: Above the main content
- **in-article**: Within article content
- **bottom**: Below the main content
- **sidebar**: Sidebar placement

## 🎨 Styling & Theming

### Tailwind CSS v4

The project uses Tailwind CSS v4 with custom configuration. Styles are defined in:
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

### Dark Mode

Dark mode is enabled via `next-themes`. Users can toggle between light and dark themes. The theme persists across sessions.

### shadcn/ui Components

All UI components are from shadcn/ui and can be customized in `components/ui/`.

## 📈 Tracking & Analytics

### Automatic Tracking

The application automatically tracks:
- **Page views**: Every page visit is logged
- **Session IDs**: Persistent session tracking via cookies
- **UTM Parameters**: Captured and stored for campaign tracking
- **Device Information**: Mobile vs. desktop detection
- **Referrers**: Source of traffic
- **Article Views**: Specific article page views

### UTM Parameter Handling

UTM parameters are:
1. Parsed from URL query strings
2. Saved to cookies (30-day expiration)
3. Included in all tracking events
4. Stored in the `pageviews` table

### Custom Events

Track custom events via the API:
```typescript
POST /api/log
{
  "session_id": "sess_...",
  "event_name": "button_click",
  "meta": { "button_id": "cta_hero" }
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run BiomeJS linter
- `npm run format` - Format code with BiomeJS

### Code Quality

The project uses **BiomeJS** for:
- Linting
- Formatting
- Import organization

Configuration is in `biome.json`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform:
- Vercel: Add in Project Settings → Environment Variables
- Other platforms: Follow their environment variable configuration

### Database Connection

For production, use a managed MySQL service:
- **PlanetScale**
- **AWS RDS**
- **DigitalOcean Managed Databases**
- **Railway**

Update your `.env` with production database credentials.

## 📄 Legal Pages

- **Privacy Policy**: `/privacy-policy`
- **Terms of Service**: `/terms`

Update these pages with your specific legal information.

## 🐛 Troubleshooting

### Database Connection Issues

1. Verify MySQL is running: `mysql -u root -p`
2. Check environment variables in `.env.local`
3. Ensure database exists: `SHOW DATABASES;`
4. Verify user permissions: `SHOW GRANTS FOR 'your_user'@'localhost';`

### Build Errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npx tsc --noEmit`

### Ad Scripts Not Loading

1. Ensure scripts are added in `components/ad-slot.tsx`
2. Check browser console for errors
3. Verify ad network account is active
4. Test with ad network's test mode

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [mysql2 Documentation](https://github.com/sidorares/node-mysql2)
- [BiomeJS Documentation](https://biomejs.dev)

## 📝 License

This project is private and proprietary.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**

