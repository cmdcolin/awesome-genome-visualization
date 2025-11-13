import { useDialogShown } from './util'

export default function ImageDialog({
  open,
  img,
  alt,
}: {
  open: boolean
  img: string
  alt?: string
}) {
  const ref = useDialogShown(open)
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box p-0 w-auto h-auto max-w-[80vw] max-h-[80vh]">
        <img
          src={img}
          alt={alt ?? 'Tool screenshot'}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </dialog>
  )
}
