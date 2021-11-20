import { Typography } from '@mui/material'
import { APP_NAME } from 'lib/global'
import React from 'react'

export default function Logo({ variant = 'text' }) {
  return (
    <div>
      {variant === 'text' ? (
        <Typography variant="h6" component="div">
          {APP_NAME}
        </Typography>
      ) : (
        <Typography variant="h6" component="div">
          {APP_NAME}
        </Typography>
      )}
    </div>
  )
}
