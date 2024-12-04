export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className="btn font-normal p-1 dark:bg-slate-700">
      {children}
    </button>
  )
}
