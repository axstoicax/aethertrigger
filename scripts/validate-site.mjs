import fs from 'node:fs';import {schemaFor} from '../app/structured-data.mjs';
const routes=['/','/products/','/about/','/contact/','/terms-of-service/','/privacy-policy/','/privacy/'];
for(const r of routes){const p=r==='/'?'app/page.js':`app${r}page.js`;if(!fs.existsSync(p))throw Error('Route missing '+p);const g=schemaFor(r)['@graph'];const ids=g.map(x=>x['@id']).filter(Boolean);if(new Set(ids).size!==ids.length)throw Error('Duplicate schema IDs '+r);const b=g.find(x=>x['@id']==='https://aethertrigger.com/#brand');if(b?.['@type']!=='Brand')throw Error('Brand missing '+r);const org=g.find(x=>x['@id']==='https://www.quantdataintel.com/#organization');if(org?.['@type']!=='Corporation'||org.taxID!=='61-2355086')throw Error('Corporate graph mismatch '+r);const page=g.find(x=>x['@id']==='https://aethertrigger.com'+r+'#webpage');if(!page)throw Error('Page schema missing '+r);}
const home=fs.readFileSync('app/page.js','utf8'),inner=fs.readFileSync('app/page-parts.js','utf8');for(const x of [home,inner])if(!x.includes('href="https://www.quantdataintel.com/"'))throw Error('Parent company hyperlink missing');
for(const n of ['logos/aethertrigger-emblem-v2.png','logos/aethertrigger-v2-approved-original.png','og-image.png','icon-32.png','sitemap.xml','robots.txt','llms.txt'])if(!fs.existsSync('public/'+n))throw Error('Asset missing '+n);
const htmlFiles=['app/page.js','app/page-parts.js','app/products/page.js','app/about/page.js','app/contact/page.js','app/terms-of-service/page.js','app/privacy-policy/page.js','app/privacy/page.js'];for(const f of htmlFiles){const s=fs.readFileSync(f,'utf8');if(s.includes('getverticalfoundry.com/products')||s.includes('mailto:hello@getverticalfoundry.com'))throw Error('Unreplaced VerticalFoundry link '+f);}
console.log('PASS: 7 routes, 7 graphs, Corporation + Brand identity, parent links and assets');

if(!fs.readFileSync('app/page-parts.js','utf8').includes('BrandMark')) throw Error('Variant 2 brand lockup missing');
if(!fs.readFileSync('app/page.js','utf8').includes('cinematic-hero')) throw Error('Approved cinematic homepage not integrated');
if(!fs.readFileSync('app/page-parts.js','utf8').includes('preferences/source?q=aethertrigger.com')) throw Error('Google Preferred Sources button missing');
for (const f of ['app/brand-mark.js','app/globals.css']) if(!fs.existsSync(f)) throw Error('Typography or lockup missing: '+f);
const css=fs.readFileSync('app/globals.css','utf8');if(!css.includes('Sora')||!css.includes('Manrope')) throw Error('Approved typography missing');
const mark=schemaFor('/')['@graph'].find(x=>x['@id']==='https://aethertrigger.com/#logo');if(!mark?.contentUrl?.endsWith('/logos/aethertrigger-emblem-v2.png'))throw Error('Schema logo mismatch');
console.log('PASS: approved variant 2, Sora/Manrope, image metadata and schema logo');
