import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Description from  './../../atoms/description'
import Container from  './../../atoms/container/column'

const TitleDescription = (props) => (
 <Container alignCenter={props.alignCenter}  alignRight={props.alignRight} >
   <Title>{ props.Title2 }</Title>
   <Description>{ props.Description2 }</Description>
 </Container>
);

export default TitleDescription;
