import { AppBar, CssBaseline, Toolbar } from '@mui/material'
import HideOnTop from 'components/HideOnTop'
import Logo from 'components/Logo'
import React from 'react'

export default function HideAppBar({ children = '', ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnTop {...props}>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <Logo />
          </Toolbar> 
        </AppBar>
      </HideOnTop>
      <Toolbar />
    </React.Fragment>
  )
}
