import { useState } from 'react'
import './App.css'

const plans = [
  { name: 'Starter', price: '14,900', note: 'For a focused first impression', description: 'A polished, conversion-ready website for new businesses and independent professionals.', features: ['Up to 5 core pages', 'Responsive design system', 'Contact and enquiry setup', 'Basic SEO foundations', '30 days launch support'] },
  { name: 'Growth', price: '29,900', note: 'For businesses ready to convert', description: 'A stronger marketing website with the tools to generate leads and build trust.', features: ['Up to 12 pages', 'Custom page sections', 'Lead capture and CRM handoff', 'Blog or insights hub', 'Analytics and search setup', '60 days priority support'], featured: true },
  { name: 'Scale', price: '49,900', note: 'For ambitious digital teams', description: 'A performance-led build with integrations, content systems, and room to grow.', features: ['Up to 25 tailored pages', 'CMS-ready content system', 'Animation and interaction design', 'Third-party integrations', 'Performance optimisation', '90 days priority support'] },
  { name: 'Enterprise', price: 'Let’s talk', note: 'For complex digital products', description: 'Custom software, portals, commerce and platform work designed around your operating model.', features: ['Product and technical discovery', 'Custom web application', 'Admin and user dashboards', 'API and system integrations', 'Security and scale planning', 'Dedicated delivery partner'], enterprise: true },
]

const services = [
  ['01', 'Websites that earn attention', 'Strategic marketing sites that make your positioning clear and give visitors a reason to act.'],
  ['02', 'Digital products that work hard', 'Customer portals, dashboards and workflow tools designed around the way your business operates.'],
  ['03', 'AI with a job to do', 'Practical AI features that save time, surface insight and improve the experience—not just add a label.'],
  ['04', 'Infrastructure built to last', 'Cloud architecture, integrations and release workflows that keep your product secure, observable and ready to grow.'],
]

const projects = [
  ['Northstar', 'Fintech platform', 'A clearer onboarding flow and a modular product website for a fast-growing payments team.'],
  ['Fieldnote', 'Operations suite', 'A mobile-first workspace that turns site activity into useful, structured reporting.'],
  ['Aster', 'Health technology', 'A calm, credible digital experience for a service built around sensitive customer journeys.'],
]

function Mark() {
  return <a className="mark" href="#top" aria-label="Aexero Solutions home">
    <span className="brand-symbol"><i /><i /><i /></span>
    <strong>AEXERO<small>SOLUTIONS / DIGITAL PARTNERS</small></strong>
  </a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [sent, setSent] = useState(false)

  return <div id="top" className="page">
    <header className="header"><div className="wrap header-inner"><Mark /><nav className="nav-links"><a href="#services">Capabilities</a><a href="#work">Our impact</a><a href="#pricing">Website plans</a><a href="#process">How we work</a></nav><a className="nav-cta" href="#contact">Start a conversation <b>↗</b></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? '×' : '☰'}</button></div>{menuOpen && <nav className="mobile-nav">{['Capabilities', 'Our impact', 'Website plans', 'How we work'].map((name) => <a onClick={() => setMenuOpen(false)} key={name} href={`#${name === 'Capabilities' ? 'services' : name === 'Our impact' ? 'work' : name === 'Website plans' ? 'pricing' : 'process'}`}>{name}</a>)}<a onClick={() => setMenuOpen(false)} href="#contact">Start a conversation</a></nav>}</header>

    <main>
      <section className="hero"><div className="wrap hero-grid"><div className="hero-copy"><p className="eyebrow">AEXERO / SOFTWARE & DIGITAL PRODUCTS</p><h1>Make your next digital move <em>count.</em></h1><p className="lede">We partner with ambitious businesses to build websites, software and AI-enabled experiences that are clear to use and built to perform.</p><div className="hero-actions"><a className="button button-dark" href="#contact">Plan your project <b>→</b></a><a className="text-link" href="#work">See what good looks like <b>↓</b></a></div><div className="hero-proof"><span>Independent team</span><span>Strategy to launch</span><span>Built for real outcomes</span></div></div><div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="browser-card"><div className="browser-top"><i /><i /><i /><span>your-next-product.com</span></div><div className="browser-body"><p>ONE CLEAR IDEA.</p><b>Designed to move business forward.</b><div className="browser-lines"><span /><span /><span /></div><div className="browser-panels"><i /><i /><i /></div></div></div><div className="floating-card"><span>↑ 42%</span><p>more qualified enquiries after launch</p></div></div></div></section>

      <section className="statement"><div className="wrap"><p>Technology should make growth feel simpler—not more complicated.</p><span>We bring product thinking, sharp design and solid engineering into one accountable team.</span><div className="ticker" aria-hidden="true"><b>Strategy</b><i>✦</i><b>Design</b><i>✦</i><b>Engineering</b><i>✦</i><b>AI systems</b><i>✦</i><b>Cloud platforms</b><i>✦</i><b>Strategy</b><i>✦</i><b>Design</b><i>✦</i><b>Engineering</b></div></div></section>

      <section id="services" className="section"><div className="wrap"><div className="split-heading"><p className="eyebrow">WHAT WE BUILD</p><h2>A capable team for the parts that matter.</h2><p>Whether you need a high-performing website or a more involved digital product, we start with the business problem and build the right answer.</p></div><div className="service-list">{services.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}</div></div></section>

      <section id="work" className="section work-section"><div className="wrap"><div className="proof-heading"><div><p className="eyebrow">WHY AEXERO</p><h2>Small team.<br />Serious standard.</h2></div><div><p>Senior thinking, clear ownership and the right expertise from first brief through to launch.</p><a className="text-link" href="#contact">Start a conversation <b>→</b></a></div></div><div className="work-grid">{projects.map(([name, type, text], index) => <article key={name} className={`work-card work-${index + 1}`}><div className="work-visual"><span>{type}</span><strong>{name.slice(0, 1)}</strong><i /></div><div className="work-copy"><p>{type}</p><h3>{name}</h3><span>{text}</span><a href="#contact">Explore the project <b>↗</b></a></div></article>)}</div></div></section>

      <section id="pricing" className="section pricing"><div className="wrap"><div className="pricing-intro"><div><p className="eyebrow">WEBSITE INVESTMENT</p><h2>A clear starting point for a better website.</h2></div><p>Each project begins with a short discovery call. These plans help you understand the usual investment before we tailor a scope to your goals.</p></div><div className="plan-grid">{plans.map((plan) => <article className={`plan ${plan.featured ? 'featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular">Most chosen</span>}<div className="plan-head"><p>{plan.name}</p><small>{plan.note}</small><h3>{plan.enterprise ? plan.price : <><sup>₹</sup>{plan.price}</>}</h3>{!plan.enterprise && <span>starting investment</span>}</div><p className="plan-description">{plan.description}</p><ul>{plan.features.map((feature) => <li key={feature}><b>✓</b>{feature}</li>)}</ul><button onClick={() => setSelectedPlan(plan)} className={plan.featured ? 'button button-dark' : 'button button-light'}>{plan.enterprise ? 'Discuss your scope' : `Choose ${plan.name}`} <b>→</b></button></article>)}</div><p className="pricing-note">All plans are indicative starting points. Taxes, third-party services, hosting, content and specialist integrations are scoped separately where needed.</p></div></section>

      <section id="process" className="section process"><div className="wrap process-grid"><div><p className="eyebrow">HOW WE WORK</p><h2>Less theatre. More forward motion.</h2><p className="lede">We keep the process close, practical and visible—so you always know what we are making, why it matters, and what happens next.</p><a className="button button-dark" href="#contact">Meet the team <b>→</b></a></div><ol>{[['Listen well', 'We get close to your commercial goals, customers and constraints.'], ['Create direction', 'We map the product, content and technology decisions before we build.'], ['Build in the open', 'You see working progress early and often—not just at the finish line.'], ['Launch with care', 'We test, optimise and hand over a platform your team can confidently use.']].map(([title, text], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>

      <section id="contact" className="contact"><div className="wrap contact-grid"><div><p className="eyebrow">START A CONVERSATION</p><h2>Have something meaningful to build?</h2><p>Tell us a little about it. We will respond within two working days with the right next step—not a generic sales sequence.</p><div className="contact-details"><a href="mailto:hello@aexero.com">hello@aexero.com</a><span>Remote-first / available worldwide</span></div></div><div className="contact-form">{sent ? <div className="sent"><i>✓</i><h3>We’ve got it.</h3><p>Thanks for the detail. We will be in touch shortly.</p><button className="text-link" onClick={() => setSent(false)}>Send another enquiry →</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><label>Your name<input required placeholder="Name" /></label><label>Work email<input type="email" required placeholder="you@company.com" /></label><label>What are you looking to build?<select defaultValue="A website"><option>A website</option><option>A digital product or portal</option><option>An AI-enabled feature</option><option>Something else</option></select></label><label>A little context<textarea required rows="4" placeholder="What are you trying to achieve?" /></label><button className="button button-dark">Send enquiry <b>→</b></button></form>}</div></div></section>
    </main>

    <footer><div className="wrap footer-inner"><Mark /><span>© 2026 Aexero. Built with intention.</span></div></footer>

    {selectedPlan && <div className="modal-backdrop" onMouseDown={() => setSelectedPlan(null)}><div className="plan-modal" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}><button aria-label="Close" onClick={() => setSelectedPlan(null)}>×</button><p className="eyebrow">{selectedPlan.name} PLAN</p><h2>{selectedPlan.enterprise ? 'Let’s shape the right scope.' : `The ${selectedPlan.name} plan starts at ₹${selectedPlan.price}.`}</h2><p>We will use a short discovery call to confirm your goals, timeline and the details behind the right package.</p><a onClick={() => setSelectedPlan(null)} className="button button-dark" href="#contact">Continue to enquiry <b>→</b></a></div></div>}
  </div>
}

export default App
