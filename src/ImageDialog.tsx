import { useDialogShown } from './util'
import styles from './ImageDialog.module.css'

export default function ImageDialog({
  open,
  img,
}: {
  open: boolean
  img: string
}) {
  const ref = useDialogShown(open)
  return (
    <dialog ref={ref} className={styles.dialog}>
      <div className={styles.container}>
        <img src={img} className={styles.image} />
      </div>
    </dialog>
  )
}
