import { Slide, useScrollTrigger } from '@mui/material'
import React from 'react'

export default function HideOnTop({ children = '', window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
