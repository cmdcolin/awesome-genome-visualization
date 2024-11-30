export default function Link({
  id,
  href,
  target,
  rel,
  children,
  onClick,
}: {
  onClick?: (event: React.MouseEvent) => void
  id?: string
  href: string
  target?: string
  rel?: string
  children: React.ReactNode
}) {
  return (
    <a
      id={id}
      onClick={onClick}
      target={target}
      rel={rel}
      href={href}
      className="link"
    >
      {children}
    </a>
  )
}
