export function BrandMark({variant="hero"}){
  const compact=variant==="compact";
  return <span className={`at-lockup at-lockup--${compact?"compact":"hero"}`}>
    <img className="at-lockup__emblem" src="/logos/aethertrigger-emblem-v2.png" alt="" aria-hidden="true" width="1100" height="867" decoding="async"/>
    <span className="at-lockup__type">
      <span className="at-lockup__name">AETHER <span>TRIGGER</span></span>
      {!compact&&<span className="at-lockup__domain">aethertrigger.com</span>}
    </span>
  </span>
}
