import { Dispatch, SetStateAction } from 'react'
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
  return (
    <figure
      onClick={() => {
        setExpanded(state => !state)
      }}
    >
      {img ? (
        <img
          alt={`screenshot of ${name}`}
          loading="lazy"
          className="max-h-sm h-auto max-w-sm"
          width={width}
          height={height}
          src={img}
        />
      ) : (
        <p>No screenshot</p>
      )}
      {expanded && img ? <ImageDialog open img={img} /> : null}
    </figure>
  )
}
