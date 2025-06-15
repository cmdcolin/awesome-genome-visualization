export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="btn btn-soft font-normal p-0.5 m-0.5">
      {children}
    </button>
  )
}
