export default function AexeroWordmark({ href, label, className = '' }) {
  return (
    <a href={href} className={`aexero-wordmark ${className}`.trim()} aria-label={`Aexero ${label}`}>
      <b>Aexero<span>.</span></b>
      <small>{label}</small>
    </a>
  )
}
