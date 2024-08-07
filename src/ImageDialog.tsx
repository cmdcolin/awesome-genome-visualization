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
    <dialog ref={ref}>
      <img src={img} className="w-full max-h-screen object-contain" />
    </dialog>
  )
}
