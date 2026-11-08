import { useState } from 'react'
import ImageDialog from './ImageDialog'
import styles from './ToolFigure.module.css'

export default function ToolFigure({
  img,
  name,
  width,
  height,
}: {
  img?: string
  name: string
  width?: number
  height?: number
}) {
  const [expanded, setExpanded] = useState(false)
  return (
    <figure
      className={styles.figure}
      onClick={() => {
        if (window.innerWidth >= 640) {
          setExpanded(state => !state)
        }
      }}
    >
      {img !== undefined ? (
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
      {expanded && img !== undefined ? (
        <ImageDialog
          img={img}
          onClose={() => {
            setExpanded(false)
          }}
        />
      ) : null}
    </figure>
  )
}
