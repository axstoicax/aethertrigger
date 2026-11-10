# AetherTrigger v1.3 — Ghidul final de publicare

## Ce am schimbat

- Homepage-ul este acum construit efectiv în JSX și CSS conform machetei cinematice aprobate; nu am transformat întreg screenshotul în fundal clicabil.
- Logo-ul oficial este **varianta 2** (A metalic și prisma turcoaz-aurie), în header, footer, favicon și Schema.org.
- Fonturi: Sora pentru titluri, Manrope pentru text.
- Am păstrat toate cele șapte pagini și FAQ-urile.
- Am adăugat butonul **Google Preferred Sources** pe homepage și în footerurile tuturor paginilor. Este un link funcțional către fluxul oficial Google (`https://www.google.com/preferences/source?q=aethertrigger.com`). Selecția efectivă depinde de disponibilitatea site-ului în serviciul Google.
- Linkul spre companie apare pe **textul Quant Data Intelligence LLC**, nu ca URL separat.
- Metadatele folosesc culori întunecate și o imagine Open Graph armonizată cu noul design.
- Graphul AetherTrigger rămâne coordonat cu Quant Data Intelligence LLC (Corporation), VerticalFoundry (Brand) și Alexandru Stoica (Person).

## Publicare în Vercel

1. Încarci în GitHub toate fișierele din arhiva principală, la rădăcina repository-ului AetherTrigger.
2. Creezi proiect separat în Vercel și selectezi repository-ul, preset Next.js.
3. La Build Command: `npm run build`; frameworkul va produce static export.
4. Verifici deployment preview: desktop, mobil, meniu, toate linkurile, Google Preferred Sources, favicon, pagini juridice și contact.
5. Configurezi DNS pentru `aethertrigger.com` conform instrucțiunilor afișate de Vercel. Verifici SSL, metadatele publice, sitemap și graphul JSON-LD.

## Limitări clare

- În acest mediu nu am putut instala dependențele Next.js, deci nu declar un build de producție finalizat. Codul a trecut validările de structură și a fost randat în browser pentru examinare vizuală.
- Randările HTML de previzualizare sunt **statice** și nu simulează comportamentul formularului React; în proiectul Next.js formularul deschide aplicația de e-mail.
- Fonturile încărcate din Google Fonts depind de accesul browserului la internet.
- Funcțiile comerciale AetherTrigger sunt în dezvoltare; website-ul nu susține existența unui serviciu live.
- Înainte de GO LIVE, verifică adresele de email, Terms of Service și Privacy Policy.

Pachetul de screenshoturi și HTML de previzualizare se livrează separat — nu trebuie urcat în repository.
