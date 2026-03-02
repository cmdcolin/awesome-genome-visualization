import type { Dispatch, SetStateAction } from 'react'
import ImageDialog from './ImageDialog'

interface ToolFigureProps {
  img?: string
  name: string
  width?: number
  height?: number
  expanded: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
}

export default function ToolFigure({
  img,
  name,
  width,
  height,
  expanded,
  setExpanded,
}: ToolFigureProps) {
  const imgSrc = img ? `${import.meta.env.BASE_URL}/${img}` : undefined
  return (
    <figure
      onClick={() => {
        if (window.innerWidth >= 640) {
          setExpanded(state => !state)
        }
      }}
    >
      {imgSrc ? (
        <img
          alt={`screenshot of ${name}`}
          loading="lazy"
          className="max-h-sm h-auto w-full max-w-sm"
          width={width}
          height={height}
          src={imgSrc}
        />
      ) : (
        <p>No screenshot</p>
      )}
      {expanded && imgSrc ? <ImageDialog open img={imgSrc} /> : null}
    </figure>
  )
}
