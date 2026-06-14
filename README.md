# Sportnest

## Purpose
Sportnest is a full-stack web application designed for browsing, managing, and booking sports facilities. Users can explore available venues, securely book facilities, and manage the specific facilities they have listed on the platform. The application uses a decoupled architecture with a Next.js frontend and an Express/MongoDB backend, secured via JWKS token verification.

## Live URL
**Frontend (Vercel):** [https://sportnest-himel.vercel.app](https://sportnest-himel.vercel.app)

## Features
* **Facility Discovery:** Browse a comprehensive list of available sports facilities.
* **Secure Booking System:** Authenticated users can book facilities and view their booking history.
* **Facility Management:** Users can add new facilities to the platform, as well as update or delete the ones they manage.
* **Robust Authentication:** Implemented using `better-auth` with a remote JWKS (JSON Web Key Set) endpoint to securely verify JWTs on the backend.
* **Modern UI:** Built with Next.js 16, React 19, and styled seamlessly using Tailwind CSS, HeroUI, and Framer Motion for smooth animations.

## NPM Packages Used

### Frontend (Next.js)
* **Core Framework:** `next` (v16), `react` (v19), `react-dom`
* **Authentication:** `better-auth`, `@better-auth/mongo-adapter`
* **UI & Styling:** * `tailwindcss` (v4)
  * `@heroui/react`, `@heroui/styles`
  * `daisyui`
  * `styled-components`
* **Animations & Icons:** `framer-motion`, `lucide-react`, `react-icons`
* **Utilities:** `react-hot-toast` (for notifications)

### Backend (Express)
* **Server Framework:** `express`
* **Database:** `mongodb` (Native Node.js Driver)
* **Security & Auth:** `jose-cjs` (for JWT verification), `cors`
* **Environment:** `dotenv`