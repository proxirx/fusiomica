# Poster Form Setup (GitHub-hosted static site)

The poster landing page is available at:

- `/poster/`

Current implementation uses FormSubmit (`https://formsubmit.co`) so no backend is required.

## Notification email setup

1. Open `/poster/index.html`.
2. Find the form action:
   - `action="https://formsubmit.co/contact@fusiomica.com"`
3. Replace `contact@fusiomica.com` with the mailbox that should receive lead notifications.
4. Submit one test entry from `/poster/` and confirm the FormSubmit verification email for that mailbox.

After verification, each submission will trigger a notification email and redirect the user to:

- `/poster/download.html`

## Poster file

The download page links to:

- `/Fusiomica_Elrig_McAlister.pdf`

If you replace the poster file, keep the same filename or update the link in:

- `/poster/download.html`
