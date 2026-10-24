# M3R2 Services website

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide icons.

## Run it locally
1. Install Node.js 20 or newer from nodejs.org.
2. In this folder run `npm install`, then `npm run dev` and open the address shown.
3. Test a production build with `npm run build` (checks types, outputs to `dist/`), then `npm run preview`.

## Edit it
- Text and data (services, work concepts, process): arrays at the top of `src/App.tsx`.
- Colours and fonts: `@theme` block in `src/index.css`.
- Title, description, social tags: `index.html`. Logo: `public/favicon.svg`.
- Replace the `[Add your ...]` contact placeholders and the draft legal text in `src/App.tsx`.

## Connect the contact form
The form validates in the browser but sends nothing until you add an endpoint. Without one it says honestly that nothing was sent.
1. Create a form endpoint with a form service (for example Formspree) that emails you.
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=<your endpoint URL>`.
3. On Vercel, add the same variable (Settings, Environment Variables) and redeploy.
The endpoint URL is public. Never put secret keys in `VITE_` variables.

## Deploy to Vercel
1. Create an account at github.com, click New repository, and create an empty one.
2. Upload this folder's files (not `node_modules` or `dist`) with "uploading an existing file", or use `git init`, `git add .`, `git commit`, `git remote add origin <url>`, `git push`.
3. At vercel.com choose Add New, Project, and import the repository.
4. Settings: Framework Preset **Vite**, Build Command `npm run build`, Output Directory `dist`.
5. Add environment variables if needed, then click Deploy.
6. Test the live URL on phone and desktop, check the browser console, and submit a test enquiry.
7. Build errors: read the Vercel log; a TypeScript error names the file and line. Run `npm run build` locally to reproduce. "Cannot find module" usually means `package.json` was not committed. Changed env vars need a redeploy.
8. Future changes: edit, commit, push to GitHub, and Vercel redeploys automatically.

## Payments (not implemented)
No payment code is included, by design. Before accepting payments in India (for example with Razorpay):
- Complete merchant onboarding and KYC and get live credentials.
- Keep the secret key only in server-side environment variables (never in React code or `VITE_` variables).
- Create orders on a server (a Vercel serverless function in an `api/` folder), use hosted Checkout or Payment Links so card details never touch this site, and verify the payment signature and webhooks on the server before delivering anything.
- Test fully in the gateway's test mode first.
