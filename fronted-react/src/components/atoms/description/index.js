import React, { Component } from 'react'
import styled from 'styled-components'


const calcSize = (size) => {
	switch(size){
	case 2:
		return '160%'
		break
	case 3:
		return '240%'
		break
	case 1:
	default:
		return '100%'
	} 
}

export default styled.p`
	font-family: SimplonRegular;
	margin-right: 1em;
	align-self: center;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'silver'};
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	${ props => props.grow && 'flex-grow: 1;' };
	font-size: ${ props => props.size ? `${calcSize(props.size)}` : '100%' };
`

