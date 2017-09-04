import React from 'react'
import styled from 'styled-components'

import Title from  './../../atoms/title'
import Icon from  './../../atoms/img'
import Row from  './../../atoms/container/row'
import Column from  './../../atoms/container/column'
import Description from  './../../atoms/description'
import Container from  './../../atoms/container/column'

const TitleDescription = (props) => (
 <Container alignCenter={props.alignCenter}  alignRight={props.alignRight} >
 	<Column>
	 	<Row>
		 	{
		 		Array.isArray(props.icon) ?
			 		props.icon.map( ( icon, index ) => {
			 			return <Icon key={ index } icon src={icon} />
			 		})
			 	: <Icon icon src={props.icon} />
		 	}
		</Row>
	</Column>
	<Column>
	  	<Title>{ props.Title2 }</Title>
	  	<Description>{ props.Description2 }</Description>
  	</Column>
 </Container>
);

export default TitleDescription;
