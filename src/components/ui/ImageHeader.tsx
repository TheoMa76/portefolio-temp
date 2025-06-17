import React from 'react'
import ScrollButton from './ScrollButton'

type Props = {
  videoUrl: string
}

const ImageHeader = ({ videoUrl }: Props) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="image-header">
    <video
      src={videoUrl}
      autoPlay muted loop playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    />
      <ScrollButton />
  </div>
  )
}

export default ImageHeader