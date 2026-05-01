import type { Dispatch, SetStateAction } from 'react'
import ImageDialog from './ImageDialog'
import styles from './ToolFigure.module.css'

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
      className={styles.figure}
      onClick={() => {
        if (window.innerWidth >= 640) {
          setExpanded(state => !state)
        }
      }}
    >
      {img ? (
        <img
          alt={`screenshot of ${name}`}
          loading="lazy"
          className={styles.image}
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
