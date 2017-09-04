import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Input from  './../../atoms/input'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

const Column = (props) => (
 <ContainerColumn>
   <Title>{ props.Text }</Title>
   <Input placeholder={props.Text} />
 </ContainerColumn>
);

const Row = (props) => (
 <ContainerRow>
   <Title>{ props.Text }</Title>
   <Input placeholder={props.Text} />
 </ContainerRow>
);

export default Column;
export { Column, Row };
