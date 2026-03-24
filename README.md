# deanguida.com — Hugo Static Site

Marketing site for Dean Guida's book *When Grit Is Not Enough*, built with [Hugo](https://gohugo.io/).

## Requirements

- Hugo v0.123.7+

## Local Development

```bash
hugo server -D
```

Access at `http://localhost:1313` (or your WSL2 IP if running in WSL).

## Content

All editorial content lives in `content/_index.md` as YAML front matter. Edit that file to update headings, text, buttons, and section copy.

Data files:

| File | Contents |
|---|---|
| `data/testimonials.yaml` | Praise/carousel quotes |
| `data/media.yaml` | Media coverage cards |
| `data/booksellers.yaml` | Bookseller logos and links |

## Configuration

Site-wide settings are in `config.toml`:

| Parameter | Purpose |
|---|---|
| `services.googleAnalytics.ID` | Google Analytics 4 measurement ID |
| `params.contactFormAction` | Formspree form endpoint |
| `params.mailchimpURL` | Mailchimp embedded form URL |
| `params.amazonURL` | Amazon buy link |
| `params.podcastURL` | Podcast listen link |
| `params.podcastGuestURL` | Podcast guest application link |

See `INTEGRATIONS.md` for setup instructions for GA4, Formspree, and Mailchimp.

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions to AWS S3 + CloudFront.

Required GitHub secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

See `DEPLOYMENT.md` for full AWS infrastructure setup.

## Images

Static images live in `static/images/`. Key files:

| File | Used for |
|---|---|
| `guida-hero.jpg` | Hero background |
| `book-3d-tight.png` | Book section |
| `author-photo.jpg` | Author section |
| `podcast-banner.png` | Podcast section |
| `logo.svg` | Nav logo |
| `gritmask3.png` | Hero text mask effect |
