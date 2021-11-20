import React from 'react'
import { Route } from 'react-router-dom'

const SplitRoute = ({
  component: Component,
  fallback: Fallback,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <>
          <Fallback {...props} />
        </>
      )
    }
  />
)

export default SplitRoute
