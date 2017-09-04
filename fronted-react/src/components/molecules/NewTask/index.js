import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Input from  './../../atoms/input'
import Button from  './../../atoms/button'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

const Column = (props) => (
 <ContainerColumn>
   <Title centered>{ props.Text }</Title>
   <Input placeholder={props.TextTitle} onChange={ props.handleChange } name='title'  />
   <Input placeholder={props.TextDescription} onChange={ props.handleChange } name='description'  />
   <Button primary onClick= { props.onSave   }>Save</Button>
 </ContainerColumn>
);

const Row = (props) => (
 <ContainerRow>
   <Title centered>{ props.Text }</Title>
   <Input placeholder={props.TextTitle}  onChange={ props.handleChange } name='title' />
   <Input placeholder={props.TextDescription}  onChange={ props.handleChange } name='description' />
   <Button primary onClick= { props.onSave   }>Save</Button>
 </ContainerRow>
);

export default Column;
export { Column, Row };
