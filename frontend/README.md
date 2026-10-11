[Hvordan laste opp kvartalsrapport](hvordan_laste_opp_kvartalsrapport.md), husk å committe og pushe

## Deploy

Nettsiden deployes fra `main` til Vercel med Node.js 24, valgt i `package.json`.
Installer avhengigheter med `bun install --frozen-lockfile` og kontroller bygget
med `CI=true bun run build` før push. Etter push må Vercel-deployen være vellykket;
en grønn GitHub Actions-kjøring alene bekrefter ikke at nettsiden er oppdatert.
