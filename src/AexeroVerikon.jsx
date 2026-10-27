import { useEffect, useState } from 'react'
import './AexeroVerikon.css'
import './AexeroMotion.css'
import './AexeroOverrides.css'
import './AexeroEmail.css'
import './AexeroMsme.css'
import './AexeroStack.css'
import MsmeRegistrationMark from './MsmeRegistrationMark'

const services = [
  ['AI systems & automation', 'Practical AI workflows and intelligent systems that take repetitive work off your team.', ['Agents', 'Automation', 'Workflows']],
  ['Digital products', 'Useful web platforms, portals and internal tools built around real customer and business needs.', ['SaaS', 'Portals', 'Platforms']],
  ['Web & app development', 'Fast, accessible websites and applications with a solid production foundation.', ['Web', 'Mobile', 'Commerce']],
  ['Product strategy', 'Clear product direction, technical planning and a delivery path your team can act on.', ['Strategy', 'Architecture', 'Roadmaps']],
  ['Data & integrations', 'Connected systems, dashboards and APIs that keep information moving where it is useful.', ['APIs', 'Dashboards', 'Cloud']],
  ['Technical partnership', 'Senior design and engineering support for teams ready to move a product forward.', ['Discovery', 'Build', 'Improve']],
]

const steps = [
  ['01', 'Discover', 'We understand the audience, the opportunity and the constraints before deciding what to build.'],
  ['02', 'Shape', 'We turn the useful parts of an idea into a focused product and technical plan.'],
  ['03', 'Build', 'You review real progress in short cycles while design and engineering stay connected.'],
  ['04', 'Evolve', 'After launch, we measure, refine and help the product keep earning its place.'],
]

const stack = [
  ['AI / ML', 'Applied AI systems, machine-learning pipelines and model integrations built for useful outcomes.', ['Python', 'PyTorch', 'TensorFlow', 'OpenAI', 'Anthropic', 'LangChain', 'Hugging Face', 'Pinecone']],
  ['Frontend', 'Responsive, accessible interfaces that feel considered on every screen size.', ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'SwiftUI', 'Flutter']],
  ['Backend', 'Reliable APIs, services and integrations designed for secure, maintainable delivery.', ['Node.js', 'Go', 'FastAPI', 'Java', 'Spring Boot', 'Redis', 'GraphQL']],
  ['Cloud & data', 'Infrastructure, databases and observability that keep products dependable as they grow.', ['AWS', 'GCP', 'Vercel', 'Cloudflare', 'Docker', 'Kubernetes', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Snowflake', 'Airflow']],
]

function Brand() {
  return <a href="#top" className="vx-brand" aria-label="Aexero Solutions home">Aexero<span>.</span></a>
}

export default function AexeroVerikon() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [ready, setReady] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = [['#services', 'Services'], ['#process', 'Process'], ['#work', 'Work'], ['#stack', 'Stack'], ['/workshop', 'Workshop']]

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('vx-in'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.vx-reveal').forEach((element) => reveal.observe(element))
    setReady(true)
    return () => reveal.disconnect()
  }, [])

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return <div className={`vx-page ${ready ? 'vx-ready' : ''}`} id="top">
    <header className={`vx-topbar ${scrolled || menuOpen ? 'vx-scrolled' : ''}`}>
      <nav className="vx-wrap vx-nav"><Brand /><div className="vx-navlinks">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</div><a href="#contact" className="vx-pill">Start a project</a><button className="vx-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button></nav>
      {menuOpen && <div className="vx-mobile">{links.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Start a project</a></div>}
    </header>
    <main>
      <section className="vx-hero"><div className="vx-grid" /><div className="vx-glow vx-orange" /><div className="vx-glow vx-blue" /><div className="vx-wrap vx-hero-content"><div className="vx-status"><b /> Digital products, AI and software</div><h1>Build what <em>matters</em>,<br />launch what works.</h1><p>We partner with ambitious teams to shape and build digital products, websites and AI systems that solve real problems.</p><div className="vx-actions"><a href="#contact" className="vx-pill">Start a project <b>↗</b></a><a href="#contact" className="vx-outline">▣ Book a session</a></div><div className="vx-trusted"><span>Built for ambitious teams</span><b>Product</b><b>Design</b><b>Engineering</b><b>AI systems</b></div></div></section>

      <section className="vx-section vx-reveal"><div className="vx-wrap vx-head"><div><label>About Aexero</label><h2>Hands-on partners.<br />Built for momentum.</h2></div><p>Our work brings product thinking, design and engineering into one focused team. From the first brief to launch, the people shaping the plan are the people building it.</p></div><div className="vx-wrap vx-stats"><article><strong>20+</strong><span>digital experiences designed and delivered.</span></article><article><strong>04</strong><span>core capabilities working as one team.</span></article><article><strong>100%</strong><span>hands-on work, not a hand-off.</span></article></div></section>

      <section className="vx-section vx-reveal" id="services"><div className="vx-wrap"><div className="vx-head"><div><label>Services</label><h2>What we do.</h2></div><p>Capabilities arranged around building useful digital products that are clear, resilient and ready to grow.</p></div><div className="vx-services">{services.map(([title, text, tags]) => <article key={title}><div className="vx-icon">✦</div><h3>{title}</h3><p>{text}</p><div>{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

      <section className="vx-section vx-muted vx-reveal" id="process"><div className="vx-wrap"><div className="vx-head"><div><label>Process</label><h2>A simple, focused workflow.</h2></div><p>Four steps, clear ownership and visible progress throughout the work.</p></div><ol className="vx-steps">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

      <section className="vx-section vx-reveal" id="work"><div className="vx-wrap"><div className="vx-head"><div><label>Work</label><h2>Built for real-world impact.</h2></div><p>Whether the work is customer-facing or internal, the aim is the same: make the next important action clearer and easier.</p></div><div className="vx-work">{[['Product platforms', 'From idea to a useful first version.', '01'], ['Operational tools', 'Better workflows for the people doing the work.', '02'], ['AI-enabled systems', 'Practical intelligence where it adds value.', '03'], ['Growth websites', 'Clear positioning and a reason to act.', '04'], ['Connected experiences', 'Systems that feel simple on the surface.', '05'], ['Technical foundations', 'A secure base for the next phase.', '06']].map(([title, copy, number]) => <article key={number}><small>{number}</small><div><label>{title}</label><h3>{copy}</h3></div><b>↗</b></article>)}</div></div></section>

      <section className="vx-section vx-muted" id="stack"><div className="vx-wrap"><div className="vx-head"><div><label>Stack</label><h2>Modern tools, used with intent.</h2></div><p>We choose the technology that fits the job—not whatever happens to be the newest trend.</p></div><div className="vx-stack">{stack.map(([label, copy, items]) => <article key={label}><label>{label}</label><p>{copy}</p><div>{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

      <section className="vx-section"><div className="vx-wrap"><div className="vx-head"><div><label>Why Aexero</label><h2>Three things we protect.</h2></div></div><div className="vx-principles">{[['Speed with substance', 'Focused delivery, regular working reviews and enough care to make the details hold up.'], ['Production-minded quality', 'Design, code and operational decisions made with the live product in mind.'], ['Direct communication', 'A clear route to the people doing the work, with no unnecessary layers in between.']].map(([title, text]) => <article key={title}><div className="vx-icon">✦</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="vx-cta" id="contact"><div className="vx-wrap vx-cta-box"><div className="vx-grid" /><div className="vx-glow vx-orange" /><div className="vx-glow vx-blue" /><div className="vx-cta-content"><h2>Let’s build something <em>useful</em> together.</h2><p>Tell us the shape of the problem. We will respond with an honest view of the next practical step.</p>{sent ? <div className="vx-sent">Thanks — your enquiry is ready for review.</div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><input aria-label="Your name" required placeholder="Your name" /><input aria-label="Work email" required type="email" placeholder="Work email" /><button className="vx-pill">Start a conversation <b>↗</b></button></form>}</div></div></section>
    </main>
    <footer className="vx-footer"><div className="vx-wrap vx-footer-content"><div><Brand /><p>Digital products, AI and software delivery.</p></div><MsmeRegistrationMark /><a href="https://www.linkedin.com/company/144002723" target="_blank" rel="noreferrer">in&nbsp; LinkedIn ↗</a><small>© 2026 Aexero Solutions</small></div></footer>
  </div>
}
