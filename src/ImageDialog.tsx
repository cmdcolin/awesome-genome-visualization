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
      <div className="modal-box p-0 w-auto h-auto max-w-[80vw] max-h-[80vh]">
        <img src={img} className="max-w-full max-h-full object-contain" />
      </div>
    </dialog>
  )
}
