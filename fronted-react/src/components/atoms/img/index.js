import React, { Component } from 'react'
import styled from 'styled-components'

export default styled.img`
${ props => props.thumb && 'width:150px'}
${ props => props.icon && 'width:50px; height:50px'}
`