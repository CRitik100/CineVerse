# 🎬 CineVerse

**A Netflix-inspired movie discovery app powered by AI.**

Tell it what you're in the mood for — CineVerse uses Gemini / OpenAI to recommend movies, then shows you trailers, posters, and everything you need to pick your next watch.

---

## What it does

**🤖 AI Movie Search** — Type something like _"feel-good movies with a twist ending"_ and Gemini / OpenAI returns personalized movie recommendations with TMDB data.

**🎥 Trailer Playback** — Every movie has a YouTube trailer. The hero section autoplays one as a cinematic background; click any movie to watch its trailer fullscreen.

**🔐 Auth (Sign up / Sign in)** — Firebase Authentication with email & password. Includes form validation, error messages, and profile display name.

**📚 Movie Categories** — Browse movies across 4 live categories: Now Playing, Popular, Top Rated, and Upcoming — all fetched from the TMDB API.

**❤️ Favourites** — Add or remove movies from your favourites list with a single click. _(In-memory via Redux — resets on refresh.)_

**🌐 Multi-language UI** — Switch the interface between English, Hindi, and Marathi from settings.

**📱 Responsive** — Fully responsive layout that works on mobile and desktop.

---

## Tech Stack

| What       | How                       |
| ---------- | ------------------------- |
| UI         | React 19 + Tailwind CSS 4 |
| State      | Redux Toolkit             |
| Routing    | React Router v6           |
| AI         | Google Gemini / OpenAI    |
| Movie Data | TMDB API                  |
| Auth       | Firebase Authentication   |
| Hosting    | Firebase Hosting          |
| Bundler    | Vite 8                    |

---

## Getting Started

### You'll need

- Node.js 18+
- A [TMDB API key](https://www.themoviedb.org/settings/api)
- A [Firebase project](https://console.firebase.google.com/) (for auth)
- A [Gemini API key](https://ai.google.dev/) or [OpenAI API key](https://platform.openai.com/) (for AI search)

### Run locally

```bash
git clone https://github.com/CRitik100/CineVerse.git
cd CineVerse
npm install
npm run dev
```

Set up your environment variables (TMDB key, Firebase config, Gemini key) in the appropriate config files under `src/utils/`.

---

## Project Structure

```
src/
├── component/
│   ├── browse/        → Movie browsing (hero trailer, category lists, cards)
│   ├── logIn/         → Sign up & sign in forms
│   ├── aiSearch/      → AI-powered natural language search
│   ├── Favourite/     → Saved movies page
│   └── account/       → Account settings & language switcher
├── hooks/             → Custom hooks for TMDB data fetching
├── icons/             → Reusable SVG icon components
└── utils/             → Firebase config, Redux store, constants, AI setup
```

---

## Routes

| Path                       | What you see         |
| -------------------------- | -------------------- |
| `/`                        | Landing page         |
| `/login`                   | Login / Sign-up form |
| `/browse`                  | Main movie browser   |
| `/browse/movieTrailer/:id` | Fullscreen trailer   |
| `/browse/favourite`        | Your saved movies    |
| `/browse/account`          | Account & settings   |

---

## Scripts

```bash
npm run dev       # Local dev server
npm run build     # Production build
npm run preview   # Preview the build locally
```

---

## Deployment

Hosted on Firebase:

```bash
firebase login
firebase init
firebase deploy
```

---

## What's next

- [ ] Persist favourites (Firebase / localStorage)
- [ ] Flesh out account pages (membership, security details)
- [ ] Add movie detail pages with cast & reviews
- [ ] Dark/light theme toggle

---

## Author

**Ritik Chaurasiya** — [@CRitik100](https://github.com/CRitik100)

---

> _Built with ❤️ and way too much popcorn 🍿_
