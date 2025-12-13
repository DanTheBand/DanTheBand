# Pre-Launch Checklist: Artist Development Website

This checklist is designed to ensure your premium artist development website maintains its high-trust, selective aesthetic and functions perfectly upon launch.

## 1. Content & Messaging ("The Voice")

- [ ] **Tone Audit:** Read all copy aloud. Does it sound calm, confident, and exclusive? Remove any "salesy" or urgent language (e.g., "Act now," "Best in class").
- [ ] **Placeholder Removal:** Verify that _every_ piece of neutral placeholder text has been replaced with final, approved copy.
- [ ] **Proofreading:** Check for typos, grammatical errors, and inconsistent capitalization.
- [ ] **Contact Details:** Ensure the email address in the form logic and any footer contact info is correct and active.
- [ ] **Formatting:** Check line breaks in headlines to ensure they don't break awkwardly on different screen sizes.

## 2. Visual Design & UX ("The Look")

- [ ] **Mobile Review:** Open the site on a real phone. Does the generous whitespace still feel intentional, or does it require too much scrolling?
- [ ] **Contrast Check:** Ensure text is legible against the dark backgrounds, especially for accessibility.
- [ ] **Image Quality:** Are the background textures and brand marks crisp on high-resolution (Retina) screens?
- [ ] **Visual Hierarchy:** Squint at the screen. Do the primary actions (Strategy Call) stand out more than secondary elements?
- [ ] **Browser Testing:** Check the site in Chrome, Safari (Desktop & Mobile), Firefox, and Edge. Dark modes can render differently across browsers.

## 3. Functionality ("The Works")

- [ ] **Form Submission:** Submit the "Consultation Request" form with valid data. Do you receive the email?
- [ ] **Form Errors:** Try submitting with empty fields or invalid emails. Do the error messages appear clearly?
- [ ] **Success State:** Does the form correctly transition to the "Submission Received" message after sending?
- [ ] **Legal Links:** Click the "Privacy Policy" and "Terms of Service" links in the footer. Do they open the correct pages?
- [ ] **Navigation:** If there are anchor links (e.g., "Consultation Request" button in Hero), do they scroll smoothly to the target section?

## 4. Legal & Trust ("The Safety")

- [ ] **Policy Customization:** Have you replaced the boilerplate "[Date]" and contact details in the Privacy Policy and Terms of Service?
- [ ] **Compliance:** Have a legal professional review the documents to ensure they meet regulations for your specific jurisdiction (GDPR, CCPA, etc.).
- [ ] **Cookie Consent:** If you add analytics later, ensure you implement a cookie consent banner.

## 5. Technical & SEO ("The Engine")

- [ ] **Meta Tags:** Update the `<title>` and `<meta name="description">` in `index.html` to reflect your actual brand name and summary.
- [ ] **Favicon:** Replace the default Vite/React favicon with your brand mark.
- [ ] **Performance:** Run a Lighthouse audit in Chrome DevTools. Aim for high scores in Performance and Accessibility.
- [ ] **404 Page:** Test a broken link (e.g., `/random-page`). Does the 404 page look consistent with the rest of the site?

## 6. Post-Launch

- [ ] **Analytics:** Set up a privacy-focused analytics tool (like Plausible or Fathom) to track visitors without compromising the "private" feel.
- [ ] **Backup:** Keep a local copy of your final source code (the `.zip` file provided).
