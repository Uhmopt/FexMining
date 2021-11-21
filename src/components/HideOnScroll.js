import { Collapse, useScrollTrigger } from '@mui/material'
import React from 'react'

export default function HideOnScroll({
  invert = false,
  children = "",
  window,
}) {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Collapse appear={false} direction="down" in={invert ? trigger : !trigger}>
      <div>{children}</div>
    </Collapse>
  );
}
