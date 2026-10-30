import styles from './ImageDialog.module.css'

export default function ImageDialog({
  img,
  onClose,
}: {
  img: string
  onClose: () => void
}) {
  return (
    <dialog
      ref={el => {
        if (el && !el.open) {
          el.showModal()
        }
      }}
      onClose={onClose}
      className={styles.dialog}
    >
      <div className={styles.container}>
        <img src={img} className={styles.image} />
      </div>
    </dialog>
  )
}
