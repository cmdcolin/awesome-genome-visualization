import styles from './Button.module.css'

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
