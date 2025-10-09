# Vite + React + Tailwind + Firebase

This is a starter web app using Vite, React, Tailwind CSS and Firebase. The README below explains how to set up the project locally, configure Firebase, and deploy it.

## What this project includes
- Vite (Fast dev server + build)
- React (UI library)
- Tailwind CSS (utility-first styling)
- Firebase (Auth, Firestore, Hosting or other services)

> Replace placeholders in this README with your actual project name and values.

## Requirements
- Node.js (16+ recommended)
- npm or yarn or pnpm
- (Optional) Firebase CLI if you plan to use Firebase Hosting

## Quick start

1. Clone the repo

```powershell
git clone <repo-url>
cd vite-react-tailwind
```

2. Install dependencies

```powershell
npm install
# or
# yarn
# pnpm install
```

3. Create environment variables

Create a `.env.local` (or `.env`) file in the project root and add your Firebase config as Vite-prefixed variables (Vite exposes env vars that start with `VITE_`). Example:

```text
# .env.local
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
# Optional: measurement id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Start development server

```powershell
npm run dev
```

Open http://localhost:5173 (or the printed URL) to see the app.

## Firebase setup (short)

1. Go to the Firebase Console and create a new project.
2. In Project settings > General, register a new web app and copy the config keys.
3. Add the values to your `.env.local` using the `VITE_` prefix as shown above.
4. Enable the Firebase services you need (Authentication, Firestore, Storage, etc.).

### Minimal Firebase initialization (example)

Create a file such as `src/firebase.ts` and use the Firebase JS modular SDK pattern:

```ts
// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
```

Adjust exports depending on which Firebase services you use.

## Tailwind CSS notes

If Tailwind isn't already configured, the typical setup includes installing Tailwind and adding it to your PostCSS pipeline. A minimal `tailwind.config.cjs` looks like:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

And in `src/index.css` (or similar):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If you used a Vite template that included Tailwind already, you won't need to do anything here.

## Scripts (common)

Check `package.json` and ensure these scripts exist (Vite defaults):

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Build and deploy

Build the production bundle:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

### Deploy to Firebase Hosting

1. Install Firebase CLI (if not installed):

```powershell
npm install -g firebase-tools
```

2. Log in and initialize hosting (run once per project):

```powershell
firebase login
firebase init hosting
# During init choose the project, set "build" (or your dist folder) as the public directory
# and configure as a single-page app (rewrite all urls to /index.html) if using client routing.
```

3. Deploy

```powershell
firebase deploy
```

### Deploy to Netlify / Vercel

- Netlify: connect the repo, set build command `npm run build` and publish directory `dist`.
- Vercel: import the project, set framework preset to Vite/React (it usually detects automatically).

## Environment-specific tips
- Never commit `.env.local` to git. Add it to `.gitignore`.
- Use different Firebase projects for development and production and switch env files accordingly.

## Troubleshooting
- Dev server not opening: check terminal for the bind address and port
- Firebase auth or Firestore errors: confirm the API keys and that the domain is allowed in Firebase console (Authentication > Sign-in method > Authorized domains)
- Tailwind classes not applying: ensure `content` globs in `tailwind.config.cjs` include your files and that you imported the CSS.

## Useful links
- Vite: https://vitejs.dev/
- React: https://reactjs.org/
- Tailwind CSS: https://tailwindcss.com/
- Firebase: https://firebase.google.com/

## Contributing
- Open an issue or submit a PR. Keep changes small and focused.

## License
Specify your project license here (e.g., MIT).

---

If you want, tell me the project name and any custom scripts or hosting preference and I'll tailor this README further (add badges, CI examples, or exact Firebase rules/Firestore indexes).
