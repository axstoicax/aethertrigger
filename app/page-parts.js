import {BrandMark} from './brand-mark.js';

const GOOGLE_PREFERRED_SOURCE_URL='https://www.google.com/preferences/source?q=aethertrigger.com';

export function PreferredSource({compact=false}){
  return <a className={`preferred-source-button${compact?' preferred-source-button--small':''}`} href={GOOGLE_PREFERRED_SOURCE_URL} target="_blank" rel="noopener noreferrer" aria-label="Add AetherTrigger as a preferred source in Google Search (opens Google in a new tab)">
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m12 2.5 2.9 6 6.6 1-4.8 4.7 1.1 6.7-5.8-3.2-5.8 3.2 1.1-6.7-4.8-4.7 6.6-1L12 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
    <span>{compact?'Google Preferred Sources':'Add to Google Preferred Sources'}</span>
    <span aria-hidden="true">↗</span>
  </a>;
}

export function Header(){return <header className="at-header"><div className="at-header__inner"><a className="at-header__brand" href="/" aria-label="AetherTrigger — home"><BrandMark variant="compact"/></a><nav className="at-header__links" aria-label="Main navigation"><a href="/">Home</a><a href="/products/">Products</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a className="at-header__cta" href="/contact/">Contact Us <span aria-hidden="true">↗</span></a></div></header>}

export function Footer(){return <footer className="at-footer"><div className="at-footer__inner"><div className="at-footer__top"><a className="at-footer__brand" href="/" aria-label="AetherTrigger home"><BrandMark variant="compact"/></a><nav aria-label="Footer navigation" className="at-footer__nav"><a href="/products/">Products</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/terms-of-service/">Terms</a><a href="/privacy-policy/">Privacy</a><a href="/media-kit/">Media Kit</a></nav><p className="at-footer__company">A <a className="parent-company-link" href="https://www.quantdataintel.com/" title="Visit Quant Data Intelligence LLC">Quant Data Intelligence LLC</a> brand</p></div><div className="at-media-footer"><div><strong>MEDIA KIT</strong><a href="/media-kit/">Press &amp; brand resources</a><a href="/media-kit/#downloads">Download assets</a></div><div><strong>CONTACT</strong><a href="mailto:hello@aethertrigger.com">hello@aethertrigger.com</a><a href="mailto:help@aethertrigger.com">help@aethertrigger.com</a></div></div><div className="at-footer__middle"><p>Turning signals into what’s next.</p><PreferredSource compact/></div><div className="at-footer__bottom"><span>© {new Date().getFullYear()} AetherTrigger. All rights reserved.</span><nav aria-label="Legal and accessibility"><a href="/privacy/">Cookie &amp; Privacy Preferences</a><a href="mailto:hello@aethertrigger.com?subject=AetherTrigger%20inquiry">Email</a><a href="tel:+13079001944">+1 (307) 900-1944</a></nav></div><p className="at-footer__address">Business mailing address: 30 N Gould St. Ste N, Sheridan, WY 82801, USA · Not a walk-in office</p></div></footer>}

export function PageFrame({children}){return <div className="at-site"><Header/><main id="main" className="content-main at-interior">{children}</main><Footer/></div>}
export function JsonLd({route}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(route).replace(/</g,'\\u003c')}}/>}
