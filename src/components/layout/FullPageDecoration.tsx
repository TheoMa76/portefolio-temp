"use client"

import React, { useMemo, useState, useEffect } from 'react'

type Shape = 'triangle' | 'trapezoid'

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateShape = (shape: Shape, color: string, size: number) => {
  const rotation = randomBetween(0, 360)

  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 100 100',
    style: { transform: `rotate(${rotation}deg)` },
  }

  switch (shape) {
    case 'triangle':
      return (
        <svg {...commonProps}>
          <polygon points="50,0 100,100 0,100" fill={color} />
        </svg>
      )
    case 'trapezoid':
      return (
        <svg {...commonProps}>
          <polygon points="20,0 80,0 100,100 0,100" fill={color} />
        </svg>
      )
  }
}

type Props = {
  shapeCount?: number
  color?: string
  columns?: number
}

const FullPageDecoration = ({
  shapeCount = 15,
  color = 'var(--tertiary)',
  columns = 6,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const shapes = useMemo(() => {
    if (!isMounted) return null

    return Array.from({ length: shapeCount }).map((_, i) => {
      const shape: Shape = Math.random() > 0.5 ? 'triangle' : 'trapezoid'
      const size = randomBetween(20, 150)
      const offsetX = randomBetween(-40, 40)
      const offsetY = randomBetween(-40, 40)

      return (
        <div
          key={i}
          className="flex items-center justify-center w-full h-full"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        >
          {generateShape(shape, color, size)}
        </div>
      )
    })
  }, [isMounted, shapeCount, color])

  const rows = Math.ceil(shapeCount / columns)

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
  <div className="w-full h-full backdrop-blur-md bg-white/30">
    <div
      className="w-full h-full grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {shapes}
    </div>
  </div>
</div>
  )
}

export default FullPageDecoration