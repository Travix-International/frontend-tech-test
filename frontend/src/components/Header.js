import React from 'react'
import logo from 'assets/logo.svg'
import styled from 'styled-components'

const TopBar = styled.div`
  background-color: #222;
  height: 50px;
  padding: 20px;
  color: #fff;
`

function Header() {
  return (
    <TopBar>
      <h2>Travix TODO Test <br /> Shaurya Sinha</h2>
    </TopBar>
  )
}

export default Header
