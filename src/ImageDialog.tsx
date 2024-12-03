import { useDialogShown } from './util'

export default function ImageDialog({
  open,
  img,
}: {
  open: boolean
  img: string
}) {
  const ref = useDialogShown(open)
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box w-11/12 max-w-5xl max-h-[80vh]">
        <img src={img} />
      </div>
    </dialog>
  )
}
