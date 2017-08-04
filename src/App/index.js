import React from 'react'
import { Bundle } from 'SRC/components'
import App from 'bundle-loader?lazy&name=[name]!./App'


export default function AppBundle() {
  return (
    <Bundle load={App}>
      {(Comp) => (Comp
        ? <Comp/>
        : <h1 style={{ textAlign: 'center' }}>Loading</h1>
      )}
    </Bundle>
  )
}
