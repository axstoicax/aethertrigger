// AetherTrigger — seven-page connected JSON-LD graph; corporate owner is a verified user-provided entity.
export const pressReferences = [
  {
    "title": "Discounter.ro — launch announcement",
    "source": "Comunicate de Presa",
    "category": "Company announcement",
    "url": "https://www.comunicatedepresa.ro/sas-forest-s-r-l-/discounter-ro-tot-ce-iti-doresti-la-cele-mai-mici-preturi"
  },
  {
    "title": "Online ticketing and TicketPoint in 2007",
    "source": "Wall-Street",
    "category": "Editorial",
    "url": "https://www.wall-street.ro/articol/IT-C-Tehnologie/36560/biletele-online-afacerea-care-a-luat-cu-asalt-internetul-in-2007.html"
  },
  {
    "title": "Romanian online sales could double",
    "source": "Ziarul Financiar",
    "category": "Editorial",
    "url": "https://www.zf.ro/business-hi-tech/vanzarile-locale-online-s-ar-putea-dubla-3048432"
  },
  {
    "title": "Online retailers and traditional IT stores",
    "source": "Business Magazin",
    "category": "Editorial",
    "url": "https://www.businessmagazin.ro/actualitate/business-magazinele-online-musca-din-profitul-retailerilor-de-it-din-offline-1006747"
  },
  {
    "title": "DOL.ro platform development announcement",
    "source": "Comunicate de Presa",
    "category": "Company announcement",
    "url": "https://www.comunicatedepresa.ro/rtc-holding/dol-ro-isi-dezvolta-o-noua-platforma"
  }
];
import {faqs} from './faq-data.mjs';
const BASE='https://aethertrigger.com';
const Q='https://www.quantdataintel.com';
const VF='https://getverticalfoundry.com';
const orgId=Q+'/#organization',brandId=BASE+'/#brand',vfBrandId=VF+'/#brand',personId=VF+'/#founder';
const titleMap={'/':'AetherTrigger | Business Intelligence & Opportunity Signals','/products/':'Products | AetherTrigger Opportunity Intelligence','/about/':'About AetherTrigger | Business Intelligence With Purpose','/contact/':'Contact AetherTrigger','/terms-of-service/':'Terms of Service | AetherTrigger','/privacy-policy/':'Privacy Policy | AetherTrigger','/privacy/':'Cookie & Privacy Preferences | AetherTrigger'};
const summary='AetherTrigger is a development-stage business-intelligence brand for companies serving Shopify and Shopify Plus merchants. It aims to make relevant opportunity signals easier to interpret and act on.';
const phone='+1 (307) 900-1944';
const ref=id=>({'@id':id});
const address={'@type':'PostalAddress',streetAddress:'30 N Gould St. Ste N',addressLocality:'Sheridan',addressRegion:'WY',postalCode:'82801',addressCountry:'US'};
const organization={'@type':'Corporation','@id':orgId,name:'Quant Data Intelligence LLC',legalName:'Quant Data Intelligence LLC',url:Q+'/',taxID:'61-2355086',slogan:'Clarity, Quantified. Engineered Growth.',address,telephone:phone,email:'hello@quantdataintel.com',contactPoint:[{'@type':'ContactPoint',contactType:'general inquiries',email:'hello@quantdataintel.com',telephone:phone},{'@type':'ContactPoint',contactType:'customer support',email:'help@quantdataintel.com'}],logo:ref(Q+'/#logo'),founder:ref(personId),brand:[ref(vfBrandId),ref(brandId)],owns:[ref(vfBrandId),ref(brandId)],sameAs:[Q+'/']};
const brand={'@type':'Brand','@id':brandId,name:'AetherTrigger',url:BASE+'/',mainEntityOfPage:ref(BASE+'/#webpage'),slogan:'Turn aether signals into your next business opportunity.',description:summary,disambiguatingDescription:'An independent business-intelligence brand owned by Quant Data Intelligence LLC; not an official Shopify product.',owner:ref(orgId),logo:ref(BASE+'/#logo'),image:ref(BASE+'/#logo'),audience:{'@type':'BusinessAudience',audienceType:'B2B companies serving Shopify and Shopify Plus merchants'},knowsAbout:['business intelligence','commerce opportunity signals','Shopify ecosystem','B2B market research'],sameAs:[]};
const vfBrand={'@type':'Brand','@id':vfBrandId,name:'VerticalFoundry',url:VF+'/',owner:ref(orgId),slogan:'Powerful Inside. Simple Outside.',logo:ref(VF+'/#logo')};
const founder={'@type':'Person','@id':personId,name:'Alexandru Stoica',url:'https://www.linkedin.com/in/alexstoicax/',sameAs:['https://www.linkedin.com/in/alexstoicax/'],image:ref(VF+'/#founder-photo'),worksFor:{'@type':'Organization',name:'GSMnet'},founderOf:ref(orgId)};
const website={'@type':'WebSite','@id':BASE+'/#website',name:'AetherTrigger',url:BASE+'/',publisher:ref(orgId),about:ref(brandId),inLanguage:'en-US',description:summary,hasPart:Object.keys(titleMap).filter(x=>x!='/').map(x=>ref(BASE+x+'#webpage'))};
const logo={'@type':'ImageObject','@id':BASE+'/#logo',url:BASE+'/logos/aethertrigger-emblem-v2.png',contentUrl:BASE+'/logos/aethertrigger-emblem-v2.png',caption:'AetherTrigger brand mark — approved AetherTrigger logo concept — Variant 2, transparent PNG'};
const personImage={'@type':'ImageObject','@id':VF+'/#founder-photo',url:VF+'/images/alexandru-stoica-founder.webp',caption:'Alexandru Stoica'};
const graph = {'/':{'@type':'WebPage',description:summary,about:ref(brandId),mainEntity:ref(brandId)},'/products/':{'@type':'CollectionPage',description:'AetherTrigger product direction and possible benefits for companies serving commerce merchants.',mainEntity:ref(brandId)},'/about/':{'@type':'AboutPage',description:'The story of AetherTrigger, the experience behind its founder and a careful approach to useful commercial intelligence.',mainEntity:ref(personId)},'/contact/':{'@type':'ContactPage',description:'Contact the team behind AetherTrigger; answers to frequently asked questions.',mainEntity:ref(orgId)},'/terms-of-service/':{'@type':'WebPage',description:'AetherTrigger prelaunch website terms.'},'/privacy-policy/':{'@type':'WebPage',description:'AetherTrigger privacy policy.'},'/privacy/':{'@type':'WebPage',description:'AetherTrigger cookie and privacy preferences.'}};
function baseSchemaFor(route='/'){
 if(!graph[route])throw Error('Unknown route '+route);
 const page={'@id':BASE+route+'#webpage',...graph[route],url:BASE+route,name:titleMap[route],isPartOf:ref(BASE+'/#website'),publisher:ref(orgId),inLanguage:'en-US'};
 if(route!='/')page.breadcrumb=ref(BASE+route+'#breadcrumb');
 const nodes=[organization,brand,vfBrand,logo,website,page];
 if(route!='/')nodes.push({'@type':'BreadcrumbList','@id':BASE+route+'#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:BASE+'/'},{'@type':'ListItem',position:2,name:titleMap[route].split(' | ')[0],item:BASE+route}]});
 if(route==='/about/'){founder.description="Alexandru Stoica is an entrepreneur and e-commerce executive with more than 25 years of experience across e-commerce, retail, international distribution and digital services. He is Head of E-commerce at GSMnet and founder of Quant Data Intelligence LLC, which operates the VerticalFoundry and AetherTrigger brands. His work focuses on turning hands-on business experience into practical tools and clearer commercial intelligence.";founder.jobTitle='Head of E-commerce';founder.knowsAbout=['E-commerce operations','International Shopify commerce','Business development','Commercial opportunity research','Practical business tools','International distribution'];page.about=[ref(brandId),ref(personId)];page.mainEntity=ref(personId);nodes.push(founder,personImage,...pressReferences.map(p=>({'@type':'CreativeWork','@id':p.url+'#about-alexandru-stoica',url:p.url,name:p.title,about:ref(personId),description:'Historical reference; not an endorsement of AetherTrigger.'})));}
 if(route==='/contact/')nodes.push({'@type':'FAQPage','@id':BASE+'/contact/#faq',url:BASE+'/contact/',isPartOf:ref(BASE+'/#website'),mainEntity:faqs.map(x=>({'@type':'Question',name:x.question,acceptedAnswer:{'@type':'Answer',text:x.answer}}))});
 return {'@context':'https://schema.org','@graph':nodes};
}

// Approved public identity links for all three domains. Updated: 2026-11-10.
const IDENTITY={
  companyId:"https://www.quantdataintel.com/#organization",vfId:"https://getverticalfoundry.com/#brand",atId:"https://aethertrigger.com/#brand",founderId:"https://getverticalfoundry.com/#founder",
  companySocial:["https://www.linkedin.com/company/quantdataintel/", "https://www.facebook.com/QuantDataIntel/", "https://www.instagram.com/quantdataintel/", "https://x.com/theQDI", "https://www.youtube.com/@quantdataintel"],vfSocial:["https://www.linkedin.com/company/theverticalfoundry/", "https://www.facebook.com/VerticalFoundry/", "https://www.instagram.com/verticalfoundry/", "https://x.com/VerticalFoundry", "https://www.tiktok.com/@verticalfoundry", "https://www.youtube.com/@verticalfoundry"],atSocial:["https://www.linkedin.com/company/aethertrigger/", "https://www.facebook.com/theAetherTrigger/", "https://www.instagram.com/getaethertrigger/", "https://www.tiktok.com/@aethertrigger", "https://www.youtube.com/@aethertrigger"],founderSocial:["https://www.linkedin.com/in/alexstoicax/", "https://www.facebook.com/alexstoicax/", "https://www.instagram.com/alexstoicax/", "https://www.threads.com/@alexstoicax", "https://x.com/alexstoicax", "https://www.tiktok.com/@alexstoicax", "https://www.youtube.com/@alexstoicax", "https://wa.me/@alexstoicax"],
  communityLinks:["https://www.facebook.com/groups/verticalfoundry", "https://chat.whatsapp.com/JP6sTCf7AVnIPZQ3KorJ61"],
  email:{company:["hello@quantdataintel.com", "help@quantdataintel.com"],vf:["hello@getverticalfoundry.com", "help@getverticalfoundry.com"],at:["hello@aethertrigger.com", "help@aethertrigger.com"]}
};
const unifyRef=id=>({'@id':id});
const MEDIA_FORMAT={svg:'image/svg+xml',png:'image/png',webp:'image/webp'};
function unifySchema(data,route,siteKey){
 const base={vf:'https://getverticalfoundry.com',at:'https://aethertrigger.com'}[siteKey];
 const nodes=data['@graph'];
 const get=id=>nodes.find(n=>n['@id']===id);
 const add=(id,type)=>{let n=get(id);if(!n){n={'@type':type,'@id':id};nodes.push(n)}return n};
 const owner=add(IDENTITY.companyId,'Corporation');
 Object.assign(owner,{'@type':'Corporation',name:'Quant Data Intelligence LLC',legalName:'Quant Data Intelligence LLC',url:'https://www.quantdataintel.com/',taxID:'61-2355086',telephone:'+1 (307) 900-1944',email:IDENTITY.email.company[0],sameAs:IDENTITY.companySocial,
 address:{'@type':'PostalAddress',streetAddress:'30 N Gould St. Ste N',addressLocality:'Sheridan',addressRegion:'WY',postalCode:'82801',addressCountry:'US',description:'Business mailing address; not a visitor office.'},
 contactPoint:[
 {'@type':'ContactPoint',contactType:'general inquiries',email:IDENTITY.email.company[0],telephone:'+1 (307) 900-1944'},
 {'@type':'ContactPoint',contactType:'customer support',email:IDENTITY.email.company[1]},
 {'@type':'ContactPoint',contactType:'VerticalFoundry inquiries',email:IDENTITY.email.vf[0]},
 {'@type':'ContactPoint',contactType:'VerticalFoundry support',email:IDENTITY.email.vf[1]},
 {'@type':'ContactPoint',contactType:'AetherTrigger inquiries',email:IDENTITY.email.at[0]},
 {'@type':'ContactPoint',contactType:'AetherTrigger support',email:IDENTITY.email.at[1]}
 ],founder:unifyRef(IDENTITY.founderId),brand:[unifyRef(IDENTITY.vfId),unifyRef(IDENTITY.atId)],owns:[unifyRef(IDENTITY.vfId),unifyRef(IDENTITY.atId)],logo:unifyRef('https://www.quantdataintel.com/#logo'),identifier:{'@type':'PropertyValue',propertyID:'US EIN',value:'61-2355086'} });
 const vf=add(IDENTITY.vfId,'Brand');
 Object.assign(vf,{'@type':'Brand',name:'VerticalFoundry',url:'https://getverticalfoundry.com/',owner:unifyRef(IDENTITY.companyId),logo:unifyRef('https://getverticalfoundry.com/#logo'),sameAs:IDENTITY.vfSocial,subjectOf:[...IDENTITY.communityLinks.map((url,i)=>({'@type':'WebPage',name:i===0?'VerticalFoundry Facebook community':'VerticalFoundry WhatsApp community invitation',url})),{'@type':'WebPage',name:'VerticalFoundry Etsy storefront',url:'https://www.etsy.com/shop/VerticalFoundry'}]});
 const at=add(IDENTITY.atId,'Brand');
 Object.assign(at,{'@type':'Brand',name:'AetherTrigger',url:'https://aethertrigger.com/',owner:unifyRef(IDENTITY.companyId),logo:unifyRef('https://aethertrigger.com/#logo'),sameAs:IDENTITY.atSocial,slogan:'Turn aether signals into your next business opportunity.'});
 const person=add(IDENTITY.founderId,'Person');
 Object.assign(person,{'@type':'Person',name:'Alexandru Stoica',url:'https://www.linkedin.com/in/alexstoicax/',sameAs:IDENTITY.founderSocial,email:'alex@quantdataintel.com',image:unifyRef('https://getverticalfoundry.com/#founder-photo'),founderOf:unifyRef(IDENTITY.companyId)});
 if(!get('https://getverticalfoundry.com/#founder-photo'))nodes.push({'@type':'ImageObject','@id':'https://getverticalfoundry.com/#founder-photo',url:'https://getverticalfoundry.com/images/alexandru-stoica-founder.webp',contentUrl:'https://getverticalfoundry.com/images/alexandru-stoica-founder.webp',caption:'Official portrait of Alexandru Stoica'});
 if(!get('https://aethertrigger.com/#logo'))nodes.push({'@type':'ImageObject','@id':'https://aethertrigger.com/#logo',url:'https://aethertrigger.com/logos/aethertrigger-emblem-v2.png',contentUrl:'https://aethertrigger.com/logos/aethertrigger-emblem-v2.png',encodingFormat:'image/png',caption:'AetherTrigger approved Variant 2 logo (raster PNG)'});
 const web=add(base+'/#website','WebSite');
 const parts=Array.isArray(web.hasPart)?web.hasPart:[];
 if(!parts.some(x=>x['@id']===base+'/media-kit/#webpage'))parts.push(unifyRef(base+'/media-kit/#webpage'));
 web.hasPart=parts;
 // No claimed customer results or Product/Offer markup for unpublished items.
 return data;
}
function mediaSchema(data,siteKey){
 const base=siteKey==='vf'?'https://getverticalfoundry.com':'https://aethertrigger.com';
 const brandRef=unifyRef(siteKey==='vf'?IDENTITY.vfId:IDENTITY.atId);
 data['@graph']=data['@graph'].filter(n=>n['@id']!==base+'/#webpage');
 const node={'@type':'CollectionPage','@id':base+'/media-kit/#webpage',url:base+'/media-kit/',name:'Media Kit | '+(siteKey==='vf'?'VerticalFoundry':'AetherTrigger'),description:'Press resources, approved brand visuals, editorial boilerplates, media contacts and downloadable assets.',isPartOf:unifyRef(base+'/#website'),publisher:unifyRef(IDENTITY.companyId),about:brandRef,mainEntity:brandRef,inLanguage:'en-US',breadcrumb:unifyRef(base+'/media-kit/#breadcrumb'),hasPart:[]};
 const files=siteKey==='vf'?[['verticalfoundry-horizontal.svg','image/svg+xml'],['verticalfoundry-stacked.svg','image/svg+xml'],['verticalfoundry-icon.svg','image/svg+xml'],['verticalfoundry-white.svg','image/svg+xml'],['verticalfoundry-banner.png','image/png'],['alexandru-stoica-portrait.webp','image/webp']]:[['aethertrigger-variant2-mark.png','image/png'],['aethertrigger-variant2-artwork.png','image/png'],['aethertrigger-social-banner.png','image/png'],['aethertrigger-hero.webp','image/webp'],['alexandru-stoica-portrait.webp','image/webp']];
 files.forEach(([file,type])=>{const id=base+'/media-kit/#asset-'+file;node.hasPart.push(unifyRef(id));data['@graph'].push({'@type':'ImageObject','@id':id,name:file,url:base+'/media-kit/assets/'+file,contentUrl:base+'/media-kit/assets/'+file,encodingFormat:type,usageInfo:base+'/media-kit/#usage',copyrightHolder:unifyRef(IDENTITY.companyId)})});
 data['@graph'].push(node,{'@type':'BreadcrumbList','@id':base+'/media-kit/#breadcrumb',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base+'/'},{'@type':'ListItem',position:2,name:'Media Kit',item:base+'/media-kit/'}]});
 return data;
}

export function schemaFor(route){ if(route==='/media-kit/')return unifySchema(mediaSchema(baseSchemaFor('/'), 'at'),route,'at'); return unifySchema(baseSchemaFor(route),route,'at'); }
