import type { Dispatch, SetStateAction } from 'react'
import ImageDialog from './ImageDialog'

const MOBILE_BREAKPOINT = 640

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
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
          setExpanded(state => !state)
        }
      }}
    >
      {img ? (
        <img
          alt={`screenshot of ${name}`}
          loading="lazy"
          className="max-h-sm h-auto w-full max-w-sm"
          width={width}
          height={height}
          src={img}
        />
      ) : (
        <p>No screenshot</p>
      )}
      {expanded && img ? (
        <ImageDialog open img={img} alt={`screenshot of ${name}`} />
      ) : null}
    </figure>
  )
}
