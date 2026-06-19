# UPINLBS 2026 Website

Official website for the 10th International Conference on Ubiquitous Positioning, Indoor Navigation and Location-Based Services (UPINLBS 2026).

Production site: https://upinlbs2026.com

## Current Progress

- Built with Vue 3, Vite, Vue Router, and Ant Design Vue.
- Redesigned the site with a more professional academic conference style.
- Updated the header logo to the transparent blue `UPINLBS 2026` logo asset.
- Added the UPINLBS 2025 past-conference link: https://upinlbs2025.ubinp.com/
- Standardized the homepage, banner, navigation, footer, organizer block, registration page, submission page, sponsorship page, venue placeholder, and programme placeholders.
- Fixed visible mojibake, copyright text, and the invalid September 31 date.
- Deployed the latest built version to the AWS server at `/var/www/html/upinlbs/dist/`.
- The separate `/var/www/html/polyU_hefei` site on the same server must not be modified.
- Content updates are still in progress for General Information, committees, publication wording, and submission details.

## Repository

GitHub remote:

```sh
https://github.com/alva1018/upinlbs.git
```

Main branch:

```sh
main
```

## Development

Install dependencies:

```sh
npm install
```

Run the local development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment Notes

The AWS nginx site root for UPINLBS is:

```sh
/var/www/html/upinlbs/dist/
```

Deployment flow:

```sh
npm run build
```

Then upload the contents of local `dist/` to:

```sh
ubuntu@ec2-18-162-223-134.ap-east-1.compute.amazonaws.com:/var/www/html/upinlbs/dist/
```

Do not modify:

```sh
/var/www/html/polyU_hefei/
```

## Version Notes

Latest pushed website commit before this README update:

```sh
fb09c16 Replace header logo asset
```

The production build deployed on AWS includes the transparent logo asset and the latest visual redesign.
