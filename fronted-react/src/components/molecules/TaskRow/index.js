import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Description from  './../../atoms/description'
import Button from  './../../atoms/button'
import ContainerRow from  './../../atoms/container/row'
import ContainerColumn from  './../../atoms/container/column'

const TaskRow = (props) => (
 <ContainerColumn>
 <ContainerRow>
   <Title centered>{ props.task.get('id') }</Title>
   <Description centered>{ props.task.get('title') }</Description>
   <Description grow centered>{ props.task.get('description') }</Description>
   <Button primary onClick = { props.onDelete.bind(this, props.task ) } >X</Button>
 </ContainerRow>
   	<hr />
 </ContainerColumn>
);


export default TaskRow;
