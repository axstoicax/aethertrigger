# GO LIVE — cele 3 website-uri, revizia Store + agents.md

**Data:** 10 noiembrie 2026

## Ce am modificat

1. **VerticalFoundry**: secțiunea internă numită „Etsy” a fost redenumită **Store**. Noua pagină este `https://getverticalfoundry.com/store/`, cu cele 37 de FAQ generale. Magazinul Etsy oficial rămâne destinația externă de cumpărare: `https://www.etsy.com/shop/VerticalFoundry`.
2. Au fost actualizate navigația homepage-ului, navigația paginilor interioare, footerul, linkurile din Products, metadatele canonice, sitemapul, graphul Schema.org (inclusiv `WebPage`, `FAQPage`, `BreadcrumbList`, `WebSite.hasPart`), fișierele `llms.txt`, `llms-full.txt` și `agents.md`, precum și testele automate.
3. Pentru vechea adresă `/etsy/`, **Vercel** are configurat un redirect permanent către `/store/`. Această adresă veche **nu** apare în sitemap sau în canonicele noi.
4. Fiecare dintre cele **trei website-uri** are acum un fișier public `agents.md`: VerticalFoundry și AetherTrigger aveau deja unul, iar la Quant Data Intelligence era absent. Toate trei au fost uniformizate editorial cu datele oficiale și resursele AI disponibile.
5. Alte materiale aprobate (logo-uri, About, fotografii, Media Kit, social profiles, EIN, contact) nu au fost schimbate.

## Unde se găsesc fișierele publice

- Next.js (VerticalFoundry și AetherTrigger): `public/agents.md`, `public/llms.txt`, `public/llms-full.txt`, `public/robots.txt`, `public/sitemap.xml`, `public/identity-registry.json`.
- Website static (Quant Data Intelligence): aceleași șase fișiere la rădăcina proiectului.

După deployment, vor fi publicate direct la `/agents.md`, `/llms.txt`, `/llms-full.txt`, `/robots.txt`, `/sitemap.xml` și `/identity-registry.json`.

**Limită importantă:** `agents.md` și `llms.txt` sunt documente publice suplimentare, nu un mecanism standardizat care garantează preluarea sau citarea în răspunsurile LLM. Calitatea surselor publice, posibilitatea reală de accesare și identificarea consecventă a entităților rămân esențiale.

## Instalare și verificare Vercel

1. Descarcă ZIP-ul corespunzător fiecărui domeniu și pune conținutul direct în rădăcina repository-ului GitHub separat.
2. La VerticalFoundry și AetherTrigger selectează frameworkul **Next.js** în Vercel și rulează `npm run build` (configurația actuală folosește export static).
3. La Quant Data Intelligence folosește un proiect static cu fișierele la rădăcina repository-ului.
4. Verifică pe deploymentul Preview toate paginile și fișierele de descoperire, imaginile și linkurile.
5. Testează specific `https://getverticalfoundry.com/store/` (200) și `https://getverticalfoundry.com/etsy/` (redirect permanent spre `/store/`).
6. După conectarea domeniilor, verifică indexarea, linkurile, numerele de telefon, emailurile și JSON-LD efectiv servit în HTML.

## Ce este validat local

Structura de fișiere, sitemapurile, linkurile, graphurile generate, cele 37 FAQ, compatibilitatea codului cu validatorii existenți și integritatea logo-urilor originale. **Buildul complet Next.js și răspunsurile HTTP reale ale Vercel nu au putut fi validate local** și rămân obligatorii înainte de a declara GO LIVE final.
