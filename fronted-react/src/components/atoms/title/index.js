import React, { Component } from 'react'
import styled from 'styled-components'

const AmpH2 = (props) => (
    <amp-h2 style={props.style} >{props.children}</amp-h2>
)

const H1 = styled.h1`
	font-family: SimplonRegular;
	margin-right: 1em;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'palevioletred'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
` 
const H2 = styled.h2`
	font-family: SimplonRegular;
	margin-right: 1em;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'palevioletred'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
` 
const H3 = styled.h3`
	font-family: SimplonRegular;
	margin-right: 1em;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'palevioletred'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
` 
const H4 = styled.h4`
	font-family: SimplonRegular;
	margin-right: 1em;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'palevioletred'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
` 
const H5 = styled.h5`
	font-family: SimplonRegular;
	margin-right: 1em;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'palevioletred'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
` 
const H6 = styled.h6`
	font-family: SimplonRegular;
	margin-right: 1em;
	color: ${ props => props.theme.color && props.theme.color.primary ? props.theme.color.primary : 'palevioletred'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
` 

export default H2
export { H1, H2, H3, H4, H5, H6 }