[![Netlify Status](https://api.netlify.com/api/v1/badges/ba16e192-ec1f-4eb7-a751-634ec2312acc/deploy-status)](https://app.netlify.com/sites/yoga-by-delphine/deploys)
![Node Version](https://img.shields.io/badge/node-22.x-green)
![React Version](https://img.shields.io/badge/react-19-blue)
![React Router](https://img.shields.io/badge/react--router-v7-orange)
![TypeScript](https://img.shields.io/badge/typescript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/tailwind-v4-38B2AC)

<h1 align="center">🧘 Yoga by Delphine</h1>

<p align="center">
  <strong>Book online and in-studio yoga courses</strong><br>
  <em>Available in French 🇫🇷</em>
</p>

<p align="center">
  <a href="http://www.yogabydelphine.com/">🌐 Visit Website</a> •
  <a href="https://www.figma.com/file/wioiqeZX8Z0hOK0UsHxMAG/YogaByDelphine?node-id=4%3A10">🎨 View Design</a>
</p>

---

<p align="center">
  <img src="./screenshot.png" alt="Yoga by Delphine Website" width="800">
</p>

## ✨ Features

- 🧘 **Online & In-Studio Classes** - Book yoga sessions your way
- 🎁 **Gift Cards** - Purchase and redeem yoga gift cards
- 📅 **Course Schedule** - View upcoming classes and availability
- 📧 **Contact Form** - Get in touch directly through the site
- 🛒 **Shopify Integration** - Secure e-commerce powered by Shopify
- ⚡ **Fast Performance** - Optimized images and edge caching
- 📱 **Responsive Design** - Works beautifully on all devices

## 🚀 Tech Stack

| Technology                                    | Purpose                                   |
| --------------------------------------------- | ----------------------------------------- |
| [React Router v7](https://reactrouter.com/)   | Full stack web framework (formerly Remix) |
| [React 19](https://react.dev/)                | UI library                                |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript                      |
| [Shopify](https://www.shopify.com/)           | E-commerce backend                        |
| [Netlify](https://www.netlify.com/)           | CI/CD, hosting & edge functions           |
| [Cloudinary](https://cloudinary.com/)         | Image management and optimization         |
| [Tailwind CSS v4](https://tailwindcss.com/)   | Utility-first CSS framework               |

## 📁 Project Structure

```
app/
├── components/     # Reusable UI components
├── routes/         # React Router route definitions
├── models/         # Data fetching (Shopify API)
├── utils/          # Helper functions
├── generated/      # Auto-generated files
└── root.tsx        # App entry point
```

## ⚙️ Prerequisites

Before you begin, ensure you have:

- ✅ Node.js 22.x
- ✅ pnpm 10.x (package manager)
- ✅ Shopify partner account

## 🛠️ Available Scripts

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `pnpm run dev`       | Start development server                     |
| `pnpm run build`     | Production build (includes lint & typecheck) |
| `pnpm run lint`      | Run ESLint                                   |
| `pnpm run typecheck` | TypeScript type checking                     |

## 🔐 Environment Variables

Copy `.env.TEMPLATE` to `.env` and configure:

| Variable                        | Description                         |
| ------------------------------- | ----------------------------------- |
| `SHOP_NAME`                     | Shopify store name (e.g., my-store) |
| `SHOPIFY_STOREFRONT_API_TOKEN`  | Storefront API access token         |
| `SHOPIFY_ADMIN_API_PASSWORD`    | Admin API password                  |
| `SHOPIFY_DELEGATE_ACCESS_TOKEN` | Storefront delegate access token    |

## 💻 Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/nicolaserny/yoga-by-delphine.git
   ```

2. **Install dependencies**

   ```bash
   cd yoga-by-delphine && pnpm install
   ```

3. **Configure environment variables**

   Create an `.env` file from the template:

   ```bash
   cp .env.TEMPLATE .env
   ```

4. **Run the development server**

   ```bash
   pnpm run dev
   ```

   The site will be available at `http://localhost:5173`

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/nicolaserny">Nicolas Erny</a></sub>
</p>
