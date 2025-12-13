# Deploying to Cloudflare Pages via GitHub

This guide will help you deploy your Artist Development website to Cloudflare Pages for free.

## Prerequisites

1.  A **GitHub account** (free).
2.  A **Cloudflare account** (free).
3.  **VS Code** installed on your computer.
4.  **Git** installed on your computer.

---

## Step 1: Push Code to GitHub

1.  **Unzip the project** and open the folder in VS Code.
2.  Open the **Source Control** tab (the branch icon on the left sidebar).
3.  Click **Initialize Repository**.
4.  Type a message (e.g., "Initial commit") and click **Commit**.
5.  Click **Publish Branch**.
    - If asked, sign in to GitHub.
    - Select **Publish to GitHub public repository** (or private, your choice).

## Step 2: Connect to Cloudflare Pages

1.  Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  Select your **GitHub account** and the **repository** you just created.
4.  Click **Begin setup**.

## Step 3: Configure Build Settings

Cloudflare usually detects these automatically, but double-check them:

- **Framework Preset:** `Vite` (or `None` if Vite isn't listed)
- **Build command:** `npm run build`
- **Build output directory:** `dist`

## Step 4: Add Environment Variables

This is crucial for the contact form to work.

1.  In the Cloudflare setup screen, scroll to **Environment variables**.
2.  Add the following variable:
    - **Variable name:** `VITE_WEB3FORMS_ACCESS_KEY`
    - **Value:** (Paste your Web3Forms Access Key here)

## Step 5: Deploy

1.  Click **Save and Deploy**.
2.  Wait for the build to complete (usually 1-2 minutes).
3.  Once done, Cloudflare will give you a live URL (e.g., `artist-development-site.pages.dev`).

## Troubleshooting

- **404 on Refresh:** If you refresh `/privacy` and get a 404, ensure the `_redirects` file exists in your `client/public` folder (I have already included this).
- **Form Not Working:** Double-check that you added the `VITE_WEB3FORMS_ACCESS_KEY` in the Cloudflare settings. It must start with `VITE_`.
