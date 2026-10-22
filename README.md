# ACME Dashboard

Public, read-only ACME protocol dashboard for https://acmeprotocol.com.

Pages: Overview, Token with public reports, Portfolio with scenario calculator and program information, Manifesto, Documentation. No wallet connection, signing or broadcasting.

## Hosting
GitHub Pages: deploy main branch, root folder. No build step or dependencies. Custom domain: acmeprotocol.com. The repository is served directly; all public assets are located in the repository root.

## Development
Run `python -m http.server 8000` from this folder and open http://localhost:8000. Edit app.js, data.js, style.css or index.html; commit and push main to deploy.

## Data
Public mainnet feeds use https://acme.pics/api. Refresh updates metrics and report snapshots. Unavailable values show a dash. The large FAMILYHOUR animation remains linked to the original public asset repository.

The previous website source remains in SockIts/acme-token-dashboard for rollback.
